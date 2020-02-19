import {Observable} from 'rxjs';
import {AppState, CompetitionProperties, getSelectedEventProperties} from '../../reducers/global-reducers';
import {Category, CategoryBracketsStage, Fight} from '../model/competition.model';
import {select, Store} from '@ngrx/store';
import {
  eventManagerGetSelectedEventSelectedCategoryFightsEditorStateSelectedChangeFightsIds,
  eventManagerGetSelectedEventSelectedCategorySelectedStageFights, selectedEvent,
} from '../../modules/event-manager/redux/event-manager-reducers';
import {filter, map, take} from 'rxjs/operators';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';

export class CommonBracketsContainer {
  competition$: Observable<CompetitionProperties>;
  stages$: Observable<CategoryBracketsStage[]>;
  fights$: Observable<Fight[]>;
  stage$: Observable<CategoryBracketsStage>;
  fightsAreLoading$: Observable<boolean>;
  category$: Observable<Category>;
  categories$: Observable<Category[]>;
  numberOfCompetitor$: Observable<number>;
  bucketsize$: Observable<number>;
  changeFightsIds$: Observable<string[]>;

  constructor(private store: Store<AppState>, private observer: BreakpointObserver, bigscrenColumns: number = 4, smallScreenColumns: number = 2) {
    this.competition$ = store.pipe(select(getSelectedEventProperties));
    this.stages$ = store.pipe(select(selectedEvent.selectedCategory.selectedStages()));//eventManagerGetSelectedEventSelectedCategorySelectedStages));
    this.stage$ = store.pipe(select(selectedEvent.selectedCategory.selectedStage()));//eventManagerGetSelectedEventSelectedCategorySelectedStage));
    this.fights$ = store.pipe(select(selectedEvent.selectedCategory.selectedStage.allFights()));//eventManagerGetSelectedEventSelectedCategorySelectedStageFights));
    this.fightsAreLoading$ = store.pipe(select(selectedEvent.selectedCategory.stateLoading()));//eventManagerGetSelectedEventSelectedCategoryStateLoading));
    this.category$ = store.pipe(select(selectedEvent.selectedCategory()));//eventManagerGetSelectedEventSelectedCategory));
    this.categories$ = store.pipe(select(selectedEvent.categoriesCollection.allCategories()));//eventManagerGetSelectedEventCategories));
    this.numberOfCompetitor$ = store.pipe(select(selectedEvent.selectedCategory.numberOfCompetitors()));//eventManagerGetSelectedEventSelectedCategoryNumberOfCompetitors));
    this.bucketsize$ = observer.observe([Breakpoints.Handset, Breakpoints.Small]).pipe(
      map(b => b.matches ? smallScreenColumns : bigscrenColumns)
    );
    this.changeFightsIds$ = store.pipe(select(eventManagerGetSelectedEventSelectedCategoryFightsEditorStateSelectedChangeFightsIds));
  }

  sendCommandFromCategoryId(actionBuilder: (categoryId) => any) {
    this.category$.pipe(take(1), map(cat => {
      if (cat) {
        return actionBuilder(cat.id);
      }
    }), filter(act => !!act && !!act.type)).subscribe(this.store);
  }

}
