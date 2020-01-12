import {Action, ActionReducer, ActionReducerMap, createFeatureSelector, MetaReducer} from '@ngrx/store';
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
import {CategoriesCollection, categoriesInitialState, Category, CompetitorsCollection, competitorsInitialState, Period, ScheduleProperties} from '../commons/model/competition.model';
import * as fromRouter from '@ngrx/router-store';

export interface AppState {
  accountState: AccountState;
  router: fromRouter.RouterReducerState<any>;
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
  selectedEventSchedule: scheduleInitialState,
  selectedEventDefaultCategories: []
});

export interface RegistrationGroup {
  id: string;
  displayName: string;
  defaultGroup: boolean;
  registrationFee: number;
  registrationPeriodIds: string[];
  registrationInfoId: string;
  categories: string[];
}

export interface RegistrationPeriod {
  id: string;
  name: string;
  start: string;
  end: string;
  competitionId: string;
  registrationGroupIds: string[];
}

export interface RegistrationInfo {
  registrationPeriods: RegistrationPeriod[];
  registrationGroups: RegistrationGroup[];
  registrationOpen: boolean;
  id: string;
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

export const reducers: ActionReducerMap<AppState> = {
  accountState: accountStateReducer,
  router: fromRouter.routerReducer
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
createFeatureSelector<AppState,
    fromRouter.RouterReducerState<any>>('router');
