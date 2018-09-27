import {COMPETITION_LIST_LOADED} from '../actions/actions';
import {Action, ActionReducer, ActionReducerMap, createSelector, MetaReducer} from '@ngrx/store';
import {environment} from '../../environments/environment';
/**
 * storeFreeze prevents state from being mutated. When mutation occurs, an
 * exception will be thrown. This is useful during development mode to
 * ensure that none of the reducers accidentally mutates the state.
 */
import {storeFreeze} from 'ngrx-store-freeze';
import {AccountState} from '../modules/account/flux/account.state';
import {accountStateReducer} from '../modules/account/flux/reducers';
import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';
import {
  AcademiesCollection, academiesInitialState,
  CategoriesCollection,
  categoriesInitialState,
  categoryEntityAdapter,
  competitorEntityAdapter, CompetitorsCollection, competitorsInitialState
} from '../modules/competition/reducers';
import * as competitorsActions from '../modules/competition/actions/competitors';
import {Category, Period} from '../commons/model/competition.model';
import {ScheduleProperties} from '../modules/event-manager/redux/event-manager-reducers';
import {EntitySelectors} from '@ngrx/entity/src/models';
import {dashboardGetPeriodsCollection, periodEntityAdapter} from '../modules/event-manager/redux/dashboard-reducers';

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
  selectId: (competitionProperties: CompetitionProperties) => competitionProperties.competitionId,
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

export interface CompetitionProperties {
  infoTemplate: string;
  creatorId: any;
  competitionId: string;
  competitionName: string;
  registrationFee: string;
  startDate: number;
  schedulePublished: boolean;
  bracketsPublished: boolean;
  status: string;
  endDate: number;
  registrationOpen: boolean;
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
      const {categoryId, competitor} = action.payload;
      if (state.selectedEventId === action.competitionId && state.selectedEventCategories.selectedCategoryId === categoryId) {
        return {
          ...state,
          selectedEventCategories: {
            ...state.selectedEventCategories,
            selectedCategoryCompetitors: competitorEntityAdapter.addOne(competitor, state.selectedEventCategories.selectedCategoryCompetitors)
          }
        };
      } else {
        return state;
      }
    }
    case competitorsActions.COMPETITOR_UPDATED: {
      const {categoryId, competitor} = action.payload;
      if (state.selectedEventId === action.competitionId && state.selectedEventCategories.selectedCategoryId === categoryId) {
        const update = {id: competitor.email, changes: competitor};
        return {
          ...state,
          selectedEventCategories: {
            ...state.selectedEventCategories,
            selectedCategoryCompetitors: competitorEntityAdapter.updateOne(update, state.selectedEventCategories.selectedCategoryCompetitors)
          }
        };
      } else {
        return state;
      }
    }
    case competitorsActions.COMPETITOR_REMOVED: {
      const {categoryId, email} = action.payload;
      if (state.selectedEventId === action.competitionId && state.selectedEventCategories.selectedCategoryId === categoryId) {
        return {
          ...state,
          selectedEventCategories: {
            ...state.selectedEventCategories,
            selectedCategoryCompetitors: competitorEntityAdapter.removeOne(email, state.selectedEventCategories.selectedCategoryCompetitors)
          }
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

export const selectCompetitionListState = state => (state && state.events) || competitionPropertiesEntitiesInitialState;
export const getSelectedEventId = createSelector(selectCompetitionListState, state => state && state.selectedEventId);
const selectCategoriesEntities = createSelector(selectCompetitionListState, state => state && state.selectedEventCategories);
export const selectAccountState = state => state && state.accountState;

export const selectUser = createSelector(selectAccountState, state => state && state.user);

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
