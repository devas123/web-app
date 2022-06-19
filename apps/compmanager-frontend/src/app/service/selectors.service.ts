import {Injectable} from "@angular/core";
import {select, Store} from "@ngrx/store";
import {AppState, getSelectedEventId} from "../reducers/global-reducers";
import {
  eventManagerGetSelectedEventCompetitors,
  eventManagerGetSelectedEventCompetitorsPageNumber,
  eventManagerGetSelectedEventCompetitorsPageSize,
  eventManagerGetSelectedEventSelectedCategory,
  eventManagerGetSelectedEventSelectedCategoryId,
  eventManagerGetSelectedEventSelectedCategorySelectedStageFights,
  eventManagerGetSelectedEventSelectedCategorySelectedStageId,
  eventManagerGetSelectedEventSelectedCategorySelectedStages,
} from "../modules/event-manager/redux/event-manager-reducers";
import {Observable} from "rxjs";
import {CategoryState, Competitor, FightDescription, StageDescriptor} from "@frontend-nx/protobuf";

@Injectable()
export class SelectorsService {
  constructor(private store: Store<AppState>) {
  }

  category$: Observable<CategoryState> = this.store.pipe(
    select(eventManagerGetSelectedEventSelectedCategory)
  );

  stages$: Observable<StageDescriptor[]> = this.store.pipe(
    select(eventManagerGetSelectedEventSelectedCategorySelectedStages)
  );

  stageFights$: Observable<FightDescription[]> = this.store.pipe(
    select(eventManagerGetSelectedEventSelectedCategorySelectedStageFights)
  );

  fighters$: Observable<Competitor[]> = this.store.pipe(
    select(eventManagerGetSelectedEventCompetitors)
  )

  selectedStageId$: Observable<string> = this.store.pipe(
    select(eventManagerGetSelectedEventSelectedCategorySelectedStageId)
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

}
