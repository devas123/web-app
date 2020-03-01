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
import {createEntityAdapter, EntityAdapter, EntityState, Update} from '@ngrx/entity';
import * as uuidv4 from 'uuid/v4';

import {
  CategoriesCollection,
  categoriesInitialState,
  Category,
  categoryEntityAdapter,
  Competitor,
  competitorEntityAdapter,
  CompetitorsCollection,
  competitorsInitialState,
  Fight,
  fightEntityAdapter, FightResultOption,
  FightsEditorChange,
  fightsEditorChangeEntityAdapter,
  fightsEditorInitialState,
  fightsInitialState,
  Period,
  PeriodProperties,
  ScheduleProperties,
  stagesEntityAdapter,
  stagesInitialState
} from '../commons/model/competition.model';
import {
  CATEGORY_ADDED,
  CATEGORY_DELETED,
  CATEGORY_STATE_DELETED,
  COMPETITION_PROPERTIES_UPDATED,
  COMPETITION_SELECTED,
  EVENT_MANAGER_ALL_BRACKETS_DROPPED,
  EVENT_MANAGER_CATEGORIES_LOADED,
  EVENT_MANAGER_CATEGORY_BRACKETS_DROPPED,
  EVENT_MANAGER_CATEGORY_BRACKETS_STAGE_FIGHTS_LOADED,
  EVENT_MANAGER_CATEGORY_BRACKETS_STAGE_SELECTED,
  EVENT_MANAGER_CATEGORY_MOVED,
  EVENT_MANAGER_CATEGORY_SELECTED, EVENT_MANAGER_CATEGORY_STAGES_LOADED,
  EVENT_MANAGER_CATEGORY_STATE_LOADED,
  EVENT_MANAGER_CATEGORY_UNSELECTED,
  EVENT_MANAGER_COMPETITION_UNSELECTED,
  EVENT_MANAGER_COMPETITOR_ADDED,
  EVENT_MANAGER_COMPETITOR_REMOVED,
  EVENT_MANAGER_COMPETITOR_UPDATED,
  EVENT_MANAGER_DEFAULT_CATEGORIES_LOADED, EVENT_MANAGER_DEFAULT_FIGHT_RESULTS_LOADED,
  EVENT_MANAGER_FIGHTER_LOADED,
  EVENT_MANAGER_FIGHTER_SELECTED,
  EVENT_MANAGER_FIGHTER_UNSELECTED,
  EVENT_MANAGER_FIGHTERS_FOR_COMPETITION_LOADED,
  EVENT_MANAGER_FIGHTERS_FOR_COMPETITION_PAGE_UPDATED,
  EVENT_MANAGER_FIGHTS_EDITOR_CHANGE_ADDED,
  EVENT_MANAGER_FIGHTS_EDITOR_CHANGE_REMOVED,
  EVENT_MANAGER_FIGHTS_EDITOR_CHANGE_UPDATED,
  EVENT_MANAGER_FIGHTS_EDITOR_CHANGES_SUBMITTED,
  EVENT_MANAGER_FIGHTS_EDITOR_FIGHT_SELECTED,
  EVENT_MANAGER_FIGHTS_EDITOR_FIGHT_SELECTION_CLEARED,
  EVENT_MANAGER_GENERATE_SCHEDULE_COMMAND,
  EVENT_MANAGER_PERIOD_ADDED,
  EVENT_MANAGER_PERIOD_REMOVED,
  EVENT_MANAGER_REGISTRATION_GROUP_CREATED,
  EVENT_MANAGER_REGISTRATION_GROUP_DELETED,
  EVENT_MANAGER_SCHEDULE_DROPPED,
  EVENT_MANAGER_SCHEDULE_LOADED,
  FIGHTS_START_TIME_UPDATED,
  REGISTRATION_INFO_UPDATED,
  SCHEDULE_GENERATED
} from '../modules/event-manager/redux/event-manager-actions';
import produce, {applyPatches} from 'immer';
import {COMPETITION_PUBLISHED, COMPETITION_UNPUBLISHED} from '../actions/actions';
import * as competitorsActions from '../modules/competition/redux/actions/competitors';
import {COMPETITION_PROPERTIES_LOADED} from '../actions/misc';

