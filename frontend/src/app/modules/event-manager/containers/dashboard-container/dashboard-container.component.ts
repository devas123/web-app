import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AppState} from '../../../../reducers';
import {select, Store} from '@ngrx/store';
import {Subscription} from 'rxjs';
import {eventManagerGetSelectedEventId} from '../../redux/event-manager-reducers';
import {dashboardUnloadState, loadDashboardState} from '../../redux/dashboard-actions';
import {filter, map} from 'rxjs/operators';

@Component({
  selector: 'app-dashboard-container',
  template: `
    <router-outlet></router-outlet>`,
  styleUrls: ['./dashboard-container.component.css']
})
export class DashboardContainerComponent implements OnInit, OnDestroy {

  subs = new Subscription();

  constructor(private router: Router, private store: Store<AppState>) {
    this.subs.add(
      this.store.pipe(
        select(eventManagerGetSelectedEventId),
        filter((id: any) => id && id.length > 0),
        map((id: string) => loadDashboardState(id)))
        .subscribe(this.store));
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
    this.store.dispatch(dashboardUnloadState);
  }

}
