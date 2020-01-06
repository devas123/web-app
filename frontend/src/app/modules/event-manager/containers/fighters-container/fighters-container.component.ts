import {filter, map, take} from 'rxjs/operators';
import {Component, OnDestroy, OnInit} from '@angular/core';
import {combineLatest, Observable, Subscription} from 'rxjs';
import {eventManagerGetSelectedEventCompetitorsPageNumber, eventManagerGetSelectedEventCompetitorsPageSize, eventManagerGetSelectedEventId} from '../../redux/event-manager-reducers';
import {eventManagerCategorySelected, eventManagerCategoryUnselected, eventManagerCompetitionFightersPageChanged} from '../../redux/event-manager-actions';
import {AppState} from '../../../../reducers';
import {select, Store} from '@ngrx/store';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-fighters-container',
  template: `
    <router-outlet></router-outlet>`,
  styleUrls: ['./fighters-container.component.css']
})
export class FightersContainerComponent implements OnInit, OnDestroy {

  pageSize$: Observable<number>;

  pageNumber$: Observable<number>;

  subs = new Subscription();

  constructor(private store: Store<AppState>, private route: ActivatedRoute) {
    this.pageSize$ = this.store.pipe(select(eventManagerGetSelectedEventCompetitorsPageSize), filter(size => !!size));
    this.pageNumber$ = this.store.pipe(select(eventManagerGetSelectedEventCompetitorsPageNumber), filter(number => !!number));
    const eventId$ = this.store.pipe(
      select(eventManagerGetSelectedEventId),
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

  ngOnInit() {
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
    this.store.pipe(select(eventManagerGetSelectedEventId), take(1), map(id => eventManagerCategoryUnselected(id))).subscribe(this.store);
  }

}
