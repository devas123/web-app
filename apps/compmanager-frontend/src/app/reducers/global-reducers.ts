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
import {createEntityAdapter, Dictionary, EntityAdapter, EntityState, Update} from '@ngrx/entity';
import * as _ from 'lodash';

import {
  CategoriesCollection,
  categoriesInitialState,
  categoryEntityAdapter,
  competitorEntityAdapter,
  CompetitorsCollection,
  competitorsInitialState,
  fightEntityAdapter,
  FightsCollection,
  fightsInitialState,
  HeaderDescription,
  stagesEntityAdapter,
  stagesInitialState
} from '../commons/model/competition.model';
import {
  CATEGORY_ADDED,
  CATEGORY_DELETED,
  CATEGORY_STATE_DELETED,
  COMPETITION_SELECTED,
  COMPETITION_UNSELECTED,
  EVENT_MANAGER_ALL_BRACKETS_DROPPED,
  EVENT_MANAGER_CATEGORIES_LOADED,
  EVENT_MANAGER_CATEGORY_BRACKETS_DROPPED,
  EVENT_MANAGER_CATEGORY_BRACKETS_STAGE_FIGHTS_LOADED,
  EVENT_MANAGER_CATEGORY_BRACKETS_STAGE_SELECTED,
  EVENT_MANAGER_CATEGORY_MOVED,
  EVENT_MANAGER_CATEGORY_SELECTED,
  EVENT_MANAGER_CATEGORY_STAGES_LOADED,
  EVENT_MANAGER_CATEGORY_STATE_LOADED,
  EVENT_MANAGER_CATEGORY_UNSELECTED,
  EVENT_MANAGER_COMPETITOR_ADDED,
  EVENT_MANAGER_COMPETITOR_UPDATED,
  EVENT_MANAGER_DEFAULT_FIGHT_RESULTS_LOADED,
  EVENT_MANAGER_FIGHTER_LOADED,
  EVENT_MANAGER_FIGHTER_SELECTED,
  EVENT_MANAGER_FIGHTER_UNSELECTED,
  EVENT_MANAGER_FIGHTERS_FOR_COMPETITION_LOADED,
  EVENT_MANAGER_FIGHTERS_FOR_COMPETITION_PAGE_UPDATED,
  EVENT_MANAGER_GENERATE_SCHEDULE_COMMAND,
  EVENT_MANAGER_HEADER_REMOVE,
  EVENT_MANAGER_HEADER_SET,
  EVENT_MANAGER_PERIOD_ADDED,
  EVENT_MANAGER_PERIOD_REMOVED,
  EVENT_MANAGER_PREVIEW_CATEGORIES_CLEARED,
  EVENT_MANAGER_PREVIEW_CATEGORIES_GENERATED,
  EVENT_MANAGER_REGISTRATION_GROUP_CREATED,
  EVENT_MANAGER_REGISTRATION_GROUP_DELETED,
  EVENT_MANAGER_SCHEDULE_DROPPED,
  EVENT_MANAGER_SCHEDULE_LOADED,
  EVENT_MANAGER_SCHEDULE_PERIODS_UPDATED,
  FIGHT_IDS_BY_CATEGORY_ID_LOADED,
  FIGHTS_START_TIME_UPDATED,
  REGISTRATION_INFO_UPDATED,
  SCHEDULE_GENERATED
} from '../modules/event-manager/redux/event-manager-actions';
import produce from 'immer';
import {
  COMPETITION_LIST_LOADED,
  COMPETITION_PUBLISHED,
  COMPETITION_UNPUBLISHED,
  REGISTRATION_INFO_LOADED
} from '../actions/actions';
import * as competitorsActions from '../modules/competition/redux/actions/competitors';
import {COMPETITION_PROPERTIES_LOADED} from '../actions/misc';
import {
  DASHBOARD_FIGHT_LOADED,
  DASHBOARD_FIGHT_SELECTED,
  DASHBOARD_FIGHT_UNSELECTED,
  DASHBOARD_MAT_FIGHTS_LOADED,
  DASHBOARD_MAT_FIGHTS_UNLOADED,
  DASHBOARD_MAT_SELECTED,
  DASHBOARD_MAT_UNSELECTED,
  DASHBOARD_MATS_LOADED,
  PERIOD_SELECTED
} from '../modules/event-manager/redux/dashboard-actions';
import {generateUuid} from "../modules/account/utils";
import {
  CategoryDescriptor,
  CompetitionProperties,
  Competitor,
  Event,
  EventType,
  FightDescription,
  FightResultOption,
  ManagedCompetition,
  MatDescription,
  Period,
  RegistrationInfo,
  ScheduleRequirement
} from "@frontend-nx/protobuf";

