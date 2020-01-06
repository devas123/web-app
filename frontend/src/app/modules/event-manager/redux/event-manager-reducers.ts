import {AppState, CommonAction, CompetitionProperties, competitionPropertiesEntitiesAdapter, competitionPropertiesEntitiesInitialState, EventPropsEntities, scheduleInitialState} from '../../../reducers';
import {
  BRACKETS_GENERATED,
  CATEGORY_ADDED,
  CATEGORY_DELETED,
  CATEGORY_STATE_DELETED,
  COMPETITION_CREATED,
  COMPETITION_PROPERTIES_UPDATED,
  EVENT_MANAGER_ALL_BRACKETS_DROPPED,
  EVENT_MANAGER_CATEGORIES_LOADED,
  EVENT_MANAGER_CATEGORY_BRACKETS_DROPPED,
  EVENT_MANAGER_CATEGORY_MOVED,
  EVENT_MANAGER_CATEGORY_SELECTED,
  EVENT_MANAGER_CATEGORY_STATE_LOADED,
  EVENT_MANAGER_CATEGORY_UNSELECTED,
  EVENT_MANAGER_COMPETITION_SELECTED,
  EVENT_MANAGER_COMPETITION_UNSELECTED,
  EVENT_MANAGER_COMPETITIONS_LOADED,
  EVENT_MANAGER_COMPETITOR_ADDED,
  EVENT_MANAGER_COMPETITOR_REMOVED,
  EVENT_MANAGER_COMPETITOR_UPDATED,
  EVENT_MANAGER_COMPETITORS_MOVED,
  EVENT_MANAGER_DEFAULT_CATEGORIES_LOADED,
  EVENT_MANAGER_FIGHTER_LOADED,
  EVENT_MANAGER_FIGHTER_SELECTED,
  EVENT_MANAGER_FIGHTER_UNSELECTED,
  EVENT_MANAGER_FIGHTERS_FOR_COMPETITION_LOADED,
  EVENT_MANAGER_FIGHTERS_FOR_COMPETITION_PAGE_UPDATED,
  EVENT_MANAGER_FIGHTS_EDITOR_CHANGE_ADDED,
  EVENT_MANAGER_FIGHTS_EDITOR_CHANGE_REMOVED,
  EVENT_MANAGER_FIGHTS_EDITOR_CHANGE_UPDATED,
  EVENT_MANAGER_FIGHTS_EDITOR_CHANGES_SUBMITTED,
  EVENT_MANAGER_FIGHTS_EDITOR_FIGHT_SELECTED, EVENT_MANAGER_FIGHTS_EDITOR_FIGHT_SELECTION_CLEARED,
  EVENT_MANAGER_GENERATE_SCHEDULE_COMMAND,
  EVENT_MANAGER_HEADER_REMOVE,
  EVENT_MANAGER_HEADER_SET,
  EVENT_MANAGER_PERIOD_ADDED,
  EVENT_MANAGER_PERIOD_REMOVED, REGISTRATION_INFO_UPDATED,
  EVENT_MANAGER_SCHEDULE_DROPPED,
  EVENT_MANAGER_SCHEDULE_LOADED,
  EVENT_MANAGER_SOCKET_CONNECTED,
  EVENT_MANAGER_SOCKET_DISCONNECTED,
  FIGHTS_START_TIME_UPDATED,
  SCHEDULE_GENERATED, EVENT_MANAGER_REGISTRATION_GROUP_CREATED, EVENT_MANAGER_REGISTRATION_GROUP_DELETED
} from './event-manager-actions';
import * as uuidv4 from 'uuid/v4';
import {ActionReducerMap, createSelector} from '@ngrx/store';
import {COMPETITION_DELETED, COMPETITION_PUBLISHED, COMPETITION_UNPUBLISHED} from '../../../actions/actions';
import {
  categoriesInitialState,
  categoryEntityAdapter,
  competitorEntityAdapter,
  competitorsInitialState,
  fightEntityAdapter,
  FightsEditorChange,
  fightsEditorChangeEntityAdapter,
  fightsEditorInitialState,
  fightsInitialState
} from '../../competition/reducers';
import {Category, Competitor, Fight} from '../../../commons/model/competition.model';
import {dashboardReducers, DashboardState} from './dashboard-reducers';
import {getEventManagerState} from './reducers';
import {EmbeddedViewRef, InjectionToken, ViewContainerRef} from '@angular/core';
import {Observable} from 'rxjs';
import produce, {applyPatches, Draft} from 'immer';
import {Update} from '@ngrx/entity';

