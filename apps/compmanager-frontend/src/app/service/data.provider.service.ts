import {Injectable} from "@angular/core";
import {InfoService} from "./info.service";
import {SelectorsService} from "./selectors.service";
import {filter, share, switchMap, tap} from "rxjs/operators";
import {AppState} from "../reducers/global-reducers";
import * as _ from 'lodash';

import {Store} from "@ngrx/store";
import {
  eventManagerCategoriesLoaded,
  eventManagerCategoryStagesLoaded,
  eventManagerCategoryStateLoaded, eventManagerCompetitionInfoLoaded,
  eventManagerFightersForCompetitionLoaded,
  eventManagerFightsLoaded
} from "../modules/event-manager/redux/event-manager-actions";
import {combineLatest, Observable, of, using} from "rxjs";
import {Competitor, FightDescription} from "@frontend-nx/protobuf";
import {
  dashboardFightLoaded,
  dashboardMatFightsLoaded,
  dashboardMatsLoaded
} from "../modules/event-manager/redux/dashboard-actions";

@Injectable()
export class DataProviderService {
  constructor(private infoService: InfoService, private selectors: SelectorsService, private store: Store<AppState>) {
  }

  private requireCompetitionInfo$ = this.selectors.competitionId$.pipe(
    filter((competitionId) => Boolean(competitionId)),
    switchMap((competitionId) => this.infoService.getCompetitionInfoTemplate(competitionId)),
    tap(infoTemplate => {
      if (Boolean(infoTemplate)) this.store.dispatch(eventManagerCompetitionInfoLoaded({infoTemplate}))
    }),
    share(),
  )

  competitionInfoInterest$ = using(
    () => this.requireCompetitionInfo$.subscribe(),
    () => this.selectors.competitionInfo$
  )
  competitionInfoCompiledInterest$ = using(
    () => this.requireCompetitionInfo$.subscribe(),
    () => this.selectors.competitionInfoCompiled$
  )

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

  private requireFight$ = combineLatest([
    this.selectors.competitionId$,
    this.selectors.fightsFilter$]).pipe(
    filter(([competitionId, fightsFilter]) => fightsFilter.needFights && Boolean(fightsFilter.byId) && Boolean(competitionId)),
    switchMap(([competitionId, filter]) => {
      return this.infoService.getFight(competitionId, filter.byId)
        .pipe(
          tap(result => this.store.dispatch(dashboardFightLoaded({
              competitionId: competitionId,
              fightId: filter.byId,
              fightresultOptions: result.options,
              fight: result.fight
            }))
          )
        )
    }),
    share()
  )


  private requireStageFights$ = combineLatest([
    this.selectors.categoryId$,
    this.selectors.competitionId$,
    this.selectors.selectedStageId$,
    this.selectors.fightsFilter$]).pipe(
    filter(([_, competitionId, _d, fightsFilter]) => fightsFilter.needFights && !Boolean(fightsFilter.byId) && Boolean(competitionId)),
    switchMap(([categoryId, competitionId, stageId, filter]) => {
      if (filter.byStageId && stageId && categoryId) {
        return this.infoService.getCategoryStageFights(competitionId, categoryId, stageId).pipe(
          tap(fights => {
            if (fights) {
              this.store.dispatch(eventManagerFightsLoaded({fights}))
            }
          })
        )
      }
      if (Boolean(filter.byPeriodId)) {
        return this.infoService.getPeriodMats(competitionId, filter.byPeriodId)
          .pipe(
            tap(mats => {
              if (mats) {
                this.store.dispatch(dashboardMatsLoaded(mats, competitionId, filter.byPeriodId))
              }
            })
          )
      }
      if (Boolean(filter.byMatId)) {
        return this.infoService.getMatFights(competitionId, filter.byMatId)
          .pipe(
            tap(result => this.store.dispatch(dashboardMatFightsLoaded(result.fights, result.competitors, filter.byMatId)))
          )
      }
      return of();
    }),
    share()
  )

  fightsInterest$: Observable<FightDescription[]> = using(
    () => this.requireStageFights$.subscribe(),
    () => this.selectors.fights$
  )

  selectedFightInterest$: Observable<FightDescription> = using(
    () => this.requireFight$.subscribe(),
    () => this.selectors.selectedFight$
  )

  private requireFighters$ = combineLatest([
    this.selectors.competitionId$,
    this.selectors.needCompetitors$,
    this.selectors.categoryId$,
    this.selectors.competitorsPageSize$,
    this.selectors.competitorsPageNumber$]).pipe(
    filter(([competitionId, needCompetitors]) => Boolean(competitionId) && needCompetitors),
    switchMap(([competitionId, _, categoryId, pageSize, pageNumber]) => this.infoService.getCompetitorsForCompetition(competitionId, categoryId, pageNumber, pageSize, undefined)
      .pipe(
        tap(response => {
          if (response.pageInfo.total != null && response.pageInfo.page != null) {
            this.store.dispatch(eventManagerFightersForCompetitionLoaded(competitionId, response, true));
          }
        })
      )),
    share()
  )

  fighters$: Observable<Competitor[]> = using(
    () => this.requireFighters$.subscribe(),
    () => this.selectors.fighters$
  )
}
