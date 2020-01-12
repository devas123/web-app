import {Observable, of, of as observableOf} from 'rxjs';

import {catchError, map, mapTo, mergeMap, switchMap, tap, withLatestFrom} from 'rxjs/operators';
import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Action, select, Store} from '@ngrx/store';
import {
  CHANGE_CATEGORY_REGISTRATION_STATUS_COMMAND,
  EVENT_MANAGER_ADD_REGISTRATION_PERIOD_COMMAND,
  EVENT_MANAGER_CATEGORY_SELECTED,
  EVENT_MANAGER_COMPETITION_SELECTED,
  EVENT_MANAGER_CONNECT_SOCKET,
  EVENT_MANAGER_CREATE_FAKE_COMPETITORS_COMMAND,
  EVENT_MANAGER_CREATE_REGISTRATION_GROUP_COMMAND,
  EVENT_MANAGER_DELETE_REGISTRATION_GROUP_COMMAND,
  EVENT_MANAGER_DELETE_REGISTRATION_PERIOD_COMMAND,
  EVENT_MANAGER_DISCONNECT_SOCKET,
  EVENT_MANAGER_DROP_CATEGORY_BRACKETS_COMMAND,
  EVENT_MANAGER_FIGHTERS_FOR_COMPETITION_PAGE_UPDATED,
  EVENT_MANAGER_FIGHTS_EDITOR_SUBMIT_CHANGES_COMMAND,
  EVENT_MANAGER_GENERATE_BRACKETS_COMMAND,
  EVENT_MANAGER_LOAD_CATEGORIES_COMMAND,
  EVENT_MANAGER_LOAD_COMPETITIONS_COMMAND,
  EVENT_MANAGER_LOAD_FIGHTER_COMMAND,
  EVENT_MANAGER_LOAD_FIGHTERS_FOR_COMPETITION,
  EVENT_MANAGER_MOVE_COMPETITOR,
  EVENT_MANAGER_SELECT_COMPETITION_COMMAND,
  EVENT_MANAGER_UPDATE_COMPETITOR_COMMAND,
  EVENT_MANAGER_UPDATE_REGISTRATION_INFO,
  eventManagerCategoriesLoaded,
  eventManagerCategoryStateLoaded,
  eventManagerCompetitionSelected,
  eventManagerDefaultCategoriesLoaded,
  eventManagerDisconnectSocket,
  eventManagerFighterLoaded,
  eventManagerFightersForCompetitionLoaded,
  eventManagerFightsEditorChangesSubmitted,
  eventManagerLoadCategories,
  eventManagerLoadFightersForCompetition,
  eventManagerScheduleLoaded,
  myCompetitionsLoaded
} from './event-manager-actions';


import {AppState, CommonAction, CompetitionProperties, Schedule} from '../../../reducers';
import {InfoService} from '../../../service/info.service';
import {EventManagerService} from '../event-manager.service';
import {LOGOUT} from '../../account/flux/actions';
import {Competitor} from '../../../commons/model/competition.model';
import {errorEvent} from '../../../actions/actions';
import {eventManagerGetSelectedEventCompetitorsPageSize} from './event-manager-reducers';

