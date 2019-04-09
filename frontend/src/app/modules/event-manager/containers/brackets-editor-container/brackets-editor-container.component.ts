import {Component, OnDestroy, OnInit} from '@angular/core';
import {AppState, CompetitionProperties} from '../../../../reducers';
import {select, Store} from '@ngrx/store';
import {Observable, Subscription} from 'rxjs';
import {
  eventManagerGetSelectedEvent,
  eventManagerGetSelectedEventCategories, eventManagerGetSelectedEventId, eventManagerGetSelectedEventSelectedCategory,
  eventManagerGetSelectedEventSelectedCategoryFights
} from '../../redux/event-manager-reducers';
import {Category} from '../../../../commons/model/competition.model';
import {AddFighterComponent} from '../../components/add-fighter/add-fighter.component';
import {
  eventManagerCategorySelected,
  eventManagerCategoryUnselected, eventManagerDropAllBracketsCommand, eventManagerDropCategoryBracketsCommand,
  eventManagerGenerateBrackets, eventManagerMoveFighter
} from '../../redux/event-manager-actions';
import {Fight} from '../../../../commons/model/competition.model';

@Component({
  selector: 'app-brackets-editor-container',
  templateUrl: './brackets-editor-container.component.html',
  styleUrls: ['./brackets-editor-container.component.css']
})
export class BracketsEditorContainerComponent implements OnInit, OnDestroy {

  private competitionId: string;
  private subs = new Subscription();

  competition$: Observable<CompetitionProperties>;
  categories$: Observable<Category[]>;
  fights$: Observable<Fight[]>;
  category$: Observable<Category>;
  selectedCategory;
  optionsFilter = (options: Category[], filter: string) => options.filter(cat => cat.id && AddFighterComponent.displayCategory(cat).toLowerCase().includes(filter.toLowerCase()));
  formatter = (option: Category, query?: string) => AddFighterComponent.displayCategory(option);

  constructor(private store: Store<AppState>) {
    this.subs.add(this.store.pipe(select(eventManagerGetSelectedEventId)).subscribe(id => this.competitionId = id));
    this.competition$ = store.pipe(select(eventManagerGetSelectedEvent));
    this.categories$ = store.pipe(select(eventManagerGetSelectedEventCategories));
    this.fights$ = store.pipe(select(eventManagerGetSelectedEventSelectedCategoryFights));
    this.category$ = store.pipe(select(eventManagerGetSelectedEventSelectedCategory));
  }

  sendCompetitorMovedAction(payload: any) {
    this.store.dispatch(eventManagerMoveFighter(payload.competitionId, payload.id, payload));
  }

  setCategoryId(category: Category) {
    this.selectedCategory = category;
    this.store.dispatch(eventManagerCategorySelected(this.competitionId, category.id));
  }

  dropSelectedBrackets() {
    if (this.selectedCategory) {
      this.store.dispatch(eventManagerDropCategoryBracketsCommand(this.selectedCategory.competitionId, this.selectedCategory.id));
    }
  }

  dropAllBrackets() {
    if (this.competitionId) {
      this.store.dispatch(eventManagerDropAllBracketsCommand(this.competitionId));
    }
  }

  ngOnInit() {
  }

  generateBrackets() {
    if (this.selectedCategory) {
      this.store.dispatch(eventManagerGenerateBrackets(this.selectedCategory.competitionId, this.selectedCategory.id));
    }
  }

  ngOnDestroy() {
    if (this.selectedCategory) {
      this.store.dispatch(eventManagerCategoryUnselected(this.selectedCategory.competitionId));
    }
    this.subs.unsubscribe();
  }

}
