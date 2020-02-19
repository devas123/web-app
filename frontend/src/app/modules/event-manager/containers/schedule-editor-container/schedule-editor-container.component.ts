import {filter, map, startWith, take, tap} from 'rxjs/operators';
import {Component, OnDestroy, OnInit} from '@angular/core';
import {AppState, getSelectedEventId, Schedule} from '../../../../reducers/global-reducers';
import {select, Store} from '@ngrx/store';
import {Observable, Subscription} from 'rxjs';
import {
  eventManagerGetSelectedEventScheduleEmpty,
  eventManagerGetSelectedEventScheduleProperties, selectedEvent,
} from '../../redux/event-manager-reducers';
import {Category, HeaderDescription, PeriodProperties, ScheduleProperties} from '../../../../commons/model/competition.model';
import {eventManagerCategoryMoved, eventManagerDropScheduleCommand, eventManagerGenerateSchedule, eventManagerPeriodAdded, eventManagerPeriodRemoved} from '../../redux/event-manager-actions';
import {ComponentCommonMetadataProvider, EventManagerRouterEntryComponent} from '../event-manager-container/common-classes';
import {MenuService} from '../../../../components/main-menu/menu.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-schedule-editor-container',
  templateUrl: './schedule-editor-container.component.html',
  styleUrls: ['./schedule-editor-container.component.css']
})
export class ScheduleEditorContainerComponent extends EventManagerRouterEntryComponent implements OnInit, OnDestroy {
  schedule$: Observable<Schedule>;
  scheduleProperties$: Observable<ScheduleProperties>;
  categories$: Observable<Category[]>;
  scheduleEmpty$: Observable<boolean>;
  timeZone$: Observable<string>;
  competitionId: string;
  showEditor = false;
  subs = new Subscription();

  constructor(store: Store<AppState>, menuService: MenuService, private router: Router, private route: ActivatedRoute) {
    super(store, <ComponentCommonMetadataProvider>{
      header: store.pipe(select(selectedEvent.name()), filter(name => !!name),
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
    this.schedule$ = store.pipe(select(selectedEvent.schedule()));
    this.scheduleProperties$ = this.store.pipe(select(eventManagerGetSelectedEventScheduleProperties));
    this.scheduleEmpty$ = this.store.pipe(select(eventManagerGetSelectedEventScheduleEmpty));
    this.subs.add(this.store.pipe(select(getSelectedEventId)).subscribe(id => this.competitionId = id));
    setTimeout(() => this.subs.add(this.scheduleEmpty$.pipe(take(1), startWith(true), tap(console.log)).subscribe(s => this.showEditor = s)));
    this.categories$ = store.pipe(select(selectedEvent.categoriesCollection.allCategories()));
    this.timeZone$ = store.pipe(select(selectedEvent.timeZone()));
  }

  toggleSchedulePropertiesEditor() {
    this.showEditor = !this.showEditor;
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

  addPeriod(period: PeriodProperties) {
    this.store.dispatch(eventManagerPeriodAdded(this.competitionId, period));
  }

  removePeriod(periodId: string) {
    this.subs.add(this.store.pipe(select(getSelectedEventId), map(id => eventManagerPeriodRemoved(id, periodId))).subscribe(this.store));
  }

  moveCategory(event: { from: string, to: string, category: Category }) {
    this.subs.add(this.store.pipe(select(getSelectedEventId), map(id => eventManagerCategoryMoved(id, event))).subscribe(this.store));
  }

  sendGenerateSchedule(event: ScheduleProperties) {
    this.store.dispatch(eventManagerGenerateSchedule(event.competitionId, event));
  }

  sendDropSchedule(competitionId: string) {
    this.store.dispatch(eventManagerDropScheduleCommand(competitionId));
  }
}
