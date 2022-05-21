import {Component, OnDestroy} from '@angular/core';
import {Router} from '@angular/router';
import {AppState, getSelectedEventId} from '../../../../reducers/global-reducers';
import {select, Store} from '@ngrx/store';
import {Subscription} from 'rxjs';
import {dashboardUnloadState} from '../../redux/dashboard-actions';
import {filter, map} from 'rxjs/operators';
import {loadScheduleCommand} from '../../redux/event-manager-actions';

@Component({
  selector: 'app-dashboard-container',
  template: `
    <router-outlet></router-outlet>`,
  styleUrls: ['./dashboard-container.component.css']
})
export class DashboardContainerComponent implements  OnDestroy {

  subs = new Subscription();

  constructor(private router: Router, private store: Store<AppState>) {
    this.subs.add(
      this.store.pipe(
        select(getSelectedEventId),
        filter((id: any) => id && id.length > 0),
        map((id: string) => loadScheduleCommand({competitionId: id})))
        .subscribe(this.store));
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
    this.store.dispatch(dashboardUnloadState);
  }

}
