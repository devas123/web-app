import {Observable, of, of as observableOf} from 'rxjs';

import {catchError, concatMap, debounceTime, map, mergeMap, switchMap, tap} from 'rxjs/operators';
import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Action} from '@ngrx/store';
import {
  batchAction,
  CHANGE_CATEGORY_REGISTRATION_STATUS_COMMAND,
  cometitionListLoaded,
  EVENT_MANAGER_CONNECT_SOCKET,
  EVENT_MANAGER_DISCONNECT_SOCKET,
  EVENT_MANAGER_LOAD_COMPETITIONS_COMMAND,
  EVENT_MANAGER_LOAD_DEFAULT_CATEGORY_RESTRICTIONS,
  EVENT_MANAGER_LOAD_DEFAULT_FIGHT_RESULTS,
  eventManagerDefaultFightResultsLoaded,
  eventManagerDefaultRestrictionsLoaded,
  eventManagerDisconnectSocket,
  eventManagerPreviewCategoriesGenerated,
  GENERATE_PREVIEW_CATEGORIES_COMMAND
} from './event-manager-actions';


import {CommonAction} from '../../../reducers/global-reducers';
import {InfoService} from '../../../service/info.service';
import {EventManagerService} from '../event-manager.service';
import {LOGOUT} from '../../account/flux/actions';
import {errorEvent} from '../../../actions/actions';
import {CommandType, GenerateCategoriesFromRestrictionsPayload, ManagedCompetition} from "@frontend-nx/protobuf";
import {executeErrorCallbacks, executeSuccessCallbacks} from "../../../reducers/compmanager-utils";

@Injectable()
export class EventManagerEffects {

  syncCommands$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(CommandType.UPDATE_REGISTRATION_INFO_COMMAND,
      CommandType.DROP_CATEGORY_BRACKETS_COMMAND,
      CommandType.CREATE_FAKE_COMPETITORS_COMMAND,
      CommandType.UPDATE_STAGE_STATUS_COMMAND,
      CommandType.FIGHTS_EDITOR_APPLY_CHANGE,
      CommandType.GENERATE_CATEGORIES_COMMAND,
      CommandType.UPDATE_COMPETITOR_COMMAND,
      CommandType.GENERATE_BRACKETS_COMMAND,
      CHANGE_CATEGORY_REGISTRATION_STATUS_COMMAND),
    concatMap((action: any) => {
      const command = InfoService.createCommandWithPayload(action);
      return this.infoService.sendCommandSync(command).pipe(
        tap(executeSuccessCallbacks(action)),
        catchError(executeErrorCallbacks(action)),
        map((actions) => batchAction({actions})),
      )
    }),
    catchError(error => {
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

  loadGeneratedCategories$ = createEffect(() => this.actions$.pipe(
    ofType(GENERATE_PREVIEW_CATEGORIES_COMMAND),
    debounceTime(500),
    switchMap((command: CommonAction) => {
      const payload = <GenerateCategoriesFromRestrictionsPayload>{};
      const commandAsAny = command as any;
      payload.idTrees = commandAsAny.idTrees;
      payload.restrictions = commandAsAny.restrictions;
      payload.restrictionNames = commandAsAny.restrictionNames;
      return this.infoService.generatePreliminaryCategories(payload, command.competitionId).pipe(
        map(response => eventManagerPreviewCategoriesGenerated({
          competitionId: command.competitionId,
          categories: response.categories
        }))
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
