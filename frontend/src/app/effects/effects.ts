import {catchError, map, mergeMap, switchMap, tap} from 'rxjs/operators';


import {Injectable} from '@angular/core';
import {Observable, of as observableOf, of} from 'rxjs';
import {Action} from '@ngrx/store';
import {Actions, createEffect, Effect, ofType} from '@ngrx/effects';
import * as allActions from '../actions/actions';
import * as competitionMiscActions from '../modules/competition/redux/actions/misc';
import {InfoService} from '../service/info.service';
import {CommonAction, CompetitionProperties, Schedule} from '../reducers/global-reducers';
import * as eventManagerActions from '../modules/event-manager/redux/event-manager-actions';
import {COMPETITION_SELECTED, loadCategories} from '../modules/event-manager/redux/event-manager-actions';
import {LOAD_CATEGORIES_COMMAND} from '../modules/event-manager/redux/event-manager-actions';
import {eventManagerCategoriesLoaded} from '../modules/event-manager/redux/event-manager-actions';
import {errorEvent} from '../actions/actions';
import {eventManagerScheduleLoaded} from '../modules/event-manager/redux/event-manager-actions';
import {EVENT_MANAGER_CATEGORY_SELECTED} from '../modules/event-manager/redux/event-manager-actions';
import {eventManagerCategoryStateLoaded} from '../modules/event-manager/redux/event-manager-actions';
import {EVENT_MANAGER_LOAD_FIGHTERS_FOR_COMPETITION} from '../modules/event-manager/redux/event-manager-actions';
import {eventManagerFightersForCompetitionLoaded} from '../modules/event-manager/redux/event-manager-actions';
import {EVENT_MANAGER_LOAD_FIGHTER_COMMAND} from '../modules/event-manager/redux/event-manager-actions';
import {eventManagerFighterLoaded} from '../modules/event-manager/redux/event-manager-actions';
import {Competitor} from '../commons/model/competition.model';

@Injectable()
export class Effects {

  constructor(private infoService: InfoService,
              private actions$: Actions) {
  }

  @Effect()
  getCompetitions$: Observable<Action> = this.actions$.pipe(ofType(allActions.LOAD_COMPETITIONS_LIST),
    mergeMap(() =>
      this.infoService.getCompetitions(null, 'PUBLISHED').pipe(
        map((payload: CompetitionProperties[]) => {
          return allActions.competitionsLoaded(payload);
        }),
        catchError(err => of(allActions.errorEvent(err.statusText || JSON.stringify(err)))))
    ));

  @Effect({dispatch: false})
  globalCommands$: Observable<Action> = this.actions$.pipe(ofType(
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
    mergeMap((command: CommonAction) => this.infoService.sendCommand(command, command.competitionId)));

  @Effect({dispatch: false})
  createCompetition$: Observable<Action> = this.actions$.pipe(ofType(allActions.CREATE_COMPETITION_COMMAND),
    tap(command => this.infoService.sendCreateCompetitionCommand(command).subscribe()));


  @Effect()
  competitionSelected$: Observable<Action> = this.actions$.pipe(ofType(COMPETITION_SELECTED),
    map((action: CommonAction) => competitionMiscActions.loadCompetitionProperties(action.competitionId)));

  loadMyCategories$: Observable<Action> = createEffect(() => this.actions$.pipe(
      ofType(LOAD_CATEGORIES_COMMAND),
      mergeMap((action: CommonAction) => {
        return this.infoService.getCategories(action.payload).pipe(map(payload => {
          const categories = (payload || []) as any[];
          return eventManagerCategoriesLoaded(action.payload, categories);
        }), catchError(error => observableOf(errorEvent(error))));
      })));

  loadSelectedEventSchedule$: Observable<Action> = createEffect(() => this.actions$.pipe(
      ofType(COMPETITION_SELECTED),
      mergeMap((action: CommonAction) => {
        return this.infoService.getSchedule(action.competitionId).pipe(map(payload => {
          const schedule = (payload || {}) as Schedule;
          return eventManagerScheduleLoaded(action.competitionId, schedule);
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

}
