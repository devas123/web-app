import {Observable, of as observableOf} from 'rxjs';

import {catchError, map, mergeMap, tap} from 'rxjs/operators';
import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Action, select, Store} from '@ngrx/store';
import {
  EVENT_MANAGER_CATEGORY_SELECTED,
  EVENT_MANAGER_COMPETITION_SELECTED,
  EVENT_MANAGER_CONNECT_SOCKET,
  EVENT_MANAGER_CREATE_FAKE_COMPETITORS_COMMAND,
  EVENT_MANAGER_DISCONNECT_SOCKET,
  EVENT_MANAGER_DROP_CATEGORY_BRACKETS_COMMAND,
  EVENT_MANAGER_FIGHTERS_FOR_COMPETITION_PAGE_CHANGED,
  EVENT_MANAGER_GENERATE_BRACKETS_COMMAND,
  EVENT_MANAGER_LOAD_CATEGORIES_COMMAND,
  EVENT_MANAGER_LOAD_COMPETITIONS_COMMAND,
  EVENT_MANAGER_LOAD_FIGHTER_COMMAND,
  EVENT_MANAGER_LOAD_FIGHTERS_FOR_COMPETITION,
  EVENT_MANAGER_MOVE_COMPETITOR,
  EVENT_MANAGER_SELECT_COMPETITION_COMMAND,
  EVENT_MANAGER_UPDATE_COMPETITOR_COMMAND,
  eventManagerCategoriesLoaded,
  eventManagerCategoryStateLoaded,
  eventManagerCompetitionSelected,
  eventManagerDefaultCategoriesLoaded,
  eventManagerDisconnectSocket,
  eventManagerFighterLoaded,
  eventManagerFightersForCompetitionLoaded,
  eventManagerLoadCategories,
  eventManagerLoadFightersForCompetition,
  eventManagerScheduleLoaded,
  myCompetitionsLoaded
} from './event-manager-actions';


import {AppState, CommonAction, CompetitionProperties, Schedule} from '../../../reducers';
import {InfoService} from '../../../service/info.service';
import {EventManagerService} from '../event-manager.service';
import {LOGOUT} from '../../account/flux/actions';
import {Category, Competitor} from '../../../commons/model/competition.model';
import {errorEvent} from '../../../actions/actions';
import {eventManagerGetSelectedEventCompetitorsPageSize} from './event-manager-reducers';

@Injectable()
export class EventManagerEffects {
  @Effect()
  loadMyCompetitions$: Observable<Action> = this.actions$.pipe(
    ofType(EVENT_MANAGER_LOAD_COMPETITIONS_COMMAND),
    mergeMap((action: CommonAction) => {
      return this.infoService.getCompetitions(action.payload.creatorId, action.payload.status).pipe(catchError(error => observableOf(errorEvent(error))));
    }),
    map(payload => myCompetitionsLoaded((payload || []) as CompetitionProperties[])));

  @Effect()
  loadFighter$: Observable<Action> = this.actions$.pipe(
    ofType(EVENT_MANAGER_LOAD_FIGHTER_COMMAND),
    mergeMap((action: CommonAction) => {
      return this.infoService.getCompetitor(action.competitionId, action.categoryId, action.payload).pipe(catchError(error => observableOf(error)));
    }),
    map((payload: any) => {
      if (payload && payload.email) {
        return eventManagerFighterLoaded((payload || {}) as Competitor);
      } else {
        return errorEvent(payload);
      }
    }));

  @Effect()
  myCompetitionSelected$: Observable<Action> = this.actions$.pipe(
    ofType(EVENT_MANAGER_COMPETITION_SELECTED),
    map((action: CommonAction) => eventManagerLoadCategories(action.payload.competitionId)));

  @Effect()
  selectMyCompetition$: Observable<Action> = this.actions$.pipe(
    ofType(EVENT_MANAGER_SELECT_COMPETITION_COMMAND),
    mergeMap((action: CommonAction) => this.infoService.getCompetitionProperties(action.payload).pipe(catchError(error => {
      console.log(error);
      return observableOf(error);
    }))),
    map(props => {
      if (props.competitionId) {
        return eventManagerCompetitionSelected(props);
      } else {
        return errorEvent('Error occured while loading competition properties: ' + JSON.stringify(props));
      }
    }));

