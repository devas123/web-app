import {catchError, map, mergeMap, switchMap, tap} from 'rxjs/operators';
import * as _ from 'lodash';
import {Injectable} from '@angular/core';
import {Observable, of as observableOf, of} from 'rxjs';
import {Action} from '@ngrx/store';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import * as allActions from '../actions/actions';
import {errorEvent} from '../actions/actions';
import * as competitionMiscActions from '../actions/misc';
import {InfoService} from '../service/info.service';
import {CommonAction, CompetitionProperties, RegistrationInfo, Schedule} from '../reducers/global-reducers';
import * as eventManagerActions from '../modules/event-manager/redux/event-manager-actions';
import {
  COMPETITION_SELECTED,
  EVENT_MANAGER_CATEGORY_BRACKETS_STAGE_SELECTED,
  EVENT_MANAGER_CATEGORY_SELECTED,
  EVENT_MANAGER_CATEGORY_STAGES_LOADED,
  EVENT_MANAGER_CATEGORY_STATE_LOADED,
  EVENT_MANAGER_LOAD_FIGHTER_COMMAND,
  EVENT_MANAGER_LOAD_FIGHTERS_FOR_COMPETITION,
  EVENT_MANAGER_LOAD_REGISTRATION_INFO,
  EVENT_MANAGER_SCHEDULE_LOADED,
  eventManagerCategoriesLoaded,
  eventManagerCategoryBracketsStageFightsLoaded,
  eventManagerCategoryStagesLoaded,
  eventManagerCategoryStateLoaded,
  eventManagerFighterLoaded,
  eventManagerFightersForCompetitionLoaded,
  eventManagerLoadFightersForCompetition,
  eventManagerScheduleLoaded,
  fightIdsByCategoryIdLoaded,
  LOAD_CATEGORIES_COMMAND,
  LOAD_SCHEDULE_COMMAND,
  loadCategories
} from '../modules/event-manager/redux/event-manager-actions';
import {Competitor, Fight} from '../commons/model/competition.model';
import {Dictionary} from '@ngrx/entity';

@Injectable()
export class Effects {

  constructor(private infoService: InfoService,
              private actions$: Actions) {
  }

  getCompetitions$: Observable<Action> = createEffect(() => this.actions$.pipe(ofType(allActions.LOAD_COMPETITIONS_LIST),
    switchMap(() =>
      this.infoService.getCompetitions(null, 'PUBLISHED').pipe(
        map((payload: CompetitionProperties[]) => {
          return allActions.competitionsLoaded(payload);
        }),
        catchError(err => of(allActions.errorEvent(err.statusText || JSON.stringify(err)))))
    )));

