import {of, of as observableOf} from 'rxjs';

import {catchError, concatMap, filter, map, mergeMap, switchMap, tap, withLatestFrom} from 'rxjs/operators';
import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {select, Store} from '@ngrx/store';


import {AppState, CommonAction, getSelectedEventId,} from '../../../reducers/global-reducers';
import {InfoService} from '../../../service/info.service';
import {ERROR_EVENT, errorEvent} from '../../../actions/actions';
import {
  DASHBOARD_FIGHT_SELECTED,
  DASHBOARD_LOAD_MATS_COMMAND,
  DASHBOARD_MAT_SELECTED,
  DASHBOARD_UNLOAD_DASHBOARD_STATE_COMMAND,
  dashboardFightLoaded,
  dashboardLoadPeriodMatsCommand,
  dashboardMatFightsLoaded,
  dashboardMatFightsUnloaded,
  dashboardMatsLoaded,
  PERIOD_SELECTED,
  REFRESH_MATS_VIEW
} from './dashboard-actions';
import {executeErrorCallbacks, executeSuccessCallbacks} from "../../../reducers/compmanager-utils";
import {batchAction} from "./event-manager-actions";
import {CommandType, MatsQueryResult} from "@frontend-nx/protobuf";

@Injectable()
export class DashboardEffects {

  dashboardUnload$ = createEffect(() => this.actions$.pipe(
    ofType(DASHBOARD_UNLOAD_DASHBOARD_STATE_COMMAND),
    switchMap(() => of(dashboardMatFightsUnloaded))
  ));

  dashboardForwardCommandsSync$ = createEffect(() => this.actions$.pipe(
    ofType(CommandType.DASHBOARD_FIGHT_ORDER_CHANGE_COMMAND, CommandType.DASHBOARD_SET_FIGHT_RESULT_COMMAND),
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
