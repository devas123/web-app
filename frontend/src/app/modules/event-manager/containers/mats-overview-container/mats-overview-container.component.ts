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
import {ComponentCommonMetadataProvider, EventManagerRouterEntryComponent} from '../event-manager-container/common-classes';
import {filter, map} from 'rxjs/operators';
import {BreadCrumbItem} from '../../redux/event-manager-reducers';

@Component({
  templateUrl: './mats-overview-container.component.html',
  styleUrls: ['./mats-overview-container.component.css']
})
export class MatsOverviewContainerComponent extends EventManagerRouterEntryComponent implements OnInit {
  selectedPeriod$: Observable<DashboardPeriod>;
  selectedPeriodMats$: Observable<Mat[]>;

  constructor(private location: Location, private router: Router, private route: ActivatedRoute, store: Store<AppState>) {
    super(store, <ComponentCommonMetadataProvider>{
      breadCrumbItem: store.pipe(select(dashboardGetSelectedPeriod), filter(p => !!p),
        map(per => <BreadCrumbItem>{
          name: per.name,
          level: 3
        })),
      menu: []
    });
    this.selectedPeriodMats$ = this.store.pipe(select(dashboardGetSelectedPeriodMats));
    this.selectedPeriod$ = this.store.pipe(select(dashboardGetSelectedPeriod));
  }

  navigateBack() {
    this.location.back();
  }

  ngOnInit() {
  }

  navigateToMat(matId: string) {
    this.router.navigate([matId], {relativeTo: this.route}).catch(error => console.error(error));
  }
}
