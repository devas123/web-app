import {catchError, map, switchMap} from 'rxjs/operators';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Injectable} from '@angular/core';
import {of} from 'rxjs';
import {RegistrationService} from '../../service/registration.service';
import * as competitorsActions from '../actions/competitors';

@Injectable()
export class CompetitorsEffects {
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

  constructor(private actions$: Actions,
              private registrationService: RegistrationService) {
  }
}
