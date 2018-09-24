import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {AppState, CompetitionProperties} from '../../../../reducers';
import {select, Store} from '@ngrx/store';
import {
  eventManagerGetSelectedEvent,
  eventManagerGetSelectedEventCategories, eventManagerGetSelectedEventDefaultCategories,
  eventManagerGetSelectedEventSelectedCategoryState
} from '../../redux/event-manager-reducers';
import {CategoryState} from '../../../../commons/model/competition.model';
import {ActivatedRoute, Router} from '@angular/router';
import {deleteCategory, eventManagerAddCategory} from '../../redux/event-manager-actions';
import {Category} from '../../../../commons/model/competition.model';

@Component({
  selector: 'app-category-editor-container',
  template: `
    <div class="ui container">
      <app-category-editor [categories]="cat$ | async"
                           [defaultCategories]="defaultCategories$ | async"
                           [competition]="competition$ | async"
                           [selectedCategoryState]="catState$ | async"
                           (createCustomCategoryClicked)="addCategory()"
                           (addDefaultCategories)="sendAddDefaultCategoriesCommand($event)"
                           (deleteCategoryEvent)="doDeleteCategory($event)"
      (generateRandomFightersEvent)="generateRandomFighters($event)"></app-category-editor>
    </div> `
})
export class CategoryEditorContainerComponent implements OnInit, OnDestroy {

  cat$: Observable<Category[]>;

  competition$: Observable<CompetitionProperties>;

  defaultCategories$: Observable<Category[]>;

  catState$: Observable<CategoryState>;


  constructor(private store: Store<AppState>, private route: ActivatedRoute, private router: Router) {
    this.cat$ = store.pipe(select(eventManagerGetSelectedEventCategories));
    this.competition$ = store.pipe(select(eventManagerGetSelectedEvent));
    this.catState$ = store.pipe(select(eventManagerGetSelectedEventSelectedCategoryState));
    this.defaultCategories$ = store.pipe(select(eventManagerGetSelectedEventDefaultCategories));
  }

  ngOnInit() {
  }

  ngOnDestroy() {
  }

  addCategory() {
    this.router.navigate(['create'], {relativeTo: this.route});
  }

  doDeleteCategory(category: Category) {
    this.store.dispatch(deleteCategory(category.competitionId, category.categoryId));
  }

  sendAddDefaultCategoriesCommand(categories: Category[]) {
    if (categories && categories.length > 0) {
      categories.forEach(cate => this.store.dispatch(eventManagerAddCategory(cate.competitionId, cate)));
    }
  }

  generateRandomFighters(event: any) {
    this.store.dispatch(event);
  }
}
