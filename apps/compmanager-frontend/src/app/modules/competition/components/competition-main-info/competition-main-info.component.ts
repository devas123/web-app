import {ChangeDetectionStrategy, Component} from '@angular/core';
import {
  AppState,
  getSelectedEventProperties,
} from '../../../../reducers/global-reducers';
import {Observable} from 'rxjs';
import {select, Store} from '@ngrx/store';
import {
  eventManagerGetSelectedEventCategories,
  eventManagerGetSelectedEventRegistrationPeriods,
  eventManagerGetSelectedEventTimeZone
} from '../../../event-manager/redux/event-manager-reducers';
import {ActivatedRoute, ChildActivationEnd, NavigationEnd, Router} from '@angular/router';
import {filter, map, startWith} from 'rxjs/operators';
import {CategoryDescriptor, CompetitionProperties} from "@frontend-nx/protobuf";
import {RegistrationPeriodCollection} from "../../../../commons/model/competition.model";

@Component({
    selector: 'competition-main-info',
    templateUrl: './competition-main-info.component.html',
    styleUrls: ['./competition-main-info.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CompetitionMainInfoComponent  {

    menu: { name: string, link: string }[] = [
        {
            name: 'Description',
            link: 'info',
        },
        {name: 'Categories', link: 'categories'},
        {name: 'Participants', link: 'participants'},
        {name: 'Brackets', link: 'brackets'},
        {name: 'Schedule', link: 'schedule'}];

    properties$: Observable<CompetitionProperties>;
    registrationPeriod$: Observable<RegistrationPeriodCollection>;
    timezone$: Observable<string>;
    categories$: Observable<CategoryDescriptor[]>;
    url$: Observable<string>;

    constructor(private store: Store<AppState>, private router: Router, private route: ActivatedRoute) {
        this.properties$ = store.pipe(select(getSelectedEventProperties));
        this.categories$ = store.pipe(select(eventManagerGetSelectedEventCategories));
        this.timezone$ = store.pipe(select(eventManagerGetSelectedEventTimeZone));
        this.registrationPeriod$ = store.pipe(select(eventManagerGetSelectedEventRegistrationPeriods));
        this.url$ = this.router.events.pipe(filter(e => e instanceof NavigationEnd || e instanceof ChildActivationEnd), map((e: NavigationEnd | ChildActivationEnd) => {
            if (e instanceof NavigationEnd) {
                return e.urlAfterRedirects;
            } else {
                const ev = e as any;
                return (ev && ev.snapshot && ev.snapshot._routerState && ev.snapshot._routerState.url) || '';
            }
        }), startWith(this.router.routerState.snapshot.url));
    }
}