@Injectable()
export class EventManagerEffects {
  sendFightEditChanges$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(EVENT_MANAGER_FIGHTS_EDITOR_SUBMIT_CHANGES_COMMAND),
    map(() => eventManagerFightsEditorChangesSubmitted())
  ));

  syncCommands$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(EVENT_MANAGER_UPDATE_REGISTRATION_INFO,
      EVENT_MANAGER_CREATE_REGISTRATION_GROUP_COMMAND,
      EVENT_MANAGER_DELETE_REGISTRATION_GROUP_COMMAND,
      CHANGE_CATEGORY_REGISTRATION_STATUS_COMMAND),
    mergeMap(command => this.infoService.sendCommandSync(command)),
    catchError(error => {
      console.error(error);
      return of(errorEvent(JSON.stringify(error)));
    })
  ));


  loadMyCompetitions$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(EVENT_MANAGER_LOAD_COMPETITIONS_COMMAND),
    mergeMap((action: CommonAction) => {
      return this.infoService.getCompetitions(action.payload.creatorId, action.payload.status).pipe(catchError(error => observableOf(errorEvent(error))));
    }),
    map((payload: any) => {
      if (Array.isArray(payload)) {
        return myCompetitionsLoaded(payload as CompetitionProperties[]);
      } else {
        return errorEvent(payload);
      }
    })));

  loadFighter$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(EVENT_MANAGER_LOAD_FIGHTER_COMMAND),
    mergeMap((action: CommonAction) => {
      return this.infoService.getCompetitor(action.competitionId, action.payload).pipe(catchError(error => observableOf(error)));
    }),
    map((payload: any) => {
      if (payload && payload.email) {
        return eventManagerFighterLoaded((payload || {}) as Competitor);
      } else {
        return errorEvent(payload);
      }
    })));

  myCompetitionSelected$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(EVENT_MANAGER_COMPETITION_SELECTED),
    map((action: CommonAction) => eventManagerLoadCategories(action.payload.id))));

  selectMyCompetition$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(EVENT_MANAGER_SELECT_COMPETITION_COMMAND),
    mergeMap((action: CommonAction) => this.infoService.getCompetitionProperties(action.payload)
      .pipe(catchError(error => {
        console.log(error);
        return of(error);
      }))),
    mergeMap(props => {
      if (props.id) {
        return this.eventManagerService.selectCompetition(props.id)
          .pipe(mapTo(eventManagerCompetitionSelected(props)));
      } else {
        return observableOf(errorEvent('Error occured while loading competition properties: ' + JSON.stringify(props)));
      }
    }),
    catchError(error => {
      console.log(error);
      return observableOf(error);
    })));

  loadDefaultCategories$ = createEffect(() => this.actions$.pipe(
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
    })));


  eventManagerLoadCategoryState$ = createEffect(() => this.actions$.pipe(
    ofType(EVENT_MANAGER_CATEGORY_SELECTED),
    mergeMap((action: CommonAction) => {
      if (action.competitionId) {
        return this.infoService.getLatestCategoryState(action.competitionId, action.categoryId).pipe(catchError(error => observableOf(error)));
      } else {
        return observableOf({});
      }
    }),
    map((state: any) => {
      if (state.category) {
        return eventManagerCategoryStateLoaded(state);
      } else {
        return errorEvent('Error occured while loading categoryId state: ' + JSON.stringify(state));
      }
    })));


  eventManagerLoadFightersForCompetition$ = createEffect(() => this.actions$.pipe(
    ofType(EVENT_MANAGER_LOAD_FIGHTERS_FOR_COMPETITION),
    switchMap((action: CommonAction) => {
      const {pageSize, pageNumber, searchString} = action.payload;
      const {competitionId, categoryId} = action;
      return this.infoService.getCompetitorsForCompetition(competitionId, categoryId, pageNumber, pageSize, searchString);
    }),
    map(response => {
      if (response.total != null && response.page != null && response.competitionId) {
        return eventManagerFightersForCompetitionLoaded(response.competitionId, response);
      } else {
        return errorEvent('Error occured while loading: ' + JSON.stringify(response));
      }
    })));


  loadMyCategories$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(EVENT_MANAGER_LOAD_CATEGORIES_COMMAND),
    mergeMap((action: CommonAction) => {
      return this.infoService.getCategories(action.payload).pipe(map(payload => {
        const categories = (payload || []) as any[];
        return eventManagerCategoriesLoaded(action.payload, categories);
      }), catchError(error => observableOf(errorEvent(error))));
    })));

  loadSelectedEventSchedule$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(EVENT_MANAGER_COMPETITION_SELECTED),
    mergeMap((action: CommonAction) => {
      return this.infoService.getSchedule(action.competitionId).pipe(map(payload => {
        const schedule = (payload || {}) as Schedule;
        return eventManagerScheduleLoaded(action.competitionId, schedule);
      }), catchError(error => observableOf(errorEvent(error))));
    })));

  disconnectEventManagerSocket$ = createEffect(() => this.actions$.pipe(
    ofType(LOGOUT),
    map(() => eventManagerDisconnectSocket)));

  changePage$ = createEffect(() => this.actions$.pipe(
    ofType(EVENT_MANAGER_FIGHTERS_FOR_COMPETITION_PAGE_UPDATED),
    withLatestFrom(this.store.pipe(select(eventManagerGetSelectedEventCompetitorsPageSize))),
    map(([action, pageSize]) => {
      const {competitionId, categoryId, payload} = action;
      return eventManagerLoadFightersForCompetition(competitionId, categoryId, payload, pageSize);
    })));

  eventManagerForwardCommands$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(
      EVENT_MANAGER_CREATE_FAKE_COMPETITORS_COMMAND,
      EVENT_MANAGER_DROP_CATEGORY_BRACKETS_COMMAND,
      EVENT_MANAGER_MOVE_COMPETITOR,
      EVENT_MANAGER_ADD_REGISTRATION_PERIOD_COMMAND,
      EVENT_MANAGER_DELETE_REGISTRATION_PERIOD_COMMAND,
      EVENT_MANAGER_UPDATE_COMPETITOR_COMMAND,
      EVENT_MANAGER_FIGHTS_EDITOR_SUBMIT_CHANGES_COMMAND,
      EVENT_MANAGER_GENERATE_BRACKETS_COMMAND),
    mergeMap((command: CommonAction) => {
      return this.infoService.sendCommand(command, command.competitionId).pipe(catchError(error => observableOf(errorEvent(error))));
    })), {dispatch: false});

  connectSocket$ = createEffect(() => this.actions$.pipe(
    ofType(EVENT_MANAGER_CONNECT_SOCKET),
    tap(() => this.eventManagerService.connect())), {dispatch: false});

  disConnectSocket$ = createEffect(() => this.actions$.pipe(
    ofType(EVENT_MANAGER_DISCONNECT_SOCKET),
    tap(() => this.eventManagerService.dropConnection())), {dispatch: false});

  constructor(private actions$: Actions,
              private infoService: InfoService,
              private eventManagerService: EventManagerService,
              private store: Store<AppState>) {
  }

}
