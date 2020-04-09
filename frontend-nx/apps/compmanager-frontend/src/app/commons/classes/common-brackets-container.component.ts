import {Observable} from 'rxjs';
import {AppState, CompetitionProperties, getSelectedEventProperties} from '../../reducers/global-reducers';
import {BracketsType, Category, CategoryBracketsStage, Competitor, Fight} from '../model/competition.model';
import {select, Store} from '@ngrx/store';
import {
  eventManagerGetSelectedEventCategories,
  eventManagerGetSelectedEventCompetitors,
  eventManagerGetSelectedEventSelectedCategory,
  eventManagerGetSelectedEventSelectedCategoryNumberOfCompetitors,
  eventManagerGetSelectedEventSelectedCategorySelectedStage, eventManagerGetSelectedEventSelectedCategorySelectedStageBracketsType,
  eventManagerGetSelectedEventSelectedCategorySelectedStageFights, eventManagerGetSelectedEventSelectedCategorySelectedStageFirstRoundFights,
  eventManagerGetSelectedEventSelectedCategorySelectedStages,
  eventManagerGetSelectedEventSelectedCategoryStagesAreLoading
} from '../../modules/event-manager/redux/event-manager-reducers';
import {filter, map, take} from 'rxjs/operators';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {Injectable} from '@angular/core';
import {eventManagerCategoryBracketsStageSelected, eventManagerCategorySelected, eventManagerCategoryUnselected} from '../../modules/event-manager/redux/event-manager-actions';

@Injectable()
export class CommonBracketsInfoContainer {

  competition$: Observable<CompetitionProperties>;
  stages$: Observable<CategoryBracketsStage[]>;
  fights$: Observable<Fight[]>;
  firstRoundFights$: Observable<Fight[]>;
  stage$: Observable<CategoryBracketsStage>;
  bracketsType$: Observable<'' | BracketsType>;
  fightsAreLoading$: Observable<boolean>;
  category$: Observable<Category>;
  categories$: Observable<Category[]>;
  numberOfCompetitor$: Observable<number>;
  bucketsize$: Observable<boolean>;
  competitors$: Observable<Competitor[]>;


  constructor(private store: Store<AppState>, private observer: BreakpointObserver) {
    this.competition$ = store.pipe(select(getSelectedEventProperties));
    this.stages$ = store.pipe(select(eventManagerGetSelectedEventSelectedCategorySelectedStages));
    this.stage$ = store.pipe(select(eventManagerGetSelectedEventSelectedCategorySelectedStage));
    this.bracketsType$ = store.pipe(select(eventManagerGetSelectedEventSelectedCategorySelectedStageBracketsType));
    this.fights$ = store.pipe(select(eventManagerGetSelectedEventSelectedCategorySelectedStageFights));
    this.firstRoundFights$ = store.pipe(select(eventManagerGetSelectedEventSelectedCategorySelectedStageFirstRoundFights));
    this.fightsAreLoading$ = store.pipe(select(eventManagerGetSelectedEventSelectedCategoryStagesAreLoading));
    this.competitors$ = store.pipe(select(eventManagerGetSelectedEventCompetitors));
    this.category$ = store.pipe(select(eventManagerGetSelectedEventSelectedCategory));
    this.categories$ = store.pipe(select(eventManagerGetSelectedEventCategories));
    this.numberOfCompetitor$ = store.pipe(select(eventManagerGetSelectedEventSelectedCategoryNumberOfCompetitors));
    this.bucketsize$ = observer.observe([Breakpoints.Handset, Breakpoints.Small]).pipe(
      map(b => b.matches)
    );
  }

  sendCommandFromCategoryId(actionBuilder: (categoryId) => any) {
    this.category$.pipe(take(1), map(cat => {
      if (cat) {
        return actionBuilder(cat.id);
      }
    }), filter(act => !!act && !!act.type)).subscribe(this.store);
  }

  sendCommandFromCompetitionId(actionBuilder: (competitionId) => any) {
    this.competition$.pipe(take(1), map(competition => {
      if (competition) {
        return actionBuilder(competition.id);
      }
    }), filter(act => !!act && !!act.type)).subscribe(this.store);
  }

  mapBucketSize(bigScreenSize: number, smallScreenSize: number) {
    return this.bucketsize$.pipe(map(val => val ? smallScreenSize : bigScreenSize));
  }

  selectStage(id: string, competitionId: string) {
    this.store.dispatch(eventManagerCategoryBracketsStageSelected({
      competitionId: competitionId,
      selectedStageId: id
    }));
  }

  selectCategory(categoryId: string, competitionId: string) {
    if (competitionId && categoryId) {
      this.store.dispatch(eventManagerCategorySelected(competitionId, categoryId));
    }
  }

  clearCategorySelection(competitionId: string) {
    if (competitionId) {
      this.store.dispatch(eventManagerCategoryUnselected(competitionId));
    }
  }
}
