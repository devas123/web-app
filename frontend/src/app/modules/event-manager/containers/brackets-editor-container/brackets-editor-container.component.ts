import {Component, OnDestroy, OnInit} from '@angular/core';
import {AppState, CompetitionProperties} from '../../../../reducers';
import {select, Store} from '@ngrx/store';
import {combineLatest, Observable, Subscription} from 'rxjs';
import {
  eventManagerGetSelectedEvent,
  eventManagerGetSelectedEventCategories,
  eventManagerGetSelectedEventId,
  eventManagerGetSelectedEventSelectedCategory,
  eventManagerGetSelectedEventSelectedCategoryFights
} from '../../redux/event-manager-reducers';
import {Category, Fight} from '../../../../commons/model/competition.model';
import {AddFighterComponent} from '../../components/add-fighter/add-fighter.component';
import {
  eventManagerCategorySelected,
  eventManagerCategoryUnselected,
  eventManagerDropAllBracketsCommand,
  eventManagerDropCategoryBracketsCommand,
  eventManagerGenerateBrackets,
  eventManagerMoveFighter
} from '../../redux/event-manager-actions';
import {map} from 'rxjs/operators';
import {ActivatedRoute, Router} from '@angular/router';

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
  selectedCategory: Category;
  optionsFilter = (options: Category[], filter: string) => options.filter(cat => cat.id && AddFighterComponent.displayCategory(cat).toLowerCase().includes(filter.toLowerCase()));
  formatter = (option: Category, query?: string) => AddFighterComponent.displayCategory(option);

  constructor(private store: Store<AppState>, private route: ActivatedRoute, private router: Router) {
    const competitionId$ = this.store.pipe(select(eventManagerGetSelectedEventId));
    const categoryId$ = this.route.queryParams.pipe(map(params => params['categoryId']));
    this.subs.add(competitionId$.subscribe(id => this.competitionId = id));
    this.subs.add(combineLatest(competitionId$, categoryId$).subscribe(([competitionId, categoryId]) => {
      if (competitionId && categoryId) {
        this.store.dispatch(eventManagerCategorySelected(competitionId, categoryId));
      }
    }));
    this.competition$ = store.pipe(select(eventManagerGetSelectedEvent));
    this.categories$ = store.pipe(select(eventManagerGetSelectedEventCategories));
    this.fights$ = store.pipe(select(eventManagerGetSelectedEventSelectedCategoryFights));
    this.category$ = store.pipe(select(eventManagerGetSelectedEventSelectedCategory));
  }

  sendCompetitorMovedAction(payload: any) {
    this.store.dispatch(eventManagerMoveFighter(payload.competitionId, payload.id, payload));
  }

  setCategoryId(category: Category) {
    if (!this.selectedCategory || this.selectedCategory.id !== category.id) {
      const queryParams = {categoryId: category.id};
      this.selectedCategory = category;
      this.router.navigate(['eventmanager', this.competitionId, 'brackets'], {queryParams}).catch(error => console.error(error));
    }
  }

  dropSelectedBrackets() {
    if (this.selectedCategory) {
      this.store.dispatch(eventManagerDropCategoryBracketsCommand(this.competitionId, this.selectedCategory.id));
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
      this.store.dispatch(eventManagerGenerateBrackets(this.competitionId, this.selectedCategory.id));
    }
  }

  ngOnDestroy() {
    if (this.selectedCategory) {
      this.store.dispatch(eventManagerCategoryUnselected(this.competitionId));
    }
    this.subs.unsubscribe();
  }
}
