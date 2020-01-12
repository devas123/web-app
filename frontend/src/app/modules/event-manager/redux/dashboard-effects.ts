import {from, Observable, of, of as observableOf} from 'rxjs';

import {catchError, concatMap, exhaustMap, filter, map, mergeMap, tap, withLatestFrom} from 'rxjs/operators';
import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Action, select, Store} from '@ngrx/store';


import {AppState, CommonAction, getSelectedEventId} from '../../../reducers/global-reducers';
import {InfoService} from '../../../service/info.service';
import {ERROR_EVENT, errorEvent} from '../../../actions/actions';
import {
  DASHBOARD_DELETE_DASHBOARD_STATE_COMMAND,
  DASHBOARD_DELETE_PERIOD_COMMAND,
  DASHBOARD_FIGHT_ORDER_CHANGE_COMMAND,
  DASHBOARD_INIT_DASHBOARD_STATE_COMMAND,
  DASHBOARD_INIT_PERIOD_COMMAND,
  DASHBOARD_LOAD_DASHBOARD_STATE_COMMAND,
  DASHBOARD_MAT_SELECTED,
  DASHBOARD_PERIOD_SELECTED,
  dashboardPeriodSelected,
  dashboardSelectedPeriodMatsLoaded,
  dashboardSelectedPeriodSelectedMatFightsLoaded,
  dashboardStateLoaded,
  loadDashboardState
} from './dashboard-actions';
import {dashboardGetSelectedPeriodId} from './dashboard-reducers';

@Injectable()
export class DashboardEffects {

  dashboardLoadState$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(DASHBOARD_LOAD_DASHBOARD_STATE_COMMAND),
    mergeMap((command: any) => {
      return this.infoService.getDashboardState(command.competitionId).pipe(
        catchError(error => observableOf(errorEvent(error))),
        map((state: any) => {
          if (!state || state.type === ERROR_EVENT) {
            return state;
          } else {
            return dashboardStateLoaded(state, command.competitionId);
          }
        }));
    })));

  dashboardLoadMats$ = createEffect(() => this.actions$.pipe(
    ofType(DASHBOARD_PERIOD_SELECTED),
    withLatestFrom(this.store.pipe(
      select(getSelectedEventId),
      filter(competitionId => competitionId != null))),
    exhaustMap(([command, competitionId]: [CommonAction, string]) => this.infoService.getPeriodMats(competitionId, command.payload).pipe(
      catchError(error => observableOf(errorEvent(error))),
      map((state: any) => {
        if (!state || state.type === ERROR_EVENT) {
          return state;
        } else {
          return dashboardSelectedPeriodMatsLoaded(state, competitionId, command.payload);
        }
      })))
  ));

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

  dashboardForwardGlobalCommands$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(DASHBOARD_INIT_PERIOD_COMMAND,
      DASHBOARD_INIT_DASHBOARD_STATE_COMMAND,
      DASHBOARD_DELETE_DASHBOARD_STATE_COMMAND,
      DASHBOARD_DELETE_PERIOD_COMMAND),
    tap((command: CommonAction) => {
      return this.infoService.sendGlobalDashboardCommand(command, command.competitionId).pipe(catchError(error => observableOf(errorEvent(error)))).subscribe();
    })), {dispatch: false});

  dashboardForwardCommandsSync$ = createEffect(() => this.actions$.pipe(
    ofType(DASHBOARD_FIGHT_ORDER_CHANGE_COMMAND),
    concatMap(action => of(action).pipe(
      withLatestFrom(this.store.pipe(select(dashboardGetSelectedPeriodId)))
    )),
    exhaustMap(([command, periodId]: [CommonAction, string]) => this.infoService.sendCommandSync(command)
      .pipe(exhaustMap(() => from([loadDashboardState(command.competitionId), dashboardPeriodSelected(periodId, command.competitionId)])))))
  );

  constructor(private actions$: Actions,
              private infoService: InfoService,
              private store: Store<AppState>) {
  }

}
