import {filter, map} from 'rxjs/operators';
import {Component, OnDestroy, OnInit} from '@angular/core';
import {dashboardPeriodSelected, dashboardPeriodUnselected} from '../../redux/dashboard-actions';
import {combineLatest, Subscription} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {select, Store} from '@ngrx/store';
import {AppState} from '../../../../reducers';
import {eventManagerGetSelectedEventId} from '../../redux/event-manager-reducers';

@Component({
  selector: 'app-period-management-container',
  template: `
    <router-outlet></router-outlet>`,
  styleUrls: ['./period-management-container.component.css']
})
export class PeriodManagementContainerComponent implements OnInit, OnDestroy {
  subs = new Subscription();

  constructor(private route: ActivatedRoute, private store: Store<AppState>) {
    this.subs.add(combineLatest(
      this.store.pipe(select(eventManagerGetSelectedEventId), filter(id => !!id)),
      this.route.params.pipe(map(params => params['periodId'])))
      .pipe(
        filter(response => response && response.length === 2 && response[0] != null),
        map(r => dashboardPeriodSelected(r[1], r[0])))
      .subscribe(this.store));
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
    this.store.dispatch(dashboardPeriodUnselected);
  }
}