  loadRegistrationInfo$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(EVENT_MANAGER_LOAD_REGISTRATION_INFO),
    switchMap((action: CommonAction) =>
      this.infoService.getRegistrationInfo(action.competitionId).pipe(
        map((payload: RegistrationInfo) => {
          return allActions.registrationInfoLoaded(payload);
        }),
        catchError(err => of(allActions.errorEvent(err.statusText || JSON.stringify(err)))))
    )));

  globalCommands$: Observable<Action> = createEffect(() => this.actions$.pipe(ofType(
    allActions.START_COMPETITION_COMMAND,
    allActions.DELETE_COMPETITION_COMMAND,
    eventManagerActions.UPDATE_COMPETITION_PROPERTIES_COMMAND,
    eventManagerActions.EVENT_MANAGER_GENERATE_SCHEDULE_COMMAND,
    eventManagerActions.ADD_CATEGORY_COMMAND,
    eventManagerActions.DELETE_CATEGORY_COMMAND,
    eventManagerActions.EVENT_MANAGER_ADD_COMPETITOR,
    eventManagerActions.EVENT_MANAGER_REMOVE_COMPETITOR,
    eventManagerActions.EVENT_MANAGER_CHANGE_COMPETITOR_CATEGORY_COMMAND,
    eventManagerActions.EVENT_MANAGER_DROP_SCHEDULE_COMMAND,
    eventManagerActions.EVENT_MANAGER_DROP_ALL_BRACKETS_COMMAND,
    allActions.PUBLISH_COMPETITION_COMMAND,
    allActions.UNPUBLISH_COMPETITION_COMMAND),
    mergeMap((command: CommonAction) => this.infoService.sendCommand(command, command.competitionId))), {dispatch: false});

  createCompetition$: Observable<Action> = createEffect(() => this.actions$.pipe(ofType(allActions.CREATE_COMPETITION_COMMAND),
    tap(command => this.infoService.sendCreateCompetitionCommand(command).subscribe())), {dispatch: false});


  competitionSelected$: Observable<Action> = createEffect(() => this.actions$.pipe(ofType(COMPETITION_SELECTED),
    map((action: CommonAction) => competitionMiscActions.loadCompetitionProperties(action.competitionId))));

  loadMyCategories$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(LOAD_CATEGORIES_COMMAND),
    switchMap((action: CommonAction) => {
      return this.infoService.getCategories(action.payload).pipe(map(payload => {
        const categories = (payload || []) as any[];
        return eventManagerCategoriesLoaded(action.payload, categories);
      }), catchError(error => observableOf(errorEvent(error))));
    })));

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


  competitionSelectedLoadCategories$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(COMPETITION_SELECTED),
    map((action: CommonAction) => loadCategories(action.competitionId))));

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

  loadCategoryStages$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(EVENT_MANAGER_CATEGORY_STATE_LOADED),
    switchMap((a: any) => this.infoService.getCategoryStages(a.competitionId, a.categoryId)
      .pipe(
        mergeMap(categoryStages => [
          eventManagerLoadFightersForCompetition(a.competitionId, a.categoryId, 0, 0, undefined, true),
          eventManagerCategoryStagesLoaded({
            selectedStageId: _.isEmpty(categoryStages) ? null : _.sortBy(categoryStages, 'stageOrder')[0]?.id,
            competitionId: a.competitionId,
            categoryId: a.categoryId,
            categoryStages
          })])
      ))
  ));


  loadStageFights$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(EVENT_MANAGER_CATEGORY_BRACKETS_STAGE_SELECTED, EVENT_MANAGER_CATEGORY_STAGES_LOADED),
    switchMap((a: any) => this.infoService.getCategoryStageFights(a.competitionId, a.categoryId, a.selectedStageId)),
    map(payload => eventManagerCategoryBracketsStageFightsLoaded({fights: payload as Fight[]})),
    catchError(error => observableOf(errorEvent(error)))
  ));


  eventManagerLoadFightersForCompetition$ = createEffect(() => this.actions$.pipe(
    ofType(EVENT_MANAGER_LOAD_FIGHTERS_FOR_COMPETITION),
    switchMap((action: CommonAction) => {
      const {pageSize, pageNumber, searchString, replace} = action.payload;
      const {competitionId, categoryId} = action;
      return this.infoService.getCompetitorsForCompetition(competitionId, categoryId, pageNumber, pageSize, searchString)
        .pipe(
          map(response => {
            if (response.total != null && response.page != null && response.competitionId) {
              return eventManagerFightersForCompetitionLoaded(response.competitionId, response, replace);
            } else {
              return errorEvent('Error occured while loading: ' + JSON.stringify(response));
            }
          })
        );
    })));

  loadFighter$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(EVENT_MANAGER_LOAD_FIGHTER_COMMAND),
    switchMap((action: CommonAction) => {
      return this.infoService.getCompetitor(action.competitionId, action.payload).pipe(catchError(error => observableOf(error)));
    }),
    map((payload: any) => {
      if (payload && payload.email) {
        return eventManagerFighterLoaded((payload || {}) as Competitor);
      } else {
        return errorEvent(payload);
      }
    })));

}
