import {Component, OnInit} from '@angular/core';
import {combineLatest, Observable} from 'rxjs';
import {AppState, CompetitionProperties} from '../../../../reducers';
import {select, Store} from '@ngrx/store';
import {
  eventManagerGetSelectedEvent,
  eventManagerGetSelectedEventDefaultCategories,
  eventManagerGetSelectedEventName,
  eventManagerGetSelectedEventSelectedCategoryState,
  HeaderDescription
} from '../../redux/event-manager-reducers';
import {Category, CategoryState} from '../../../../commons/model/competition.model';
import {ActivatedRoute, Router} from '@angular/router';
import {deleteCategory, eventManagerAddCategory} from '../../redux/event-manager-actions';
import {BasicCompetitionInfoContainer, ComponentCommonMetadataProvider} from '../event-manager-container/common-classes';
import {filter, map, mergeAll, take} from 'rxjs/operators';
import {SuiModalService} from 'ng2-semantic';
import {SelectCategoriesModal} from '../../components/category-editor/select-categories-modal.component';

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


  constructor(store: Store<AppState>, private route: ActivatedRoute, private router: Router, public modalService: SuiModalService) {
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
        }
      ]
    });
    this.competition$ = store.pipe(select(eventManagerGetSelectedEvent));
    this.catState$ = store.pipe(select(eventManagerGetSelectedEventSelectedCategoryState));
    this.defaultCategories$ = store.pipe(select(eventManagerGetSelectedEventDefaultCategories));
  }

  openModal() {
    combineLatest([this.categories$, this.competition$]).pipe(filter(([cats, competition]) => !!cats && !!competition),
      take(1),
      map(([categories, competition]) =>
        this.modalService
          .open(new SelectCategoriesModal(this.defaultCategories$.pipe(mergeAll(), filter(cat => !categories.find(value => cat.id === value.id))), competition))
          .onApprove((categoriesToAdd: Category[]) => {
            this.addSelectedCategories(categoriesToAdd, competition.id);
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
    this.router.navigate(['create'], {relativeTo: this.route});
  }

  doDeleteCategory({category, competitionId}) {
    this.store.dispatch(deleteCategory(competitionId, category.id));
  }

  sendAddDefaultCategoriesCommand(categories: { competitionId: string, category: Category }[]) {
    if (categories && categories.length > 0) {
      categories.forEach(cate => this.store.dispatch(eventManagerAddCategory(cate.competitionId, cate.category)));
    }
  }

  generateRandomFighters(event: any) {
    this.store.dispatch(event);
  }
}
