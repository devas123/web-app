import {catchError, map, switchMap} from 'rxjs/operators';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Injectable} from '@angular/core';
import {of} from 'rxjs';
import {RegistrationService} from '../../service/registration.service';
import * as competitorsActions from '../actions/competitors';
import * as fightsActions from '../actions/fights';

@Injectable()
export class CompetitorsEffects {
  @Effect()
  addCompetitor$ = this.actions$.pipe(
    ofType(competitorsActions.ADD_COMPETITOR),
    switchMap((action: any) => {
      const competitor = action.payload;
      return this.registrationService
        .registerCompetitor(competitor, action.competitionId)
        .pipe(
          map(() => ({type: competitorsActions.COMPETITOR_ADDED, payload: competitor, competitionId: action.competitionId})),
          catchError(error => of(competitorsActions.competitorsError(error, action.competitionId)))
        );
    }));

  @Effect()
  removeCompetitor$ = this.actions$.pipe(
    ofType(competitorsActions.REMOVE_COMPETITOR),
    switchMap((action: any) => {
      const {email} = action.payload;
      return this.registrationService
        .removeCompetitor(email, action.competitionId)
        .pipe(
          map(() => ({type: competitorsActions.COMPETITOR_REMOVED, payload: email, competitionId: action.competitionId})),
          catchError(error => of(competitorsActions.competitorsError(error, action.competitionId)))
        );
    }));

  @Effect()
  updateCompetitor$ = this.actions$.pipe(
    ofType(competitorsActions.UPDATE_COMPETITOR),
    switchMap((action: any) => {
      const competitor = action.payload;
      return this.registrationService
        .updateCompetitor(competitor, action.competitionId)
        .pipe(
          map(() => ({type: competitorsActions.COMPETITOR_UPDATED, payload: competitor, competitionId: action.competitionId})),
          catchError(error => of(competitorsActions.competitorsError(error, action.competitionId)))
        );
    }));

  constructor(private actions$: Actions,
              private registrationService: RegistrationService) {
  }
}

@Injectable()
export class FightsEffects {
  @Effect()
  generateBrackets$ = this.actions$.pipe(
    ofType(fightsActions.GENERATE_BRACKETS_ALL),
    switchMap((action: any) => {
      const competitor = action.payload;
      return this.registrationService
        .registerCompetitor(competitor, action.competitionId)
        .pipe(
          map(() => ({type: fightsActions.BRACKETS_GENERATED_ALL, payload: competitor, competitionId: action.competitionId})),
          catchError(error => of({type: fightsActions.FIGHTS_ERROR, payload: error, competitionId: action.competitionId}))
        );
    }));

  constructor(private actions$: Actions,
              private registrationService: RegistrationService) {
  }
}
