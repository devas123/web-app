import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {AppState, CompetitionProperties} from '../../../../reducers';
import {select, Store} from '@ngrx/store';
import {BreadCrumbItem, eventManagerGetSelectedEvent, eventManagerGetSelectedEventDefaultCategories, eventManagerGetSelectedEventSelectedCategoryState} from '../../redux/event-manager-reducers';
import {Category, CategoryState} from '../../../../commons/model/competition.model';
import {ActivatedRoute, Router} from '@angular/router';
import {deleteCategory, eventManagerAddCategory} from '../../redux/event-manager-actions';
import {BasicCompetitionInfoContainer, ComponentCommonMetadataProvider} from '../event-manager-container/common-classes';

@Component({
  selector: 'app-category-editor-container',
  template: `
    <div class="ui container">
      <app-category-editor [categories]="categories$ | async"
                           [defaultCategories]="defaultCategories$ | async"
                           [competition]="competition$ | async"
                           [selectedCategoryState]="catState$ | async"
                           (createCustomCategoryClicked)="addCategory()"
                           (addDefaultCategories)="sendAddDefaultCategoriesCommand($event)"
                           (deleteCategoryEvent)="doDeleteCategory($event)"
      (generateRandomFightersEvent)="generateRandomFighters($event)"></app-category-editor>
    </div> `
})
export class CategoryEditorContainerComponent extends BasicCompetitionInfoContainer implements OnInit {

  competition$: Observable<CompetitionProperties>;

  defaultCategories$: Observable<Category[]>;

  catState$: Observable<CategoryState>;


  constructor(store: Store<AppState>, private route: ActivatedRoute, private router: Router) {
    super(store, <ComponentCommonMetadataProvider>{
      breadCrumbItem: <BreadCrumbItem>{
        name: 'Categories',
        level: 2,
      },
      menu: []
    });
    this.competition$ = store.pipe(select(eventManagerGetSelectedEvent));
    this.catState$ = store.pipe(select(eventManagerGetSelectedEventSelectedCategoryState));
    this.defaultCategories$ = store.pipe(select(eventManagerGetSelectedEventDefaultCategories));
  }


  ngOnInit() {
  }

  addCategory() {
    this.router.navigate(['create'], {relativeTo: this.route});
  }

  doDeleteCategory({category, competitionId}) {
    this.store.dispatch(deleteCategory(competitionId, category.id));
  }

  sendAddDefaultCategoriesCommand(categories: {competitionId: string, category: Category}[]) {
    if (categories && categories.length > 0) {
      categories.forEach(cate => this.store.dispatch(eventManagerAddCategory(cate.competitionId, cate.category)));
    }
  }

  generateRandomFighters(event: any) {
    this.store.dispatch(event);
  }
}
