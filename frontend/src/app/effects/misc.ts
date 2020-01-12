import {catchError, filter, map, switchMap} from 'rxjs/operators';
import {Injectable} from '@angular/core';
import {of} from 'rxjs';
import {Actions, Effect, ofType} from '@ngrx/effects';
import * as miscActions from '../actions/misc';
import {CompetitionProperties} from '../reducers/global-reducers';
import {InfoService} from '../service/info.service';


@Injectable()
export class MiscEffects {
    @Effect()
    loadCompetitionState$ = this.actions$.pipe(ofType(miscActions.LOAD_COMPETITION_PROPERTIES),
        switchMap((action: any) => {
            const competitionId = action.competitionId;
            return this.infoService.getCompetitionProperties(competitionId).pipe(
                filter(props => !!props),
                map((props: CompetitionProperties) => miscActions.competitionPropertiesLoaded(props)),
                catchError(error => of({type: miscActions.MISC_ERROR, payload: error, competitionId: action.competitionId})));
        }));


    constructor(private actions$: Actions,
                private infoService: InfoService) {
    }
}
