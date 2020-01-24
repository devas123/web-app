import {Observable, of, of as observableOf} from 'rxjs';

import {catchError, map, mergeMap, tap} from 'rxjs/operators';
import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Action} from '@ngrx/store';
import {
  CHANGE_CATEGORY_REGISTRATION_STATUS_COMMAND,
  COMPETITION_SELECTED,
  EVENT_MANAGER_ADD_REGISTRATION_PERIOD_COMMAND,
  EVENT_MANAGER_CONNECT_SOCKET,
  EVENT_MANAGER_CREATE_FAKE_COMPETITORS_COMMAND,
  EVENT_MANAGER_CREATE_REGISTRATION_GROUP_COMMAND,
  EVENT_MANAGER_DELETE_REGISTRATION_GROUP_COMMAND,
  EVENT_MANAGER_DELETE_REGISTRATION_PERIOD_COMMAND,
  EVENT_MANAGER_DISCONNECT_SOCKET,
  EVENT_MANAGER_DROP_CATEGORY_BRACKETS_COMMAND,
  EVENT_MANAGER_FIGHTS_EDITOR_SUBMIT_CHANGES_COMMAND,
  EVENT_MANAGER_GENERATE_BRACKETS_COMMAND,
  EVENT_MANAGER_LOAD_COMPETITIONS_COMMAND,
  EVENT_MANAGER_MOVE_COMPETITOR,
  EVENT_MANAGER_UPDATE_COMPETITOR_COMMAND,
  EVENT_MANAGER_UPDATE_REGISTRATION_INFO,
  eventManagerDefaultCategoriesLoaded,
  eventManagerDisconnectSocket,
  eventManagerFightsEditorChangesSubmitted,
  myCompetitionsLoaded
} from './event-manager-actions';


import {CommonAction, CompetitionProperties} from '../../../reducers/global-reducers';
import {InfoService} from '../../../service/info.service';
import {EventManagerService} from '../event-manager.service';
import {LOGOUT} from '../../account/flux/actions';
import {errorEvent} from '../../../actions/actions';

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


  loadDefaultCategories$ = createEffect(() => this.actions$.pipe(
    ofType(COMPETITION_SELECTED),
    mergeMap((action: CommonAction) => {
      return this.infoService.getDefaultCategories(action.competitionId).pipe(catchError(error => {
          console.log(error);
          return observableOf(error);
        })
        , map(response => {
          if (response && response.constructor === Array) {
            return eventManagerDefaultCategoriesLoaded(action.competitionId, response);
          } else {
            return errorEvent(JSON.stringify(response));
          }
        }));
    })));


  disconnectEventManagerSocket$ = createEffect(() => this.actions$.pipe(
    ofType(LOGOUT),
    map(() => eventManagerDisconnectSocket)));

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
              private eventManagerService: EventManagerService) {
  }

}
