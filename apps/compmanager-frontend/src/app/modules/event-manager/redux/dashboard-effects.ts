import {catchError, concatMap, map, tap} from 'rxjs/operators';
import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';


import {CommonAction,} from '../../../reducers/global-reducers';
import {InfoService} from '../../../service/info.service';
import {executeErrorCallbacks, executeSuccessCallbacks} from "../../../reducers/compmanager-utils";
import {batchAction} from "./event-manager-actions";
import {CommandType} from "@frontend-nx/protobuf";

@Injectable()
export class DashboardEffects {

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
  ), {dispatch: false, useEffectsErrorHandler: true});

  constructor(private actions$: Actions,
              private infoService: InfoService) {
  }

}