export type SuccessCallback = (actions: Action[]) => any
export type ErrorCallback = (error: any) => any

export interface AppState {
  events: EventPropsEntities;
  accountState: AccountState;
  selectedEventState: CompetitionState;
  header: HeaderDescription;
}

export interface CommonAction extends Action {
  payload: any;
  categoryId: string | null;
  competitionId: string | null;
}


export interface MatsCollection extends EntityState<MatDescription> {
  selectedMatId: string | null;
  matsFights: FightsCollection;
}

export const matEntityAdapter: EntityAdapter<MatDescription> = createEntityAdapter<MatDescription>({
  selectId: (c: MatDescription) => c.id || btoa(c.name + c.periodId),
  sortComparer: false
});

export const matsInitialState = matEntityAdapter.getInitialState({
  selectedMatId: null,
  matsFights: fightsInitialState
});

export interface InternalScheduleState {
  competitionId: string;
  periods: PeriodEntities;
  undispatchedRequirements: ScheduleRequirement[];
  fightIdsBycategoryId: Dictionary<string[]>;
}


export interface CompetitionState {
  selectedEventCategories: CategoriesCollection;
  selectedEventPreviewCategories: CategoriesCollection;
  selectedEventCompetitors: CompetitorsCollection;
  selectedEventMats: MatsCollection;
  selectedEventSchedule: InternalScheduleState;
  selectedEventDefaultFightResultOptions: FightResultOption[];
  competitionProperties: CompetitionProperties;
  registrationInfo: RegistrationInfo;
}

export const competitionPropertiesEntitiesAdapter: EntityAdapter<ManagedCompetition> = createEntityAdapter<ManagedCompetition>({
  selectId: (competitionProperties: ManagedCompetition) => competitionProperties.id,
  sortComparer: false
});

export interface EventPropsEntities extends EntityState<ManagedCompetition> {
  selectedEventId: string | null;
}

export interface PeriodEntities extends EntityState<Period> {
  selectedPeriodId: string | null;
}

export const periodEntityAdapter: EntityAdapter<Period> = createEntityAdapter<Period>({
  selectId: (period: Period) => period && period.id,
  sortComparer: false
});

export const periodEntityInitialState = periodEntityAdapter.getInitialState({
  selectedPeriodId: null
});

export const scheduleInitialState: InternalScheduleState = {
  periods: periodEntityInitialState,
  undispatchedRequirements: [],
  competitionId: null,
  fightIdsBycategoryId: {}
};

export const initialCompetitionState: CompetitionState = {
  selectedEventCategories: categoriesInitialState,
  selectedEventPreviewCategories: categoriesInitialState,
  registrationInfo: <RegistrationInfo>{},
  selectedEventCompetitors: competitorsInitialState,
  selectedEventSchedule: scheduleInitialState,
  selectedEventDefaultFightResultOptions: [],
  competitionProperties: <CompetitionProperties>{},
  selectedEventMats: matsInitialState
};

export const competitionPropertiesEntitiesInitialState: EventPropsEntities = competitionPropertiesEntitiesAdapter.getInitialState({
  selectedEventId: null
});

