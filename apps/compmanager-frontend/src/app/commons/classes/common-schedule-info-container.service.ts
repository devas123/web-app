import {Observable} from 'rxjs';
import {
  AppState,
  eventManagerGetSelectedEventSchedule,
  getSelectedEventId,
  getSelectedEventMats,
  getSelectedEventProperties,
  getSelectedEventScheduleFightsByCategoryId,
  getSelectedEventSelectedPeriod,
  InternalScheduleState,
} from '../../reducers/global-reducers';
import {select, Store} from '@ngrx/store';
import {
  eventManagerGetSelectedEventScheduleEmpty,
  eventManagerGetSelectedEventTimeZone,
  getSelectedEventPeriods,
  getSelectedEventUndispatchedRequirements
} from '../../modules/event-manager/redux/event-manager-reducers';
import {filter, map, take} from 'rxjs/operators';
import {Injectable} from '@angular/core';
import {Dictionary} from '@ngrx/entity';
import {CategoryState, CompetitionProperties, MatState, Period, ScheduleRequirement} from "@frontend-nx/protobuf";
import {DataProviderService} from "../../service/data.provider.service";

@Injectable()
export class CommonScheduleInfoContainerService {
  schedule$: Observable<InternalScheduleState>;
  categories$: Observable<CategoryState[]>;
  scheduleEmpty$: Observable<boolean>;
  timeZone$: Observable<string>;
  competitionId$: Observable<string>;
  periods$: Observable<Period[]>;
  undispatchedRequirements$: Observable<ScheduleRequirement[]>;
  mats$: Observable<MatState[]>;
  selectedCompetitionProperties$: Observable<CompetitionProperties>;
  selectedPeriod$: Observable<Period>;
  fightsByCategoryId$: Observable<Dictionary<string[]>>;


  constructor(private store: Store<AppState>, private dataProviderService: DataProviderService) {
    this.schedule$ = store.pipe(select(eventManagerGetSelectedEventSchedule));
    this.periods$ = store.pipe(select(getSelectedEventPeriods));
    this.undispatchedRequirements$ = store.pipe(select(getSelectedEventUndispatchedRequirements));
    this.scheduleEmpty$ = this.store.pipe(select(eventManagerGetSelectedEventScheduleEmpty));
    this.competitionId$ = this.store.pipe(select(getSelectedEventId));
    this.categories$ = dataProviderService.categoriesInterest$;
    this.timeZone$ = store.pipe(select(eventManagerGetSelectedEventTimeZone));
    this.selectedCompetitionProperties$ = store.pipe(select(getSelectedEventProperties));
    this.selectedPeriod$ = this.store.pipe(select(getSelectedEventSelectedPeriod));
    this.mats$ = this.store.pipe(select(getSelectedEventMats));
    this.fightsByCategoryId$ = this.store.pipe(select(getSelectedEventScheduleFightsByCategoryId));
  }

  sendCommandFromCompetitionId(actionBuilder: (competitionId) => any) {
    this.competitionId$.pipe(take(1), map(competitionId => {
      if (competitionId) {
        return actionBuilder(competitionId);
      }
    }), filter(act => !!act && !!act.type)).subscribe(this.store);
  }

}