export interface AppState {
  accountState: AccountState;
  selectedEventState: CompetitionState;
}

export interface CommonAction extends Action {
  payload: any;
  categoryId: string | null;
  competitionId: string | null;
}

export interface CompetitionState {
  selectedEventCategories: CategoriesCollection;
  selectedEventCompetitors: CompetitorsCollection;
  selectedEventSchedule: Schedule;
  selectedEventDefaultCategories: Category[];
  selectedEventDefaultFightResultOptions: FightResultOption[];
  competitionProperties: CompetitionProperties;
}

export const competitionPropertiesEntitiesAdapter: EntityAdapter<CompetitionProperties> = createEntityAdapter<CompetitionProperties>({
  selectId: (competitionProperties: CompetitionProperties) => competitionProperties.id,
  sortComparer: false
});

export interface EventPropsEntities extends EntityState<CompetitionProperties> {
  selectedEventId: string | null;
}

export interface Schedule {
  scheduleProperties: ScheduleProperties;
  competitionId: string;
  periods: Period[];
}


export const scheduleInitialState: Schedule = {
  scheduleProperties: {
    periodPropertiesList: [],
    competitionId: null
  },
  periods: [],
  competitionId: null
};

export const initialCompetitionState: CompetitionState = {
  selectedEventCategories: categoriesInitialState,
  selectedEventCompetitors: competitorsInitialState,
  selectedEventSchedule: scheduleInitialState,
  selectedEventDefaultCategories: [],
  selectedEventDefaultFightResultOptions: [],
  competitionProperties: {}
} as CompetitionState;

