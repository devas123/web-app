import {Component, OnDestroy, OnInit} from '@angular/core';
import {
  AppState,
  CompetitionProperties,
  eventManagerGetSelectedEventSchedule,
  getSelectedEventMats,
  getSelectedEventProperties,
  getSelectedEventSelectedPeriod,
  MatDescription,
  Schedule
} from '../../../../reducers/global-reducers';
import {select, Store} from '@ngrx/store';
import {eventManagerGetSelectedEventName, getSelectedEventPeriods} from '../../redux/event-manager-reducers';
import {Observable, Subscription} from 'rxjs';
import {Location} from '@angular/common';
import {ActivatedRoute, Router} from '@angular/router';
import {dashboardDeleteState, dashboardInitState, dashboardRemovePeriod} from '../../redux/dashboard-actions';
import {BasicCompetitionInfoContainer, ComponentCommonMetadataProvider} from '../event-manager-container/common-classes';
import {filter, map, take} from 'rxjs/operators';
import {MenuService} from '../../../../components/main-menu/menu.service';
import {Period} from '../../../../commons/model/competition.model';

@Component({
  selector: 'app-periods-management-container',
  templateUrl: './periods-management-container.component.html',
  styleUrls: ['./periods-management-container.component.scss']
})
export class PeriodsManagementContainerComponent extends BasicCompetitionInfoContainer implements OnInit, OnDestroy {

  mats$: Observable<MatDescription[]>;
  periods$: Observable<Period[]>;
  selectedCompetitionProperties$: Observable<CompetitionProperties>;
  selectedCompetitionSchedule$: Observable<Schedule>;
  selectedCompetitionScheduleProperties$: Observable<Period[]>;
  selectedPeriod$: Observable<Period>;
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
    this.periods$ = store.pipe(select(getSelectedEventPeriods));
    this.selectedCompetitionProperties$ = store.pipe(select(getSelectedEventProperties));
    this.selectedCompetitionSchedule$ = store.pipe(select(eventManagerGetSelectedEventSchedule));
    this.selectedPeriod$ = this.store.pipe(select(getSelectedEventSelectedPeriod));
    this.mats$ = this.store.pipe(select(getSelectedEventMats));
    this.subs.add(this.selectedCompetitionProperties$.subscribe(props => this.competitionProperties = props));
  }

  getPeriodMatsLength(periodId: string) {
    return this.mats$.pipe(map(ms => ms.filter(m => m.periodId === periodId).length));
  }

  navigateBack() {
    this.location.back();
  }

  navigateToCategory(categoryId: string) {
    return this.router.navigate(['..', '..', 'categories', categoryId], {relativeTo: this.route});
  }

  removePeriod(period: Period) {
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
