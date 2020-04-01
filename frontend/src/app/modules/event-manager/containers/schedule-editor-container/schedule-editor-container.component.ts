import {filter, map, startWith, take, tap} from 'rxjs/operators';
import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {AppState, getSelectedEventId, Schedule} from '../../../../reducers/global-reducers';
import {select, Store} from '@ngrx/store';
import {Subscription} from 'rxjs';
import {eventManagerGetSelectedEventName} from '../../redux/event-manager-reducers';
import {HeaderDescription, Period, ScheduleRequirement} from '../../../../commons/model/competition.model';
import {eventManagerDropScheduleCommand, eventManagerGenerateSchedule, eventManagerPeriodAdded, eventManagerPeriodRemoved, schedulePeriodsUpdated} from '../../redux/event-manager-actions';
import {ComponentCommonMetadataProvider, EventManagerRouterEntryComponent} from '../event-manager-container/common-classes';
import {MenuService} from '../../../../components/main-menu/menu.service';
import {ActivatedRoute, Router} from '@angular/router';
import {CommonScheduleInfoContainerService} from '../../../../commons/classes/common-schedule-info-container.service';

@Component({
  selector: 'app-schedule-editor-container',
  templateUrl: './schedule-editor-container.component.html',
  styleUrls: ['./schedule-editor-container.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ScheduleEditorContainerComponent extends EventManagerRouterEntryComponent implements OnInit, OnDestroy {
  showEditor = false;
  subs = new Subscription();

  constructor(store: Store<AppState>, menuService: MenuService, private router: Router, private route: ActivatedRoute, public scheduleInfo: CommonScheduleInfoContainerService, private cd: ChangeDetectorRef) {
    super(store, <ComponentCommonMetadataProvider>{
      header: store.pipe(select(eventManagerGetSelectedEventName), filter(name => !!name),
        map(name => (<HeaderDescription>{
          header: 'Schedule',
          subheader: name
        }))),
      menu: [
        {
          name: 'Return',
          action: () => this.goBack()
        },
        {
          name: 'Toggle editor',
          action: () => this.toggleSchedulePropertiesEditor()
        }
      ]
    }, menuService);
    this.showEditor = false;
    setTimeout(() =>
      this.subs.add(this.scheduleInfo.scheduleEmpty$.pipe(take(1), startWith(true), tap(console.log)).subscribe(s => {
        this.showEditor = s;
        this.cd.markForCheck();
      }))
    );
  }

  toggleSchedulePropertiesEditor() {
    this.showEditor = !this.showEditor;
    this.cd.markForCheck();
  }

  goToCategoryEditor(categoryId: string) {
    this.router.navigate(['..', 'categories', categoryId], {
      relativeTo: this.route
    }).catch(error => console.error('Navigation failed', error));
  }


  ngOnInit() {
  }

  goBack() {
    this.router.navigate(['..'], {relativeTo: this.route}).catch(console.error);
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
    super.ngOnDestroy();
  }

  addPeriod({period, mats}) {
    this.scheduleInfo.sendCommandFromCompetitionId(competitionId => eventManagerPeriodAdded(competitionId, period, mats));
  }

  removePeriod(periodId: string) {
    this.subs.add(this.store.pipe(select(getSelectedEventId), map(id => eventManagerPeriodRemoved(id, periodId))).subscribe(this.store));
  }


  sendGenerateSchedule({competitionId, periods}) {

    this.store.dispatch(eventManagerGenerateSchedule(competitionId, periods));
  }

  sendDropSchedule(competitionId: string) {
    this.store.dispatch(eventManagerDropScheduleCommand(competitionId));
  }

  updatePeriods(event: { periods: Period[]; undispatchedRequirements: ScheduleRequirement[] }) {
    this.store.dispatch(schedulePeriodsUpdated(event));
  }
}