  @Effect()
  loadDefaultCategories$ = this.actions$.pipe(
    ofType(EVENT_MANAGER_COMPETITION_SELECTED),
    mergeMap((action: CommonAction) => {
      return this.infoService.getDefaultCategories(action.competitionId).pipe(catchError(error => {
        console.log(error);
        return observableOf(error);
      }), map(response => {
        if (response && response.constructor === Array) {
          return eventManagerDefaultCategoriesLoaded(action.competitionId, response);
        } else {
          return errorEvent(JSON.stringify(response));
        }
      }));
    }));


  @Effect()
  eventManagerLoadCategoryState$ = this.actions$.pipe(
    ofType(EVENT_MANAGER_CATEGORY_SELECTED),
    mergeMap((action: CommonAction) => {
      if (action.competitionId) {
        return this.infoService.getLatestCategoryState(action.categoryId).pipe(catchError(error => observableOf(error)));
      } else {
        return observableOf({});
      }
    }),
    map((state: any) => {
      if (state.category) {
        return eventManagerCategoryStateLoaded(state);
      } else {
        return errorEvent('Error occured while loading category state: ' + JSON.stringify(state));
      }
    }));


  @Effect()
  eventManagerLoadFightersForCompetition$ = this.actions$.pipe(
    ofType(EVENT_MANAGER_LOAD_FIGHTERS_FOR_COMPETITION),
    mergeMap((action: CommonAction) => {
      const {pageSize, pageNumber, searchString} = action.payload;
      return this.infoService.getCompetitorsForCompetition(action.competitionId, pageNumber, pageSize, searchString);
    }),
    map(response => {
      if (response.total != null && response.page != null && response.competitionId) {
        return eventManagerFightersForCompetitionLoaded(response.competitionId, response);
      } else {
        return errorEvent('Error occured while loading: ' + JSON.stringify(response));
      }
    }));


  @Effect()
  loadMyCategories$: Observable<Action> = this.actions$.pipe(
    ofType(EVENT_MANAGER_LOAD_CATEGORIES_COMMAND),
    mergeMap((action: CommonAction) => {
    return this.infoService.getCategories(action.payload).pipe(map(payload => {
      const categories = (payload || []) as Category[];
      return eventManagerCategoriesLoaded(action.payload, categories);
    }), catchError(error => observableOf(errorEvent(error))));
  }));

  @Effect()
  loadSelectedEventSchedule$: Observable<Action> = this.actions$.pipe(
    ofType(EVENT_MANAGER_COMPETITION_SELECTED),
    mergeMap((action: CommonAction) => {
    return this.infoService.getSchedule(action.competitionId).pipe(map(payload => {
      const schedule = (payload || {}) as Schedule;
      return eventManagerScheduleLoaded(action.competitionId, schedule);
    }), catchError(error => observableOf(errorEvent(error))));
  }));

  @Effect()
  disconnectEventManagerSocket$ = this.actions$.pipe(
    ofType(LOGOUT),
    map(() => eventManagerDisconnectSocket));

  @Effect()
  changePage$ = this.actions$.pipe(
    ofType(EVENT_MANAGER_FIGHTERS_FOR_COMPETITION_PAGE_CHANGED),
    mergeMap((action: CommonAction) => this.store.pipe(select(eventManagerGetSelectedEventCompetitorsPageSize), map(pageSize => ({
      action,
      pageSize
    })))),
    map(ap => {
      const {pageSize} = ap;
      return eventManagerLoadFightersForCompetition(ap.action.competitionId, ap.action.payload, pageSize);
    }));

  @Effect({dispatch: false})
  eventManagerForwardCommands$: Observable<Action> = this.actions$.pipe(
    ofType(
    EVENT_MANAGER_CREATE_FAKE_COMPETITORS_COMMAND,
    EVENT_MANAGER_DROP_CATEGORY_BRACKETS_COMMAND,
    EVENT_MANAGER_MOVE_COMPETITOR,
    EVENT_MANAGER_UPDATE_COMPETITOR_COMMAND,
    EVENT_MANAGER_GENERATE_BRACKETS_COMMAND),
    tap(command => {
      return this.infoService.sendCommand(command).pipe(catchError(error => observableOf(errorEvent(error)))).subscribe();
    }));

  @Effect({dispatch: false})
  connectSocket$ = this.actions$.pipe(
    ofType(EVENT_MANAGER_CONNECT_SOCKET),
    tap(() => this.eventManagerService.connect()));

  @Effect({dispatch: false})
  disConnectSocket$ = this.actions$.pipe(
    ofType(EVENT_MANAGER_DISCONNECT_SOCKET),
    tap(() => this.eventManagerService.disconnect()));

  constructor(private actions$: Actions,
              private infoService: InfoService,
              private eventManagerService: EventManagerService,
              private store: Store<AppState>) {
  }

}
