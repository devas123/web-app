import {catchError, filter, map, switchMap, withLatestFrom} from 'rxjs/operators';
import {Injectable} from '@angular/core';
import {of} from 'rxjs';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import * as miscActions from '../actions/misc';
import {AppState} from '../reducers/global-reducers';
import {InfoService} from '../service/info.service';
import {EVENT_MANAGER_FIGHTERS_FOR_COMPETITION_PAGE_UPDATED, eventManagerLoadFightersForCompetition} from '../modules/event-manager/redux/event-manager-actions';
import {select, Store} from '@ngrx/store';
import {eventManagerGetSelectedEventCompetitorsPageSize} from '../modules/event-manager/redux/event-manager-reducers';
import {CompetitionProperties} from "../commons/model/competition.model";


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

    changePage$ = createEffect(() => this.actions$.pipe(
        ofType(EVENT_MANAGER_FIGHTERS_FOR_COMPETITION_PAGE_UPDATED),
        withLatestFrom(this.store.pipe(select(eventManagerGetSelectedEventCompetitorsPageSize))),
        map(([action, pageSize]) => {
            const {competitionId, categoryId, payload} = action;
            return eventManagerLoadFightersForCompetition(competitionId, categoryId, payload, pageSize);
        })));

    constructor(private actions$: Actions,
                private infoService: InfoService,
                private store: Store<AppState>) {
    }
}
