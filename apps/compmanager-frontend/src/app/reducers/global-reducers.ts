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
  PreviewCategoriesCollection,
  previewCategoriesEntityAdapter,
  previewCategoriesInitialState,
  stagesEntityAdapter,
  stagesInitialState
} from '../commons/model/competition.model';
import {
  BATCH_ACTION,
  COMPETITION_SELECTED,
  COMPETITION_UNSELECTED,
  EVENT_MANAGER_CATEGORIES_LOADED,
  EVENT_MANAGER_CATEGORY_BRACKETS_STAGE_FIGHTS_LOADED,
  EVENT_MANAGER_CATEGORY_BRACKETS_STAGE_FIGHTS_LOADING,
  EVENT_MANAGER_CATEGORY_BRACKETS_STAGE_SELECTED,
  EVENT_MANAGER_CATEGORY_MOVED,
  EVENT_MANAGER_CATEGORY_SELECTED,
  EVENT_MANAGER_CATEGORY_STAGES_LOADED,
  EVENT_MANAGER_CATEGORY_STATE_LOADED,
  EVENT_MANAGER_CATEGORY_UNSELECTED,
  EVENT_MANAGER_DEFAULT_FIGHT_RESULTS_LOADED,
  EVENT_MANAGER_FIGHTER_LOADED,
  EVENT_MANAGER_FIGHTER_SELECTED,
  EVENT_MANAGER_FIGHTER_UNSELECTED,
  EVENT_MANAGER_FIGHTERS_FOR_COMPETITION_LOADED,
  EVENT_MANAGER_FIGHTERS_FOR_COMPETITION_PAGE_UPDATED,
  EVENT_MANAGER_HEADER_REMOVE,
  EVENT_MANAGER_HEADER_SET,
  EVENT_MANAGER_PERIOD_ADDED,
  EVENT_MANAGER_PERIOD_REMOVED,
  EVENT_MANAGER_PREVIEW_CATEGORIES_CLEARED,
  EVENT_MANAGER_PREVIEW_CATEGORIES_GENERATED,
  EVENT_MANAGER_SCHEDULE_LOADED,
  EVENT_MANAGER_SCHEDULE_PERIODS_UPDATED,
  FIGHT_IDS_BY_CATEGORY_ID_LOADED,
} from '../modules/event-manager/redux/event-manager-actions';
import produce from 'immer';
import {
  COMPETITION_LIST_LOADED,
  COMPETITION_PUBLISHED,
  COMPETITION_UNPUBLISHED,
  REGISTRATION_INFO_LOADED
} from '../actions/actions';
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
import {generateUuid, uniqueFilter} from "../modules/account/utils";
import {
  CategoryDescriptor,
  CategoryState,
  CommandType,
  CompetitionProperties,
  Competitor,
  Event,
  EventType,
  FightDescription,
  FightResultOption,
  ManagedCompetition,
  MatDescription, MatState,
  Period,
  RegistrationInfo,
  ScheduleRequirement,
  StageDescriptor,
  StartTimeInfo
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


export interface MatsCollection extends EntityState<MatState> {
  selectedMatId: string | null;
  matsFights: FightsCollection;
}

export const matEntityAdapter: EntityAdapter<MatState> = createEntityAdapter<MatState>({
  selectId: (c: MatState) => c.matDescription.id || btoa(c.matDescription.name + c.matDescription.periodId),
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
  selectedEventPreviewCategories: PreviewCategoriesCollection;
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
  selectedEventPreviewCategories: previewCategoriesInitialState,
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
    case BATCH_ACTION:
      return batchReducer(action, state, competitionListReducer);
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
    case BATCH_ACTION:
      return batchReducer(action, state, headerReducer);
    case EVENT_MANAGER_HEADER_SET: {
      return action.payload as HeaderDescription;
    }
    case EVENT_MANAGER_HEADER_REMOVE: {
      return null;
    }
  }
  return state;
}

// type BatchReducer<T> = (reducer: (T, Action) => T) =>


export function batchReducer<D>(action, state: D, reducer: (state: D, action: any) => D): D {
  const actions = action.actions;
  let newState = state;
  for (let batchedAction of actions) {
    newState = reducer(newState, batchedAction);
  }
  return newState;
}

export function competitionStateReducer(st: CompetitionState = initialCompetitionState, action) {
  return produce(st, state => {
    switch (action.type) {
      case BATCH_ACTION:
        return batchReducer(action, state, competitionStateReducer);
      case CommandType.GENERATE_BRACKETS_COMMAND: {
        state.selectedEventCategories.selectedCategoryStages.needFights = true;
        break;
      }
      case EventType.BRACKETS_GENERATED: {
        const event = action as Event;
        const stages = event.messageInfo.bracketsGeneratedPayload?.stages || [];
        if (state.selectedEventCategories.selectedCategoryId === event.messageInfo.categoryId && stages.length > 0) {
          const minStage = stages.map(s => s.stageOrder).sort((a, b) => a - b)[0];
          const firstStage = stages.find(s => s.stageOrder === minStage);
          state.selectedEventCategories.selectedCategoryStages = stagesEntityAdapter.setAll(stages, state.selectedEventCategories.selectedCategoryStages);
          state.selectedEventCategories.selectedCategoryStages.selectedStageId = firstStage.id;
          state.selectedEventCategories.selectedCategoryStages.selectedStageFights = fightsInitialState;
        }
        break;
      }
      case EventType.FIGHTS_ADDED_TO_STAGE: {
        const event = action as Event;
        if (state.selectedEventCategories.selectedCategoryId === event.messageInfo.categoryId) {
          const payload = event.messageInfo.fightsAddedToStagePayload;
          if (payload.stageId === state.selectedEventCategories.selectedCategoryStages.selectedStageId) {
            state.selectedEventCategories.selectedCategoryStages.selectedStageFights = fightEntityAdapter.upsertMany(payload.fights, state.selectedEventCategories.selectedCategoryStages.selectedStageFights);
            state.selectedEventCategories.selectedCategoryStages.needFights = false;
          }
        }
        break;
      }
      case COMPETITION_UNSELECTED: {
        return initialCompetitionState;
      }
      case EVENT_MANAGER_CATEGORY_BRACKETS_STAGE_SELECTED: {
        if (state.selectedEventCategories.selectedCategoryStages.selectedStageId !== action.selectedStageId) {
          state.selectedEventCategories.selectedCategoryStages.selectedStageId = action.selectedStageId;
          state.selectedEventCategories.selectedCategoryStages.needFights = true;
        }
        break;
      }
      case EventType.COMPETITOR_UPDATED: {
        const event = action as Event;
        const {competitor} = event.messageInfo.competitorUpdatedPayload;
        if (state.competitionProperties.id === event.messageInfo.competitionId) {
          const update = {id: competitor.id, changes: competitor};
          return {
            ...state,
            selectedEventCompetitors: competitorEntityAdapter.updateOne(update, state.selectedEventCompetitors)
          };
        }
        return state;
      }
      case EventType.REGISTRATION_INFO_UPDATED: {
        const event = action as Event;
        state.registrationInfo = event.messageInfo.registrationInfoUpdatedPayload.registrationInfo;
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
      case EVENT_MANAGER_CATEGORY_BRACKETS_STAGE_FIGHTS_LOADING: {
        state.selectedEventCategories.selectedCategoryStages.needFights = false;
        break;
      }
      case EVENT_MANAGER_CATEGORY_BRACKETS_STAGE_FIGHTS_LOADED: {
        const {fights} = action;
        if (fights && fights.length > 0) {
          state.selectedEventCategories.selectedCategoryStages.selectedStageFights
            = fightEntityAdapter.setAll(fights, state.selectedEventCategories.selectedCategoryStages.selectedStageFights);
          state.selectedEventCategories.selectedCategoryStages.needFights = false;
        }
        break;
      }

      case EVENT_MANAGER_CATEGORY_STATE_LOADED: {
        const {competitionId, categoryId, payload} = action;
        if (state.competitionProperties.id === competitionId && state.selectedEventCategories.selectedCategoryId === categoryId && payload) {
          state.selectedEventCategories = categoryEntityAdapter.upsertOne(payload, state.selectedEventCategories);
        }
        break;
      }

      case EVENT_MANAGER_CATEGORY_STAGES_LOADED: {
        const {competitionId, categoryId, categoryStages, selectedStageId} = action;
        if (state.competitionProperties.id === competitionId && state.selectedEventCategories.selectedCategoryId === categoryId && categoryStages) {
          state.selectedEventCategories.selectedCategoryStages = stagesEntityAdapter.setAll(categoryStages, state.selectedEventCategories.selectedCategoryStages);
          state.selectedEventCategories.selectedCategoryStages.selectedStageId = selectedStageId;
        }
        state.selectedEventCategories.selectedCategoryStages.needFights = categoryStages?.length > 0;
        break;
      }

      case EVENT_MANAGER_CATEGORIES_LOADED: {
        const categoriesRaw = action.payload as CategoryState[];
        state.selectedEventCategories = categoryEntityAdapter.upsertMany(categoriesRaw, state.selectedEventCategories);
        break
      }

      case EVENT_MANAGER_PREVIEW_CATEGORIES_GENERATED: {
        const categories = (action.categories || []) as CategoryDescriptor[];
        state.selectedEventPreviewCategories = previewCategoriesEntityAdapter.setAll(categories, state.selectedEventPreviewCategories);
        break;
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
          state.selectedEventMats = matEntityAdapter.setAll(mats.map(m => (<MatState>{
            matDescription: m,
            numberOfFights: 0,
            topFiveFights: []
          })), state.selectedEventMats);
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
        state.selectedEventCategories.selectedCategoryId = action.categoryId;
        state.selectedEventCompetitors.competitorsFilter.needCompetitors = true;
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
        }
        break;
      }
      case EVENT_MANAGER_FIGHTERS_FOR_COMPETITION_LOADED: {
        const {pageInfo, competitors} = action.payload;
        state.selectedEventCompetitors = competitorEntityAdapter.setAll(competitors, {
          ...state.selectedEventCompetitors,
          competitorsFilter: {
            ...state.selectedEventCompetitors.competitorsFilter,
            total: pageInfo.total,
            pageNumber: pageInfo.page + 1,
            needCompetitors: false
          }
        });
        break;
      }
      case EventType.COMPETITOR_ADDED: {
        const event = action as Event;
        let newEventCompetitors = state.selectedEventCompetitors;
        if (newEventCompetitors.ids.length < newEventCompetitors.competitorsFilter.pageSize) {
          const competitor = event.messageInfo.competitorAddedPayload.competitor;
          const existingCategories = state.selectedEventCategories.entities;
          const categoryUpdates = competitor.categories.filter(id => existingCategories.hasOwnProperty(id)).map(id =>
            (<Update<CategoryState>>{
              id,
              changes: {
                ...existingCategories[id],
                numberOfCompetitors: existingCategories[id].numberOfCompetitors + 1
              }
            })
          );
          state.selectedEventCategories = categoryEntityAdapter.updateMany(categoryUpdates, state.selectedEventCategories);
          state.selectedEventCompetitors = competitorEntityAdapter.upsertOne(competitor, state.selectedEventCompetitors);
          if (!state.selectedEventCategories.selectedCategoryId || competitor.categories.includes(state.selectedEventCategories.selectedCategoryId)) {
            state.selectedEventCompetitors.competitorsFilter.total = state.selectedEventCompetitors.competitorsFilter.total + 1;
          }
        }
        break;
      }
      case EventType.COMPETITOR_CATEGORY_CHANGED: {
        const event = action as Event;
        const payload = event.messageInfo.changeCompetitorCategoryPayload
        const updates = <Update<Competitor>>{
          id: payload.fighterId,
          changes: {
            categories: payload.newCategories
          }
        }
        state.selectedEventCompetitors = competitorEntityAdapter.updateOne(updates, state.selectedEventCompetitors);
        break;
      }
      case EVENT_MANAGER_FIGHTERS_FOR_COMPETITION_PAGE_UPDATED: {
        state.selectedEventCompetitors.competitorsFilter.pageNumber = action.payload;
        state.selectedEventCompetitors.competitorsFilter.needCompetitors = action.payload;
        break;
      }
      case EventType.DASHBOARD_FIGHT_RESULT_SET: {
        const event = action as Event
        const {fightResult, fightId, status, scores} = event.messageInfo.setFightResultPayload
        const update = {};
        break;
      }
      case EventType.FIGHTS_EDITOR_CHANGE_APPLIED: {
        const event = action as Event
        const {newFights, updates, removedFighids} = event.messageInfo.fightEditorChangesAppliedPayload;
        if (event.messageInfo.categoryId === state.selectedEventCategories.selectedCategoryId) {
          state.selectedEventCategories.selectedCategoryStages.selectedStageFights = fightEntityAdapter.removeMany(removedFighids, state.selectedEventCategories.selectedCategoryStages.selectedStageFights);
          const selectedStageId = state.selectedEventCategories.selectedCategoryStages.selectedStageId;
          if (selectedStageId) {
            state.selectedEventCategories.selectedCategoryStages.selectedStageFights = fightEntityAdapter.upsertMany(newFights.filter(f => f.stageId === selectedStageId), state.selectedEventCategories.selectedCategoryStages.selectedStageFights);
            state.selectedEventCategories.selectedCategoryStages.selectedStageFights = fightEntityAdapter.upsertMany(updates.filter(f => f.stageId === selectedStageId), state.selectedEventCategories.selectedCategoryStages.selectedStageFights);
          }
        }
        break;
      }
      case EventType.STAGE_STATUS_UPDATED: {
        const event = action as Event
        const {status, stageId} = event.messageInfo.stageStatusUpdatedPayload
        const selectedStageId = state.selectedEventCategories.selectedCategoryStages.selectedStageId;
        if (selectedStageId === stageId) {
          const update = <Update<StageDescriptor>>{
            id: stageId,
            changes: {
              stageStatus: status
            }
          }
          state.selectedEventCategories.selectedCategoryStages = stagesEntityAdapter.updateOne(update, state.selectedEventCategories.selectedCategoryStages);
        }
        break;
      }
      case EventType.COMPETITOR_REMOVED: {
        const event = action as Event
        const {categories, fighterId} = event.messageInfo.competitorRemovedPayload
        state.selectedEventCompetitors = competitorEntityAdapter.removeOne(fighterId, state.selectedEventCompetitors)
        const existingCategories = state.selectedEventCategories.entities;
        const categoryUpdates = categories.filter(id => existingCategories.hasOwnProperty(id)).map(id =>
          (<Update<CategoryState>>{
            id,
            changes: {
              ...existingCategories[id],
              numberOfCompetitors: existingCategories[id].numberOfCompetitors - 1
            }
          })
        );
        state.selectedEventCategories = categoryEntityAdapter.updateMany(categoryUpdates, state.selectedEventCategories);
        if (!state.selectedEventCategories.selectedCategoryId || categories.includes(state.selectedEventCategories.selectedCategoryId)) {
          state.selectedEventCompetitors.competitorsFilter.total = state.selectedEventCompetitors.competitorsFilter.total - 1;
        }
        break;
      }
      case EventType.CATEGORY_ADDED: {
        const event = action as Event;
        const cat = <CategoryState>{
          category: event.messageInfo.categoryAddedPayload.categoryState,
          id: event.messageInfo.categoryAddedPayload.categoryState.id,
          competitionId: event.messageInfo.competitionId,
          numberOfCompetitors: 0,
          fightsNumber: 0
        }
        state.selectedEventCategories = categoryEntityAdapter.addOne(cat, state.selectedEventCategories)
        break;
      }
      case EventType.CATEGORY_DELETED: {
        const event = action as Event
        state.selectedEventCategories = categoryEntityAdapter.removeOne(event.messageInfo.categoryId, state.selectedEventCategories)
        if (event.messageInfo.categoryId === state.selectedEventCategories.selectedCategoryId) {
          state.selectedEventCategories.selectedCategoryId = null;
        }
        break;
      }
      case EVENT_MANAGER_PERIOD_REMOVED: {
        if (action.competitionId === state.competitionProperties.id) {
          const periodId = action.payload;
          state.selectedEventSchedule.periods = periodEntityAdapter.removeOne(periodId, state.selectedEventSchedule.periods);
          const mats = _.values(state.selectedEventMats.entities);
          state.selectedEventMats = matEntityAdapter.setAll(mats.filter(m => m.matDescription.periodId !== periodId), state.selectedEventMats);
        }
        break;
      }
      case EventType.SCHEDULE_GENERATED: {
        const event = action as Event;
        const payload = event.messageInfo.scheduleGeneratedPayload;
        state.selectedEventSchedule.periods = periodEntityAdapter.setAll(payload?.schedule.periods, periodEntityInitialState);
        state.selectedEventMats = matEntityAdapter.setAll(payload?.schedule?.mats.map(m => (<MatState>{
          matDescription: m,
          numberOfFights: 0,
          topFiveFights: []
        })), matsInitialState);
        break;
      }
      case EventType.FIGHTS_START_TIME_UPDATED: {
        // We need to make sure (in the effects), that the schedule is already generated and the periods/scheduleEntries are already there.
        // I.e. the EventType.SCHEDULE_GENERATED event comes first
        const event = action as Event;
        const payload = event.messageInfo.fightStartTimeUpdatedPayload;
        const {newFights} = payload;
        const mats = state.selectedEventMats.entities
        if (newFights) {
          const updates = newFights.map(f => {
            return <Update<FightDescription>>{
              id: f.fightId,
              changes: {
                period: f.periodId,
                mat: mats[f.matId]?.matDescription,
                numberOnMat: f.numberOnMat,
                startTime: f.startTime,
                scheduleEntryId: f.scheduleEntryId,
                invalid: f.invalid
              }
            }
          })
          state.selectedEventCategories.selectedCategoryStages.selectedStageFights
            = fightEntityAdapter.updateMany(updates, state.selectedEventCategories.selectedCategoryStages.selectedStageFights);
          state.selectedEventMats.matsFights = fightEntityAdapter.updateMany(updates, state.selectedEventMats.matsFights)

          const periods = state.selectedEventSchedule.periods;
          newFights.forEach(f => {
            const period = periods.entities[f.periodId]
            const scheduleEntry = period.scheduleEntries.find(e => e.id === f.scheduleEntryId)
            if (Boolean(scheduleEntry)) {
              scheduleEntry.fightScheduleInfo = [...scheduleEntry.fightScheduleInfo, <StartTimeInfo>{
                startTime: f.startTime,
                matId: f.matId,
                someId: f.fightId
              }]
            }
          })
          periods.ids.forEach(id => {
            if (Boolean(periods.entities[id].scheduleEntries)) {
              periods.entities[id].scheduleEntries = periods.entities[id].scheduleEntries.filter(uniqueFilter)
            }
          });
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
          const payload = action.payload as { mats: MatState[], competitors: Competitor[] };
          state.selectedEventMats = matEntityAdapter.upsertMany(payload.mats, state.selectedEventMats);
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
        const {payload} = action;
        state.selectedEventCompetitors.selectedCompetitorId = payload;
        break;
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
        const competitor = action.payload as Competitor;
        state.selectedEventCompetitors = competitorEntityAdapter.addOne(competitor, state.selectedEventCompetitors)
        break;
      }
      case PERIOD_SELECTED: {
        state.selectedEventSchedule.periods.selectedPeriodId = action.payload;
        break;
      }
      case EventType.SCHEDULE_DROPPED: {
        const updates = Object.values(state.selectedEventSchedule.periods.entities).map(per => (<Update<Period>>{
          id: per.id, changes: {
            scheduleEntries: []
          }
        }))
        state.selectedEventSchedule.periods = periodEntityAdapter.updateMany(updates, state.selectedEventSchedule.periods);
        break;
      }
      case EventType.CATEGORY_BRACKETS_DROPPED: {
        const event = action as Event;
        if (event.messageInfo.categoryId === state.selectedEventCategories.selectedCategoryId) {
          state.selectedEventCategories.selectedCategoryStages = stagesInitialState;
        }
        break;
      }
      default:
        break;
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
  (mats, periodId) => (mats && mats.filter(m => m?.matDescription?.periodId === periodId)) || []);
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
export const selectAccountState = createSelector(state => state, (state: AppState) => (state && state.accountState) || initialAccountState);
export const selectUser = createSelector(selectAccountState, state => state && state.user);
export const selectUserId = createSelector(selectUser, state => state && state.userId);

export const {
  selectAll: getAllCompetitions
} = competitionPropertiesEntitiesAdapter.getSelectors(eventsListState);

export const selectAllCompetitions = getAllCompetitions;
