import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {BehaviorSubject, combineLatest, Observable, of} from 'rxjs';
import {AppState, CompetitionState, getSelectedEventId, getSelectedEventState} from '../../../../reducers/global-reducers';
import {select, Store} from '@ngrx/store';
import {eventManagerGetSelectedEventDefaultCategories, eventManagerGetSelectedEventName, getSelectedEventSelectedCategoryState} from '../../redux/event-manager-reducers';
import {Category, CategoryState, HeaderDescription} from '../../../../commons/model/competition.model';
import {ActivatedRoute, Router} from '@angular/router';
import {deleteCategory, eventManagerAddCategory, eventManagerSetCategoryRegistrationStatus} from '../../redux/event-manager-actions';
import {BasicCompetitionInfoContainer, ComponentCommonMetadataProvider} from '../event-manager-container/common-classes';
import {filter, map, take, withLatestFrom} from 'rxjs/operators';
import {SuiModalService} from 'ng2-semantic';
import {ISelectCategoriesResult, SelectCategoriesModal} from '../../../../components/category-editor/select-categories-modal.component';
import {MenuService} from '../../../../components/main-menu/menu.service';

@Component({
  selector: 'app-category-editor-container',
  template: `
    <ng-template #search>
      <div class="item">
        <div class="ui icon search input">
          <i class="search icon"></i>
          <input type="text" placeholder="Search categories..." (change)="searchString$.next($event.target.value)">
        </div>
      </div>
    </ng-template>
    <div class="ui container">
      <app-category-editor [categories]="categories$ | async"
                           [searchString]="searchString$ | async"
                           [defaultCategories]="defaultCategories$ | async"
                           [competition]="competition$ | async"
                           (categoryEditorClicked)="navigateToCategoryEditor($event)"
                           (createCustomCategoryClicked)="addCategory()"
                           (addDefaultCategories)="sendAddDefaultCategoriesCommand($event)"
                           (deleteCategoryEvent)="doDeleteCategory($event)"
                           (generateRandomFightersEvent)="generateRandomFighters($event)"
                           (registrationStatusToggled)="toggleRegistrationStatus($event)"></app-category-editor>
    </div> `
})
export class CategoryEditorContainerComponent extends BasicCompetitionInfoContainer implements OnInit {

  competition$: Observable<CompetitionState>;

  defaultCategories$: Observable<Category[]>;

  catState$: Observable<CategoryState>;

  searchString$ = new BehaviorSubject<string>(null);

  @ViewChild('search', {static: true})
  search: TemplateRef<any>;


  constructor(store: Store<AppState>, private route: ActivatedRoute, private router: Router, public modalService: SuiModalService, menuService: MenuService) {
    super(store, <ComponentCommonMetadataProvider>{
      header: store.pipe(select(eventManagerGetSelectedEventName), filter(name => !!name), take(1), map(name => <HeaderDescription>{
        header: 'Categories',
        subheader: name
      })),
      menu: [
        {
          name: 'Return',
          action: () => this.router.navigate(['..'], {relativeTo: this.route})
        },
        {
          name: 'Select categories',
          action: () => this.openModal()
        },
        {
          name: 'Create manually',
          action: () => this.addCategory()
        },
        {
          name: 'Search',
          itemDisplayAction: container => this.menuService.createView(container, this.search, {implicit$: this.search})
        }
      ]
    }, menuService);
    this.competition$ = store.pipe(select(getSelectedEventState));
    this.catState$ = store.pipe(select(getSelectedEventSelectedCategoryState));
    this.defaultCategories$ = store.pipe(select(eventManagerGetSelectedEventDefaultCategories));
  }

  openModal() {
    combineLatest([this.categories$, this.competition$]).pipe(filter(([cats, competition]) => !!cats && !!competition),
      take(1),
      map(([categories, competition]) =>
        this.modalService
          .open(new SelectCategoriesModal(this.defaultCategories$.pipe(map(c => c.filter(cat => {
            return !categories.find(value => cat.id === value.id);
          }))), competition))
          .onApprove((result: ISelectCategoriesResult) => {
            this.addSelectedCategories(result.categoriesToAdd, competition.id);
          }))).subscribe();
  }

  addSelectedCategories(categoriesToAdd: Category[], competitionId: string) {
    if (categoriesToAdd && categoriesToAdd.length > 0) {
      this.sendAddDefaultCategoriesCommand(categoriesToAdd.map(category => ({competitionId, category})));
    }
  }


  ngOnInit() {
  }

  addCategory() {
    this.router.navigate(['create'], {relativeTo: this.route}).catch(console.error);
  }

  doDeleteCategory({category, competitionId}) {
    this.store.dispatch(deleteCategory(competitionId, category.id));
  }

  sendAddDefaultCategoriesCommand(categories: { competitionId: string, category: Category }[]) {
    console.log(categories);
    if (categories && categories.length > 0) {
      categories.forEach(cate => this.store.dispatch(eventManagerAddCategory(cate.competitionId, cate.category)));
    }
  }

  generateRandomFighters(event: any) {
    this.store.dispatch(event);
  }

  toggleRegistrationStatus(event: { categoryId: string; newStatus: boolean }) {
    of(event).pipe(withLatestFrom(this.store.pipe(select(getSelectedEventId))), map(([e, competitionId]) => eventManagerSetCategoryRegistrationStatus({...e, competitionId})), take(1)).subscribe(this.store);
  }

  navigateToCategoryEditor(categoryId: string) {
    this.router.navigate([categoryId], {relativeTo: this.route}).catch(console.log);
  }
}
