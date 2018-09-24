import {filter, map} from 'rxjs/operators';
import {Component, OnDestroy, OnInit} from '@angular/core';
import {combineLatest, Observable, Subscription} from 'rxjs';
import {
  eventManagerGetSelectedEventCompetitorsPageNumber,
  eventManagerGetSelectedEventCompetitorsPageSize,
  eventManagerGetSelectedEventId
} from '../../redux/event-manager-reducers';
import {eventManagerLoadFightersForCompetition} from '../../redux/event-manager-actions';
import {AppState} from '../../../../reducers';
import {select, Store} from '@ngrx/store';

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

  constructor(private store: Store<AppState>) {
    this.pageSize$ = this.store.pipe(select(eventManagerGetSelectedEventCompetitorsPageSize), filter(size => size && size != null));
    this.pageNumber$ = this.store.pipe(select(eventManagerGetSelectedEventCompetitorsPageNumber), filter(number => number && number != null));
    const eventId$ = this.store.pipe(
      select(eventManagerGetSelectedEventId),
      filter(id => id && id != null));
    this.subs.add(combineLatest(
      eventId$,
      this.pageNumber$,
      this.pageSize$).pipe(map(value => {
      return eventManagerLoadFightersForCompetition(value[0], value[1], value[2]);
    })).subscribe(store));
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

}
