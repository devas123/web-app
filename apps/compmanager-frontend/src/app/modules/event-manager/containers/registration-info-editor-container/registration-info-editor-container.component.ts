import {Component, OnDestroy, OnInit} from '@angular/core';
import {AppState, getSelectedEventId} from '../../../../reducers/global-reducers';
import {select, Store} from '@ngrx/store';
import {combineLatest, Observable, of} from 'rxjs';
import {
  eventManagerGetSelectedEventAvailableRegistrationGroups,
  eventManagerGetSelectedEventCategories,
  eventManagerGetSelectedEventName,
  eventManagerGetSelectedEventRegistrationInfo,
  eventManagerGetSelectedEventTimeZone
} from '../../redux/event-manager-reducers';
import {
  eventManagerAddRegistrationGroup, eventManagerAddRegistrationGroupToRegistrationPeriod,
  eventManagerAddRegistrationPeriod,
  eventManagerDeleteRegistrationGroup,
  eventManagerDeleteRegistrationPeriod,
  eventManagerLoadRegistrationInfo,
  eventManagerUpdateRegistrationInfo
} from '../../redux/event-manager-actions';
import {ActivatedRoute, Router} from '@angular/router';
import {filter, map, startWith, switchMap, take} from 'rxjs/operators';
import {
  CompetitionManagerModuleRouterEntryComponent,
  ComponentCommonMetadataProvider
} from '../../../../commons/directives/common-classes';
import {SuiModalService} from '@frontend-nx/ng2-semantic-ui';
import {
  AddGroupModal,
  IAddRegistrationGroupResult
} from '../../components/registration-info-editor/add-group-form.component';
import {
  AddPeriodModal,
  IAddRegistrationPeriodResult
} from '../../components/registration-info-editor/add-registration-period-form.component';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {MenuService} from '../../../../components/main-menu/menu.service';
import {HeaderDescription} from '../../../../commons/model/competition.model';
import {objectValues} from "../../../account/utils";
import {CategoryState, RegistrationInfo} from "@frontend-nx/protobuf";

@Component({
  selector: 'app-registration-info-editor-container',
  templateUrl: './registration-info-editor-container.component.html',
  styleUrls: ['./registration-info-editor-container.component.css']
})
export class RegistrationInfoEditorContainerComponent extends CompetitionManagerModuleRouterEntryComponent implements OnInit, OnDestroy {

  registrationInfo$: Observable<RegistrationInfo>;
  competitionId$: Observable<string>;
  timeZone$: Observable<string>;
  selectedRegistrationGroupId$: Observable<string | boolean>;
  hasRegistrationGroupSelected$: Observable<boolean>;
  columsNumber$: Observable<number>;
  categories$: Observable<CategoryState[]>;

  constructor(store: Store<AppState>, private route: ActivatedRoute, private router: Router,
              private modalService: SuiModalService, private observer: BreakpointObserver, menuService: MenuService) {
    super(store, <ComponentCommonMetadataProvider>{
      header: store.pipe(select(eventManagerGetSelectedEventName), filter(name => !!name),
        map(name => (<HeaderDescription>{
          header: 'Registration Info',
          subheader: name
        }))),
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
        },
        {
          name: 'Clear',
          action: () => this.clearRegistrationInfo()
        }
      ]
    }, menuService);
    this.columsNumber$ = observer.observe([Breakpoints.Handset, Breakpoints.Small]).pipe(
      map(b => b.matches ? 1 : 3)
    );
    this.selectedRegistrationGroupId$ = route.queryParams.pipe(
      switchMap(params => of(params['group'])),
      startWith(false)
    );
    this.hasRegistrationGroupSelected$ = this.selectedRegistrationGroupId$.pipe(map(val => !!val))
    this.registrationInfo$ = store.select(eventManagerGetSelectedEventRegistrationInfo);
    this.competitionId$ = store.select(getSelectedEventId);
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
        this.modalService.open(new AddGroupModal({
          periodId,
          competitionId,
          existingGroups: objectValues(groups).filter(gr => !periodRegistrationGroups || (periodRegistrationGroups.indexOf(gr.id) < 0)),
          haveDefaultGroup: !!objectValues(groups).find(g => g.defaultGroup)
        }))
          .onApprove((result: IAddRegistrationGroupResult) => this.addRegistrationInfoGroups(result))
          .onDeny(_ => {
          });
      })).subscribe();
    }
  }

  public openAddPeriodModal(competitionId, timeZone) {
    this.modalService.open(new AddPeriodModal(competitionId, timeZone))
      .onApprove((result: IAddRegistrationPeriodResult) => this.addRegistrationInfoPeriod(result))
      .onDeny(_ => { /* deny callback */
      });
  }

  addRegistrationInfoGroups(data: IAddRegistrationGroupResult) {
    if (data && data.groups && data.registrationInfoId) {
      if (data.createNew) {
        this.store.dispatch(eventManagerAddRegistrationGroup({
          competitionId: data.competitionId, periodId: data.periodId,
          groups: data.groups.map(gr => ({
            ...gr,
            registrationInfoId: data.registrationInfoId,
            categories: []
          }))
        }));
      } else {
        data.groups.map(gr => eventManagerAddRegistrationGroupToRegistrationPeriod({
          competitionId: data.competitionId,
          periodId: data.periodId,
          groupId: gr.id
        }))
          .forEach(e => this.store.dispatch(e));
      }
    }
  }

  addRegistrationInfoPeriod(data: IAddRegistrationPeriodResult) {
    this.store.dispatch(eventManagerAddRegistrationPeriod({...data}));
  }

  deleteRegistrationInfoGroup(data: { competitionId: string, periodId: string, groupId: string }) {
    this.store.dispatch(eventManagerDeleteRegistrationGroup({...data}));
  }

  deleteRegistrationInfoPeriod(data: { competitionId: string, periodId: string }) {
    this.store.dispatch(eventManagerDeleteRegistrationPeriod({...data}));
  }

  selectRegistrationGroup(groupId: string) {
    if (groupId) {
      this.router.navigate(['.'], {
        queryParams: {group: groupId},
        queryParamsHandling: 'merge',
        relativeTo: this.route
      }).catch(reason => console.error('Navigation failed: ' + JSON.stringify(reason)));
    }
  }

  ngOnInit() {
    this.competitionId$.pipe(filter(id => !!id), take(1), map(id => eventManagerLoadRegistrationInfo({competitionId: id}))).subscribe(this.store);
  }

  ngOnDestroy(): void {
    super.ngOnDestroy();
  }

  registrationInfoUpdated(registrationInfo: RegistrationInfo, goback?: boolean) {
    this.store.dispatch(eventManagerUpdateRegistrationInfo({registrationInfo, competitionId: registrationInfo.id}));
    if (goback) {
      this.goBack();
    }
  }

  private clearRegistrationInfo() {
    this.competitionId$.pipe(
      filter(id => !!id),
      take(1),
      map(competitionId => eventManagerUpdateRegistrationInfo({
        registrationInfo: <RegistrationInfo>{
          id: competitionId,
          registrationGroups: {},
          registrationOpen: false,
          registrationPeriods: {}
        },
        competitionId
      }))).subscribe(this.store);
  }
}
