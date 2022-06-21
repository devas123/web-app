import {ChangeDetectorRef, Component} from '@angular/core';
import {Location} from '@angular/common';
import {ActivatedRoute, Router} from '@angular/router';
import {
  AppState,
  dashboardGetSelectedPeriodMats,
  getSelectedEventId,
  getSelectedEventSelectedPeriod
} from '../../../../reducers/global-reducers';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {
  CompetitionManagerModuleRouterEntryComponent,
  ComponentCommonMetadataProvider
} from '../../../../commons/directives/common-classes';
import {filter, map, take, tap} from 'rxjs/operators';
import {MenuService} from '../../../../components/main-menu/menu.service';
import {dashboardFightOrderChangeCommand, IDashboardFightScheduleChangedPayload} from '../../redux/dashboard-actions';
import {HeaderDescription} from '../../../../commons/model/competition.model';
import {CommonBracketsInfoContainer} from '../../../../commons/classes/common-brackets-container.component';
import {FightDescription, MatState, Period} from "@frontend-nx/protobuf";

@Component({
  templateUrl: './mats-overview-container.component.html',
  styleUrls: ['./mats-overview-container.component.css']
})
export class MatsOverviewContainerComponent extends CompetitionManagerModuleRouterEntryComponent {
  selectedPeriod$: Observable<Period>;
  selectedPeriodMats$: Observable<MatState[]>;
  competitionId$: Observable<string>;
  fights$: Observable<FightDescription[]>;

  constructor(private location: Location, private router: Router, private route: ActivatedRoute, store: Store<AppState>, private cd: ChangeDetectorRef,
              public info: CommonBracketsInfoContainer, menuService: MenuService) {
    super(store, <ComponentCommonMetadataProvider>{
      header: store.pipe(select(getSelectedEventSelectedPeriod), filter(p => !!p), tap(console.log), take(1),
        map(per => <HeaderDescription>{
          header: `Period ${per.name}`,
          subheader: 'Areas overview'
        })),
      menu: [
        {
          name: 'Return',
          action: () => this.navigateBack()
        }
      ]
    }, menuService);
    this.competitionId$ = info.competitionId$;
    this.selectedPeriodMats$ = this.store.pipe(select(dashboardGetSelectedPeriodMats));
    this.selectedPeriod$ = this.store.pipe(select(getSelectedEventSelectedPeriod));
    this.fights$ = menuService.selectors.fights$;
  }

  navigateBack() {
    this.store.pipe(select(getSelectedEventId), take(1)).subscribe((id) => {
      this.router.navigateByUrl(`/eventmanager/${id}/dashboard`).catch(console.error);
    });
  }

  navigateToMat(matId: string) {
    this.router.navigate([matId], {relativeTo: this.route}).catch(error => console.error(error));
  }

  sendFightScheduleChanged($event: IDashboardFightScheduleChangedPayload) {
    this.store.dispatch(dashboardFightOrderChangeCommand($event));
  }
}
