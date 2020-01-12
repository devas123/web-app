import {Component, OnDestroy, OnInit} from '@angular/core';
import {AppState, CompetitionProperties, getSelectedEventState, Schedule} from '../../../../reducers/global-reducers';
import {select, Store} from '@ngrx/store';
import {
  eventManagerGetSelectedEventName,
  eventManagerGetSelectedEventSchedule,
  eventManagerGetSelectedEventScheduleProperties,
} from '../../redux/event-manager-reducers';
import {Observable, Subscription} from 'rxjs';
import {Location} from '@angular/common';
import {ActivatedRoute, Router} from '@angular/router';
import {dashboardGetPeriods, dashboardGetSelectedPeriod, DashboardPeriod} from '../../redux/dashboard-reducers';
import {dashboardDeleteState, dashboardInitState, dashboardRemovePeriod} from '../../redux/dashboard-actions';
import {BasicCompetitionInfoContainer, ComponentCommonMetadataProvider} from '../event-manager-container/common-classes';
import {filter, map, take} from 'rxjs/operators';
import {MenuService} from '../../../../components/main-menu/menu.service';
import {ScheduleProperties} from '../../../../commons/model/competition.model';

@Component({
  selector: 'app-periods-management-container',
  templateUrl: './periods-management-container.component.html',
  styleUrls: ['./periods-management-container.component.scss']
})
export class PeriodsManagementContainerComponent extends BasicCompetitionInfoContainer implements OnInit, OnDestroy {

  periods$: Observable<DashboardPeriod[]>;
  selectedCompetitionProperties$: Observable<CompetitionProperties>;
  selectedCompetitionSchedule$: Observable<Schedule>;
  selectedCompetitionScheduleProperties$: Observable<ScheduleProperties>;
  selectedPeriod$: Observable<DashboardPeriod>;
  subs = new Subscription();
  competitionProperties: CompetitionProperties;

  showSchedule = false;

  constructor(store: Store<AppState>, private location: Location, private router: Router, private route: ActivatedRoute, menuService: MenuService) {
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
          name: 'Toggle Schedule',
          action: () => this.toggleSchedule()
        },
        {
          name: 'Auto-dispatch fights',
          action: () => this.sendUseScheduleCommand()
        },
        {
          name: 'Reset progress',
          action: () => this.sendDeleteDashboardStateCommand()
        }
      ]
    }, menuService);
    this.periods$ = store.pipe(select(dashboardGetPeriods));
    this.selectedCompetitionProperties$ = store.pipe(select(getSelectedEventState));
    this.selectedCompetitionSchedule$ = store.pipe(select(eventManagerGetSelectedEventSchedule));
    this.selectedCompetitionScheduleProperties$ = store.pipe(select(eventManagerGetSelectedEventScheduleProperties));
    this.selectedPeriod$ = this.store.pipe(select(dashboardGetSelectedPeriod));
    this.subs.add(this.selectedCompetitionProperties$.subscribe(props => this.competitionProperties = props));
  }

  navigateBack() {
    this.location.back();
  }

  navigateToCategory(categoryId: string) {
    return this.router.navigate(['..', '..', 'categories', categoryId], {relativeTo: this.route});
  }

  removePeriod(period: DashboardPeriod) {
    if (this.competitionProperties) {
      this.store.dispatch(dashboardRemovePeriod(this.competitionProperties.id, period.id));
    }
  }

  selectPeriod(periodId: string) {
    this.router.navigate([periodId], {relativeTo: this.route}).catch(r => console.log(`Error selecting period: ${r}`));
  }

  toggleSchedule() {
    this.showSchedule = !this.showSchedule;
  }

  sendUseScheduleCommand() {
    if (this.competitionProperties && this.competitionProperties.id) {
      this.store.dispatch(dashboardInitState(this.competitionProperties.id));
      this.showSchedule = false;
    }
  }

  sendDeleteDashboardStateCommand() {
    if (this.competitionProperties && this.competitionProperties.id) {
      this.store.dispatch(dashboardDeleteState(this.competitionProperties.id));
      this.showSchedule = true;
    }
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
    super.ngOnDestroy();
  }

}
