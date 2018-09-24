
import {tap, mergeMap, catchError, map} from 'rxjs/operators';




import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Action} from '@ngrx/store';
import {Actions, Effect} from '@ngrx/effects';
import * as allActions from '../actions/actions';
import * as competitionMiscActions from '../modules/competition/actions/misc';
import {InfoService} from '../service/info.service';
import {CommonAction, CompetitionProperties} from '../reducers';
import * as eventManagerActions from '../modules/event-manager/redux/event-manager-actions';
import {EVENT_MANAGER_ADD_COMPETITOR} from '../modules/event-manager/redux/event-manager-actions';
import {EVENT_MANAGER_REMOVE_COMPETITOR} from '../modules/event-manager/redux/event-manager-actions';

@Injectable()
export class Effects {

  constructor(private info: InfoService,
              private actions$: Actions) {
  }

  @Effect()
  getCompetitions$: Observable<Action> = this.actions$.ofType(allActions.LOAD_COMPETITIONS_LIST).pipe(
    mergeMap(() =>
      this.info.getCompetitions(null, 'PUBLISHED').pipe(
        map((payload: CompetitionProperties[]) => {
          return allActions.competitionsLoaded(payload);
        }),
        catchError(err => of(allActions.errorEvent(err.statusText || JSON.stringify(err)))),)
    ));

  @Effect({dispatch: false})
  globalCommands$: Observable<Action> = this.actions$.ofType(
    allActions.CREATE_COMPETITION_COMMAND,
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
    allActions.UNPUBLISH_COMPETITION_COMMAND).pipe(
    tap(command => this.info.sendGlobalCommand(command).subscribe()));



  @Effect()
  competitionSelected$: Observable<Action> = this.actions$.ofType(allActions.COMPETITION_SELECTED).pipe(
    map((action: CommonAction) => competitionMiscActions.loadCompetitionProperties(action.payload)));
}