export const competitionPropertiesEntitiesInitialState: EventPropsEntities = competitionPropertiesEntitiesAdapter.getInitialState({
  selectedEventId: null
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

export const fightsEditorChangeHandler = (state: CompetitionState, action) => {
  switch (action.type) {
    case EVENT_MANAGER_FIGHTS_EDITOR_CHANGES_SUBMITTED: {
      if (state && state.selectedEventCategories) {
        state.selectedEventCategories.selectedEventFightsEditorState = fightsEditorInitialState;
      }
      return;
    }
    case EVENT_MANAGER_FIGHTS_EDITOR_CHANGE_ADDED: {
      if (state && state.selectedEventCategories && state.selectedEventCategories.selectedEventFightsEditorState && action.change) {
        state.selectedEventCategories.selectedEventFightsEditorState.selectedChangeId = null;
        const change = action.change as FightsEditorChange;
        const fights = change.selectedFightIds.map(id => state.selectedEventCategories.selectedCategoryStages.selectedStageFights.entities[id]);
        const updatedFights = applyPatches(fights, change.changePatches);
        const updates = updatedFights.map(uf => (<Update<Fight>>{
          id: uf.id,
          changes: uf
        }));
        state.selectedEventCategories.selectedCategoryStages.selectedStageFights =
          fightEntityAdapter.updateMany(updates, state.selectedEventCategories.selectedCategoryStages.selectedStageFights);
        state.selectedEventCategories.selectedEventFightsEditorState = fightsEditorChangeEntityAdapter.updateOne(<Update<FightsEditorChange>>{
          id: change.id,
          changes: change
        }, {
          ...state.selectedEventCategories.selectedEventFightsEditorState,
          selectedChangeId: null
        });
      }
      return;
    }
    case EVENT_MANAGER_FIGHTS_EDITOR_CHANGE_REMOVED: {
      if (state && state.selectedEventCategories && state.selectedEventCategories.selectedEventFightsEditorState && action.id) {
        state.selectedEventCategories.selectedEventFightsEditorState.selectedChangeId = null;
        state.selectedEventCategories.selectedEventFightsEditorState = fightsEditorChangeEntityAdapter.removeOne(action.id, state.selectedEventCategories.selectedEventFightsEditorState);
      }
      return;
    }
    case EVENT_MANAGER_FIGHTS_EDITOR_CHANGE_UPDATED: {
      if (state && state.selectedEventCategories && state.selectedEventCategories.selectedEventFightsEditorState && action.change) {
        state.selectedEventCategories.selectedEventFightsEditorState.selectedChangeId = null;
        state.selectedEventCategories.selectedEventFightsEditorState = fightsEditorChangeEntityAdapter.updateOne({
          id: action.change.id,
          changes: action.change
        }, state.selectedEventCategories.selectedEventFightsEditorState);
      }
      return;
    }
    case EVENT_MANAGER_FIGHTS_EDITOR_FIGHT_SELECTED: {
      if (state && state.selectedEventCategories && state.selectedEventCategories.selectedEventFightsEditorState) {
        if (!state.selectedEventCategories.selectedEventFightsEditorState.selectedChangeId) {
          const id = uuidv4().toString();
          state.selectedEventCategories.selectedEventFightsEditorState =
            fightsEditorChangeEntityAdapter.addOne(<FightsEditorChange>{
              changeInversePatches: [],
              changePatches: [],
              selectedFightIds: [],
              id
            }, {
              ...state.selectedEventCategories.selectedEventFightsEditorState,
              selectedChangeId: id
            });
        }
        const selectedChange = state.selectedEventCategories.selectedEventFightsEditorState.entities[state.selectedEventCategories.selectedEventFightsEditorState.selectedChangeId];
        if (selectedChange.selectedFightIds.indexOf(action.fightId) < 0) {
          if (selectedChange.selectedFightIds.length < 2) {
            selectedChange.selectedFightIds.push(action.fightId);
          } else {
            selectedChange.selectedFightIds = [...selectedChange.selectedFightIds.slice(1), action.fightId];
          }
        }
      }
      return;
    }
    case EVENT_MANAGER_FIGHTS_EDITOR_FIGHT_SELECTION_CLEARED: {
      if (state && state.selectedEventCategories && state.selectedEventCategories.selectedEventFightsEditorState
        && state.selectedEventCategories.selectedEventFightsEditorState.selectedChangeId) {
        const selectedChange = state.selectedEventCategories.selectedEventFightsEditorState.entities[state.selectedEventCategories.selectedEventFightsEditorState.selectedChangeId];
        selectedChange.selectedFightIds = [];
      }
    }
  }
};


export const reducers: ActionReducerMap<AppState> = {
  accountState: accountStateReducer,
  selectedEventState: competitionStateReducer
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

export function competitionStateReducer(st: CompetitionState = initialCompetitionState, action) {
  return produce(st, state => {
    switch (action.type) {
      case EVENT_MANAGER_COMPETITION_UNSELECTED: {
        return initialCompetitionState;
      }
      case EVENT_MANAGER_CATEGORY_BRACKETS_STAGE_SELECTED: {
        state.selectedEventCategories.selectedCategoryStages.selectedStageId = action.selectedStageId;
        break;
      }
      case competitorsActions.COMPETITOR_ADDED: {
        const {competitor} = action.payload;
        if (state.competitionProperties && (state.competitionProperties.id === action.competitionId)) {
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
      case competitorsActions.COMPETITOR_REMOVED: {
        const {fighterId} = action.payload;
        if (state.competitionProperties.id === action.competitionId) {
          return {
            ...state,
            selectedEventCompetitors: competitorEntityAdapter.removeOne(fighterId, state.selectedEventCompetitors)
          };
        } else {
          return state;
        }
      }

      case EVENT_MANAGER_FIGHTS_EDITOR_CHANGE_ADDED:
      case EVENT_MANAGER_FIGHTS_EDITOR_CHANGE_REMOVED:
      case EVENT_MANAGER_FIGHTS_EDITOR_CHANGE_UPDATED:
      case EVENT_MANAGER_FIGHTS_EDITOR_CHANGES_SUBMITTED:
      case EVENT_MANAGER_FIGHTS_EDITOR_FIGHT_SELECTION_CLEARED:
      case EVENT_MANAGER_FIGHTS_EDITOR_FIGHT_SELECTED: {
        fightsEditorChangeHandler(state, action);
        break;
      }
      case EVENT_MANAGER_REGISTRATION_GROUP_DELETED: {
        if (state.competitionProperties.id === action.competitionId
          && state.competitionProperties.registrationInfo
          && action.payload.periodId && action.payload.groupId) {
          const {periodId, groupId} = action.payload;
          if (!state.competitionProperties.registrationInfo.registrationGroups) {
            state.competitionProperties.registrationInfo.registrationGroups = [];
          }
          const per = state.competitionProperties.registrationInfo.registrationPeriods
            .find(p => p.id === periodId);
          per.registrationGroupIds = per.registrationGroupIds.filter(id => id !== groupId);
          const group =
            state.competitionProperties.registrationInfo.registrationGroups.find(gr => gr.id === groupId);
          if (!group.registrationPeriodIds) {
            group.registrationPeriodIds = [];
          }
          group.registrationPeriodIds = group.registrationPeriodIds.filter(pid => pid !== periodId);
          if (group.registrationPeriodIds.length === 0) {
            state.competitionProperties.registrationInfo.registrationGroups =
              state.competitionProperties.registrationInfo.registrationGroups.filter(gr => gr.id !== groupId);
          }
        }
        break;
      }
      case EVENT_MANAGER_REGISTRATION_GROUP_CREATED: {
        if (state.competitionProperties.id === action.competitionId
          && state && state.competitionProperties.registrationInfo
          && action.payload.periodId && action.payload.groups) {
          if (!state.competitionProperties.registrationInfo.registrationGroups) {
            state.competitionProperties.registrationInfo.registrationGroups = [];
          }
          action.payload.groups.forEach(group => {
            state.competitionProperties.registrationInfo.registrationGroups.push(group);
            state.competitionProperties.registrationInfo.registrationPeriods
              .find(per => per.id === action.payload.periodId)
              .registrationGroupIds.push(group.id);
          });
        }
        break;
      }
      case REGISTRATION_INFO_UPDATED: {
        if (state === action.competitionId && state && action.payload.registrationInfo) {
          state.competitionProperties.registrationInfo = action.payload.registrationInfo;
        }
        break;
      }
      case COMPETITION_PROPERTIES_UPDATED: {
        const competitionId = action.competitionId;
        if (competitionId === state.competitionProperties.id) {
          return {
            ...state,
            ...action.payload.properties,
            startDate: action.payload.properties.startDate && new Date(action.payload.properties.startDate),
            endDate: action.payload.properties.endDate && new Date(action.payload.properties.endDate)
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
              let updatedPeriod = newState.selectedEventSchedule.scheduleProperties.periodPropertiesList.find(value => value.name === from);
              if (updatedPeriod && updatedPeriod.categories) {
                const updatedPeriodIndex = newState.selectedEventSchedule.scheduleProperties.periodPropertiesList.findIndex(value => value.name === updatedPeriod.name);
                updatedPeriod = {
                  ...updatedPeriod,
                  categories: updatedPeriod.categories.filter(cat => cat !== category.id)
                };
                newState = {
                  ...newState,
                  selectedEventSchedule: {
                    ...newState.selectedEventSchedule,
                    scheduleProperties: {
                      ...newState.selectedEventSchedule.scheduleProperties,
                      periodPropertiesList: [...newState.selectedEventSchedule.scheduleProperties.periodPropertiesList.slice(0, updatedPeriodIndex),
                        updatedPeriod,
                        ...newState.selectedEventSchedule.scheduleProperties.periodPropertiesList.slice(updatedPeriodIndex + 1)]
                    }
                  }
                };
              }
            }

            if (to) {
              let updatedPeriod = newState.selectedEventSchedule.scheduleProperties.periodPropertiesList.find(value => value.name === to);
              if (updatedPeriod) {
                const updatedPeriodIndex = newState.selectedEventSchedule.scheduleProperties.periodPropertiesList.findIndex(value => value.name === updatedPeriod.name);
                let newCategories = [...updatedPeriod.categories, category];
                if (index && +index > 0) {
                  newCategories = [...updatedPeriod.categories.slice(0, index),
                    category, ...updatedPeriod.categories.slice(index)];
                } else {
                  newCategories = [category, ...updatedPeriod.categories];
                }
                if (updatedPeriod.categories) {
                  updatedPeriod = {
                    ...updatedPeriod,
                    categories: newCategories
                  };
                } else {
                  updatedPeriod = {
                    ...updatedPeriod,
                    categories: [category]
                  };
                }
                newState = {
                  ...newState,
                  selectedEventSchedule: {
                    ...newState.selectedEventSchedule,
                    scheduleProperties: {
                      ...newState.selectedEventSchedule.scheduleProperties,
                      periodPropertiesList: [...newState.selectedEventSchedule.scheduleProperties.periodPropertiesList.slice(0, updatedPeriodIndex),
                        updatedPeriod,
                        ...newState.selectedEventSchedule.scheduleProperties.periodPropertiesList.slice(updatedPeriodIndex + 1)]
                    }
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
            = fightEntityAdapter.addAll(fights, fightsInitialState);
        }
        break;
      }

      case EVENT_MANAGER_CATEGORY_STATE_LOADED: {
        const {competitionId, categoryId, payload} = action;
        if (state.competitionProperties.id === competitionId && state.selectedEventCategories.selectedCategoryId === categoryId && payload) {
          state.selectedEventCategories.selectedCategoryState = payload;
          state.selectedEventCategories.categoryStateLoading = false;
        }
        break;
      }

      case EVENT_MANAGER_CATEGORY_STAGES_LOADED: {
        const {competitionId, categoryId, categoryStages} = action;
        if (state.competitionProperties.id === competitionId && state.selectedEventCategories.selectedCategoryId === categoryId && categoryStages) {
          const newStages = stagesEntityAdapter.upsertMany(categoryStages, stagesInitialState);
          state.selectedEventCategories.selectedCategoryStages = newStages || stagesInitialState;
          const selectedStage = categoryStages.find(s => s.id === state.selectedEventCategories.selectedCategoryStages.selectedStageId);
          if (selectedStage) {
            state.selectedEventCategories.selectedCategoryStages.selectedStageFights = fightEntityAdapter.addAll(selectedStage.fights, fightsInitialState);
          }
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
          } as Category));
          if (competitionId === state.competitionProperties.id) {
            return {
              ...state,
              selectedEventCategories: categoryEntityAdapter.upsertMany(categories, state.selectedEventCategories)
            };
          } else {
            return state;
          }
        }
        return state;
      }
      case COMPETITION_PROPERTIES_LOADED: {
        if (action.competitionId === state.competitionProperties.id) {
          state.competitionProperties = action.payload;
        } else if (!!action.competitionId && action.payload) {
          state = initialCompetitionState;
          state.competitionProperties = action.payload;
        }
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
        if (action.competitionId === state.competitionProperties.id) {
          return {
            ...state,
            selectedEventSchedule: payload || {}
          };
        }
        return state;
      }
      case EVENT_MANAGER_CATEGORY_SELECTED: {
        if (action.competitionId === state.competitionProperties.id) {
          state.selectedEventCategories.selectedCategoryId = action.categoryId;
          state.selectedEventCategories.categoryStateLoading = true;
        }
        break;
      }
      case EVENT_MANAGER_DEFAULT_CATEGORIES_LOADED: {
        if ((action.competitionId === state.competitionProperties.id) && action.payload) {
          state.selectedEventDefaultCategories = action.payload;
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
          return {
            ...state,
            selectedEventCategories: {
              ...state.selectedEventCategories,
              selectedCategoryId: null,
              selectedCategoryState: null
            }
          };
        }
        return state;
      }
      case EVENT_MANAGER_FIGHTERS_FOR_COMPETITION_LOADED: {
        if (action.competitionId === state.competitionProperties.id) {
          const {data, total, page} = action.payload;
          return {
            ...state,
            selectedEventCompetitors: competitorEntityAdapter.addAll(data, {
              ...state.selectedEventCompetitors,
              total,
              pageNumber: +page
            })
          };
        }
        return state;
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
      case EVENT_MANAGER_COMPETITOR_REMOVED: {
        if (action.competitionId === state.competitionProperties.id && action.id) {
          return {
            ...state,
            selectedEventCompetitors: competitorEntityAdapter.removeOne(action.payload.competitorId, state.selectedEventCompetitors)
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
          const currentPeriods = state.selectedEventSchedule.scheduleProperties.periodPropertiesList;
          if (periodId && currentPeriods) {
            return {
              ...state,
              selectedEventSchedule: {
                ...state.selectedEventSchedule,
                scheduleProperties: {
                  ...state.selectedEventSchedule.scheduleProperties,
                  periodPropertiesList: currentPeriods.filter(p => p.id !== periodId)
                }
              }
            };
          }
        }
        return state;
      }
      case SCHEDULE_GENERATED: {
        const {competitionId, payload} = action;
        if (state.competitionProperties.id === competitionId && payload) {
          const {schedule} = payload;
          if (schedule) {
            return {
              ...state,
              selectedEventSchedule: schedule
            };
          } else {
            return state;
          }
        } else {
          return state;
        }
      }
      case FIGHTS_START_TIME_UPDATED: {
        const {competitionId, payload, categoryId} = action;
        if (state.selectedEventCategories.selectedCategoryId === categoryId && state.competitionProperties.id === competitionId && payload) {
          const {newFights} = payload;
          if (newFights) {
            state.selectedEventCategories.selectedCategoryStages.selectedStageFights
              = fightEntityAdapter.addAll(newFights, fightsInitialState);
          }
        }
        break;
      }
      case EVENT_MANAGER_PERIOD_ADDED: {
        if (action.competitionId === state.competitionProperties.id) {
          const period = action.payload as PeriodProperties;
          const currentPeriods = (state.selectedEventSchedule && state.selectedEventSchedule.scheduleProperties && state.selectedEventSchedule.scheduleProperties.periodPropertiesList) || [];
          if (period && currentPeriods && currentPeriods.findIndex(p => p.id === period.id) < 0) {
            return {
              ...state,
              selectedEventSchedule: {
                ...state.selectedEventSchedule,
                scheduleProperties: {
                  ...state.selectedEventSchedule.scheduleProperties,
                  periodPropertiesList: [...currentPeriods, period]
                }
              }
            };
          }
        }
        return state;
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
        const category = action.payload.categoryId as Category;
        if (action.competitionId === state.competitionProperties.id && category) {
          return {
            ...state,
            selectedEventCategories: categoryEntityAdapter.addOne(category, state.selectedEventCategories)
          };
        }
        return state;
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

export const getSelectedEventState = (state: AppState) => state.selectedEventState;


export const getSelectedEventProperties = createSelector(getSelectedEventState, state => state && state.competitionProperties);
export const getSelectedEventId = createSelector(getSelectedEventProperties, props => props && props.id);
