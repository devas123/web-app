import {catchError, filter, map, switchMap} from 'rxjs/operators';
import {Injectable} from '@angular/core';
import {of} from 'rxjs';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import * as miscActions from '../actions/misc';
import {AppState} from '../reducers/global-reducers';
import {InfoService} from '../service/info.service';
import {Store} from '@ngrx/store';
import {CompetitionProperties} from "@frontend-nx/protobuf";


@Injectable()
export class MiscEffects {
    loadCompetitionState$ = createEffect(() => this.actions$.pipe(ofType(miscActions.LOAD_COMPETITION_PROPERTIES),
        switchMap((action: any) => {
            const competitionId = action.competitionId;
            return this.infoService.getCompetitionProperties(competitionId).pipe(
                filter(props => !!props),
                map((props: CompetitionProperties) => miscActions.competitionPropertiesLoaded(props)),
                catchError(error => of({type: miscActions.MISC_ERROR, payload: error, competitionId: action.competitionId})));
        })));

    constructor(private actions$: Actions,
                private infoService: InfoService,
                private store: Store<AppState>) {
    }
}
