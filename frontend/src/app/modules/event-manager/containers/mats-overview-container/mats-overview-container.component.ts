import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {ActivatedRoute, Router} from '@angular/router';
import {AppState, dashboardGetSelectedPeriodMats, getSelectedEventId, getSelectedEventSelectedPeriod, MatDescription} from '../../../../reducers/global-reducers';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {ComponentCommonMetadataProvider, EventManagerRouterEntryComponent} from '../event-manager-container/common-classes';
import {filter, map} from 'rxjs/operators';
import {MenuService} from '../../../../components/main-menu/menu.service';
import {dashboardFightOrderChangeCommand, IDashboardFightScheduleChangedPayload} from '../../redux/dashboard-actions';
import {HeaderDescription, Period} from '../../../../commons/model/competition.model';

@Component({
  templateUrl: './mats-overview-container.component.html',
  styleUrls: ['./mats-overview-container.component.css']
})
export class MatsOverviewContainerComponent extends EventManagerRouterEntryComponent implements OnInit {
  selectedPeriod$: Observable<Period>;
  selectedPeriodMats$: Observable<MatDescription[]>;
  competitionId$: Observable<string>;

  constructor(private location: Location, private router: Router, private route: ActivatedRoute, store: Store<AppState>, menuService: MenuService) {
    super(store, <ComponentCommonMetadataProvider>{
      header: store.pipe(select(getSelectedEventSelectedPeriod), filter(p => !!p),
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
    this.competitionId$ = this.store.pipe(select(getSelectedEventId));
    this.selectedPeriodMats$ = this.store.pipe(select(dashboardGetSelectedPeriodMats));
    this.selectedPeriod$ = this.store.pipe(select(getSelectedEventSelectedPeriod));
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
    this.store.dispatch(dashboardFightOrderChangeCommand($event));
  }
}
