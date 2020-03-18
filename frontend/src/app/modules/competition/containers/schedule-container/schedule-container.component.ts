import {Component, OnInit} from '@angular/core';
import {AppState, eventManagerGetSelectedEventSchedule, getSelectedEventId, Schedule} from '../../../../reducers/global-reducers';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {Category, Period} from '../../../../commons/model/competition.model';
import {eventManagerGetSelectedEventCategories, eventManagerGetSelectedEventTimeZone, getSelectedEventPeriods} from '../../../event-manager/redux/event-manager-reducers';

@Component({
  selector: 'app-schedule-editor-container',
  template: `
    <div class="ui basic segment margins_container">
      <app-schedule-display
        [timeZone]="timeZone$ | async"
        [competitionId]="competitionId$ | async"
        [schedulePeriods]="periods$ | async"
        [schedule]="schedule$ | async"
        [categories]="categories$ | async"
        [showDuration]="false">
      </app-schedule-display>
    </div>`,
  styleUrls: ['./schedule-container.component.scss']
})
export class ScheduleContainerComponent implements OnInit {
  schedule$: Observable<Schedule>;
  categories$: Observable<Category[]>;
  timeZone$: Observable<string>;
  competitionId$: Observable<string>;
  periods$: Observable<Period[]>;

  constructor(private store: Store<AppState>) {
    this.schedule$ = store.pipe(select(eventManagerGetSelectedEventSchedule));
    this.categories$ = store.pipe(select(eventManagerGetSelectedEventCategories));
    this.timeZone$ = store.pipe(select(eventManagerGetSelectedEventTimeZone));
    this.competitionId$ = this.store.pipe(select(getSelectedEventId));
    this.periods$ = this.store.pipe(select(getSelectedEventPeriods));
  }

  ngOnInit() {
  }
}
