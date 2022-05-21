import {Component, TemplateRef, ViewChild} from '@angular/core';
import {BehaviorSubject, Observable, Subscription} from 'rxjs';
import {AppState, getSelectedEventId} from '../../../../reducers/global-reducers';
import {select, Store} from '@ngrx/store';

import {ActivatedRoute, QueryParamsHandling, Router} from '@angular/router';
import {
    eventManagerGetSelectedEventCategories,
    eventManagerGetSelectedEventCompetitors,
    eventManagerGetSelectedEventCompetitorsPageNumber,
    eventManagerGetSelectedEventCompetitorsPageSize,
    eventManagerGetSelectedEventCompetitorsTotal,
    eventManagerGetSelectedEventName,
    eventManagerGetSelectedEventSelectedCategory
} from '../../../event-manager/redux/event-manager-reducers';
import {AddFighterComponent} from '../../../event-manager/components/add-fighter/add-fighter.component';
import {eventManagerCompetitionFightersPageChanged} from '../../../event-manager/redux/event-manager-actions';
import {CategoryDescriptor, Competitor} from "@frontend-nx/protobuf";

@Component({
    selector: 'app-fighters-display-container',
    templateUrl: './fighters-display-container.component.html',
    styleUrls: ['./fighters-display-container.component.scss']
})
export class FightersDisplayContainerComponent  {
    competitionName$: Observable<string>;
    competitionId$: Observable<string>;
    competitors$: Observable<Competitor[]>;
    totalCompetitors$: Observable<number>;
    pageSize$: Observable<number>;
    pageNumber$: Observable<number>;
    categories$: Observable<CategoryDescriptor[]>;
    category$: Observable<CategoryDescriptor>;
    @ViewChild('categorySelect', {static: true})
    categorySelect: TemplateRef<any>;
    subs = new Subscription();

    @ViewChild('fighterSearch', {static: true})
    fighterSearch: TemplateRef<any>;

    searchString$ = new BehaviorSubject<string>(null);


    constructor(private store: Store<AppState>, private router: Router, private route: ActivatedRoute) {
        this.competitionId$ = this.store.pipe(select(getSelectedEventId));
        this.category$ = this.store.pipe(select(eventManagerGetSelectedEventSelectedCategory));
        this.categories$ = this.store.pipe(select(eventManagerGetSelectedEventCategories));
        this.competitionName$ = this.store.pipe(select(eventManagerGetSelectedEventName));
        this.totalCompetitors$ = this.store.pipe(select(eventManagerGetSelectedEventCompetitorsTotal));
        this.pageSize$ = this.store.pipe(select(eventManagerGetSelectedEventCompetitorsPageSize));
        this.pageNumber$ = this.store.pipe(select(eventManagerGetSelectedEventCompetitorsPageNumber));
        this.competitors$ = this.store.pipe(select(eventManagerGetSelectedEventCompetitors));
        this.subs.add(this.searchString$.subscribe(str => this.setSearchString(str)));
    }

    optionsFilter = (options: CategoryDescriptor[], filterword: string) => options.filter(cat => cat.id && AddFighterComponent.displayCategory(cat).toLowerCase().includes(filterword.toLowerCase()));
    formatter = (option: CategoryDescriptor) => AddFighterComponent.displayCategory(option);


    changePage(info: any) {
        const {competitionId, pageNumber, categoryId} = info;
        this.store.dispatch(eventManagerCompetitionFightersPageChanged(competitionId, categoryId, pageNumber));
    }

    private addQueryParam(paramName: string, paramValue: string, queryParamsHandling?: QueryParamsHandling) {
        const queryParams = {};
        queryParams[paramName] = paramValue;
        this.router.navigate(['.'], {relativeTo: this.route, queryParams, queryParamsHandling: queryParamsHandling || ''}).catch(console.log);
    }


    setCategoryId(category: CategoryDescriptor) {
        if (category) {
            this.addQueryParam('categoryId', category.id);
        } else {
            this.addQueryParam('categoryId', undefined);
        }
    }

    setSearchString(searchString) {
        this.addQueryParam('query', searchString, 'merge');
    }

    navigateToUserProfilePage(competitor: Competitor) {
        if (competitor && competitor.userId) {
            console.log(`Navigation to user profile ${competitor.userId}`);
        }
    }
}