export const reducers: ActionReducerMap<AppState> = {
  events: competitionListReducer,
  accountState: accountStateReducer,
  selectedEventState: competitionStateReducer,
  header: headerReducer,
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

export function competitionListReducer(state: EventPropsEntities = competitionPropertiesEntitiesInitialState, action): EventPropsEntities {
  switch (action.type) {
    case COMPETITION_LIST_LOADED:
      const payload = action.payload as ManagedCompetition[];
      return competitionPropertiesEntitiesAdapter.setAll(payload, state);
    case COMPETITION_SELECTED: {
      return {...state, selectedEventId: action.competitionId};
    }
    case COMPETITION_UNSELECTED:
      return {
        ...state,
        selectedEventId: null
      };

    case COMPETITION_PUBLISHED:
    case COMPETITION_UNPUBLISHED: {
      const payload = action.payload as CompetitionProperties;
      const update = {id: action.competitionId, changes: {...payload}};
      return competitionPropertiesEntitiesAdapter.updateOne(update, state);
    }
    case EventType.COMPETITION_PROPERTIES_UPDATED: {
      const event = action as Event;
      const properties = event.messageInfo.competitionPropertiesUpdatedPayload?.properties;
      const newCompetition = <ManagedCompetition>{
        id: properties.id,
        startsAt: properties.startDate,
        competitionName: properties.competitionName,
        createdAt: properties.creationTimestamp,
        endsAt: properties.endDate,
        status: properties.status,
        creatorId: properties.creatorId,
        eventsTopic: '',
        timeZone: properties.timeZone
      }
      return competitionPropertiesEntitiesAdapter.updateOne(<Update<ManagedCompetition>>{
        id: properties.id,
        changes: newCompetition
      }, state);
    }
    case EventType.COMPETITION_CREATED: {
      const event = action as Event;
      const properties = event.messageInfo.competitionCreatedPayload?.properties;
      const newCompetition = <ManagedCompetition>{
        id: properties.id,
        startsAt: properties.startDate,
        competitionName: properties.competitionName,
        createdAt: properties.creationTimestamp,
        endsAt: properties.endDate,
        status: properties.status,
        creatorId: properties.creatorId,
        eventsTopic: '',
        timeZone: properties.timeZone
      }
      return competitionPropertiesEntitiesAdapter.addOne(newCompetition, state);
    }
    case EventType.COMPETITION_DELETED: {
      const event = action as Event;
      return competitionPropertiesEntitiesAdapter.removeOne(event.messageInfo.competitionId, state);
    }
    default:
      return state;
  }
}

export function headerReducer(state: HeaderDescription = null, action: CommonAction): HeaderDescription {
  switch (action.type) {
    case EVENT_MANAGER_HEADER_SET: {
      return action.payload as HeaderDescription;
    }
    case EVENT_MANAGER_HEADER_REMOVE: {
      return null;
    }
  }
  return state;
}


export function competitionStateReducer(st: CompetitionState = initialCompetitionState, action) {
  return produce(st, state => {
    switch (action.type) {
      case COMPETITION_UNSELECTED: {
        return initialCompetitionState;
      }
      case EVENT_MANAGER_CATEGORY_BRACKETS_STAGE_SELECTED: {
        if (state.selectedEventCategories.selectedCategoryStages.selectedStageId !== action.selectedStageId) {
          state.selectedEventCategories.selectedCategoryStages.selectedStageId = action.selectedStageId;
          state.selectedEventCategories.selectedCategoryStages.fightsAreLoading = true;
        }
        break;
      }
      case competitorsActions.COMPETITOR_ADDED: {
        const event = action as Event;
        const {competitor} = event.messageInfo.competitorAddedPayload;
        if (state.competitionProperties && (state.competitionProperties.id === event.messageInfo.competitionId)) {
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
        if (state.competitionProperties.id === action.competitionId) {
          const update = {id: competitor.email, changes: competitor};
          return {
            ...state,
            selectedEventCompetitors: competitorEntityAdapter.updateOne(update, state.selectedEventCompetitors)
          };
        } else {
          return state;
        }
      }
      case EVENT_MANAGER_REGISTRATION_GROUP_DELETED: {
        if (state.competitionProperties.id === action.competitionId
          && state.registrationInfo
          && action.payload.periodId && action.payload.groupId) {
          const {periodId, groupId} = action.payload;
          if (!state.registrationInfo.registrationGroups) {
            state.registrationInfo.registrationGroups = {};
          }
          const per = state.registrationInfo.registrationPeriods[periodId]
          per.registrationGroupIds = per.registrationGroupIds.filter(id => id !== groupId);
          const newGroups = {...state.registrationInfo.registrationGroups}
          delete newGroups[groupId];
          state.registrationInfo.registrationGroups = newGroups

        }
        break;
      }
      case EVENT_MANAGER_REGISTRATION_GROUP_CREATED: {
        if (state.competitionProperties.id === action.competitionId
          && state && state.registrationInfo
          && action.payload.periodId && action.payload.groups) {
          const registrationGroups = state.registrationInfo.registrationGroups || {};
          action.payload.groups.forEach(group => {
            registrationGroups[group.id] = group;
            if (state.registrationInfo.registrationPeriods) {
              state.registrationInfo.registrationPeriods[action.payload.periodId]?.registrationGroupIds?.push(group.id);
            }
          });
          state.registrationInfo.registrationGroups = registrationGroups;
        }
        break;
      }
      case REGISTRATION_INFO_UPDATED: {
        if (state === action.competitionId && state && action.payload.registrationInfo) {
          state.registrationInfo = action.payload.registrationInfo;
        }
        break;
      }
      case EventType.COMPETITION_PROPERTIES_UPDATED: {
        const event = action as Event;
        const competitionId = event.messageInfo.competitionId;
        if (competitionId === state.competitionProperties.id) {
          return {
            ...state,
            competitionProperties: event.messageInfo.competitionPropertiesUpdatedPayload.properties,
          };
        }
        return state;
      }

      case EVENT_MANAGER_GENERATE_SCHEDULE_COMMAND: {
        const {payload, competitionId} = action;
        if (state.competitionProperties.id === competitionId && payload) {
          return {
            ...state,
            selectedEventSchedule: {
              ...state.selectedEventSchedule,
              scheduleProperties: payload
            }
          };
        }
        return state;
      }

      case EVENT_MANAGER_CATEGORY_MOVED: {
        const {competitionId, payload} = action;

        if (state.competitionProperties.id === competitionId && payload) {
          const {from, to, category, index} = payload;
          if (category) {
            let newState = state;
            if (from) {
              let updatedPeriod = newState.selectedEventSchedule.periods.entities[from];
              if (updatedPeriod && updatedPeriod.scheduleRequirements) {
                // @ts-ignore
                updatedPeriod = {
                  ...updatedPeriod,
                  scheduleRequirements: updatedPeriod.scheduleRequirements.filter(sr => sr.categoryIds.indexOf(category.id) < 0)
                };
                const update = <Update<Period>>{
                  id: updatedPeriod.id,
                  changes: updatedPeriod
                };
                newState = {
                  ...newState,
                  selectedEventSchedule: {
                    ...newState.selectedEventSchedule,
                    periods: periodEntityAdapter.updateOne(update, newState.selectedEventSchedule.periods)
                  }
                };
              }
            }

            if (to) {
              let updatedPeriod = newState.selectedEventSchedule.periods.entities[to];
              if (updatedPeriod) {
                const periodRequirements = updatedPeriod.scheduleRequirements || [];
                const newRequirement = <ScheduleRequirement>{
                  id: competitionId + updatedPeriod.id + generateUuid(),
                  categoryIds: [category],
                  entryType: 'SCHEDULE_REQUIREMENT_TYPE_CATEGORIES',
                  periodId: updatedPeriod.id
                };
                let newCategories = [...periodRequirements, newRequirement];
                if (index && +index > 0) {
                  newCategories = [...periodRequirements.slice(0, index),
                    newRequirement, ...periodRequirements.slice(index)];
                } else {
                  newCategories = [newRequirement, ...periodRequirements];
                }
                if (updatedPeriod.scheduleRequirements) {
                  updatedPeriod = {
                    ...updatedPeriod,
                    scheduleRequirements: newCategories
                  };
                } else {
                  updatedPeriod = {
                    ...updatedPeriod,
                    scheduleRequirements: [newRequirement]
                  };
                }
                const update = <Update<Period>>{
                  id: updatedPeriod.id,
                  changes: updatedPeriod
                };
                newState = {
                  ...newState,
                  selectedEventSchedule: {
                    ...newState.selectedEventSchedule,
                    periods: periodEntityAdapter.updateOne(update, newState.selectedEventSchedule.periods)
                  }
                };
              }
            }
            return newState;
          }
        }
        return state;
      }

      case EVENT_MANAGER_CATEGORY_BRACKETS_STAGE_FIGHTS_LOADED: {
        const {fights} = action;
        if (fights && fights.length > 0) {
          state.selectedEventCategories.selectedCategoryStages.selectedStageFights
            = fightEntityAdapter.setAll(fights, fightsInitialState);
        }
        state.selectedEventCategories.selectedCategoryStages.fightsAreLoading = false;
        break;
      }

      case EVENT_MANAGER_CATEGORY_STATE_LOADED: {
        const {competitionId, categoryId, payload} = action;
        if (state.competitionProperties.id === competitionId && state.selectedEventCategories.selectedCategoryId === categoryId && payload) {
          state.selectedEventCategories.selectedCategoryState = payload;
          state.selectedEventCategories.categoryStateLoading = false;
          state.selectedEventCategories.selectedCategoryStages.fightsAreLoading = true;
        }
        break;
      }

      case EVENT_MANAGER_CATEGORY_STAGES_LOADED: {
        const {competitionId, categoryId, categoryStages, selectedStageId} = action;
        if (state.competitionProperties.id === competitionId && state.selectedEventCategories.selectedCategoryId === categoryId && categoryStages) {
          state.selectedEventCategories.selectedCategoryStages = stagesEntityAdapter.setAll(categoryStages, state.selectedEventCategories.selectedCategoryStages);
          state.selectedEventCategories.selectedCategoryStages.selectedStageId = selectedStageId;
        }
        if (!categoryStages || categoryStages.length === 0) {
          state.selectedEventCategories.selectedCategoryStages.fightsAreLoading = false;
        }
        break;
      }

      case EVENT_MANAGER_CATEGORIES_LOADED: {
        const competitionId = action.competitionId;
        const categoriesRaw = action.payload as any[];
        if (competitionId && categoriesRaw && competitionId === state.competitionProperties.id) {
          const categories = categoriesRaw.map(rwc => ({
            id: rwc.id,
            ...rwc.category,
            fightsNumber: rwc.fightsNumber,
            numberOfCompetitors: rwc.numberOfCompetitors
          } as CategoryDescriptor));
          return {
            ...state,
            selectedEventCategories: categoryEntityAdapter.upsertMany(categories, state.selectedEventCategories)
          };
        }
        return state;
      }

      case EVENT_MANAGER_PREVIEW_CATEGORIES_GENERATED: {
        const competitionId = action.competitionId;
        const categories = (action.categories || []) as CategoryDescriptor[];
        if (competitionId === state.competitionProperties.id) {
          return {
            ...state,
            selectedEventPreviewCategories: categoryEntityAdapter.setAll(categories, state.selectedEventPreviewCategories)
          };
        }
        return state;
      }
      case EVENT_MANAGER_PREVIEW_CATEGORIES_CLEARED: {
        return {
          ...state,
          selectedEventPreviewCategories: categoriesInitialState
        };
      }
      case COMPETITION_PROPERTIES_LOADED: {
        if (action.competitionId === state.competitionProperties.id) {
          state.competitionProperties = action.payload;
        } else if (!!action.competitionId && action.payload) {
          return {...initialCompetitionState, competitionProperties: action.payload};
        }
        break;
      }
      case REGISTRATION_INFO_LOADED: {
        const newRegInfo = <RegistrationInfo>{};
        newRegInfo.id = action.payload.id;
        newRegInfo.registrationOpen = action.payload.registrationOpen || false;
        newRegInfo.registrationPeriods = action.payload.registrationPeriods;
        newRegInfo.registrationGroups = action.payload.registrationGroups;
        state.registrationInfo = newRegInfo;
        break;
      }
      case COMPETITION_SELECTED: {
        state.competitionProperties.id = action.competitionId;
        break;
      }
      case COMPETITION_PUBLISHED:
      case COMPETITION_UNPUBLISHED: {
        const payload = action.payload as CompetitionProperties;
        if (state.competitionProperties.id === action.competitionId) {
          return {
            ...state,
            ...payload
          };
        }
        return state;
      }
      case EVENT_MANAGER_SCHEDULE_LOADED: {
        const {payload} = action;
        if (action.competitionId === state.competitionProperties.id && payload.periods) {
          const periods = payload.periods as Period[];
          const mats = payload.mats as MatDescription[];
          state.selectedEventMats = matEntityAdapter.setAll(mats, state.selectedEventMats);
          state.selectedEventSchedule.periods = periodEntityAdapter.setAll(periods, state.selectedEventSchedule.periods);
          state.selectedEventSchedule.competitionId = payload.id;
        }
        break;
      }
      case FIGHT_IDS_BY_CATEGORY_ID_LOADED: {
        const {fightIdsBycategoryId} = action;
        state.selectedEventSchedule.fightIdsBycategoryId = fightIdsBycategoryId;
        break;
      }
      case EVENT_MANAGER_CATEGORY_SELECTED: {
        if (action.competitionId === state.competitionProperties.id) {
          state.selectedEventCategories.selectedCategoryId = action.categoryId;
          state.selectedEventCategories.categoryStateLoading = true;
        }
        break;
      }
      case EVENT_MANAGER_DEFAULT_FIGHT_RESULTS_LOADED: {
        if (action.fightResults) {
          state.selectedEventDefaultFightResultOptions = action.fightResults;
        } else {
          state.selectedEventDefaultFightResultOptions = [];
        }
        break;
      }
      case EVENT_MANAGER_CATEGORY_UNSELECTED: {
        if (action.competitionId === state.competitionProperties.id) {
          state.selectedEventCategories.selectedCategoryId = null;
          state.selectedEventCategories.selectedCategoryStages = stagesInitialState;
          state.selectedEventCategories.categoryStateLoading = false;
        }
        break;
      }
      case EVENT_MANAGER_FIGHTERS_FOR_COMPETITION_LOADED: {
        if (action.competitionId === state.competitionProperties.id) {
          const {pageInfo, competitors} = action.payload;
          state.selectedEventCompetitors = competitorEntityAdapter.setAll(competitors, {
            ...competitorsInitialState,
            total: pageInfo.total,
            pageNumber: pageInfo.page + 1
          });
        }
        break;
      }
      case EVENT_MANAGER_COMPETITOR_ADDED: {
        if (action.competitionId === state.competitionProperties.id) {
          let newEventCompetitors = state.selectedEventCompetitors;
          if (newEventCompetitors.ids.length < newEventCompetitors.pageSize) {
            newEventCompetitors = competitorEntityAdapter.addOne(action.payload, state.selectedEventCompetitors);
          }
          newEventCompetitors = {
            ...newEventCompetitors,
            total: newEventCompetitors.total + 1
          };
          return {
            ...state,
            selectedEventCompetitors: newEventCompetitors
          };
        }
        return state;
      }
      case EVENT_MANAGER_FIGHTERS_FOR_COMPETITION_PAGE_UPDATED: {
        if (action.competitionId === state.competitionProperties.id) {
          return {
            ...state,
            selectedEventCompetitors: {
              ...state.selectedEventCompetitors,
              pageNumber: action.payload
            }
          };
        }
        return state;
      }
      case EventType.COMPETITOR_REMOVED: {
        const event = action as Event
        if (event.messageInfo?.competitionId === state.competitionProperties.id) {
          return {
            ...state,
            selectedEventCompetitors: competitorEntityAdapter.removeOne(event.messageInfo.competitorRemovedPayload.fighterId, state.selectedEventCompetitors)
          };
        }
        return state;
      }
      case CATEGORY_STATE_DELETED:
      case CATEGORY_DELETED:
        if (action.competitionId === state.competitionProperties.id && action.id) {
          let newState = {
            ...state,
            selectedEventCategories: categoryEntityAdapter.removeOne(action.id, state.selectedEventCategories)
          };
          if (action.id === newState.selectedEventCategories.selectedCategoryId) {
            newState = {
              ...newState,
              selectedEventCategories: {
                ...newState.selectedEventCategories,
                selectedCategoryState: null
              }
            };
          }
          return newState;
        }
        return state;
      case EVENT_MANAGER_PERIOD_REMOVED: {
        if (action.competitionId === state.competitionProperties.id) {
          const periodId = action.payload;
          state.selectedEventSchedule.periods = periodEntityAdapter.removeOne(periodId, state.selectedEventSchedule.periods);
          const mats = _.values(state.selectedEventMats.entities);
          state.selectedEventMats = matEntityAdapter.setAll(mats.filter(m => m.periodId !== periodId), state.selectedEventMats);
        }
        break;
      }
      case SCHEDULE_GENERATED: {
        const {competitionId, payload} = action;
        if (state.competitionProperties.id === competitionId && payload) {
          const {schedule} = payload;
          if (schedule) {
            state.selectedEventSchedule.periods = periodEntityAdapter.setAll(schedule.periods, periodEntityInitialState);
            state.selectedEventSchedule.competitionId = competitionId;
          }
        }
        break;
      }
      case FIGHTS_START_TIME_UPDATED: {
        const {competitionId, payload, categoryId} = action;
        if (state.selectedEventCategories.selectedCategoryId === categoryId && state.competitionProperties.id === competitionId && payload) {
          const {newFights} = payload;
          if (newFights) {
            state.selectedEventCategories.selectedCategoryStages.selectedStageFights
              = fightEntityAdapter.setAll(newFights, fightsInitialState);
          }
        }
        break;
      }
      case EVENT_MANAGER_PERIOD_ADDED: {
        if (action.competitionId === state.competitionProperties.id) {
          const {period, mats} = action.payload;
          if (period && mats) {
            state.selectedEventMats = matEntityAdapter.addMany(mats, state.selectedEventMats);
            state.selectedEventSchedule.periods = periodEntityAdapter.addOne(period, state.selectedEventSchedule.periods);
          }
        }
        break;
      }
      case EVENT_MANAGER_SCHEDULE_PERIODS_UPDATED: {
        const {periods, undispatchedRequirements} = action;
        state.selectedEventSchedule.periods = periodEntityAdapter.setAll(periods, periodEntityInitialState);
        state.selectedEventSchedule.undispatchedRequirements = undispatchedRequirements || [];
        break;
      }
      case DASHBOARD_MATS_LOADED: {
        if (action.payload) {
          const payload = action.payload as { mats: { matDescription: MatDescription, numberOfFights: number, topFiveFights: FightDescription[] }[], competitors: Competitor[] };
          state.selectedEventMats = matEntityAdapter.upsertMany(payload.mats.map(m => (<MatDescription>{
            ...m.matDescription,
            numberOfFights: m.numberOfFights
          })), state.selectedEventMats);
          const fights = _.flatten(payload.mats.map(m => m.topFiveFights))
          state.selectedEventMats.matsFights = fightEntityAdapter.upsertMany(fights, fightsInitialState)
          state.selectedEventCompetitors = competitorEntityAdapter.upsertMany(payload.competitors, competitorsInitialState)
        }
        break;
      }
      case DASHBOARD_FIGHT_LOADED: {
        if (state.selectedEventMats.matsFights.selectedFightId === action.fightId) {
          state.selectedEventMats.matsFights.selectedFightFightResultOptions = action.fightresultOptions || [];
          if (action.fight) {
            state.selectedEventMats.matsFights = fightEntityAdapter.upsertOne(action.fight, state.selectedEventMats.matsFights);
          }
        }
        break;
      }
      case DASHBOARD_MAT_SELECTED: {
        state.selectedEventMats.selectedMatId = action.payload;
        break;
      }
      case DASHBOARD_MAT_UNSELECTED: {
        state.selectedEventMats.selectedMatId = null;
        break;
      }
      case DASHBOARD_MAT_FIGHTS_LOADED: {
        const {fights, competitors} = action.payload;
        if (fights && competitors) {
          const currentMatFights = _.flowRight(_.curryRight(_.filter)(f => f.matId !== action.matId), _.values)(state.selectedEventMats.matsFights.entities) as FightDescription[];
          state.selectedEventMats.matsFights = fightEntityAdapter.setAll([...fights, ...currentMatFights], state.selectedEventMats.matsFights);
          state.selectedEventCompetitors = competitorEntityAdapter.upsertMany(competitors, state.selectedEventCompetitors);
        }
        break;
      }
      case DASHBOARD_MAT_FIGHTS_UNLOADED: {
        state.selectedEventMats.matsFights = fightsInitialState;
        state.selectedEventCompetitors = competitorsInitialState;
        break;
      }
      case DASHBOARD_FIGHT_SELECTED: {
        state.selectedEventMats.matsFights.selectedFightId = action.payload;
        break;
      }
      case DASHBOARD_FIGHT_UNSELECTED: {
        state.selectedEventMats.matsFights.selectedFightId = null;
        break;
      }
      case EVENT_MANAGER_FIGHTER_SELECTED: {
        const {competitionId, payload} = action;
        if (state.competitionProperties.id === competitionId && payload) {
          return {
            ...state,
            selectedEventCompetitors: {
              ...state.selectedEventCompetitors,
              selectedCompetitorId: payload
            }
          };
        }
        return state;
      }
      case EVENT_MANAGER_FIGHTER_UNSELECTED: {
        const {competitionId} = action;
        if (state.competitionProperties.id === competitionId) {
          return {
            ...state,
            selectedEventCompetitors: {
              ...state.selectedEventCompetitors,
              selectedCompetitorId: null
            }
          };
        }
        return state;
      }
      case EVENT_MANAGER_FIGHTER_LOADED: {
        if (action.competitionId === state.competitionProperties.id && action.payload) {
          const competitor = action.payload as Competitor;
          const ids = state.selectedEventCompetitors.ids as string[];
          if (state && state.selectedEventCompetitors && ids.indexOf(competitor.email) < 0) {
            return {
              ...state,
              selectedEventCompetitors: competitorEntityAdapter.addOne(competitor, state.selectedEventCompetitors)
            };
          }
          return state;
        }

        return state;
      }
      case CATEGORY_ADDED: {
        const category = action.payload.categoryId as CategoryDescriptor;
        if (action.competitionId === state.competitionProperties.id && category) {
          return {
            ...state,
            selectedEventCategories: categoryEntityAdapter.addOne(category, state.selectedEventCategories)
          };
        }
        return state;
      }
      case PERIOD_SELECTED: {
        state.selectedEventSchedule.periods.selectedPeriodId = action.payload;
        break;
      }
      case EVENT_MANAGER_SCHEDULE_DROPPED: {
        if (action.competitionId === state.competitionProperties.id) {
          return {
            ...state,
            selectedEventSchedule: scheduleInitialState
          };
        }
        return state;
      }
      case EVENT_MANAGER_ALL_BRACKETS_DROPPED:
      case EVENT_MANAGER_CATEGORY_BRACKETS_DROPPED: {
        if (action.competitionId === state.competitionProperties.id) {
          if (action.id === state.selectedEventCategories.selectedCategoryId) {
            return state.selectedEventCategories.selectedCategoryStages.selectedStageFights = fightsInitialState;
          }
        }
        break;
      }
      case EVENT_MANAGER_COMPETITOR_UPDATED: {
        if (action.competitionId === state.competitionProperties.id && action.payload) {
          const {fighter} = action.payload;
          return {
            ...state,
            selectedEventCompetitors: competitorEntityAdapter.updateOne({
              id: fighter.email,
              changes: fighter
            }, state.selectedEventCompetitors)

          };
        }
        return state;
      }
      default:
        return state;
    }
  });
}

export const getSelectedEventState = createSelector(state => state, (state: AppState) => state.selectedEventState);


export const getSelectedEventProperties = createSelector(getSelectedEventState, state => state && state.competitionProperties);
export const getSelectedEventId = createSelector(getSelectedEventProperties, props => props && props.id);
export const getSelectedEventMatsCollection = createSelector(getSelectedEventState, state => (state && state.selectedEventMats) || matsInitialState);
export const eventManagerGetSelectedEventSchedule = createSelector(getSelectedEventState, state => state && state.selectedEventSchedule);

export const eventManagerGetSelectedEventSchedulePeriodsCollection = createSelector(eventManagerGetSelectedEventSchedule, state => {
  return (state && state.periods) || periodEntityInitialState;
});

const {
  selectEntities: selectPeriodsDictionary
} = periodEntityAdapter.getSelectors(eventManagerGetSelectedEventSchedulePeriodsCollection);


export const getSelectedEventScheduleFightsByCategoryId = createSelector(eventManagerGetSelectedEventSchedule, state => state && state.fightIdsBycategoryId);

export const getSelectedEventSelectedPeriodId = createSelector(eventManagerGetSelectedEventSchedulePeriodsCollection,
  state => state && state.selectedPeriodId);
export const {
  selectEntities: getSelectedEventMatsDictionary,
  selectAll: getSelectedEventAllMats,
} = matEntityAdapter.getSelectors(getSelectedEventMatsCollection);
export const getSelectedEventMats = getSelectedEventAllMats;
export const dashboardGetSelectedPeriodMats = createSelector(getSelectedEventAllMats, getSelectedEventSelectedPeriodId,
  (mats, periodId) => (mats && mats.filter(m => m.periodId === periodId)) || []);
export const getSelectedEventGetSelectedMatId = createSelector(getSelectedEventMatsCollection, state => state && state.selectedMatId);
export const getSelectedEventGetSelectedMat = createSelector(getSelectedEventGetSelectedMatId, getSelectedEventMatsDictionary, (id, dic) => id && dic[id]);
export const dashboardGetSelectedPeriodMatsFightsCollection = createSelector(getSelectedEventMatsCollection, state => (state && state.matsFights) || fightsInitialState);
export const dashboardGetSelectedPeriodSelectedFightId = createSelector(dashboardGetSelectedPeriodMatsFightsCollection, state => state && state.selectedFightId);
export const dashboardGetSelectedPeriodMatSelectedFightFightResultOptions = createSelector(dashboardGetSelectedPeriodMatsFightsCollection, state => state && state.selectedFightFightResultOptions);

export const {
  // select the dictionary of user entities
  selectEntities: dashboardGetSelectedPeriodFightsEntities,
  selectAll: dashboardGetSelectedPeriodAllFights
} = fightEntityAdapter.getSelectors(dashboardGetSelectedPeriodMatsFightsCollection);
export const getSelectedEventDashboardPeriodFights = dashboardGetSelectedPeriodAllFights;
export const dashboardGetSelectedPeriodSelectedMatFights = createSelector(dashboardGetSelectedPeriodAllFights, getSelectedEventGetSelectedMatId,
  (fights, matId) => fights && matId && _.sortBy(fights.filter(f => f.mat?.id === matId), fs => fs.numberOnMat));

export const dashboardGetSelectedPeriodSelectedFight = createSelector(dashboardGetSelectedPeriodSelectedFightId,
  dashboardGetSelectedPeriodFightsEntities,
  (id, entities) => id && entities[id]);
export const getSelectedEventSelectedPeriod = createSelector(getSelectedEventSelectedPeriodId,
  selectPeriodsDictionary, (periodId, entities) => periodId && entities[periodId]);
export const eventManagerGetHeaderDescription = createSelector(state => state, (state: AppState) => state.header);

export const eventsListState = createSelector(state => state, (state: AppState) => state.events);
const selectCategoriesEntities = createSelector(getSelectedEventState, state => state && state.selectedEventCategories);
export const selectAccountState = createSelector(state => state, (state: AppState) => (state && state.accountState) || initialAccountState);
export const selectUser = createSelector(selectAccountState, state => state && state.user);
export const selectUserId = createSelector(selectUser, state => state && state.userId);

export const {
  selectAll: getAllCompetitions
} = competitionPropertiesEntitiesAdapter.getSelectors(eventsListState);

export const selectAllCompetitions = getAllCompetitions;

export const {
  // select the array of users
  selectAll: getSelectedCompetitionCategories
} = categoryEntityAdapter.getSelectors(selectCategoriesEntities);
