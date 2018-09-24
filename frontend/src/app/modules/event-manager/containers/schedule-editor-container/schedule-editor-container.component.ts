
import {map} from 'rxjs/operators';
import {Component, OnDestroy, OnInit} from '@angular/core';
import {AppState, Schedule} from '../../../../reducers';
import {select, Store} from '@ngrx/store';
import {Observable, Subscription} from 'rxjs';
import {
  eventManagerGetSelectedEventCategories, eventManagerGetSelectedEventId,
  eventManagerGetSelectedEventName,
  eventManagerGetSelectedEventSchedule,
  eventManagerGetSelectedEventScheduleProperties,
  PeriodProperties,
  ScheduleProperties
} from '../../redux/event-manager-reducers';
import {Category} from '../../../../commons/model/competition.model';
import {
  eventManagerCategoryMoved, eventManagerDropScheduleCommand, eventManagerGenerateSchedule,
  eventManagerPeriodAdded,
  eventManagerPeriodRemoved
} from '../../redux/event-manager-actions';

@Component({
  selector: 'app-schedule-editor-container',
  templateUrl: './schedule-editor-container.component.html',
  styleUrls: ['./schedule-editor-container.component.css']
})
export class ScheduleEditorContainerComponent implements OnInit, OnDestroy {
  schedule$: Observable<Schedule>;
  scheduleProperties$: Observable<ScheduleProperties>;
  competitionName$: Observable<string>;
  competitionId$: Observable<string>;
  categories$: Observable<Category[]>;

  competitionId: string;
  showEditor = false;

  subs = new Subscription();

  constructor(private store: Store<AppState>) {
    this.schedule$ = store.pipe(select(eventManagerGetSelectedEventSchedule));
    this.scheduleProperties$ = this.store.pipe(select(eventManagerGetSelectedEventScheduleProperties));
    this.competitionName$ = store.pipe(select(eventManagerGetSelectedEventName));
    this.competitionId$ = store.pipe(select(eventManagerGetSelectedEventId));
    this.categories$ = store.pipe(select(eventManagerGetSelectedEventCategories));
    this.subs.add(this.store.pipe(select(eventManagerGetSelectedEventId)).subscribe(id => this.competitionId = id));
  }

  toggleSchedulePropertiesEditor() {
    this.showEditor = !this.showEditor;
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  addPeriod(period: PeriodProperties) {
    this.store.dispatch(eventManagerPeriodAdded(this.competitionId, period));
  }

  removePeriod(periodId: string) {
    this.subs.add(this.store.pipe(select(eventManagerGetSelectedEventId), map(id => eventManagerPeriodRemoved(id, periodId))).subscribe(this.store));
  }

  moveCategory(event: { from: string, to: string, category: Category }) {
    this.subs.add(this.store.pipe(select(eventManagerGetSelectedEventId), map(id => eventManagerCategoryMoved(id, event))).subscribe(this.store));
  }

  sendGenerateSchedule(event: ScheduleProperties) {
    this.store.dispatch(eventManagerGenerateSchedule(event.competitionId, event));
    this.showEditor = false;
  }

  sendDropSchedule(competitionId: string) {
    this.store.dispatch(eventManagerDropScheduleCommand(competitionId));
  }
}