export interface MenuItem {
  name: string;
  class?: string | { [p: string]: any };
  style?: string;
  action?: () => any;
  label?: string;
  showCondition?: () => Observable<boolean>;
  itemDisplayAction?: (container: ViewContainerRef) => EmbeddedViewRef<any>;
}

export interface HeaderDescription {
  header: string;
  subheader: string | null;
  headerHtml: string | null;
}

export interface EventManagerState {
  myEvents: EventPropsEntities;
  dashboardState: DashboardState;
  socketConnected: boolean;
  header: HeaderDescription;
}

export interface PeriodProperties {
  id: string;
  name: string;
  startTime: String;
  numberOfMats: number;
  timeBetweenFights: number;
  riskPercent: number;
  categories: Category[];
}

export interface ScheduleProperties {
  competitionId: string;
  periodPropertiesList: PeriodProperties[];
}

export const eventManagerGetMyEventsCollection = createSelector(getEventManagerState, state => state && state.myEvents);
export const eventManagerGetSocketConnected = createSelector(getEventManagerState, state => state.socketConnected);
export const eventManagerGetHeaderDescription = createSelector(getEventManagerState, state => state.header);

export const {
  selectEntities: selectMyCompetitions,

  selectAll: getAllMyCompetitions,
} = competitionPropertiesEntitiesAdapter.getSelectors(eventManagerGetMyEventsCollection);

export function socketStateReducer(state: boolean = false, action): boolean {
  switch (action.type) {
    case EVENT_MANAGER_SOCKET_CONNECTED:
      return true;
    case EVENT_MANAGER_SOCKET_DISCONNECTED:
      return false;
    default:
      return state;
  }
}

