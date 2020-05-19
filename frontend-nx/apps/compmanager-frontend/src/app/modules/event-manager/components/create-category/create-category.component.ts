import {filter, map, take, tap} from 'rxjs/operators';
import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {AppState} from '../../../../reducers/global-reducers';
import {select, Store} from '@ngrx/store';
import {ActivatedRoute, Router} from '@angular/router';
import * as _ from 'lodash';
import {
  eventManagerCategoryConstructorAdjacentLists,
  eventManagerCategoryConstructorRestrictionNames,
  eventManagerCategoryRestrictions,
  eventManagerDefaultCategoryRestrictions,
  eventManagerGetSelectedEventName
} from '../../redux/event-manager-reducers';
import {
  AdjacencyList,
  AdjacencyListEntry,
  CategoryRestriction,
  HeaderDescription
} from '../../../../commons/model/competition.model';
import {
  ComponentCommonMetadataProvider,
  EventManagerRouterEntryComponent
} from '../../containers/event-manager-container/common-classes';
import {MenuService} from '../../../../components/main-menu/menu.service';
import {
  eventManagerCategoryRestrictionAdded,
  eventManagerCategoryRestrictionGroupAdded,
  eventManagerCategoryRestrictionGroupRemoved,
  eventManagerCategoryRestrictionLinked,
  eventManagerCategoryRestrictionRemoved,
  eventManagerCategoryRestrictionRootAdded,
  eventManagerCategoryRestrictionUnlinked,
  eventManagerLoadCategoryRestrictionsCommand,
  generateCategoriesCommand
} from '../../redux/event-manager-actions';
import {SuiModalService} from '@frontend-nx/ng2-semantic-ui';
import {
  AddCategoryRestrictionModal,
  IAddCategoryRestrictionResult
} from '../category-constructor/add-category-restriction-form.component';
import {generateUuid} from '../../../account/utils';
import {Observable} from 'rxjs';
import {CommonBracketsInfoContainer} from '../../../../commons/classes/common-brackets-container.component';

@Component({
  selector: 'app-create-category',
  template: `
    <app-category-constructor
      [competitionId]="infoProvicer.competitionId$ | async"
      [restrictions]="restrictions$ | async"
      [adjacencyLists]="adjacencyLists$ | async"
      [restrictionNames]="restrictionNames$ | async"
      (restrictionGroupRemoved)="removeRestrictionGroup($event)"
      (restrictionGroupAdded)="addRestrictionGroup($event)"
      (rootAdded)="rootAdded($event)"
      (restrictionLinked)="linkRestriction($event)"
      (restrictionUnLinked)="unlinkRestriction($event)"
      (removeRestrictionClicked)="removeRestriction($event)"
      (generateCategories)="generateCategories($event)"
      (addRestrictionClicked)="openAddRestrictionModal($event)"
    ></app-category-constructor>`,
  styleUrls: ['./create-category.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateCategoryComponent extends EventManagerRouterEntryComponent implements OnInit {

  defaultRestrictions$: Observable<CategoryRestriction[]>;

  restrictions$: Observable<CategoryRestriction[]>;

  adjacencyLists$: Observable<AdjacencyList<string>[]>;
  restrictionNames$: Observable<string[]>;


  constructor(store: Store<AppState>, private router: Router, private route: ActivatedRoute,
              public infoProvicer: CommonBracketsInfoContainer,
              menuService: MenuService, private modalService: SuiModalService) {
    super(store, <ComponentCommonMetadataProvider>{
      header: store.pipe(select(eventManagerGetSelectedEventName), filter(name => !!name), take(1), map(name => <HeaderDescription>{
        header: 'Create category',
        subheader: name
      })),
      menu: [
        {
          name: 'Return',
          action: () => this.router.navigate(['..'], {relativeTo: this.route})
        }
      ]
    }, menuService);
    this.adjacencyLists$ = this.store.pipe(select(eventManagerCategoryConstructorAdjacentLists));
    this.restrictionNames$ = this.store.pipe(select(eventManagerCategoryConstructorRestrictionNames));
    this.defaultRestrictions$ = this.store.pipe(select(eventManagerDefaultCategoryRestrictions));
    this.restrictions$ = this.store.pipe(select(eventManagerCategoryRestrictions));
  }

  openAddRestrictionModal(event: { name: string, existing: string[] }) {
    const {name, existing} = event;
    const ex = existing || [];
    this.defaultRestrictions$.pipe(tap(console.log), take(1), filter(r => !!r), tap(defaultRestr => {
        this.modalService.open(new AddCategoryRestrictionModal(name,
          defaultRestr.filter(dr => dr.name === name && !ex.includes(dr.id))))
          .onApprove((result: IAddCategoryRestrictionResult) => {
            result.restrictions.forEach(r => {
              if (!r.id) {
                r.id = generateUuid();
              }
              this.store.dispatch(eventManagerCategoryRestrictionAdded({payload: r}));
            });
          });
      }
    )).subscribe();
  }

  ngOnInit() {
    this.store.dispatch(eventManagerLoadCategoryRestrictionsCommand());
  }

  generateCategories(event: { restrictions: CategoryRestriction[]; idTrees: AdjacencyList<string>[]; restrictionNames: string[] }) {
    if (!_.isEmpty(event)
      && !_.isEmpty(event.restrictions)
      && !_.isEmpty(event.idTrees) && !_.isEmpty(event.restrictionNames)) {
      const ids = event.restrictions.map(r => r.id);
      const intAdjacencyLists = event.idTrees.map(l => (<AdjacencyList<number>>{
        root: ids.indexOf(l.root),
        vertices: l.vertices?.map(v => (<AdjacencyListEntry<number>>{
          id: ids.indexOf(v.id),
          children: v.children.map(c => ids.indexOf(c))
        }))
      }));
      this.infoProvicer.sendCommandFromCompetitionId(competitionId => generateCategoriesCommand({
        idTrees: intAdjacencyLists,
        restrictions: event.restrictions,
        restrictionNames: event.restrictionNames,
        competitionId
      }));
    }
  }

  linkRestriction(event: { restrictionId: string; root: string; parent: string[] }) {
    this.store.dispatch(eventManagerCategoryRestrictionLinked(event));
  }


  unlinkRestriction(event: { restrictionId: string; root: string; parent: string }) {
    this.store.dispatch(eventManagerCategoryRestrictionUnlinked(event));
  }

  removeRestriction(restrictionId: string) {
    this.store.dispatch(eventManagerCategoryRestrictionRemoved({restrictionId}));
  }

  rootAdded(restrictionId: string) {
    this.store.dispatch(eventManagerCategoryRestrictionRootAdded({root: restrictionId}));
  }

  addRestrictionGroup(event: string) {
    this.store.dispatch(eventManagerCategoryRestrictionGroupAdded({name: event}));
  }

  removeRestrictionGroup(event: string) {
    this.store.dispatch(eventManagerCategoryRestrictionGroupRemoved({name: event}));
  }
}
