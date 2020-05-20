import {Component, OnDestroy, OnInit} from '@angular/core';
import {AppState, getSelectedEventId} from '../../../../reducers/global-reducers';
import {select, Store} from '@ngrx/store';
import {eventManagerGetSelectedEventName} from '../../redux/event-manager-reducers';
import {Subscription} from 'rxjs';
import {Location} from '@angular/common';
import {ActivatedRoute, Router} from '@angular/router';
import {dashboardDeleteState, dashboardRemovePeriod} from '../../redux/dashboard-actions';
import {BasicCompetitionInfoContainer, ComponentCommonMetadataProvider} from '../event-manager-container/common-classes';
import {filter, map, take} from 'rxjs/operators';
import {MenuService} from '../../../../components/main-menu/menu.service';
import {Period} from '../../../../commons/model/competition.model';
import {CommonScheduleInfoContainerService} from '../../../../commons/classes/common-schedule-info-container.service';

@Component({
  selector: 'app-periods-management-container',
  templateUrl: './periods-management-container.component.html',
  styleUrls: ['./periods-management-container.component.scss']
})
export class PeriodsManagementContainerComponent extends BasicCompetitionInfoContainer implements OnInit, OnDestroy {

  subs = new Subscription();

  showSchedule = false;

  constructor(store: Store<AppState>, private location: Location, private router: Router, private route: ActivatedRoute, menuService: MenuService,
              public scheduleInfo: CommonScheduleInfoContainerService) {
    super(store, <ComponentCommonMetadataProvider>{
      header: store.pipe(select(eventManagerGetSelectedEventName)).pipe(filter(name => !!name), take(1), map(name => ({
        header: 'Progress dashboard',
        subheader: name
      }))),
      menu: [
        {
          name: 'Return',
          action: () => this.navigateBack()
        },
        {
          name: 'Reset progress',
          action: () => this.sendDeleteDashboardStateCommand()
        }
      ]
    }, menuService);
  }

  getPeriodMatsLength(periodId: string) {
    return this.scheduleInfo.mats$.pipe(map(ms => ms.filter(m => m.periodId === periodId).length));
  }

  navigateBack() {
    this.store.pipe(select(getSelectedEventId), take(1)).subscribe((id) => {
      this.router.navigateByUrl(`/eventmanager/${id}`).catch(console.error);
    });
  }

  navigateToCategory(categoryId: string) {
    return this.router.navigate(['..', '..', 'categories', categoryId], {relativeTo: this.route});
  }

  removePeriod(period: Period) {
    this.scheduleInfo.sendCommandFromCompetitionId(competitionId => dashboardRemovePeriod(competitionId, period.id));
  }

  selectPeriod(periodId: string) {
    this.router.navigate([periodId], {relativeTo: this.route}).catch(r => console.log(`Error selecting period: ${r}`));
  }

  sendDeleteDashboardStateCommand() {
    this.scheduleInfo.sendCommandFromCompetitionId(competitionId => dashboardDeleteState(competitionId));
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
    super.ngOnDestroy();
  }

}
