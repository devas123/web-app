import {Injectable} from "@angular/core";
import {InfoService} from "./info.service";
import {SelectorsService} from "./selectors.service";
import {filter, share, switchMap, tap} from "rxjs/operators";
import {AppState} from "../reducers/global-reducers";
import * as _ from 'lodash';

import {Store} from "@ngrx/store";
import {
  eventManagerCategoriesLoaded,
  eventManagerCategoryBracketsStageFightsLoaded, eventManagerCategoryBracketsStageFightsLoading,
  eventManagerCategoryStagesLoaded,
  eventManagerCategoryStateLoaded,
  eventManagerFightersForCompetitionLoaded
} from "../modules/event-manager/redux/event-manager-actions";
import {combineLatest, Observable, using} from "rxjs";
import {Competitor, FightDescription} from "@frontend-nx/protobuf";

@Injectable()
export class DataProviderService {
  constructor(private infoService: InfoService, private selectors: SelectorsService, private store: Store<AppState>) {
  }

  private requireCategory$ = combineLatest([this.selectors.competitionId$, this.selectors.categoryId$]).pipe(
    filter(([competitionId, categoryId]) => Boolean(competitionId) && Boolean(categoryId)),
    switchMap(([competitionId, categoryId]) => this.infoService.getLatestCategoryState(competitionId, categoryId)),
    tap(category => {
      if (category) this.store.dispatch(eventManagerCategoryStateLoaded(category))
    }),
    share(),
  );

  categoryInterest$ = using(
    () => this.requireCategory$.subscribe(),
    () => this.selectors.category$
  )
  private requireCategories$ = this.selectors.competitionId$.pipe(
    filter((competitionId) => Boolean(competitionId)),
    switchMap((competitionId) => this.infoService.getCategories(competitionId)),
    tap(categories => {
      if (categories) this.store.dispatch(eventManagerCategoriesLoaded(categories))
    }),
    share(),
  );

  categoriesInterest$ = using(
    () => this.requireCategories$.subscribe(),
    () => this.selectors.categories$
  )

  private requireStages$ = this.categoryInterest$.pipe(
    filter((category) => Boolean(category)),
    switchMap((category) => this.infoService.getCategoryStages(category.competitionId, category.id)
      .pipe(
        tap(categoryStages =>
          this.store.dispatch(eventManagerCategoryStagesLoaded({
            selectedStageId: _.isEmpty(categoryStages) ? null : _.sortBy(categoryStages, 'stageOrder')[0]?.id,
            competitionId: category.competitionId,
            categoryId: category.id,
            categoryStages
          })))
      )),
    share(),
  );

  stages$ = using(
    () => this.requireStages$.subscribe(),
    () => this.selectors.stages$
  )

  private requireStageFights$ = combineLatest([
    this.stages$,
    this.selectors.categoryId$,
    this.selectors.competitionId$,
    this.selectors.selectedStageId$,
    this.selectors.needFights$]).pipe(
    filter(([_, categoryId, competitionId, stageId, needFights]) => Boolean(categoryId) && Boolean(competitionId) && Boolean(stageId) && needFights),
    tap(() => this.store.dispatch(eventManagerCategoryBracketsStageFightsLoading())),
    switchMap(([_, categoryId, competitionId, stageId]) => this.infoService.getCategoryStageFights(competitionId, categoryId, stageId)),
    tap(fights => {
      if (fights) {
        this.store.dispatch(eventManagerCategoryBracketsStageFightsLoaded({fights}))
      }
    }),
    share()
  )

  stageFights$: Observable<FightDescription[]> = using(
    () => this.requireStageFights$.subscribe(),
    () => this.selectors.stageFights$
  )

  private requireFighters$ = combineLatest([this.selectors.competitionId$, this.selectors.categoryId$, this.selectors.competitorsPageSize$, this.selectors.competitorsPageNumber$]).pipe(
    filter(([competitionId]) => Boolean(competitionId)),
    switchMap(([competitionId, categoryId, pageSize, pageNumber]) => this.infoService.getCompetitorsForCompetition(competitionId, categoryId, pageNumber, pageSize, undefined)
      .pipe(
        tap(response => {
          if (response.pageInfo.total != null && response.pageInfo.page != null) {
            this.store.dispatch(eventManagerFightersForCompetitionLoaded(competitionId, response, true));
          }
        })
      )),
  )

  fighters$: Observable<Competitor[]> = using(
    () => this.requireFighters$.subscribe(),
    () => this.selectors.fighters$
  )
}
