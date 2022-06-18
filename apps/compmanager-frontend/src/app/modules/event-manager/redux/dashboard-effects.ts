import {of, of as observableOf} from 'rxjs';

import {catchError, concatMap, filter, map, mergeMap, switchMap, take, tap, withLatestFrom} from 'rxjs/operators';
import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {select, Store} from '@ngrx/store';


import {
  AppState,
  CommonAction,
  getSelectedEventGetSelectedMatId,
  getSelectedEventId,
  getSelectedEventSelectedPeriodId,
} from '../../../reducers/global-reducers';
import {InfoService} from '../../../service/info.service';
import {ERROR_EVENT, errorEvent} from '../../../actions/actions';
import {
  DASHBOARD_FIGHT_ORDER_CHANGE_COMMAND,
  DASHBOARD_FIGHT_SELECTED,
  DASHBOARD_LOAD_MATS_COMMAND,
  DASHBOARD_MAT_SELECTED,
  DASHBOARD_SET_FIGHT_RESULT_COMMAND,
  DASHBOARD_UNLOAD_DASHBOARD_STATE_COMMAND,
  dashboardFightLoaded,
  dashboardLoadPeriodMatsCommand,
  dashboardMatFightsLoaded,
  dashboardMatFightsUnloaded,
  dashboardMatsLoaded,
  PERIOD_SELECTED,
  REFRESH_MATS_VIEW,
  refreshMatView
} from './dashboard-actions';
import {executeErrorCallbacks, executeSuccessCallbacks} from "../../../reducers/compmanager-utils";
import {batchAction} from "./event-manager-actions";

@Injectable()
export class DashboardEffects {
  dashboardLoadAllMatsFights$ = createEffect(() => this.actions$.pipe(
    ofType(PERIOD_SELECTED, REFRESH_MATS_VIEW),
    withLatestFrom(this.store.pipe(
      select(getSelectedEventId),
      filter(competitionId => !!competitionId))),
    switchMap(([command, competitionId]: [CommonAction, string]) =>
      [dashboardLoadPeriodMatsCommand({competitionId, periodId: command.payload})])));

  dashboardLoadMatFights$ = createEffect(() => this.actions$.pipe(
    ofType(DASHBOARD_MAT_SELECTED),
    filter((command: any) => command && !!command.payload),
    mergeMap((command: any) => {
      return this.infoService.getMatFights(command.competitionId, command.payload).pipe(
        catchError(error => observableOf(errorEvent(error))),
        map((result: any) => {
          if (!result || result.type === ERROR_EVENT) {
            return result;
          } else {
            return dashboardMatFightsLoaded(result.fights, result.competitors, command.payload);
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

  dashboardUnload$ = createEffect(() => this.actions$.pipe(
    ofType(DASHBOARD_UNLOAD_DASHBOARD_STATE_COMMAND),
    switchMap(() => of(dashboardMatFightsUnloaded))
  ));

  dashboardLoadFightResultOptions$ = createEffect(() => this.actions$.pipe(
    ofType(DASHBOARD_FIGHT_SELECTED),
    withLatestFrom(this.store.pipe(select(getSelectedEventId))),
    filter(([command, competitionId]) => !!command && !!competitionId),
    mergeMap(([command, competitionId]: [CommonAction, string]) => {
      return this.infoService.getFight(competitionId, command.payload, command.categoryId).pipe(
        map(result => dashboardFightLoaded({
          competitionId: competitionId,
          fightId: command.payload,
          fightresultOptions: result.options,
          fight: result.fight
        })),
        catchError(error => observableOf(errorEvent(error))));
    })));

  dashboardForwardCommandsSync$ = createEffect(() => this.actions$.pipe(
    ofType(DASHBOARD_FIGHT_ORDER_CHANGE_COMMAND, DASHBOARD_SET_FIGHT_RESULT_COMMAND),
    concatMap((action: CommonAction) => {
      let cmd = InfoService.createCommandWithPayload(action)
      return this.infoService.sendCommandSync(cmd)
        .pipe(
          tap(executeSuccessCallbacks(action)),
          map((actions) => batchAction({actions})),
          catchError(executeErrorCallbacks(action))
        );
    })
  ));

  constructor(private actions$: Actions,
              private infoService: InfoService,
              private store: Store<AppState>) {
  }

}
