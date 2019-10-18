import {filter, map} from 'rxjs/operators';
import {Component, OnDestroy, OnInit} from '@angular/core';
import {combineLatest, Observable, Subscription} from 'rxjs';
import {
  BreadCrumbItem,
  eventManagerGetSelectedEventCompetitorsPageNumber,
  eventManagerGetSelectedEventCompetitorsPageSize,
  eventManagerGetSelectedEventId,
  eventManagerGetSelectedEventSelectedCategoryId
} from '../../redux/event-manager-reducers';
import {eventManagerLoadFightersForCompetition} from '../../redux/event-manager-actions';
import {AppState} from '../../../../reducers';
import {select, Store} from '@ngrx/store';
import {ActivatedRoute} from '@angular/router';
import {ComponentCommonMetadataProvider, EventManagerRouterEntryComponent} from '../event-manager-container/common-classes';
import {MenuService} from '../../../../components/main-menu/menu.service';

@Component({
  selector: 'app-fighters-container',
  template: `
      <router-outlet></router-outlet>`,
  styleUrls: ['./fighters-container.component.css']
})
export class FightersContainerComponent implements OnInit, OnDestroy {

  pageSize$: Observable<number>;

  pageNumber$: Observable<number>;
  categoryId$: Observable<string>;

  subs = new Subscription();

  constructor(private store: Store<AppState>, private route: ActivatedRoute) {
    this.categoryId$ = combineLatest([this.route.queryParams.pipe(map(params => params['categoryId'])),
      this.store.pipe(select(eventManagerGetSelectedEventSelectedCategoryId))])
      .pipe(map(([routeCategoryId, stateCategoryId]) => {
        if (routeCategoryId) {
          return routeCategoryId;
        } else {
          return stateCategoryId;
        }
      }));
    this.pageSize$ = this.store.pipe(select(eventManagerGetSelectedEventCompetitorsPageSize), filter(size => size != null));
    this.pageNumber$ = this.store.pipe(select(eventManagerGetSelectedEventCompetitorsPageNumber), filter(number => number != null));
    const eventId$ = this.store.pipe(
      select(eventManagerGetSelectedEventId),
      filter(id => id != null));
    this.subs.add(combineLatest([
      eventId$,
      this.categoryId$,
      this.pageNumber$,
      this.pageSize$]).pipe(map(value => {
      return eventManagerLoadFightersForCompetition(value[0], value[1], value[2], value[3]);
    })).subscribe(store));
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

}
