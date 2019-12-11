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
import {BreadCrumbItem, HeaderDescription} from '../../redux/event-manager-reducers';
import {MenuService} from '../../../../components/main-menu/menu.service';
import {dashboardFightScheduleChanged, IDashboardFightScheduleChangedPayload} from '../../redux/dashboard-actions';

@Component({
  templateUrl: './mats-overview-container.component.html',
  styleUrls: ['./mats-overview-container.component.css']
})
export class MatsOverviewContainerComponent extends EventManagerRouterEntryComponent implements OnInit {
  selectedPeriod$: Observable<DashboardPeriod>;
  selectedPeriodMats$: Observable<Mat[]>;

  constructor(private location: Location, private router: Router, private route: ActivatedRoute, store: Store<AppState>, menuService: MenuService) {
    super(store, <ComponentCommonMetadataProvider>{
      header: store.pipe(select(dashboardGetSelectedPeriod), filter(p => !!p),
        map(per => <HeaderDescription>{
          header: `Period ${per.name}`,
          subheader: 'Mats overview'
        })),
      menu: [
        {
          name: 'Return',
          action: () => this.navigateBack()
        }
      ]
    }, menuService);
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

  sendFightScheduleChanged($event: IDashboardFightScheduleChangedPayload) {
    this.store.dispatch(dashboardFightScheduleChanged($event));
  }
}