const fightsEditorChangeHandler = produce((state: Draft<EventPropsEntities>, action) => {
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
        const fights = change.selectedFightIds.map(id => state.selectedEventCategories.selectedCategoryFights.entities[id]);
        const updatedFights = applyPatches(fights, change.changePatches);
        const updates = updatedFights.map(uf => (<Update<Fight>>{
          id: uf.id,
          changes: uf
        }));
        state.selectedEventCategories.selectedCategoryFights = fightEntityAdapter.updateMany(updates, state.selectedEventCategories.selectedCategoryFights);
        state.selectedEventCategories.selectedEventFightsEditorState = fightsEditorChangeEntityAdapter.updateOne(<Update<FightsEditorChange>>{id: change.id, changes: change}, {
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
            fightsEditorChangeEntityAdapter.addOne(<FightsEditorChange>{changeInversePatches: [], changePatches: [], selectedFightIds: [], id}, {
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
});

export function myEventsReducer(state: EventPropsEntities = competitionPropertiesEntitiesInitialState, action): EventPropsEntities {
  switch (action.type) {
    case EVENT_MANAGER_FIGHTS_EDITOR_CHANGE_ADDED:
    case EVENT_MANAGER_FIGHTS_EDITOR_CHANGE_REMOVED:
    case EVENT_MANAGER_FIGHTS_EDITOR_CHANGE_UPDATED:
    case EVENT_MANAGER_FIGHTS_EDITOR_CHANGES_SUBMITTED:
    case EVENT_MANAGER_FIGHTS_EDITOR_FIGHT_SELECTION_CLEARED:
    case EVENT_MANAGER_FIGHTS_EDITOR_FIGHT_SELECTED: {
      return fightsEditorChangeHandler(state, action);
    }
    case EVENT_MANAGER_REGISTRATION_GROUP_DELETED: {
      return produce(state, draft => {
        if (draft.selectedEventId === action.competitionId
          && draft.entities[draft.selectedEventId] && draft.entities[draft.selectedEventId].registrationInfo
          && action.payload.periodId && action.payload.groupId) {
          const {periodId, groupId} = action.payload;
          if (!draft.entities[draft.selectedEventId].registrationInfo.registrationGroups) {
            draft.entities[draft.selectedEventId].registrationInfo.registrationGroups = [];
          }
          const per = draft.entities[draft.selectedEventId].registrationInfo.registrationPeriods
            .find(p => p.id === periodId);
          per.registrationGroupIds = per.registrationGroupIds.filter(id => id !== groupId);
          const group =
            draft.entities[draft.selectedEventId].registrationInfo.registrationGroups.find(gr => gr.id === groupId);
          group.registrationPeriodIds = group.registrationPeriodIds.filter(pid => pid !== periodId);
          if (group.registrationPeriodIds.length === 0) {
            draft.entities[draft.selectedEventId].registrationInfo.registrationGroups =
              draft.entities[draft.selectedEventId].registrationInfo.registrationGroups.filter(gr => gr.id !== groupId);
          }
        }
      });
    }
    case EVENT_MANAGER_REGISTRATION_GROUP_CREATED: {
      return produce(state, draft => {
        if (draft.selectedEventId === action.competitionId
          && draft.entities[draft.selectedEventId] && draft.entities[draft.selectedEventId].registrationInfo
          && action.payload.periodId && action.payload.group) {
          if (!draft.entities[draft.selectedEventId].registrationInfo.registrationGroups) {
            draft.entities[draft.selectedEventId].registrationInfo.registrationGroups = [];
          }
          draft.entities[draft.selectedEventId].registrationInfo.registrationGroups.push(action.payload.group);
          draft.entities[draft.selectedEventId].registrationInfo.registrationPeriods
            .find(per => per.id === action.payload.periodId)
            .registrationGroupIds.push(action.payload.group.id);
        }
      });
    }
    case REGISTRATION_INFO_UPDATED: {
      return produce(state, draft => {
        if (draft.selectedEventId === action.competitionId && draft.entities[draft.selectedEventId] && action.payload.registrationInfo) {
          draft.entities[draft.selectedEventId].registrationInfo = action.payload.registrationInfo;
        }
      });
    }
    case COMPETITION_PROPERTIES_UPDATED: {
      const competitionId = action.competitionId;
      if (competitionId === state.selectedEventId) {
        return competitionPropertiesEntitiesAdapter.updateOne({
          id: competitionId,
          changes: {
            ...action.payload.properties,
            startDate: action.payload.properties.startDate && new Date(action.payload.properties.startDate),
            endDate: action.payload.properties.endDate && new Date(action.payload.properties.endDate)
          }
        }, state);
      }
      return state;
    }
    case EVENT_MANAGER_COMPETITIONS_LOADED: {
      const compStates = action.payload;
      if (Array.isArray(compStates)) {
        const removedState = competitionPropertiesEntitiesAdapter.removeAll(state);
        return competitionPropertiesEntitiesAdapter.addMany(compStates, removedState);
      }
      return state;
    }

    case EVENT_MANAGER_GENERATE_SCHEDULE_COMMAND: {
      const {payload, competitionId} = action;
      if (state.selectedEventId === competitionId && payload) {
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

      if (state.selectedEventId === competitionId && payload) {
        const {from, to, category, index} = payload;
        if (category) {
          let newState = state;
          if (from) {
            let updatedPeriod = newState.selectedEventSchedule.scheduleProperties.periodPropertiesList.find(value => value.name === from);
            if (updatedPeriod && updatedPeriod.categories) {
              const updatedPeriodIndex = newState.selectedEventSchedule.scheduleProperties.periodPropertiesList.findIndex(value => value.name === updatedPeriod.name);
              updatedPeriod = {
                ...updatedPeriod,
                categories: updatedPeriod.categories.filter(cat => cat.id !== category.id)
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

    case EVENT_MANAGER_COMPETITORS_MOVED: {
      const {competitionId, payload, categoryId} = action;
      if (state.selectedEventId === competitionId && payload && state.selectedEventCategories.selectedCategoryId === categoryId) {
        const {updatedSourceFight, updatedTargetFight} = payload;
        const updates = [];

        if (updatedSourceFight) {
          updates.push({
            id: updatedSourceFight.id,
            changes: updatedSourceFight
          });
        }
        if (updatedTargetFight) {
          updates.push({
            id: updatedTargetFight.id,
            changes: updatedTargetFight
          });
        }
        if (updates.length > 0) {
          return {
            ...state,
            selectedEventCategories: {
              ...state.selectedEventCategories,
              selectedCategoryFights: fightEntityAdapter.updateMany(updates, state.selectedEventCategories.selectedCategoryFights)
            }
          };
        }
      }
      return state;
    }

    case EVENT_MANAGER_CATEGORY_STATE_LOADED: {
      const {competitionId, categoryId, payload} = action;
      if (state.selectedEventId === competitionId && state.selectedEventCategories.selectedCategoryId === categoryId && payload) {

        const {brackets} = payload;
        const newFights = brackets && brackets.fights && fightEntityAdapter.upsertMany(brackets.fights, fightsInitialState);
        return {
          ...state,
          selectedEventCategories: {
            ...state.selectedEventCategories,
            selectedCategoryState: payload,
            selectedCategoryFights: newFights || fightsInitialState
          }
        };
      }
      return state;
    }

    case EVENT_MANAGER_CATEGORIES_LOADED: {
      const competitionId = action.competitionId;
      const categoriesRaw = action.payload as any[];
      const categories = categoriesRaw.map(rwc => ({
        id: rwc.id,
        ...rwc.category,
        fightsNumber: rwc.fightsNumber,
        numberOfCompetitors: rwc.numberOfCompetitors
      } as Category));
      if (competitionId === state.selectedEventId) {
        return {
          ...state,
          selectedEventCategories: categoryEntityAdapter.upsertMany(categories, state.selectedEventCategories)
        };
      } else {
        return state;
      }
    }
    case EVENT_MANAGER_COMPETITION_SELECTED: {
      const newState = {
        ...state,
        selectedEventId: action.payload.id,
        selectedEventCategories: categoriesInitialState,
        selectedEventCompetitors: competitorsInitialState,
      };
      return competitionPropertiesEntitiesAdapter.updateOne({
        id: action.payload.id,
        changes: {...action.payload} as Partial<CompetitionProperties>
      }, newState);
    }
    case COMPETITION_PUBLISHED:
    case COMPETITION_UNPUBLISHED: {
      const payload = action.payload as CompetitionProperties;
      const update = {id: action.competitionId, changes: {...payload}};
      return competitionPropertiesEntitiesAdapter.updateOne(update, state);
    }
    case EVENT_MANAGER_SCHEDULE_LOADED: {
      const {payload} = action;
      if (action.competitionId === state.selectedEventId) {
        return {
          ...state,
          selectedEventSchedule: payload || {}
        };
      }
      return state;
    }
    case EVENT_MANAGER_CATEGORY_SELECTED: {
      if (action.competitionId === state.selectedEventId) {
        return {
          ...state,
          selectedEventCategories: {
            ...state.selectedEventCategories,
            selectedCategoryId: action.categoryId
          }
        };
      }
      return state;
    }
    case EVENT_MANAGER_COMPETITION_UNSELECTED: {
      return {
        ...state,
        selectedEventId: null,
        selectedEventCategories: categoriesInitialState,
        selectedEventSchedule: scheduleInitialState,
        selectedEventCompetitors: competitorsInitialState,
        selectedEventDefaultCategories: [] as Category[]
      };
    }
    case EVENT_MANAGER_DEFAULT_CATEGORIES_LOADED: {
      if (action.competitionId === state.selectedEventId && action.payload) {
        return {
          ...state,
          selectedEventDefaultCategories: action.payload
        };
      }
      return state;
    }
    case EVENT_MANAGER_CATEGORY_UNSELECTED: {
      if (action.competitionId === state.selectedEventId) {
        return {
          ...state,
          selectedEventCategories: {
            ...state.selectedEventCategories,
            selectedCategoryId: null,
            selectedCategoryFights: fightsInitialState,
            selectedCategoryState: null,
          }
        };
      }
      return state;
    }
    case EVENT_MANAGER_FIGHTERS_FOR_COMPETITION_LOADED: {
      if (action.competitionId === state.selectedEventId) {
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
      if (action.competitionId === state.selectedEventId) {
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
          selectedEventCompetitors: newEventCompetitors,
        };
      }
      return state;
    }
    case EVENT_MANAGER_FIGHTERS_FOR_COMPETITION_PAGE_UPDATED: {
      if (action.competitionId === state.selectedEventId) {
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
    case BRACKETS_GENERATED: {
      if (action.competitionId === state.selectedEventId) {
        const {fights} = action.payload;
        if (action.id === state.selectedEventCategories.selectedCategoryId) {
          if (fights) {
            const categoryFights = fightEntityAdapter.addAll(fights, fightsInitialState);
            return {
              ...state,
              selectedEventCategories: categoryEntityAdapter.updateOne({
                id: action.id,
                changes: {fightsNumber: fights.length}
              }, {
                ...state.selectedEventCategories,
                selectedCategoryFights: categoryFights
              })
            };
          }
        }
        if (fights && fights.length > 0) {
          return {
            ...state,
            selectedEventCategories: categoryEntityAdapter.updateOne({
              id: action.id,
              changes: {fightsNumber: fights.length}
            }, state.selectedEventCategories)
          };
        }
      }
      return state;
    }
    case EVENT_MANAGER_COMPETITOR_REMOVED: {
      if (action.competitionId === state.selectedEventId && action.id) {
        return {
          ...state,
          selectedEventCompetitors: competitorEntityAdapter.removeOne(action.payload.competitorId, state.selectedEventCompetitors),
        };
      }
      return state;
    }
    case COMPETITION_CREATED:
      return competitionPropertiesEntitiesAdapter.addOne(action.payload.properties, state);
    case COMPETITION_DELETED:
      return competitionPropertiesEntitiesAdapter.removeOne(action.competitionId, state);
    case CATEGORY_STATE_DELETED:
    case CATEGORY_DELETED:
      if (action.competitionId === state.selectedEventId && action.id) {
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
      if (action.competitionId === state.selectedEventId) {
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
      if (state.selectedEventId === competitionId && payload) {
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
      if (state.selectedEventCategories.selectedCategoryId === categoryId && state.selectedEventId === competitionId && payload) {
        const {newFights} = payload;
        if (newFights) {
          return {
            ...state,
            selectedEventCategories: {
              ...state.selectedEventCategories,
              selectedCategoryFights: newFights
            }
          };
        }
      }
      return state;
    }
    case EVENT_MANAGER_PERIOD_ADDED: {
      if (action.competitionId === state.selectedEventId) {
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
      if (state.selectedEventId === competitionId && payload) {
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
      if (state.selectedEventId === competitionId) {
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
      if (action.competitionId === state.selectedEventId && action.payload) {
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
      if (action.competitionId === state.selectedEventId && category) {
        return {
          ...state,
          selectedEventCategories: categoryEntityAdapter.addOne(category, state.selectedEventCategories)
        };
      }
      return state;
    }
    case EVENT_MANAGER_SCHEDULE_DROPPED: {
      if (action.competitionId === state.selectedEventId) {
        return {
          ...state,
          selectedEventSchedule: scheduleInitialState
        };
      }
      return state;
    }
    case EVENT_MANAGER_ALL_BRACKETS_DROPPED: {
      if (action.competitionId === state.selectedEventId) {
        const categoryIds = state.selectedEventCategories.ids as string[];
        return {
          ...state,
          selectedEventCategories: categoryEntityAdapter.updateMany(categoryIds.map(value => ({
              id: value,
              changes: {fightsNumber: 0}
            })), {
              ...state.selectedEventCategories,
              selectedCategoryFights: fightsInitialState
            }
          )
        };
      }
      return state;
    }
    case EVENT_MANAGER_CATEGORY_BRACKETS_DROPPED: {
      if (action.competitionId === state.selectedEventId && action.id === state.selectedEventCategories.selectedCategoryId) {
        return {
          ...state,
          selectedEventCategories: categoryEntityAdapter.updateOne({
              id: action.id,
              changes: {fightsNumber: 0}
            }, {
              ...state.selectedEventCategories,
              selectedCategoryFights: fightsInitialState
            }
          )
        };
      }
      if (action.id) {
        return {
          ...state,
          selectedEventCategories: categoryEntityAdapter.updateOne({
            id: action.id,
            changes: {fightsNumber: 0}
          }, state.selectedEventCategories)
        };
      }
      return state;
    }
    case EVENT_MANAGER_COMPETITOR_UPDATED: {
      if (action.competitionId === state.selectedEventId && action.payload) {
        const {fighter} = action.payload;
        if (action.id === state.selectedEventCategories.selectedCategoryId) {
          return {
            ...state,
            selectedEventCompetitors: competitorEntityAdapter.updateOne({
              id: fighter.email,
              changes: fighter
            }, state.selectedEventCompetitors)
          };
        }
        return {
          ...state,
          selectedEventCompetitors: competitorEntityAdapter.updateOne({
            id: fighter.email,
            changes: fighter
          }, state.selectedEventCompetitors),
        };
      }
      return state;
    }
    default:
      return state;
  }
}

export interface State extends AppState {
  eventManagerState: EventManagerState;
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

export function eventManagerReducers(): ActionReducerMap<EventManagerState> {
  return {
    myEvents: myEventsReducer,
    socketConnected: socketStateReducer,
    dashboardState: dashboardReducers,
    header: headerReducer
  };
}

export const EVENT_MANAGER_REDUCERS: InjectionToken<ActionReducerMap<EventManagerState>> =
  new InjectionToken<ActionReducerMap<EventManagerState>>('EVENT_MANAGER_REDUCERS', {
    factory: eventManagerReducers
  });

export const eventManagerGetSelectedEventId = createSelector(eventManagerGetMyEventsCollection, state => state && state.selectedEventId);
export const eventManagerGetMyEventsProperties = getAllMyCompetitions;
export const eventManagerGetSelectedEventDefaultCategories = createSelector(eventManagerGetMyEventsCollection, state => state && state.selectedEventDefaultCategories);

export const eventManagerGetSelectedEvent = createSelector(
  selectMyCompetitions,
  eventManagerGetSelectedEventId,
  (entities, selectedId) => {
    return selectedId && entities[selectedId];
  }
);

export const eventManagerGetSelectedEventRegistrationInfo = createSelector(eventManagerGetSelectedEvent, event => event && event.registrationInfo);
export const eventManagerGetSelectedEventTimeZone = createSelector(eventManagerGetSelectedEvent, event => event && event.timeZone);

export const eventManagerGetSelectedEventName = createSelector(eventManagerGetSelectedEvent, event => event && event.competitionName);

export const eventManagerGetSelectedEventsCategoriesCollection = createSelector(eventManagerGetMyEventsCollection, state => {
  return (state && state.selectedEventCategories) || categoriesInitialState;
});
export const eventManagerGetSelectedEventSelectedCategoryState = createSelector(eventManagerGetSelectedEventsCategoriesCollection, cats => cats.selectedCategoryState);
export const eventManagerGetSelectedEventSelectedCategoryNumberOfCompetitors = createSelector(eventManagerGetSelectedEventSelectedCategoryState, state => state && state.numberOfCompetitors);
export const eventManagerGetSelectedEventSelectedCategoryId = createSelector(eventManagerGetSelectedEventsCategoriesCollection, cats => cats.selectedCategoryId);
export const eventManagerGetSelectedEventSelectedCategoryFightsCollection = createSelector(eventManagerGetSelectedEventsCategoriesCollection, cats => cats.selectedCategoryFights);

export const {
  // select the dictionary of user entities
  selectEntities: eventManagerGetSelectedEventCategoriesDictionary,

  // select the array of users
  selectAll: eventManagerGetSelectedEventAllCategories,

  // select the total user count
} = categoryEntityAdapter.getSelectors(eventManagerGetSelectedEventsCategoriesCollection);

export const {
  selectAll: eventManagerGetSelectedEventSelectedCategoryAllFights,
  selectEntities: eventManagerGetSelectedEventSelectedCategoryFightsEntities
} = fightEntityAdapter.getSelectors(eventManagerGetSelectedEventSelectedCategoryFightsCollection);

export const eventManagerGetSelectedEventSelectedCategory = createSelector(
  eventManagerGetSelectedEventCategoriesDictionary,
  eventManagerGetSelectedEventSelectedCategoryId,
  (entities, selectedId) => {
    return selectedId && entities[selectedId];
  }
);
export const eventManagerGetSelectedEventCategory = createSelector(eventManagerGetSelectedEventCategoriesDictionary,
  (dict, props) => props.id && dict[props.id]);
export const eventManagerGetSelectedEventCategories = eventManagerGetSelectedEventAllCategories;
export const eventManagerGetSelectedEventSchedule = createSelector(eventManagerGetMyEventsCollection, state => {
  return state && state.selectedEventSchedule;
});

export const eventManagerGetSelectedEventSelectedCategoryStartTime = createSelector(eventManagerGetSelectedEventSchedule, eventManagerGetSelectedEventSelectedCategoryId, (schedule, categoryId) => {
  if (schedule && categoryId && schedule.periods) {
    const categories = schedule.periods.map(value => value.schedule).reduce((previousValue, currentValue) => [...previousValue, ...currentValue], []);
    const entry = categories.find(value => value.categoryId === categoryId);
    return entry && entry.startTime;
  }
});

export const eventManagerGetSelectedEventAvailableRegistrationGroups = createSelector(eventManagerGetSelectedEventRegistrationInfo, regInfo => regInfo && regInfo.registrationGroups);

export const eventManagerGetSelectedEventSelectedCategoryFightsEditorState = createSelector(eventManagerGetSelectedEventsCategoriesCollection, cats => cats.selectedEventFightsEditorState);
export const eventManagerGetSelectedEventSelectedCategoryFightsEditorStateSelectedChangeId = createSelector(eventManagerGetSelectedEventSelectedCategoryFightsEditorState, cats => cats.selectedChangeId);
export const {
  selectAll: eventManagerGetSelectedEventSelectedCategoryFightsEditorStateAll,
  selectEntities: eventManagerGetSelectedEventSelectedCategoryFightsEditorStateEntities,
  selectIds: eventManagerGetSelectedEventSelectedCategoryFightsEditorSelectStateIds,
} = fightsEditorChangeEntityAdapter.getSelectors(eventManagerGetSelectedEventSelectedCategoryFightsEditorState);

export const eventManagerGetSelectedEventSelectedCategoryFightsEditorStateIds =
  eventManagerGetSelectedEventSelectedCategoryFightsEditorSelectStateIds;
export const eventManagerGetSelectedEventSelectedCategoryFightsEditorStateAllChanges =
  eventManagerGetSelectedEventSelectedCategoryFightsEditorStateAll;

export const eventManagerGetSelectedEventSelectedCategoryFightsEditorStateSelectedChange = createSelector(eventManagerGetSelectedEventSelectedCategoryFightsEditorStateEntities,
  eventManagerGetSelectedEventSelectedCategoryFightsEditorStateSelectedChangeId, (entities, id) => id && entities[id]);

export const eventManagerGetSelectedEventSelectedCategoryFightsEditorStateSelectedChangeFightsIds =
  createSelector(eventManagerGetSelectedEventSelectedCategoryFightsEditorStateSelectedChange, change => (change && change.selectedFightIds) || []);

export const eventManagerGetSelectedEventSelectedCategoryFightsEditorStateSelectedChangeFights = createSelector(
  eventManagerGetSelectedEventSelectedCategoryFightsEditorStateSelectedChange,
  eventManagerGetSelectedEventSelectedCategoryFightsEntities,
  (change, fightsEntities) => {
    return (change && fightsEntities && change.selectedFightIds && change.selectedFightIds.map(id => fightsEntities[id]).filter(f => !!f)) || [];
  });

export const eventManagerGetSelectedEventScheduleProperties = createSelector(eventManagerGetMyEventsCollection, state => {
  return state && state.selectedEventSchedule && state.selectedEventSchedule.scheduleProperties;
});

export const eventManagerGetSelectedEventScheduleEmpty = createSelector(eventManagerGetMyEventsCollection, state => {
  return !(!!state && !!state.selectedEventSchedule && !!state.selectedEventSchedule.periods && state.selectedEventSchedule.periods.length > 0);
});

export const eventManagerGetSelectedEventSchedulePeriods = createSelector(eventManagerGetMyEventsCollection, state => {
  return state && state.selectedEventSchedule && state.selectedEventSchedule.periods;
});

export const eventManagerGetSelectedEventSelectedCategoryFights = eventManagerGetSelectedEventSelectedCategoryAllFights;
export const eventManagerGetSelectedEventSelectedCategoryFightsAreLoading = createSelector(eventManagerGetSelectedEventSelectedCategoryId, eventManagerGetSelectedEventSelectedCategoryAllFights,
  (categoryId, fights) => (categoryId && categoryId.length > 0) && (!fights || fights.length === 0));

export const eventManagerGetSelectedEventCompetitorsCollection = createSelector(eventManagerGetMyEventsCollection, state => {
  return (state && state.selectedEventCompetitors) || competitorsInitialState;
});

export const {
  selectEntities: eventManagerGetSelectedEventCompetitorsDictionary,
  selectAll: eventManagerGetSelectedEventAllCompetitors,
} = competitorEntityAdapter.getSelectors(eventManagerGetSelectedEventCompetitorsCollection);

export const eventManagerGetSelectedEventCompetitors = eventManagerGetSelectedEventAllCompetitors;
export const eventManagerGetSelectedEventCompetitorsTotal = createSelector(eventManagerGetSelectedEventCompetitorsCollection, state => state.total);
export const eventManagerGetSelectedEventCompetitorsSelectedCompetitorId = createSelector(eventManagerGetSelectedEventCompetitorsCollection, state => state.selectedCompetitorId);
export const eventManagerGetSelectedEventCompetitorsPageSize = createSelector(eventManagerGetSelectedEventCompetitorsCollection, state => state.pageSize);
export const eventManagerGetSelectedEventCompetitorsPageNumber = createSelector(eventManagerGetSelectedEventCompetitorsCollection, state => state.pageNumber);
export const eventManagerGetSelectedEventSelectedCompetitor = createSelector(
  eventManagerGetSelectedEventCompetitorsDictionary,
  eventManagerGetSelectedEventCompetitorsSelectedCompetitorId,
  (entities, selectedId) => {
    return selectedId && entities[selectedId];
  }
);
