import {Observable} from 'rxjs';
import {AppState, CompetitionProperties, getSelectedEventProperties} from '../../reducers/global-reducers';
import {Category, CategoryBracketsStage, Fight} from '../model/competition.model';
import {select, Store} from '@ngrx/store';
import {
  eventManagerGetSelectedEventCategories,
  eventManagerGetSelectedEventSelectedCategory,
  eventManagerGetSelectedEventSelectedCategoryFightsEditorStateSelectedChangeFightsIds,
  eventManagerGetSelectedEventSelectedCategoryNumberOfCompetitors,
  eventManagerGetSelectedEventSelectedCategorySelectedStage,
  eventManagerGetSelectedEventSelectedCategorySelectedStageFights,
  eventManagerGetSelectedEventSelectedCategorySelectedStages,
  eventManagerGetSelectedEventSelectedCategoryStateLoading
} from '../../modules/event-manager/redux/event-manager-reducers';
import {filter, map, take} from 'rxjs/operators';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {Injectable} from '@angular/core';

@Injectable()
export class CommonBracketsContainer {
  competition$: Observable<CompetitionProperties>;
  stages$: Observable<CategoryBracketsStage[]>;
  fights$: Observable<Fight[]>;
  stage$: Observable<CategoryBracketsStage>;
  fightsAreLoading$: Observable<boolean>;
  category$: Observable<Category>;
  categories$: Observable<Category[]>;
  numberOfCompetitor$: Observable<number>;
  bucketsize$: Observable<boolean>;
  changeFightsIds$: Observable<string[]>;

  constructor(private store: Store<AppState>, private observer: BreakpointObserver) {
    this.competition$ = store.pipe(select(getSelectedEventProperties));
    this.stages$ = store.pipe(select(eventManagerGetSelectedEventSelectedCategorySelectedStages));
    this.stage$ = store.pipe(select(eventManagerGetSelectedEventSelectedCategorySelectedStage));
    this.fights$ = store.pipe(select(eventManagerGetSelectedEventSelectedCategorySelectedStageFights));
    this.fightsAreLoading$ = store.pipe(select(eventManagerGetSelectedEventSelectedCategoryStateLoading));
    this.category$ = store.pipe(select(eventManagerGetSelectedEventSelectedCategory));
    this.categories$ = store.pipe(select(eventManagerGetSelectedEventCategories));
    this.numberOfCompetitor$ = store.pipe(select(eventManagerGetSelectedEventSelectedCategoryNumberOfCompetitors));
    this.bucketsize$ = observer.observe([Breakpoints.Handset, Breakpoints.Small]).pipe(
      map(b => b.matches)
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
