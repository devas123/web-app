import {Component, OnDestroy, OnInit} from '@angular/core';
import {AppState, RegistrationGroup, RegistrationInfo, RegistrationPeriod} from '../../../../reducers';
import {select, Store} from '@ngrx/store';
import {Observable, Subscription} from 'rxjs';
import {
  BreadCrumbItem,
  eventManagerGetSelectedEventId,
  eventManagerGetSelectedEventName,
  eventManagerGetSelectedEventRegistrationInfo,
  eventManagerGetSelectedEventTimeZone,
  HeaderDescription
} from '../../redux/event-manager-reducers';
import {eventManagerAddRegistrationGroup, eventManagerAddRegistrationPeriod, eventManagerDeleteRegistrationGroup, eventManagerDeleteRegistrationPeriod} from '../../redux/event-manager-actions';
import {ActivatedRoute, Router} from '@angular/router';
import {filter, map, startWith} from 'rxjs/operators';
import {ComponentCommonMetadataProvider, EventManagerRouterEntryComponent} from '../event-manager-container/common-classes';

@Component({
  selector: 'app-registration-info-editor-container',
  templateUrl: './registration-info-editor-container.component.html',
  styleUrls: ['./registration-info-editor-container.component.css']
})
export class RegistrationInfoEditorContainerComponent extends EventManagerRouterEntryComponent implements OnInit, OnDestroy {

  registrationInfo$: Observable<RegistrationInfo>;
  competitionId$: Observable<string>;
  timeZone$: Observable<string>;
  selectedRegistrationGroup$: Observable<string | boolean>;

  subs = new Subscription();

  constructor(store: Store<AppState>, private route: ActivatedRoute, private router: Router) {
    super(store, <ComponentCommonMetadataProvider>{
      header: store.pipe(select(eventManagerGetSelectedEventName), filter(name => !!name),
        map(name => (<HeaderDescription>{
          header: 'Registration Info',
          subheader: name
        }))),
      breadCrumbItem: <BreadCrumbItem>{
        name: 'Reg. Info',
        level: 2
      },
      menu: [
        {
          name: 'Add period',
        }
      ]
    });
    this.selectedRegistrationGroup$ = route.queryParams.pipe(
      map(params => params['group']),
      startWith(false)
    );
    this.registrationInfo$ = store.select(eventManagerGetSelectedEventRegistrationInfo);
    this.competitionId$ = store.select(eventManagerGetSelectedEventId);
    this.timeZone$ = store.select(eventManagerGetSelectedEventTimeZone);
  }

  addRegistrationInfoGroup(data: { competitionId: string, periodId: string, group: RegistrationGroup }) {
    this.store.dispatch(eventManagerAddRegistrationGroup(data.competitionId, data.periodId, data.group));
  }

  addRegistrationInfoPeriod(data: { competitionId: string, period: RegistrationPeriod }) {
    this.store.dispatch(eventManagerAddRegistrationPeriod(data.competitionId, data.period));
  }

  deleteRegistrationInfoGroup(data: { competitionId: string, periodId: string, groupId: string }) {
    this.store.dispatch(eventManagerDeleteRegistrationGroup(data.competitionId, data.periodId, data.groupId));
  }

  deleteRegistrationInfoPeriod(data: { competitionId: string, periodId: string }) {
    const {competitionId, periodId} = data;
    this.store.dispatch(eventManagerDeleteRegistrationPeriod(competitionId, periodId));
  }

  selectRegistrationGroup(groupId: string) {
    this.route.queryParams.pipe(
      map(params => {
        return {...params, group: groupId};
      }),
      map(queryParams => {
        this.router.navigate(['.'], {queryParams, relativeTo: this.route}).catch(reason => console.error('Navigation failed: ' + JSON.stringify(reason)));
      } )
    ).subscribe();
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    super.ngOnDestroy();
    this.subs.unsubscribe();
  }

}
