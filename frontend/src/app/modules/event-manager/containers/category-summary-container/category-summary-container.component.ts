import {Component, OnInit} from '@angular/core';
import {CategoryState} from '../../../../commons/model/competition.model';
import {Observable} from 'rxjs';
import {
  eventManagerGetSelectedEventSchedule,
  eventManagerGetSelectedEventSelectedCategory,
  eventManagerGetSelectedEventSelectedCategoryCompetitors,
  eventManagerGetSelectedEventSelectedCategoryFights, eventManagerGetSelectedEventSelectedCategoryStartTime,
  eventManagerGetSelectedEventSelectedCategoryState
} from '../../redux/event-manager-reducers';
import {AppState, Schedule} from '../../../../reducers';
import {select, Store} from '@ngrx/store';
import {Router} from '@angular/router';
import {Location} from '@angular/common';
import {Category, Competitor, Fight} from '../../../../commons/model/competition.model';

@Component({
  selector: 'app-category-summary-container',
  template: `
    <app-category-summary
      [category]="category$ | async"
      [categoryState]="categoryState$ | async"
      [competitors]="competitors$ | async"
      [fights]="fights$ | async"
      [categoryStartTime]="categoryStartTime$ | async"
      (gobackClicked)="goback()">
    </app-category-summary>`,
  styleUrls: ['./category-summary-container.component.css']
})
export class CategorySummaryContainerComponent implements OnInit {

  categoryState$: Observable<CategoryState>;

  fights$: Observable<Fight[]>;

  competitors$: Observable<Competitor[]>;

  category$: Observable<Category>;

  categoryStartTime$: Observable<Date>;

  constructor(private store: Store<AppState>, private router: Router, private location: Location) {
    this.category$ = store.pipe(select(eventManagerGetSelectedEventSelectedCategory));
    this.categoryState$ = store.pipe(select(eventManagerGetSelectedEventSelectedCategoryState));
    this.fights$ = store.pipe(select(eventManagerGetSelectedEventSelectedCategoryFights));
    this.competitors$ = store.pipe(select(eventManagerGetSelectedEventSelectedCategoryCompetitors));
    this.categoryStartTime$ = store.pipe(select(eventManagerGetSelectedEventSelectedCategoryStartTime));
  }

  ngOnInit() {
  }

  goback() {
    const path = this.location.path(false);
    this.router.navigateByUrl(path.slice(0, path.lastIndexOf('/')));
  }

}
