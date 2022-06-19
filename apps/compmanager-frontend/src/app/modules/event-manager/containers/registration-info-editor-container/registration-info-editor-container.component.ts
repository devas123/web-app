import {Component, OnDestroy, OnInit} from '@angular/core';
import {AppState, getSelectedEventId} from '../../../../reducers/global-reducers';
import {select, Store} from '@ngrx/store';
import {combineLatest, Observable, of} from 'rxjs';
import {
  eventManagerGetSelectedEventAvailableRegistrationGroups,
  eventManagerGetSelectedEventName,
  eventManagerGetSelectedEventRegistrationInfo,
  eventManagerGetSelectedEventTimeZone
} from '../../redux/event-manager-reducers';
import {eventManagerLoadRegistrationInfo, eventManagerUpdateRegistrationInfo} from '../../redux/event-manager-actions';
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
import produce from "immer";

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
          action: () => combineLatest([this.competitionId$, this.timeZone$, this.registrationInfo$]).pipe(
            filter(([competitionId, timezone, registrationInfo]) => !!competitionId && !!timezone && !!registrationInfo),
            take(1)).subscribe(([competitionId, timezone, registrationInfo]) => this.openAddPeriodModal(competitionId, timezone, registrationInfo))
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
    this.categories$ = menuService.dataProviderService.categoriesInterest$;
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

  public openGroupModal({competitionId, periodId, periodRegistrationGroups, registrationInfo}) {
    if (periodId) {
      this.store.pipe(select(eventManagerGetSelectedEventAvailableRegistrationGroups), take(1), map(groups => {
        this.modalService.open(new AddGroupModal({
          periodId,
          competitionId,
          existingGroups: objectValues(groups).filter(gr => !periodRegistrationGroups || (periodRegistrationGroups.indexOf(gr.id) < 0)),
          haveDefaultGroup: !!objectValues(groups).find(g => g.defaultGroup),
          registrationInfo: registrationInfo
        }))
          .onApprove((result: IAddRegistrationGroupResult) => this.addRegistrationInfoGroups(result))
          .onDeny(_ => {
          });
      })).subscribe();
    }
  }

  public openAddPeriodModal(competitionId, timeZone, registrationInfo) {
    this.modalService.open(new AddPeriodModal(competitionId, timeZone, registrationInfo))
      .onApprove((result: IAddRegistrationPeriodResult) => this.addRegistrationInfoPeriod(result))
      .onDeny(_ => { /* deny callback */
      });
  }

  addRegistrationInfoGroups(data: IAddRegistrationGroupResult) {
    if (data && data.groups && data.registrationInfoId) {
      const {groups, periodId, registrationInfo, createNew, competitionId} = data;

      if (createNew) {
        const updatedRegInfo = produce(registrationInfo, draft => {
          groups.map(gr => ({
            ...gr,
            registrationInfoId: data.registrationInfoId,
            categories: []
          })).forEach(group => {
            draft.registrationGroups[group.id] = group;
            if (draft.registrationPeriods) {
              draft.registrationPeriods[periodId]?.registrationGroupIds?.push(group.id);
            }
          })
        })
        this.store.dispatch(eventManagerUpdateRegistrationInfo({
          registrationInfo: updatedRegInfo,
          competitionId
        }));
      } else {
        const updatedRegInfo = produce(registrationInfo, draft => {
          groups.forEach(gr => draft.registrationPeriods[periodId].registrationGroupIds.push(gr.id));
        });
        this.store.dispatch(eventManagerUpdateRegistrationInfo({
          registrationInfo: updatedRegInfo,
          competitionId
        }));
      }
    }
  }

  addRegistrationInfoPeriod(data: IAddRegistrationPeriodResult) {
    const {competitionId, period, registrationInfo} = data;
    const updatedRegInfo = produce(registrationInfo, draft => {
      draft.registrationPeriods[period.id] = period;
    });
    this.store.dispatch(eventManagerUpdateRegistrationInfo({
      registrationInfo: updatedRegInfo,
      competitionId
    }));
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
