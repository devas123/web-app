import {Component, OnDestroy, OnInit} from '@angular/core';
import {AppState, RegistrationInfo} from '../../../../reducers';
import {select, Store} from '@ngrx/store';
import {combineLatest, Observable, of} from 'rxjs';
import {
  BreadCrumbItem, eventManagerGetSelectedEventAvailableRegistrationGroups, eventManagerGetSelectedEventCategories,
  eventManagerGetSelectedEventId,
  eventManagerGetSelectedEventName,
  eventManagerGetSelectedEventRegistrationInfo,
  eventManagerGetSelectedEventTimeZone,
  HeaderDescription
} from '../../redux/event-manager-reducers';
import {
  eventManagerAddRegistrationGroups,
  eventManagerAddRegistrationPeriod,
  eventManagerDeleteRegistrationGroup,
  eventManagerDeleteRegistrationPeriod,
  eventManagerRegistrationInfoUpdated
} from '../../redux/event-manager-actions';
import {ActivatedRoute, Router} from '@angular/router';
import {filter, map, startWith, switchMap, take} from 'rxjs/operators';
import {ComponentCommonMetadataProvider, EventManagerRouterEntryComponent} from '../event-manager-container/common-classes';
import {SuiModalService} from 'ng2-semantic';
import {AddGroupModal, IAddGroupResult} from '../../components/registration-info-editor/add-group-form.component';
import {AddPeriodModal, IAddPeriodResult} from '../../components/registration-info-editor/add-period-form.component';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {MenuService} from '../../../../components/main-menu/menu.service';
import {Category} from '../../../../commons/model/competition.model';

@Component({
  selector: 'app-registration-info-editor-container',
  templateUrl: './registration-info-editor-container.component.html',
  styleUrls: ['./registration-info-editor-container.component.css']
})
export class RegistrationInfoEditorContainerComponent extends EventManagerRouterEntryComponent implements OnInit, OnDestroy {

  registrationInfo$: Observable<RegistrationInfo>;
  competitionId$: Observable<string>;
  timeZone$: Observable<string>;
  selectedRegistrationGroupId$: Observable<string | boolean>;
  columsNumber$: Observable<number>;
  categories$: Observable<Category[]>;

  constructor(store: Store<AppState>, private route: ActivatedRoute, private router: Router,
              private modalService: SuiModalService, private observer: BreakpointObserver, menuService: MenuService) {
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
          name: 'Return',
          action: () => this.goBack()
        },
        {
          name: 'Add period',
          action: () => combineLatest([this.competitionId$, this.timeZone$]).pipe(
            filter(([competitionId, timezone]) => !!competitionId && !!timezone),
            take(1)).subscribe(([competitionId, timezone]) => this.openAddPeriodModal(competitionId, timezone))
        }
      ]
    }, menuService);
    this.columsNumber$ = observer.observe([Breakpoints.Handset, Breakpoints.Small]).pipe(
      map(b => b.matches ? 1 : 2)
    );
    this.selectedRegistrationGroupId$ = route.queryParams.pipe(
      switchMap(params => of(params['group'])),
      startWith(false)
    );
    this.registrationInfo$ = store.select(eventManagerGetSelectedEventRegistrationInfo);
    this.competitionId$ = store.select(eventManagerGetSelectedEventId);
    this.timeZone$ = store.select(eventManagerGetSelectedEventTimeZone);
    this.categories$ = store.select(eventManagerGetSelectedEventCategories);
  }

  public goBack() {
    const url = this.router.url;
    if (url.indexOf('?') > 0) {
      this.router.navigate(['.'], {queryParams: {}, relativeTo: this.route})
        .catch(error => console.error(error));
    } else {
      this.router.navigate(['..'], {relativeTo: this.route}).catch(error => console.error(error));
    }
  }

  public openGroupModal({competitionId, periodId, periodRegistrationGroups}) {
    if (periodId) {
      this.store.pipe(select(eventManagerGetSelectedEventAvailableRegistrationGroups), take(1), map(groups => {
        this.modalService.open(new AddGroupModal(periodId, competitionId, groups.filter(gr => !periodRegistrationGroups || (periodRegistrationGroups.indexOf(gr.id) < 0))))
          .onApprove((result: IAddGroupResult) => this.addRegistrationInfoGroups(result))
          .onDeny(_ => {
          });
      })).subscribe();
    }
  }

  public openAddPeriodModal(competitionId, timeZone) {
    this.modalService.open(new AddPeriodModal(competitionId, timeZone))
      .onApprove((result: IAddPeriodResult) => this.addRegistrationInfoPeriod(result))
      .onDeny(_ => { /* deny callback */
      });
  }

  addRegistrationInfoGroups(data: IAddGroupResult) {
    this.store.dispatch(eventManagerAddRegistrationGroups(data.competitionId, data.periodId, data.groups));
  }

  addRegistrationInfoPeriod(data: IAddPeriodResult) {
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
    if (groupId) {
      this.router.navigate(['.'], {queryParams: {group: groupId}, queryParamsHandling: 'merge', relativeTo: this.route}).catch(reason => console.error('Navigation failed: ' + JSON.stringify(reason)));
    }
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    super.ngOnDestroy();
  }

  registrationInfoUpdated(registrationInfo: RegistrationInfo, goback?: boolean) {
    this.store.dispatch(eventManagerRegistrationInfoUpdated({registrationInfo}));
    if (goback) {
      this.goBack();
    }
  }
}
