import {Injectable} from "@angular/core";
import {select, Store} from "@ngrx/store";
import {
  AppState,
  dashboardGetSelectedPeriodSelectedFight,
  getSelectedEventId,
  getSelectedEventInfoImage,
  getSelectedEventInfoTemplate,
  getSelectedEventInfoTemplateCompiled
} from "../reducers/global-reducers";
import {
  eventManagerGetSelectedEventCategories,
  eventManagerGetSelectedEventCompetitors,
  eventManagerGetSelectedEventCompetitorsNeedCompetitors,
  eventManagerGetSelectedEventCompetitorsPageNumber,
  eventManagerGetSelectedEventCompetitorsPageSize,
  eventManagerGetSelectedEventSelectedCategory,
  eventManagerGetSelectedEventSelectedCategoryFightsFilter,
  eventManagerGetSelectedEventSelectedCategoryId,
  eventManagerGetSelectedEventSelectedCategorySelectedStageFights,
  eventManagerGetSelectedEventSelectedCategorySelectedStageId,
  eventManagerGetSelectedEventSelectedCategorySelectedStages,
} from "../modules/event-manager/redux/event-manager-reducers";
import {Observable} from "rxjs";
import {CategoryState, Competitor, FightDescription, StageDescriptor} from "@frontend-nx/protobuf";
import {FightsFilter} from "../commons/model/competition.model";

@Injectable()
export class SelectorsService {
  constructor(private store: Store<AppState>) {
  }

  category$: Observable<CategoryState> = this.store.pipe(
    select(eventManagerGetSelectedEventSelectedCategory)
  );

  categories$: Observable<CategoryState[]> = this.store.pipe(
    select(eventManagerGetSelectedEventCategories)
  );

  stages$: Observable<StageDescriptor[]> = this.store.pipe(
    select(eventManagerGetSelectedEventSelectedCategorySelectedStages)
  );

  fights$: Observable<FightDescription[]> = this.store.pipe(
    select(eventManagerGetSelectedEventSelectedCategorySelectedStageFights)
  );

  selectedFight$: Observable<FightDescription> = this.store.pipe(
    select(dashboardGetSelectedPeriodSelectedFight)
  );

  fighters$: Observable<Competitor[]> = this.store.pipe(
    select(eventManagerGetSelectedEventCompetitors)
  )

  selectedStageId$: Observable<string> = this.store.pipe(
    select(eventManagerGetSelectedEventSelectedCategorySelectedStageId)
  );
  fightsFilter$: Observable<FightsFilter> = this.store.pipe(
    select(eventManagerGetSelectedEventSelectedCategoryFightsFilter)
  );
  needCompetitors$: Observable<boolean> = this.store.pipe(
    select(eventManagerGetSelectedEventCompetitorsNeedCompetitors)
  );
  competitorsPageSize$: Observable<number> = this.store.pipe(
    select(eventManagerGetSelectedEventCompetitorsPageSize)
  );
  competitorsPageNumber$: Observable<number> = this.store.pipe(
    select(eventManagerGetSelectedEventCompetitorsPageNumber)
  );
  categoryId$: Observable<string> = this.store.pipe(
    select(eventManagerGetSelectedEventSelectedCategoryId)
  );

  competitionId$: Observable<string> = this.store.pipe(
    select(getSelectedEventId)
  );

  competitionInfo$: Observable<string> = this.store.pipe(
    select(getSelectedEventInfoTemplate)
  );
  competitionImage$: Observable<string> = this.store.pipe(
    select(getSelectedEventInfoImage)
  );
  competitionInfoCompiled$: Observable<string> = this.store.pipe(
    select(getSelectedEventInfoTemplateCompiled)
  );

}
