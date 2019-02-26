import {Component, OnDestroy, OnInit} from '@angular/core';
import {AppState, CompetitionProperties, Schedule} from '../../../../reducers';
import {select, Store} from '@ngrx/store';
import {
  eventManagerGetSelectedEvent,
  eventManagerGetSelectedEventCategories,
  eventManagerGetSelectedEventSchedule,
  eventManagerGetSelectedEventScheduleProperties,
  ScheduleProperties
} from '../../redux/event-manager-reducers';
import {Category} from '../../../../commons/model/competition.model';
import {Observable, Subscription} from 'rxjs';
import {Location} from '@angular/common';
import {ActivatedRoute, Router} from '@angular/router';
import {dashboardGetPeriods, dashboardGetSelectedPeriod, DashboardPeriod} from '../../redux/dashboard-reducers';
import {dashboardDeleteState, dashboardInitState, dashboardRemovePeriod} from '../../redux/dashboard-actions';

@Component({
  selector: 'app-periods-management-container',
  templateUrl: './periods-management-container.component.html',
  styleUrls: ['./periods-management-container.component.css']
})
export class PeriodsManagementContainerComponent implements OnInit, OnDestroy {

  periods$: Observable<DashboardPeriod[]>;
  selectedCompetitionProperties$: Observable<CompetitionProperties>;
  selectedCompetitionSchedule$: Observable<Schedule>;
  selectedCompetitionCategories$: Observable<Category[]>;
  selectedCompetitionScheduleProperties$: Observable<ScheduleProperties>;
  selectedPeriod$: Observable<DashboardPeriod>;
  subs = new Subscription();
  competitionProperties: CompetitionProperties;

  showSchedule = false;

  constructor(private store: Store<AppState>, private location: Location, private router: Router, private route: ActivatedRoute) {
    this.periods$ = store.pipe(select(dashboardGetPeriods));
    this.selectedCompetitionProperties$ = store.pipe(select(eventManagerGetSelectedEvent));
    this.selectedCompetitionCategories$ = store.pipe(select(eventManagerGetSelectedEventCategories));
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
    this.router.navigate([btoa(periodId)], {relativeTo: this.route});
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
  }

}
