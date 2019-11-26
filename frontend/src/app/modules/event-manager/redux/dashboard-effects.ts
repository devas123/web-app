import {Observable, of as observableOf} from 'rxjs';

import {catchError, filter, map, mergeMap, tap} from 'rxjs/operators';
import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Action, select, Store} from '@ngrx/store';


import {AppState, CommonAction} from '../../../reducers';
import {InfoService} from '../../../service/info.service';
import {ERROR_OCCURRED, errorEvent} from '../../../actions/actions';
import {
  DASHBOARD_DELETE_DASHBOARD_STATE_COMMAND,
  DASHBOARD_DELETE_PERIOD_COMMAND,
  DASHBOARD_INIT_DASHBOARD_STATE_COMMAND,
  DASHBOARD_INIT_PERIOD_COMMAND,
  DASHBOARD_LOAD_DASHBOARD_STATE_COMMAND,
  DASHBOARD_MAT_SELECTED,
  DASHBOARD_PERIOD_SELECTED,
  dashboardSelectedPeriodMatsLoaded,
  dashboardSelectedPeriodSelectedMatFightsLoaded,
  dashboardStateLoaded
} from './dashboard-actions';
import {eventManagerGetSelectedEventId} from './event-manager-reducers';

@Injectable()
export class DashboardEffects {

  @Effect()
  dashboardLoadState$: Observable<Action> = this.actions$.pipe(
    ofType(DASHBOARD_LOAD_DASHBOARD_STATE_COMMAND),
    mergeMap((command: any) => {
      return this.infoService.getDashboardState(command.competitionId).pipe(
        catchError(error => observableOf(errorEvent(error))),
        map((state: any) => {
          if (!state || state.type === ERROR_OCCURRED) {
            return state;
          } else {
            return dashboardStateLoaded(state, command.competitionId);
          }
        }));
    }));
  @Effect()
  dashboardLoadMats$ = this.actions$.pipe(
    ofType(DASHBOARD_PERIOD_SELECTED),
    mergeMap((command: any) => {
      return this.store.pipe(
        select(eventManagerGetSelectedEventId),
        filter(competitionId => competitionId != null),
        mergeMap(competitionId => this.infoService.getPeriodMats(competitionId, command.payload).pipe(
          catchError(error => observableOf(errorEvent(error))),
          map((state: any) => {
            if (!state || state.type === ERROR_OCCURRED) {
              return state;
            } else {
              return dashboardSelectedPeriodMatsLoaded(state, competitionId, command.payload);
            }
          }))));
    }));

  @Effect()
  dashboardLoadMatFights$ = this.actions$.pipe(
    ofType(DASHBOARD_MAT_SELECTED),
    mergeMap((command: any) => {
      return this.infoService.getMatFights(command.competitionId, command.payload).pipe(
        catchError(error => observableOf(errorEvent(error))),
        map((fights: any) => {
          if (!fights || fights.type === ERROR_OCCURRED) {
            return fights;
          } else {
            return dashboardSelectedPeriodSelectedMatFightsLoaded(fights, command.payload);
          }
        }));
    }));

  @Effect({dispatch: false})
  dashboardForwardGlobalCommands$: Observable<Action> = this.actions$.pipe(
    ofType(DASHBOARD_INIT_PERIOD_COMMAND,
      DASHBOARD_INIT_DASHBOARD_STATE_COMMAND,
      DASHBOARD_DELETE_DASHBOARD_STATE_COMMAND,
      DASHBOARD_DELETE_PERIOD_COMMAND),
    tap((command: CommonAction) => {
      return this.infoService.sendGlobalDashboardCommand(command, command.competitionId).pipe(catchError(error => observableOf(errorEvent(error)))).subscribe();
    }));

  constructor(private actions$: Actions,
              private infoService: InfoService,
              private store: Store<AppState>) {
  }

}
