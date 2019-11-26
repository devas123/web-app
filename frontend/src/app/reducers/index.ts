import {COMPETITION_LIST_LOADED} from '../actions/actions';
import {Action, ActionReducer, ActionReducerMap, createSelector, MetaReducer} from '@ngrx/store';
import {environment} from '../../environments/environment';
/**
 * storeFreeze prevents state from being mutated. When mutation occurs, an
 * exception will be thrown. This is useful during development mode to
 * ensure that none of the reducers accidentally mutates the state.
 */
import {storeFreeze} from 'ngrx-store-freeze';
import {AccountState, initialAccountState} from '../modules/account/flux/account.state';
import {accountStateReducer} from '../modules/account/flux/reducers';
import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';
import {
  AcademiesCollection,
  academiesInitialState,
  CategoriesCollection,
  categoriesInitialState,
  categoryEntityAdapter,
  competitorEntityAdapter,
  CompetitorsCollection,
  competitorsInitialState
} from '../modules/competition/reducers';
import * as competitorsActions from '../modules/competition/actions/competitors';
import {Category, Fight, Period} from '../commons/model/competition.model';
import {ScheduleProperties} from '../modules/event-manager/redux/event-manager-reducers';

export interface AppState {
  events: EventPropsEntities;
  accountState: AccountState;
}

export interface CommonAction extends Action {
  payload: any;
  categoryId: string | null;
  competitionId: string | null;
}

export const competitionPropertiesEntitiesAdapter: EntityAdapter<CompetitionProperties> = createEntityAdapter<CompetitionProperties>({
  selectId: (competitionProperties: CompetitionProperties) => competitionProperties.id,
  sortComparer: false
});

export interface EventPropsEntities extends EntityState<CompetitionProperties> {
  selectedEventId: string | null;
  selectedEventCategories: CategoriesCollection;
  selectedEventCompetitors: CompetitorsCollection;
  selectedEventAcademies: AcademiesCollection;
  selectedEventSchedule: Schedule;
  selectedEventDefaultCategories: Category[];
}

export interface Schedule {
  scheduleProperties: ScheduleProperties;
  competitionId: string;
  periods: Period[];
}

export const scheduleInitialState: Schedule = {
  scheduleProperties: {
    periodPropertiesList: [],
    competitionId: null,
  },
  periods: [],
  competitionId: null
};

export const competitionPropertiesEntitiesInitialState: EventPropsEntities = competitionPropertiesEntitiesAdapter.getInitialState({
  selectedEventId: null,
  selectedEventCategories: categoriesInitialState,
  selectedEventCompetitors: competitorsInitialState,
  selectedEventAcademies: academiesInitialState,
  selectedEventSchedule: scheduleInitialState,
  selectedEventDefaultCategories: []
});

export interface RegistrationGroup {
  id: string;
  displayName: string;
  registrationFee: number;
  registrationPeriodId: string;
}

export interface RegistrationPeriod {
  id: string;
  name: string;
  start: string;
  end: string;
  competitionId: string;
  registrationGroups: RegistrationGroup[];
}

export interface RegistrationInfo {
  registrationPeriods: RegistrationPeriod[];
  registrationOpen: boolean;
}

export interface CompetitionProperties {
  infoTemplate: string;
  creatorId: any;
  id: string;
  competitionName: string;
  registrationInfo: RegistrationInfo;
  startDate: string;
  schedulePublished: boolean;
  bracketsPublished: boolean;
  status: string;
  endDate: string;
  timeZone: string;
}

export interface Error {
  type: string;
  description: string;
}

export function competitionList(state: EventPropsEntities = competitionPropertiesEntitiesInitialState, action): EventPropsEntities {
  switch (action.type) {
    case COMPETITION_LIST_LOADED:
      const payload = action.payload as CompetitionProperties[];
      const updates = payload;
      const newState = competitionPropertiesEntitiesAdapter.removeAll(state);
      return competitionPropertiesEntitiesAdapter.upsertMany(updates, newState);
    case competitorsActions.COMPETITOR_ADDED: {
      const {competitor} = action.payload;
      if (state.selectedEventId === action.competitionId) {
        return {
          ...state,
          selectedEventCompetitors: competitorEntityAdapter.addOne(competitor, state.selectedEventCompetitors)
        };
      } else {
        return state;
      }
    }
    case competitorsActions.COMPETITOR_UPDATED: {
      const {competitor} = action.payload;
      if (state.selectedEventId === action.competitionId) {
        const update = {id: competitor.email, changes: competitor};
        return {
          ...state,
          selectedEventCompetitors: competitorEntityAdapter.updateOne(update, state.selectedEventCompetitors),
        };
      } else {
        return state;
      }
    }
    case competitorsActions.COMPETITOR_REMOVED: {
      const {fighterId} = action.payload;
      if (state.selectedEventId === action.competitionId) {
        return {
          ...state,
          selectedEventCompetitors: competitorEntityAdapter.removeOne(fighterId, state.selectedEventCompetitors)
        };
      } else {
        return state;
      }
    }

    default:
      return state;
  }
}

export const reducers: ActionReducerMap<AppState> = {
  events: competitionList,
  accountState: accountStateReducer,
};

export function logger(reducer: ActionReducer<AppState>): ActionReducer<AppState> {
  return function (state: AppState, action: any): AppState {
    console.log('action', action);
    const newState = reducer(state, action);
    console.log('state', newState);
    return newState;
  };
}

export const metaReducers: MetaReducer<AppState>[] = !environment.production
  ? [logger, storeFreeze]
  : [];

export const selectCompetitionListState = (state: AppState) => (state && state.events) || competitionPropertiesEntitiesInitialState;
export const getSelectedEventId = createSelector(selectCompetitionListState, state => state && state.selectedEventId);
const selectCategoriesEntities = createSelector(selectCompetitionListState, state => state && state.selectedEventCategories);
export const selectAccountState = (state: AppState) => (state && state.accountState) || initialAccountState;
export const selectUser = createSelector(selectAccountState, state => state && state.user);
export const selectUserId = createSelector(selectUser, state => state && state.userId);

export const {
  selectAll: getAllCompetitions,
} = competitionPropertiesEntitiesAdapter.getSelectors(selectCompetitionListState);

export const selectAllCompetitions = getAllCompetitions;

export const getSelectedEventProperties = createSelector(
  getAllCompetitions,
  getSelectedEventId,
  (entities, selectedId) => {
    return selectedId && entities[selectedId];
  }
);

export const {
  // select the array of users
  selectAll: getAllCategories,
} = categoryEntityAdapter.getSelectors(selectCategoriesEntities);

export const getSelectedCompetitionCategories = getAllCategories;
