
import {filter, map} from 'rxjs/operators';
import {Component, OnDestroy, OnInit} from '@angular/core';
import {AppState} from '../../../../reducers';
import {Store} from '@ngrx/store';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs';
import {dashboardMatSelected, dashboardMatUnselected} from '../../redux/dashboard-actions';

@Component({
  selector: 'app-mat-management-container',
  template: `<router-outlet></router-outlet>`,
  styleUrls: ['./mat-management-container.component.css']
})
export class MatManagementContainerComponent implements OnInit, OnDestroy {


  private subs = new Subscription();

  constructor(private router: Router, private store: Store<AppState>, private route: ActivatedRoute) {
    this.subs.add(this.route.params.pipe(
      map(p => p['matId']),
      filter(matId => matId && matId.length > 0),
      map(matId => dashboardMatSelected(matId))).subscribe(this.store));
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    this.store.dispatch(dashboardMatUnselected);
    this.subs.unsubscribe();
  }

}
