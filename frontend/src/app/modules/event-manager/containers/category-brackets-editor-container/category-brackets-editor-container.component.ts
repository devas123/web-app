import {Component, OnDestroy, OnInit} from '@angular/core';
import {AppState, CompetitionProperties} from '../../../../reducers';
import {Observable, Subscription} from 'rxjs';
import {Category, Fight} from '../../../../commons/model/competition.model';
import {
  eventManagerGetSelectedEvent,
  eventManagerGetSelectedEventSelectedCategory,
  eventManagerGetSelectedEventSelectedCategoryFights
} from '../../redux/event-manager-reducers';
import {select, Store} from '@ngrx/store';
import {
  eventManagerDropCategoryBracketsCommand,
  eventManagerGenerateBrackets,
  eventManagerMoveFighter
} from '../../redux/event-manager-actions';
import {AddFighterComponent} from '../../components/add-fighter/add-fighter.component';

@Component({
  selector: 'app-category-brackets-editor-container',
  templateUrl: './category-brackets-editor-container.component.html',
  styleUrls: ['./category-brackets-editor-container.component.css']
})
export class CategoryBracketsEditorContainerComponent implements OnInit, OnDestroy {

  subscription = new Subscription();
  selectedCategory: Category;
  competition$: Observable<CompetitionProperties>;
  fights$: Observable<Fight[]>;
  category$: Observable<Category>;

  constructor(private store: Store<AppState>) {
    this.competition$ = store.pipe(select(eventManagerGetSelectedEvent));
    this.fights$ = store.pipe(select(eventManagerGetSelectedEventSelectedCategoryFights));
    this.category$ = store.pipe(select(eventManagerGetSelectedEventSelectedCategory));
    this.subscription.add(store.pipe(select(eventManagerGetSelectedEventSelectedCategory)).subscribe(cat => this.selectedCategory = cat));
  }

  getName = (category: Category) => AddFighterComponent.displayCategory(category);

  dropSelectedBrackets() {
    if (this.selectedCategory) {
      this.store.dispatch(eventManagerDropCategoryBracketsCommand(this.selectedCategory.competitionId, this.selectedCategory.categoryId));
    }
  }

  ngOnInit() {
  }

  generateBrackets() {
    if (this.selectedCategory) {
      this.store.dispatch(eventManagerGenerateBrackets(this.selectedCategory.competitionId, this.selectedCategory.categoryId));
    }
  }

  sendCompetitorMovedAction(payload: any) {
    this.store.dispatch(eventManagerMoveFighter(payload.competitionId, payload.categoryId, payload));
  }


  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
