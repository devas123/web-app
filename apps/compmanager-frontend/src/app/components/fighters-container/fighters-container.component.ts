import {filter, map, take} from 'rxjs/operators';
import {Component, OnDestroy} from '@angular/core';
import {combineLatest, Observable, Subscription} from 'rxjs';
import {select, Store} from '@ngrx/store';
import {ActivatedRoute} from '@angular/router';
import {AppState, getSelectedEventId} from '../../reducers/global-reducers';
import {eventManagerGetSelectedEventCompetitorsPageNumber, eventManagerGetSelectedEventCompetitorsPageSize} from '../../modules/event-manager/redux/event-manager-reducers';
import {eventManagerCategorySelected, eventManagerCategoryUnselected, eventManagerCompetitionFightersPageChanged} from '../../modules/event-manager/redux/event-manager-actions';

@Component({
  selector: 'app-fighters-container',
  template: `
    <router-outlet></router-outlet>`,
  styleUrls: ['./fighters-container.component.css']
})
export class FightersContainerComponent implements  OnDestroy {

  pageSize$: Observable<number>;

  pageNumber$: Observable<number>;

  subs = new Subscription();

  constructor(private store: Store<AppState>, private route: ActivatedRoute) {
    this.pageSize$ = this.store.pipe(select(eventManagerGetSelectedEventCompetitorsPageSize), filter(size => !!size));
    this.pageNumber$ = this.store.pipe(select(eventManagerGetSelectedEventCompetitorsPageNumber), filter(number => !!number));
    const eventId$ = this.store.pipe(
      select(getSelectedEventId),
      filter(id => !!id));
    const eventAndCategoryId$ = combineLatest([eventId$, this.route.queryParams.pipe(map(params => params['categoryId']))]);
    this.subs.add(eventAndCategoryId$.pipe(map(([competitionId, routeCategoryId]) => {
      if (routeCategoryId) {
        return eventManagerCategorySelected(competitionId, routeCategoryId);
      } else {
        return eventManagerCategoryUnselected(competitionId);
      }
    }), filter(e => !!e)).subscribe(store));
    this.subs.add(eventAndCategoryId$.pipe(
      map(([competitionId, categoryId]) => {
        if (competitionId) {
          return eventManagerCompetitionFightersPageChanged(competitionId, categoryId, 1);
        }
      })
    ).subscribe(store));
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
    this.store.pipe(select(getSelectedEventId), take(1), map(id => eventManagerCategoryUnselected(id))).subscribe(this.store);
  }

}
