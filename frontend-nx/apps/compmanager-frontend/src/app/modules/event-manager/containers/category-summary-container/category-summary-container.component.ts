import {Component, OnInit} from '@angular/core';
import {Category, CategoryState, displayCategory, HeaderDescription} from '../../../../commons/model/competition.model';
import {Observable} from 'rxjs';
import {
  eventManagerGetSelectedEventSelectedCategory,
  eventManagerGetSelectedEventSelectedCategoryStartTime,
  getSelectedEventSelectedCategoryState
} from '../../redux/event-manager-reducers';
import {AppState, getSelectedEventId} from '../../../../reducers/global-reducers';
import {select, Store} from '@ngrx/store';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';
import {ComponentCommonMetadataProvider, EventManagerRouterEntryComponent} from '../event-manager-container/common-classes';
import {filter, map, take} from 'rxjs/operators';
import {MenuService} from '../../../../components/main-menu/menu.service';

@Component({
  selector: 'app-category-summary-container',
  template: `
      <app-category-summary
              [category]="category$ | async"
              [categoryState]="categoryState$ | async"
              [categoryStartTime]="categoryStartTime$ | async"
              [competitionId]="competitionId$ | async"
              (categoryBracketsSelected)="navigateToCategoryBrackets($event)"
              (categoryFightersSelected)="navigateToCategoryFighters($event)">
      </app-category-summary>`,
  styleUrls: ['./category-summary-container.component.css']
})
export class CategorySummaryContainerComponent extends EventManagerRouterEntryComponent implements OnInit {

  categoryState$: Observable<CategoryState>;

  category$: Observable<Category>;
  competitionId$: Observable<string>;

  categoryStartTime$: Observable<string>;

  constructor(store: Store<AppState>, private router: Router, private route: ActivatedRoute, private location: Location, menuService: MenuService) {
    super(store, <ComponentCommonMetadataProvider>{
      menu: [
        {
          name: 'Return',
          action: () => this.goback()
        }
      ],
      header: store.pipe(select(eventManagerGetSelectedEventSelectedCategory), filter(cat => !!cat), take(1), map(cat => <HeaderDescription>{
        header: 'Category',
        subheader: displayCategory(cat)
      }))
    }, menuService);
    this.category$ = store.pipe(select(eventManagerGetSelectedEventSelectedCategory), filter(cat => !!cat));
    this.competitionId$ = store.pipe(select(getSelectedEventId));
    this.categoryState$ = store.pipe(select(getSelectedEventSelectedCategoryState));
    this.categoryStartTime$ = store.pipe(select(eventManagerGetSelectedEventSelectedCategoryStartTime));
  }


  ngOnInit() {
  }

  goback() {
    const path = this.location.path(false);
    this.router.navigateByUrl(path.slice(0, path.lastIndexOf('/'))).catch(reason => console.error(`Navigation failed: ${reason}`));
  }

  navigateToCategoryFighters({categoryId, competitionId}) {
    this.router.navigate(['/eventmanager', competitionId, 'fighters'], {queryParams: {categoryId}}).catch(reason => console.error(`Navigation failed: ${reason}`));
  }

  navigateToCategoryBrackets({categoryId, competitionId}) {
    this.router.navigate(['/eventmanager', competitionId, 'brackets'], {queryParams: {categoryId}}).catch(reason => console.error(`Navigation failed: ${reason}`));
  }

}
