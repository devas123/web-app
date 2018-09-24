import {catchError, map, switchMap} from 'rxjs/operators';
import {Injectable} from '@angular/core';
import {of} from 'rxjs';
import {CompetitionStateService} from '../service/competition.state.service';
import {Actions, Effect, ofType} from '@ngrx/effects';
import * as templateActions from '../actions/template';
import * as miscActions from '../actions/misc';

@Injectable()
export class TemplateEffects {
  @Effect()
  saveTemplate$ = this.actions$.pipe(
    ofType(templateActions.SAVE_TEMPLATE),
    switchMap((action: any) => {
      let {competitionId, payload} = action;
      return this.competitionStateService
        .saveTemplate(competitionId, payload)
        .pipe(
          map(() => templateActions.templateUpdated(competitionId, payload)),
          catchError(error => of(miscActions.miscError(competitionId, error)))
        )
    }));

  @Effect()
  loadTemplate$ = this.actions$.pipe(
    ofType(templateActions.LOAD_TEMPLATE),
    switchMap((action: any) => {
      let {competitionId} = action;
      return this.competitionStateService
        .loadTemplate(competitionId)
        .pipe(
          map((payload) => templateActions.templateUpdated(competitionId, payload)),
          catchError(error => of(miscActions.miscError(competitionId, error)))
        )
    }));

  constructor(private actions$: Actions,
              private competitionStateService: CompetitionStateService) {
  }
}
