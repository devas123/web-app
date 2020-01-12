
import {map, switchMap, filter, catchError} from 'rxjs/operators';
import {Injectable} from '@angular/core';
import {of, from} from 'rxjs';
import {CompetitionStateService} from '../../service/competition.state.service';
import {HttpAuthService} from '../../../account/service/AuthService';
import {Actions, Effect, ofType} from '@ngrx/effects';
import * as miscActions from '../actions/misc';
import * as fightsActions from '../actions/fights';



import {CompetitionProperties} from '../../../../reducers/global-reducers';
import {InfoService} from '../../../../service/info.service';


@Injectable()
export class MiscEffects {
  @Effect()
  loadCompetitionState$ = this.actions$.pipe(ofType(miscActions.LOAD_COMPETITION_PROPERTIES),
    switchMap((action: any) => {
      const competitionId = action.competitionId;
      return this.infoService.getCompetitionProperties(competitionId).pipe(
        filter(props => !!props),
        map((props: CompetitionProperties) => miscActions.competitionPropertiesLoaded(props)),
        catchError(error => of({type: miscActions.MISC_ERROR, payload: error, competitionId: action.competitionId})), );
    }));

  @Effect({dispatch: false})
  startCompetition$ = this.actions$.pipe(ofType(miscActions.START_COMPETITION), switchMap((action: any) =>
    this.competitionStateService.startCompetition(action.competitionId)));

  @Effect()
  loadEvents$ = this.actions$.pipe(ofType(miscActions.LOAD_EVENTS_SINCE), switchMap((action: any) => {
    const competitionId = action.competitionId;
    const {eventNumber, categoryId} = action.payload;
    return this.competitionStateService
      .getEventsSince(categoryId, eventNumber, competitionId).pipe(
      switchMap((events: any[]) => from(events)),
      catchError(error => of({type: miscActions.MISC_ERROR, payload: error, competitionId: action.competitionId})));
  }));

  @Effect()
  refreshMenu$ = this.actions$.pipe(ofType(fightsActions.BRACKETS_SAVED, fightsActions.BRACKETS_DROPPED),
    switchMap((action: any) => of(miscActions.configureMenu(action.competitionId, this.authService.getUserRole(action.competitionId)))));

  constructor(private actions$: Actions,
              private competitionStateService: CompetitionStateService,
              private infoService: InfoService,
              private authService: HttpAuthService) {
  }
}
