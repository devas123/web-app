import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {ActivatedRoute, Router} from '@angular/router';
import {AppState} from '../../../../reducers';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {
  dashboardGetSelectedPeriod,
  dashboardGetSelectedPeriodMats,
  DashboardPeriod,
  Mat
} from '../../redux/dashboard-reducers';

@Component({
  templateUrl: './mats-overview-container.component.html',
  styleUrls: ['./mats-overview-container.component.css']
})
export class MatsOverviewContainerComponent implements OnInit {
  selectedPeriod$: Observable<DashboardPeriod>;
  selectedPeriodMats$: Observable<Mat[]>;

  constructor(private location: Location, private router: Router, private route: ActivatedRoute, private store: Store<AppState>) {
    this.selectedPeriodMats$ = this.store.pipe(select(dashboardGetSelectedPeriodMats));
    this.selectedPeriod$ = this.store.pipe(select(dashboardGetSelectedPeriod));
  }

  navigateBack() {
    this.location.back();
  }

  ngOnInit() {
  }

  navigateToMat(matId: string) {
    this.router.navigate([btoa(matId)], {relativeTo: this.route});
  }

  navigateToScoreboard(matId: string) {
    this.router.navigate([btoa(matId), 'scoreboard'], {relativeTo: this.route});
  }

}
