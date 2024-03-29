import {filter, map} from 'rxjs/operators';
import {Component, OnDestroy} from '@angular/core';
import {AppState, getSelectedEventId} from '../../../../reducers/global-reducers';
import {select, Store} from '@ngrx/store';
import {ActivatedRoute, Router} from '@angular/router';
import {combineLatest, Subscription} from 'rxjs';
import {dashboardMatSelected, dashboardMatUnselected} from '../../redux/dashboard-actions';

@Component({
  selector: 'app-mat-management-container',
  template: `
    <router-outlet></router-outlet>`,
  styleUrls: ['./mat-management-container.component.css']
})
export class MatManagementContainerComponent implements  OnDestroy {


  private subs = new Subscription();

  constructor(private router: Router, private store: Store<AppState>, private route: ActivatedRoute) {
    this.subs.add(combineLatest([this.route.params.pipe(map(p => p['matId']),
      filter(matId => matId && matId.length > 0)),
      this.store.pipe(select(getSelectedEventId))]).pipe(
      filter(([matId, competitionId]) => !!matId && !!competitionId),
      map(([matId, competitionId]) => dashboardMatSelected(competitionId, matId))).subscribe(this.store));
  }

  ngOnDestroy(): void {
    this.store.dispatch(dashboardMatUnselected);
    this.subs.unsubscribe();
  }

}
