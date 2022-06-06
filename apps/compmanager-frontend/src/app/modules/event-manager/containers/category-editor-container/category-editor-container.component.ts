import {Component, TemplateRef, ViewChild} from '@angular/core';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {
  AppState,
  getSelectedEventId,
  getSelectedEventProperties
} from '../../../../reducers/global-reducers';
import {select, Store} from '@ngrx/store';
import {
  eventManagerGetSelectedEventName,
  getSelectedEventSelectedCategoryState
} from '../../redux/event-manager-reducers';
import {
  HeaderDescription
} from '../../../../commons/model/competition.model';
import {ActivatedRoute, Router} from '@angular/router';
import {
  deleteCategory,
  eventManagerAddCategory,
  eventManagerSetCategoryRegistrationStatus
} from '../../redux/event-manager-actions';
import {
  BasicCompetitionInfoContainer,
  ComponentCommonMetadataProvider
} from '../../../../commons/directives/common-classes';
import {filter, map, take, withLatestFrom} from 'rxjs/operators';
import {MenuService} from '../../../../components/main-menu/menu.service';
import {CategoryDescriptor, CategoryState, CompetitionProperties} from "@frontend-nx/protobuf";

@Component({
  selector: 'app-category-editor-container',
  template: `
    <ng-template #search>
      <div class="ui icon search input sidemenu">
        <i class="search icon"></i>
        <input type="text" placeholder="Search categories..." (change)="searchString$.next($event.target.value)">
      </div>
    </ng-template>
    <app-category-editor [categories]="categories$ | async"
                         [searchString]="searchString$ | async"
                         [competition]="competition$ | async"
                         (categoryEditorClicked)="navigateToCategoryEditor($event)"
                         (createCustomCategoryClicked)="addCategory()"
                         (deleteCategoryEvent)="doDeleteCategory($event)"
                         (generateRandomFightersEvent)="generateRandomFighters($event)"
                         (registrationStatusToggled)="toggleRegistrationStatus($event)"></app-category-editor>`
})
export class CategoryEditorContainerComponent extends BasicCompetitionInfoContainer {

  competition$: Observable<CompetitionProperties>;

  catState$: Observable<CategoryState>;

  searchString$ = new BehaviorSubject<string>(null);

  @ViewChild('search', {static: true})
  search: TemplateRef<any>;


  constructor(store: Store<AppState>, private route: ActivatedRoute, private router: Router, menuService: MenuService) {
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
          name: 'Category constructor',
          action: () => this.addCategory()
        },
        {
          name: 'Search',
          itemDisplayAction: container => this.menuService.createView(container, this.search, {implicit$: this.search})
        }
      ]
    }, menuService);
    this.competition$ = store.pipe(select(getSelectedEventProperties));
    this.catState$ = store.pipe(select(getSelectedEventSelectedCategoryState));
  }

  addSelectedCategories(categoriesToAdd: CategoryDescriptor[], competitionId: string) {
    if (categoriesToAdd && categoriesToAdd.length > 0) {
      this.sendAddDefaultCategoriesCommand(categoriesToAdd.map(category => ({competitionId, category})));
    }
  }

  addCategory() {
    this.router.navigate(['create'], {relativeTo: this.route}).catch(console.error);
  }

  doDeleteCategory({category, competitionId}) {
    this.store.dispatch(deleteCategory({competitionId, categoryId: category.id}));
  }

  sendAddDefaultCategoriesCommand(categories: { competitionId: string, category: CategoryDescriptor }[]) {
    if (categories && categories.length > 0) {
      categories.forEach(cate => this.store.dispatch(eventManagerAddCategory(cate.competitionId, cate.category)));
    }
  }

  generateRandomFighters(event: any) {
    this.store.dispatch(event);
  }

  toggleRegistrationStatus(event: { categoryId: string; newStatus: boolean }) {
    of(event).pipe(withLatestFrom(this.store.pipe(select(getSelectedEventId))), map(([e, competitionId]) => eventManagerSetCategoryRegistrationStatus({
      ...e,
      competitionId
    })), take(1)).subscribe(this.store);
  }

  navigateToCategoryEditor(categoryId: string) {
    this.router.navigate([categoryId], {relativeTo: this.route}).catch(console.log);
  }
}
