import {Component, OnInit} from '@angular/core';
import {Category, CategoryState, Fight} from '../../../../commons/model/competition.model';
import {Observable} from 'rxjs';
import {
  eventManagerGetSelectedEventId,
  eventManagerGetSelectedEventSelectedCategory,
  eventManagerGetSelectedEventSelectedCategoryFights,
  eventManagerGetSelectedEventSelectedCategoryNumberOfCompetitors,
  eventManagerGetSelectedEventSelectedCategoryStartTime,
  eventManagerGetSelectedEventSelectedCategoryState
} from '../../redux/event-manager-reducers';
import {AppState} from '../../../../reducers';
import {select, Store} from '@ngrx/store';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-category-summary-container',
  template: `
    <app-category-summary
      [category]="category$ | async"
      [categoryState]="categoryState$ | async"
      [competitorsSize]="competitorsSize$ | async"
      [fights]="fights$ | async"
      [categoryStartTime]="categoryStartTime$ | async"
      [competitionId]="competitionId$ | async"
      (gobackClicked)="goback()"
      (categoryFightersSelected)="navigateToCategoryFighters($event)">
    </app-category-summary>`,
  styleUrls: ['./category-summary-container.component.css']
})
export class CategorySummaryContainerComponent implements OnInit {

  categoryState$: Observable<CategoryState>;

  fights$: Observable<Fight[]>;

  competitorsSize$: Observable<number>;

  category$: Observable<Category>;
  competitionId$: Observable<string>;

  categoryStartTime$: Observable<Date>;

  constructor(private store: Store<AppState>, private router: Router, private route: ActivatedRoute, private location: Location) {
    this.category$ = store.pipe(select(eventManagerGetSelectedEventSelectedCategory));
    this.competitionId$ = store.pipe(select(eventManagerGetSelectedEventId));
    this.categoryState$ = store.pipe(select(eventManagerGetSelectedEventSelectedCategoryState));
    this.fights$ = store.pipe(select(eventManagerGetSelectedEventSelectedCategoryFights));
    this.competitorsSize$ = store.pipe(select(eventManagerGetSelectedEventSelectedCategoryNumberOfCompetitors));
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

}
