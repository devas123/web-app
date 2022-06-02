import {from, Observable, of, of as observableOf} from 'rxjs';

import {catchError, map, mergeMap, switchMap, tap} from 'rxjs/operators';
import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Action} from '@ngrx/store';
import {
  CHANGE_CATEGORY_REGISTRATION_STATUS_COMMAND,
  cometitionListLoaded,
  EVENT_MANAGER_ADD_REGISTRATION_PERIOD_COMMAND,
  EVENT_MANAGER_CONNECT_SOCKET,
  EVENT_MANAGER_CREATE_REGISTRATION_GROUP_COMMAND,
  EVENT_MANAGER_DELETE_REGISTRATION_GROUP_COMMAND,
  EVENT_MANAGER_DELETE_REGISTRATION_PERIOD_COMMAND,
  EVENT_MANAGER_DISCONNECT_SOCKET,
  EVENT_MANAGER_LOAD_COMPETITIONS_COMMAND,
  EVENT_MANAGER_LOAD_DEFAULT_CATEGORY_RESTRICTIONS,
  EVENT_MANAGER_LOAD_DEFAULT_FIGHT_RESULTS,
  EVENT_MANAGER_UPDATE_REGISTRATION_INFO,
  eventManagerDefaultFightResultsLoaded,
  eventManagerDefaultRestrictionsLoaded,
  eventManagerDisconnectSocket,
  eventManagerPreviewCategoriesGenerated,
  FIGHTS_EDITOR_APPLY_CHANGE,
  GENERATE_CATEGORIES_COMMAND,
  GENERATE_PREVIEW_CATEGORIES_COMMAND,
  UPDATE_STAGE_STATUS_COMMAND
} from './event-manager-actions';


import {CommonAction} from '../../../reducers/global-reducers';
import {InfoService} from '../../../service/info.service';
import {EventManagerService} from '../event-manager.service';
import {LOGOUT} from '../../account/flux/actions';
import {errorEvent} from '../../../actions/actions';
import {CommandType, Event, GenerateCategoriesFromRestrictionsPayload, ManagedCompetition} from "@frontend-nx/protobuf";
import {executeErrorCallbacks, executeSuccessCallbacks} from "../../../reducers/compmanager-utils";

@Injectable()
export class EventManagerEffects {

  syncCommands$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(EVENT_MANAGER_UPDATE_REGISTRATION_INFO,
      CommandType.DROP_CATEGORY_BRACKETS_COMMAND,
      CommandType.CREATE_FAKE_COMPETITORS_COMMAND,
      UPDATE_STAGE_STATUS_COMMAND,
      FIGHTS_EDITOR_APPLY_CHANGE,
      EVENT_MANAGER_CREATE_REGISTRATION_GROUP_COMMAND,
      EVENT_MANAGER_DELETE_REGISTRATION_GROUP_COMMAND,
      CommandType.UPDATE_COMPETITOR_COMMAND,
      CHANGE_CATEGORY_REGISTRATION_STATUS_COMMAND),
    mergeMap((action: any) => {
      const command = InfoService.createCommandWithPayload(action);
      return this.infoService.sendCommandSync(command).pipe(
        tap(executeSuccessCallbacks(action)),
        mergeMap((actions) => from(actions)),
        catchError(executeErrorCallbacks(action))
      )
    }),
    catchError(error => {
      console.error(error);
      return of(errorEvent(JSON.stringify(error)));
    })
  ));

  generateBrackets$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(CommandType.GENERATE_BRACKETS_COMMAND),
    mergeMap((action: any) => {
      const command = InfoService.createCommandWithPayload(action);
      return this.infoService.sendCommandSync(command).pipe(
        tap(executeSuccessCallbacks(action)),
        mergeMap((actions: Event[]) => {
          return from(actions.sort((a,b) => b.localEventNumber - a.localEventNumber));
        }),
        catchError(executeErrorCallbacks(action))
      )
    }),
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
    map(payload => {
      if (Array.isArray(payload)) {
        return cometitionListLoaded(payload as ManagedCompetition[]);
      } else {
        return errorEvent(payload as any);
      }
    })));


  loadDefaultRestrictions$ = createEffect(() => this.actions$.pipe(
    ofType(EVENT_MANAGER_LOAD_DEFAULT_CATEGORY_RESTRICTIONS),
    mergeMap((action: CommonAction) => {
      return this.infoService.getDefaultRestrictions(action.competitionId).pipe(catchError(error => {
          console.log(error);
          return observableOf(error);
        })
        , map(response => {
          if (response && response.constructor === Array) {
            return eventManagerDefaultRestrictionsLoaded(action.competitionId, response);
          } else {
            return errorEvent(JSON.stringify(response));
          }
        }));
    })));

  loadDefaultFightResults$ = createEffect(() => this.actions$.pipe(
    ofType(EVENT_MANAGER_LOAD_DEFAULT_FIGHT_RESULTS),
    mergeMap((action: CommonAction) => {
      return this.infoService.getDefaultFightResults(action.competitionId).pipe(catchError(error => {
          console.log(error);
          return observableOf(error);
        })
        , map(response => {
          if (response && response.constructor === Array) {
            return eventManagerDefaultFightResultsLoaded({competitionId: action.competitionId, fightResults: response});
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
      EVENT_MANAGER_ADD_REGISTRATION_PERIOD_COMMAND,
      EVENT_MANAGER_DELETE_REGISTRATION_PERIOD_COMMAND,
      GENERATE_CATEGORIES_COMMAND),
    mergeMap((action: CommonAction) => {
      const command = InfoService.createCommandWithPayload(action);
      return this.infoService.sendCommand(command, action.competitionId).pipe(catchError(error => observableOf(errorEvent(error))))
    })),
    {dispatch: false});

  loadGeneratedCategories$ = createEffect(() => this.actions$.pipe(
    ofType(GENERATE_PREVIEW_CATEGORIES_COMMAND),
    switchMap((command: CommonAction) => {
      const payload = <GenerateCategoriesFromRestrictionsPayload>{};
      const commandAsAny = command as any;
      payload.idTrees = commandAsAny.idTrees;
      payload.restrictions = commandAsAny.restrictions;
      payload.restrictionNames = commandAsAny.restrictionNames;
      return this.infoService.generatePreliminaryCategories(payload, command.competitionId).pipe(
        map(response => eventManagerPreviewCategoriesGenerated({ competitionId: command.competitionId, categories: response.categories }))
      )
    }),
  ));

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
