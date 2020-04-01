import {Observable} from 'rxjs';
import {
  AppState,
  CompetitionProperties,
  eventManagerGetSelectedEventSchedule,
  getSelectedEventId, getSelectedEventMats,
  getSelectedEventProperties, getSelectedEventScheduleFightsByCategoryId,
  getSelectedEventSelectedPeriod,
  MatDescription,
  Schedule
} from '../../reducers/global-reducers';
import {Category, Period, ScheduleRequirement} from '../model/competition.model';
import {select, Store} from '@ngrx/store';
import {
  eventManagerGetSelectedEventCategories,
  eventManagerGetSelectedEventScheduleEmpty,
  eventManagerGetSelectedEventTimeZone,
  getSelectedEventPeriods,
  getSelectedEventUndispatchedRequirements
} from '../../modules/event-manager/redux/event-manager-reducers';
import {filter, map, take} from 'rxjs/operators';
import {Injectable} from '@angular/core';
import {Dictionary} from '@ngrx/entity';

@Injectable()
export class CommonScheduleInfoContainerService {
  schedule$: Observable<Schedule>;
  categories$: Observable<Category[]>;
  scheduleEmpty$: Observable<boolean>;
  timeZone$: Observable<string>;
  competitionId$: Observable<string>;
  periods$: Observable<Period[]>;
  undispatchedRequirements$: Observable<ScheduleRequirement[]>;
  mats$: Observable<MatDescription[]>;
  selectedCompetitionProperties$: Observable<CompetitionProperties>;
  selectedPeriod$: Observable<Period>;
  fightsByCategoryId$: Observable<Dictionary<string[]>>;


  constructor(private store: Store<AppState>) {
    this.schedule$ = store.pipe(select(eventManagerGetSelectedEventSchedule));
    this.periods$ = store.pipe(select(getSelectedEventPeriods));
    this.undispatchedRequirements$ = store.pipe(select(getSelectedEventUndispatchedRequirements));
    this.scheduleEmpty$ = this.store.pipe(select(eventManagerGetSelectedEventScheduleEmpty));
    this.competitionId$ = this.store.pipe(select(getSelectedEventId));
    this.categories$ = store.pipe(select(eventManagerGetSelectedEventCategories));
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
