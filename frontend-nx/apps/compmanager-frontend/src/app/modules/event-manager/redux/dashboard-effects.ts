import {from, Observable, of, of as observableOf} from 'rxjs';

import {
  catchError,
  concatMap,
  exhaustMap,
  filter,
  map,
  mergeMap,
  switchMap,
  tap,
  toArray,
  withLatestFrom
} from 'rxjs/operators';
import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Action, select, Store} from '@ngrx/store';


import {
  AppState,
  CommonAction,
  getSelectedEventGetSelectedMatId,
  getSelectedEventId,
  getSelectedEventSelectedPeriodId,
  MatDescription
} from '../../../reducers/global-reducers';
import {InfoService} from '../../../service/info.service';
import {ERROR_EVENT, errorEvent} from '../../../actions/actions';
import {
  DASHBOARD_DELETE_DASHBOARD_STATE_COMMAND,
  DASHBOARD_DELETE_PERIOD_COMMAND,
  DASHBOARD_FIGHT_ORDER_CHANGE_COMMAND,
  DASHBOARD_INIT_DASHBOARD_STATE_COMMAND,
  DASHBOARD_INIT_PERIOD_COMMAND,
  DASHBOARD_LOAD_DASHBOARD_STATE_COMMAND,
  DASHBOARD_LOAD_MATS_COMMAND,
  DASHBOARD_MAT_SELECTED,
  DASHBOARD_MATS_LOADED,
  DASHBOARD_SET_FIGHT_RESULT_COMMAND,
  dashboardLoadPeriodMatsCommand,
  dashboardMatFightsUnloaded,
  dashboardMatSelected,
  dashboardMatsLoaded,
  dashboardPeriodSelected,
  dashboardSelectedPeriodSelectedMatFightsLoaded,
  dashboardStateLoaded,
  loadDashboardState,
  PERIOD_SELECTED,
  REFRESH_MATS_VIEW
} from './dashboard-actions';
import {loadScheduleCommand} from './event-manager-actions';

@Injectable()
export class DashboardEffects {

  dashboardLoadState$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(DASHBOARD_LOAD_DASHBOARD_STATE_COMMAND),
    switchMap((command: any) => {
      return this.infoService.getDashboardState(command.competitionId).pipe(
        catchError(error => observableOf(errorEvent(error))),
        map((state: any) => {
          if (!state || state.type === ERROR_EVENT) {
            return state;
          } else {
            return dashboardStateLoaded(state, command.competitionId);
          }
        }));
    }),
    concatMap(action => [loadScheduleCommand({competitionId: action.competitionId}), action])));

  dashboardLoadAllMatsFights$ = createEffect(() => this.actions$.pipe(
    ofType(PERIOD_SELECTED, REFRESH_MATS_VIEW),
    withLatestFrom(this.store.pipe(
      select(getSelectedEventId),
      filter(competitionId => !!competitionId))),
    switchMap(([command, competitionId]: [CommonAction, string]) =>
      [dashboardMatFightsUnloaded, dashboardLoadPeriodMatsCommand({competitionId, periodId: command.payload})])));

  dashboardLoadAllMatsTop5Fights$ = createEffect(() => this.actions$.pipe(
    ofType(DASHBOARD_MATS_LOADED),
    switchMap((command: any) =>
      from(command.payload as MatDescription[])
        .pipe(filter(mat => mat.periodId === command.periodId), mergeMap(mat => {
          return this.infoService.getMatFights(command.competitionId, mat.id, 5).pipe(
            map(f => dashboardSelectedPeriodSelectedMatFightsLoaded(f, command.payload)),
            catchError(error => observableOf(errorEvent(error)))
          );
        }), toArray())),
    switchMap(acts => [...acts])));

  dashboardLoadMatFights$ = createEffect(() => this.actions$.pipe(
    ofType(DASHBOARD_MAT_SELECTED),
    mergeMap((command: any) => {
      return this.infoService.getMatFights(command.competitionId, command.payload).pipe(
        catchError(error => observableOf(errorEvent(error))),
        map((result: any) => {
          if (!result || result.type === ERROR_EVENT) {
            return result;
          } else {
            return dashboardSelectedPeriodSelectedMatFightsLoaded(result, command.payload);
          }
        }));
    })));

  dashboardLoadMats$ = createEffect(() => this.actions$.pipe(
    ofType(DASHBOARD_LOAD_MATS_COMMAND),
    mergeMap((command: any) => {
      return this.infoService.getPeriodMats(command.competitionId, command.periodId).pipe(
        catchError(error => observableOf(errorEvent(error))),
        map((result: any) => {
          if (!result || result.type === ERROR_EVENT) {
            return result;
          } else {
            return dashboardMatsLoaded(result, command.competitionId, command.periodId);
          }
        }));
    })));

  dashboardForwardGlobalCommands$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(DASHBOARD_INIT_PERIOD_COMMAND,
      DASHBOARD_INIT_DASHBOARD_STATE_COMMAND,
      DASHBOARD_DELETE_DASHBOARD_STATE_COMMAND,
      DASHBOARD_DELETE_PERIOD_COMMAND),
    tap((command: CommonAction) => {
      return this.infoService.sendCommand(command, command.competitionId).pipe(catchError(error => observableOf(errorEvent(error)))).subscribe();
    })), {dispatch: false});

  dashboardForwardCommandsSync$ = createEffect(() => this.actions$.pipe(
    ofType(DASHBOARD_FIGHT_ORDER_CHANGE_COMMAND, DASHBOARD_SET_FIGHT_RESULT_COMMAND),
    concatMap(action => of(action).pipe(
      withLatestFrom(this.store.pipe(select(getSelectedEventSelectedPeriodId)),
        this.store.pipe(select(getSelectedEventGetSelectedMatId)))
    )),
    exhaustMap(([command, periodId, matId]: [CommonAction, string, string]) => this.infoService.sendCommandSync(command)
      .pipe(exhaustMap(() => from([loadDashboardState(command.competitionId), dashboardPeriodSelected(periodId, command.competitionId), dashboardMatSelected(command.competitionId, matId)])))))
  );

  constructor(private actions$: Actions,
              private infoService: InfoService,
              private store: Store<AppState>) {
  }

}
