import {catchError, concatMap, map, mergeMap, switchMap, tap} from 'rxjs/operators';
import {Injectable} from '@angular/core';
import {from, Observable, of as observableOf, of} from 'rxjs';
import {Action} from '@ngrx/store';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import * as allActions from '../actions/actions';
import {errorEvent} from '../actions/actions';
import * as competitionMiscActions from '../actions/misc';
import {InfoService} from '../service/info.service';
import {CommonAction} from '../reducers/global-reducers';
import * as eventManagerActions from '../modules/event-manager/redux/event-manager-actions';
import {
  batchAction,
  COMPETITION_SELECTED,
  EVENT_MANAGER_LOAD_FIGHTER_COMMAND,
  EVENT_MANAGER_LOAD_REGISTRATION_INFO,
  EVENT_MANAGER_SCHEDULE_LOADED,
  eventManagerFighterLoaded,
  eventManagerScheduleLoaded,
  fightIdsByCategoryIdLoaded,
  LOAD_SCHEDULE_COMMAND
} from '../modules/event-manager/redux/event-manager-actions';
import {Dictionary} from '@ngrx/entity';
import {CommandType, Competitor, ManagedCompetition, RegistrationInfo, Schedule} from "@frontend-nx/protobuf";
import {executeErrorCallbacks, executeSuccessCallbacks} from "../reducers/compmanager-utils";

@Injectable()
export class Effects {

  constructor(private infoService: InfoService,
              private actions$: Actions) {
  }

  getCompetitions$: Observable<Action> = createEffect(() => this.actions$.pipe(ofType(allActions.LOAD_COMPETITIONS_LIST),
    switchMap(() =>
      this.infoService.getCompetitions(null, 'PUBLISHED').pipe(
        map((payload: ManagedCompetition[]) => {
          return allActions.competitionsLoaded(payload);
        }),
        catchError(err => of(allActions.errorEvent(err.statusText || JSON.stringify(err)))))
    )), {useEffectsErrorHandler: true});

  loadRegistrationInfo$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(EVENT_MANAGER_LOAD_REGISTRATION_INFO),
    switchMap((action: CommonAction) =>
      this.infoService.getRegistrationInfo(action.competitionId).pipe(
        map((payload: RegistrationInfo) => {
          return allActions.registrationInfoLoaded(payload);
        }),
        catchError(err => of(allActions.errorEvent(err.statusText || JSON.stringify(err)))))
    )), {useEffectsErrorHandler: true});

  globalCommands$: Observable<Action> = createEffect(() => this.actions$.pipe(ofType(
      allActions.START_COMPETITION_COMMAND),
    mergeMap((action: CommonAction) => {
      let cmd = InfoService.createCommandWithPayload(action)
      return this.infoService.sendCommand(cmd, action.competitionId)
    })), {dispatch: false, useEffectsErrorHandler: true});

  globalCommandsSync$: Observable<Action> = createEffect(() => this.actions$.pipe(ofType(
      CommandType.DELETE_CATEGORY_COMMAND,
      CommandType.DROP_SCHEDULE_COMMAND,
      CommandType.DROP_ALL_BRACKETS_COMMAND,
      CommandType.UPDATE_COMPETITION_PROPERTIES_COMMAND,
      CommandType.REMOVE_COMPETITOR_COMMAND,
      CommandType.PUBLISH_COMPETITION_COMMAND,
      CommandType.UNPUBLISH_COMPETITION_COMMAND,
      CommandType.CHANGE_COMPETITOR_CATEGORY_COMMAND,
      CommandType.DELETE_COMPETITION_COMMAND,
      CommandType.GENERATE_SCHEDULE_COMMAND,
      eventManagerActions.ADD_CATEGORY_COMMAND,
      CommandType.ADD_COMPETITOR_COMMAND),
    concatMap((action: CommonAction) => {
      let cmd = InfoService.createCommandWithPayload(action)
      return this.infoService.sendCommandSync(cmd)
        .pipe(
          tap(executeSuccessCallbacks(action)),
          map((actions) => batchAction({actions})),
          catchError(executeErrorCallbacks(action))
        );
    })), {useEffectsErrorHandler: true});

  createCompetition$: Observable<Action> = createEffect(() => this.actions$.pipe(ofType(CommandType.CREATE_COMPETITION_COMMAND),
    mergeMap(action =>
      this.infoService.sendCreateCompetitionCommand(action)
        .pipe(
          tap(executeSuccessCallbacks(action)),
          mergeMap((actions) => from(actions)),
          catchError(executeErrorCallbacks(action))
        ))));


  competitionSelected$: Observable<Action> = createEffect(() => this.actions$.pipe(ofType(COMPETITION_SELECTED),
    map((action: CommonAction) => competitionMiscActions.loadCompetitionProperties(action.competitionId))));

  loadSelectedEventSchedule$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(LOAD_SCHEDULE_COMMAND),
    switchMap((action: CommonAction) => {
      return this.infoService.getSchedule(action.competitionId).pipe(map(payload => {
        const schedule = (payload || {}) as Schedule;
        return eventManagerScheduleLoaded(action.competitionId, schedule);
      }), catchError(error => observableOf(errorEvent(error))));
    })));

  loadSelectedEventFightIdsByCategoryId$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(EVENT_MANAGER_SCHEDULE_LOADED),
    switchMap((action: CommonAction) => {
      return this.infoService.getFightIdsByCategoryId(action.competitionId).pipe(map(payload => {
        const fightIdsBycategoryId = (payload || {}) as Dictionary<string[]>;
        return fightIdsByCategoryIdLoaded({fightIdsBycategoryId});
      }), catchError(error => observableOf(errorEvent(error))));
    })));

  loadFighter$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(EVENT_MANAGER_LOAD_FIGHTER_COMMAND),
    switchMap((action: CommonAction) => {
      return this.infoService.getCompetitor(action.competitionId, action.payload).pipe(catchError(error => observableOf(error)));
    }),
    map((payload: Competitor) => {
      if (payload && payload.email) {
        return eventManagerFighterLoaded(payload);
      } else {
        return errorEvent(payload as any);
      }
    })));

}
