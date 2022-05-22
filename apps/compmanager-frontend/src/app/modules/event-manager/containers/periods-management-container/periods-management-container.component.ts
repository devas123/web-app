import {Component, OnDestroy} from '@angular/core';
import {AppState, getSelectedEventId} from '../../../../reducers/global-reducers';
import {select, Store} from '@ngrx/store';
import {eventManagerGetSelectedEventName} from '../../redux/event-manager-reducers';
import {Subscription} from 'rxjs';
import {Location} from '@angular/common';
import {ActivatedRoute, Router} from '@angular/router';
import {BasicCompetitionInfoContainer, ComponentCommonMetadataProvider} from '../event-manager-container/common-classes';
import {filter, map, take} from 'rxjs/operators';
import {MenuService} from '../../../../components/main-menu/menu.service';
import {CommonScheduleInfoContainerService} from '../../../../commons/classes/common-schedule-info-container.service';

@Component({
  selector: 'app-periods-management-container',
  templateUrl: './periods-management-container.component.html',
  styleUrls: ['./periods-management-container.component.scss']
})
export class PeriodsManagementContainerComponent extends BasicCompetitionInfoContainer implements  OnDestroy {

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


  selectPeriod(periodId: string) {
    this.router.navigate([periodId], {relativeTo: this.route}).catch(r => console.log(`Error selecting period: ${r}`));
  }


  ngOnDestroy() {
    this.subs.unsubscribe();
    super.ngOnDestroy();
  }

}
