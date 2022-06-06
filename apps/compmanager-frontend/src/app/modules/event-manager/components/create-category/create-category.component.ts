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
  eventManagerGetSelectedEventName,
  eventManagerGetSelectedEventPreviewCategories
} from '../../redux/event-manager-reducers';
import {AdjacencyList, AdjacencyListEntry, HeaderDescription} from '../../../../commons/model/competition.model';
import {
  CompetitionManagerModuleRouterEntryComponent,
  ComponentCommonMetadataProvider
} from '../../../../commons/directives/common-classes';
import {MenuService} from '../../../../components/main-menu/menu.service';
import {
  eventManagerCategoriesCleared,
  eventManagerCategoryRestrictionAdded,
  eventManagerCategoryRestrictionGroupAdded,
  eventManagerCategoryRestrictionGroupRemoved,
  eventManagerCategoryRestrictionLinked,
  eventManagerCategoryRestrictionRemoved,
  eventManagerCategoryRestrictionRootAdded,
  eventManagerCategoryRestrictionUnlinked,
  eventManagerLoadCategoryRestrictionsCommand,
  generateCategoriesCommand,
  generatePreviewCategoriesCommand
} from '../../redux/event-manager-actions';
import {SuiModalService} from '@frontend-nx/ng2-semantic-ui';
import {
  AddCategoryRestrictionModal,
  IAddCategoryRestrictionResult
} from '../category-constructor/add-category-restriction-form.component';
import {generateUuid, uniqueFilter} from '../../../account/utils';
import {Observable} from 'rxjs';
import {CommonBracketsInfoContainer} from '../../../../commons/classes/common-brackets-container.component';
import {CategoryDescriptor, CategoryRestriction, CategoryState} from "@frontend-nx/protobuf";

@Component({
  selector: 'app-create-category',
  template: `
    <section class="ui segments">
      <section class="ui segment">
        <app-category-constructor
          [competitionId]="infoProvicer.competitionId$ | async"
          [restrictions]="restrictions$ | async"
          [adjacencyLists]="adjacencyLists$ | async"
          [options]="defaultRestrictionsNames$ | async"
          [restrictionNames]="restrictionNames$ | async"
          (restrictionGroupRemoved)="removeRestrictionGroup($event)"
          (restrictionGroupAdded)="addRestrictionGroup($event)"
          (rootAdded)="rootAdded($event)"
          (restrictionLinked)="linkRestriction($event)"
          (restrictionUnLinked)="unlinkRestriction($event)"
          (removeRestrictionClicked)="removeRestriction($event)"
          (generateCategories)="generateCategories($event)"
          (generatePreviewCategories)="generatePreviewCategories($event)"
          (clearPreviewCategories)="clearPreviewCategories()"
          (addRestrictionClicked)="openAddRestrictionModal($event)"
        ></app-category-constructor>
      </section>
      <section class="ui segment">
        <h4>Categories preview</h4>
        <app-category-editor [categories]="previewCategoriesStates$ | async"
                             [detailedView]="false"
                             [competition]="infoProvicer.competition$ | async"></app-category-editor>
      </section>
    </section>`,
  styleUrls: ['./create-category.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateCategoryComponent extends CompetitionManagerModuleRouterEntryComponent implements OnInit {

  defaultRestrictions$: Observable<CategoryRestriction[]>;
  defaultRestrictionsNames$: Observable<string[]>;

  restrictions$: Observable<CategoryRestriction[]>;
  previewCategoriesStates$: Observable<CategoryState[]>;

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
          action: () => this.navigateBack()
        }
      ]
    }, menuService);
    this.adjacencyLists$ = this.store.pipe(select(eventManagerCategoryConstructorAdjacentLists));
    this.restrictionNames$ = this.store.pipe(select(eventManagerCategoryConstructorRestrictionNames));
    this.defaultRestrictions$ = this.store.pipe(select(eventManagerDefaultCategoryRestrictions));
    this.defaultRestrictionsNames$ = this.defaultRestrictions$.pipe(
      map(r => r.map(cr => cr.name).filter(uniqueFilter)),
      tap(console.log)
    );
    this.restrictions$ = this.store.pipe(select(eventManagerCategoryRestrictions));
    this.previewCategoriesStates$ = this.store.pipe(
      select(eventManagerGetSelectedEventPreviewCategories),
      map((descriptors: CategoryDescriptor[]) => descriptors.map(d => (<CategoryState>{
        id: d.id,
        category: d,
      })))
    );
  }

  private navigateBack() {
    return this.router.navigate(['..'], {relativeTo: this.route}).catch(console.error);
  }

  openAddRestrictionModal(event: { name: string, existing: string[] }) {
    const {name, existing} = event;
    const ex = existing || [];
    this.defaultRestrictions$.pipe(take(1), filter(r => !!r), tap(defaultRestr => {
        this.modalService.open(new AddCategoryRestrictionModal(name,
          defaultRestr.filter(dr => dr.name === name && !ex.includes(dr.restrictionId))))
          .onApprove((result: IAddCategoryRestrictionResult) => {
            result.restrictions.forEach(r => {
              if (!r.restrictionId) {
                r.restrictionId = generateUuid();
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

  sendGenerateCommand(event: { restrictions: CategoryRestriction[]; idTrees: AdjacencyList<string>[]; restrictionNames: string[] },
                      comandBuilder: (competitionId: string, intAdjacencyLists: AdjacencyList<number>[]) => any) {
    if (!_.isEmpty(event)
      && !_.isEmpty(event.restrictions)
      && !_.isEmpty(event.idTrees) && !_.isEmpty(event.restrictionNames)) {
      const ids = event.restrictions.map(r => r.restrictionId);
      const intAdjacencyLists = event.idTrees.map(l => (<AdjacencyList<number>>{
        root: ids.indexOf(l.root),
        vertices: l.vertices?.map(v => (<AdjacencyListEntry<number>>{
          id: ids.indexOf(v.id),
          children: v.children.map(c => ids.indexOf(c))
        }))
      }));
      this.infoProvicer.sendCommandFromCompetitionId(competitionId => comandBuilder(competitionId, intAdjacencyLists));
    }
  }

  generatePreviewCategories(event: { restrictions: CategoryRestriction[]; idTrees: AdjacencyList<string>[]; restrictionNames: string[] }) {
    this.sendGenerateCommand(event, (competitionId, intAdjacencyLists) => generatePreviewCategoriesCommand({
      idTrees: intAdjacencyLists,
      restrictions: event.restrictions,
      restrictionNames: event.restrictionNames,
      competitionId
    }));
  }


  generateCategories(event: { restrictions: CategoryRestriction[]; idTrees: AdjacencyList<string>[]; restrictionNames: string[] }) {
    this.sendGenerateCommand(event, (competitionId, intAdjacencyLists) => generateCategoriesCommand({
      idTrees: intAdjacencyLists,
      restrictions: event.restrictions,
      restrictionNames: event.restrictionNames,
      competitionId,
      successCallback: _ => this.navigateBack()
    }));
  }

  clearPreviewCategories() {
    this.store.dispatch(eventManagerCategoriesCleared());
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
