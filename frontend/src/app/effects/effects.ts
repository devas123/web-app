import {catchError, map, mergeMap, tap} from 'rxjs/operators';


import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Action} from '@ngrx/store';
import {Actions, Effect, ofType} from '@ngrx/effects';
import * as allActions from '../actions/actions';
import * as competitionMiscActions from '../modules/competition/redux/actions/misc';
import {InfoService} from '../service/info.service';
import {CommonAction, CompetitionProperties} from '../reducers/global-reducers';
import * as eventManagerActions from '../modules/event-manager/redux/event-manager-actions';

@Injectable()
export class Effects {

  constructor(private info: InfoService,
              private actions$: Actions) {
  }

  @Effect()
  getCompetitions$: Observable<Action> = this.actions$.pipe(ofType(allActions.LOAD_COMPETITIONS_LIST),
    mergeMap(() =>
      this.info.getCompetitions(null, 'PUBLISHED').pipe(
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
    mergeMap((command: CommonAction) => this.info.sendCommand(command, command.competitionId)));

  @Effect({dispatch: false})
  createCompetition$: Observable<Action> = this.actions$.pipe(ofType(allActions.CREATE_COMPETITION_COMMAND),
    tap(command => this.info.sendCreateCompetitionCommand(command).subscribe()));


  @Effect()
  competitionSelected$: Observable<Action> = this.actions$.pipe(ofType(allActions.COMPETITION_SELECTED),
    map((action: CommonAction) => competitionMiscActions.loadCompetitionProperties(action.payload)));
}
