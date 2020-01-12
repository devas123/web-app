import {Action, ActionReducer, ActionReducerMap, createFeatureSelector, createSelector, MetaReducer} from '@ngrx/store';
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
    fightEntityAdapter,
    FightsEditorChange,
    fightsEditorChangeEntityAdapter,
    fightsEditorInitialState,
    fightsInitialState,
    Period,
    PeriodProperties,
    ScheduleProperties
} from '../commons/model/competition.model';
import * as fromRouter from '@ngrx/router-store';
import {
    BRACKETS_GENERATED,
    CATEGORY_ADDED,
    CATEGORY_DELETED,
    CATEGORY_STATE_DELETED,
    COMPETITION_PROPERTIES_UPDATED, COMPETITION_SELECTED,
    EVENT_MANAGER_ALL_BRACKETS_DROPPED,
    EVENT_MANAGER_CATEGORIES_LOADED,
    EVENT_MANAGER_CATEGORY_BRACKETS_DROPPED,
    EVENT_MANAGER_CATEGORY_MOVED,
    EVENT_MANAGER_CATEGORY_SELECTED,
    EVENT_MANAGER_CATEGORY_STATE_LOADED,
    EVENT_MANAGER_CATEGORY_UNSELECTED,
    EVENT_MANAGER_COMPETITION_UNSELECTED,
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
import produce, {applyPatches, Draft} from 'immer';
import {COMPETITION_PUBLISHED, COMPETITION_UNPUBLISHED} from '../actions/actions';
import * as competitorsActions from '../modules/competition/redux/actions/competitors';
import {COMPETITION_PROPERTIES_LOADED} from '../modules/competition/redux/actions/misc';

export interface AppState {
    accountState: AccountState;
    router: fromRouter.RouterReducerState<any>;
    selectedEventState: CompetitionState;
}

export interface CommonAction extends Action {
    payload: any;
    categoryId: string | null;
    competitionId: string | null;
}

export interface CompetitionState extends CompetitionProperties {
    selectedEventCategories: CategoriesCollection;
    selectedEventCompetitors: CompetitorsCollection;
    selectedEventSchedule: Schedule;
    selectedEventDefaultCategories: Category[];
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
        competitionId: null,
    },
    periods: [],
    competitionId: null
};

export const initialCompetitionState: CompetitionState = {
    selectedEventCategories: categoriesInitialState,
    selectedEventCompetitors: competitorsInitialState,
    selectedEventSchedule: scheduleInitialState,
    selectedEventDefaultCategories: [],
} as CompetitionState;

export const competitionPropertiesEntitiesInitialState: EventPropsEntities = competitionPropertiesEntitiesAdapter.getInitialState({
    selectedEventId: null,
    selectedEventState: initialCompetitionState
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

const fightsEditorChangeHandler = produce((state: Draft<CompetitionState>, action) => {
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


export const reducers: ActionReducerMap<AppState> = {
    accountState: accountStateReducer,
    router: fromRouter.routerReducer,
    selectedEventState: competitionStateReducer(fightsEditorChangeHandler)
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

export function competitionStateReducer(fightsEditorHandler: (st: CompetitionState, a: any) => CompetitionState) {
    return produce((state: CompetitionState = initialCompetitionState, action) => {
        switch (action.type) {
            case competitorsActions.COMPETITOR_ADDED: {
                const {competitor} = action.payload;
                if (state.id === action.competitionId) {
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
                if (state.id === action.competitionId) {
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
                if (state.id === action.competitionId) {
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
                return fightsEditorHandler(state, action);
            }
            case EVENT_MANAGER_REGISTRATION_GROUP_DELETED: {
                return produce(state, draft => {
                    if (draft.id === action.competitionId
                        && draft.registrationInfo
                        && action.payload.periodId && action.payload.groupId) {
                        const {periodId, groupId} = action.payload;
                        if (!draft.registrationInfo.registrationGroups) {
                            draft.registrationInfo.registrationGroups = [];
                        }
                        const per = draft.registrationInfo.registrationPeriods
                            .find(p => p.id === periodId);
                        per.registrationGroupIds = per.registrationGroupIds.filter(id => id !== groupId);
                        const group =
                            draft.registrationInfo.registrationGroups.find(gr => gr.id === groupId);
                        group.registrationPeriodIds = group.registrationPeriodIds.filter(pid => pid !== periodId);
                        if (group.registrationPeriodIds.length === 0) {
                            draft.registrationInfo.registrationGroups =
                                draft.registrationInfo.registrationGroups.filter(gr => gr.id !== groupId);
                        }
                    }
                });
            }
            case EVENT_MANAGER_REGISTRATION_GROUP_CREATED: {
                return produce(state, draft => {
                    if (draft.id === action.competitionId
                        && draft && draft.registrationInfo
                        && action.payload.periodId && action.payload.group) {
                        if (!draft.registrationInfo.registrationGroups) {
                            draft.registrationInfo.registrationGroups = [];
                        }
                        draft.registrationInfo.registrationGroups.push(action.payload.group);
                        draft.registrationInfo.registrationPeriods
                            .find(per => per.id === action.payload.periodId)
                            .registrationGroupIds.push(action.payload.group.id);
                    }
                });
            }
            case REGISTRATION_INFO_UPDATED: {
                return produce(state, draft => {
                    if (draft === action.competitionId && draft && action.payload.registrationInfo) {
                        draft.registrationInfo = action.payload.registrationInfo;
                    }
                });
            }
            case COMPETITION_PROPERTIES_UPDATED: {
                const competitionId = action.competitionId;
                if (competitionId === state.id) {
                    return produce(state, draft => (
                        {
                            ...draft,
                            ...action.payload.properties,
                            startDate: action.payload.properties.startDate && new Date(action.payload.properties.startDate),
                            endDate: action.payload.properties.endDate && new Date(action.payload.properties.endDate)
                        }
                    ));
                }
                return state;
            }

            case EVENT_MANAGER_GENERATE_SCHEDULE_COMMAND: {
                const {payload, competitionId} = action;
                if (state.id === competitionId && payload) {
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

                if (state.id === competitionId && payload) {
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
                if (state.id === competitionId && payload && state.selectedEventCategories.selectedCategoryId === categoryId) {
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
                if (state.id === competitionId && state.selectedEventCategories.selectedCategoryId === categoryId && payload) {

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
                if (categoriesRaw) {
                    const categories = categoriesRaw.map(rwc => ({
                        id: rwc.id,
                        ...rwc.category,
                        fightsNumber: rwc.fightsNumber,
                        numberOfCompetitors: rwc.numberOfCompetitors
                    } as Category));
                    if (competitionId === state.id) {
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
                return {...state, ...action.payload};

            }
            case COMPETITION_SELECTED: {
                return {...state, id: action.competitionId};
            }
            case COMPETITION_PUBLISHED:
            case COMPETITION_UNPUBLISHED: {
                const payload = action.payload as CompetitionProperties;
                if (state.id === action.competitionId) {
                    return {
                        ...state,
                        ...payload
                    };
                }
                return state;
            }
            case EVENT_MANAGER_SCHEDULE_LOADED: {
                const {payload} = action;
                if (action.competitionId === state.id) {
                    return {
                        ...state,
                        selectedEventSchedule: payload || {}
                    };
                }
                return state;
            }
            case EVENT_MANAGER_CATEGORY_SELECTED: {
                if (action.competitionId === state.id) {
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
                    id: null,
                    selectedEventCategories: categoriesInitialState,
                    selectedEventSchedule: scheduleInitialState,
                    selectedEventCompetitors: competitorsInitialState,
                    selectedEventDefaultCategories: [] as Category[]
                };
            }
            case EVENT_MANAGER_DEFAULT_CATEGORIES_LOADED: {
                if (action.competitionId === state.id && action.payload) {
                    return {
                        ...state,
                        selectedEventDefaultCategories: action.payload
                    };
                }
                return state;
            }
            case EVENT_MANAGER_CATEGORY_UNSELECTED: {
                if (action.competitionId === state.id) {
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
                if (action.competitionId === state.id) {
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
                if (action.competitionId === state.id) {
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
                if (action.competitionId === state.id) {
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
                if (action.competitionId === state.id) {
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
                if (action.competitionId === state.id && action.id) {
                    return {
                        ...state,
                        selectedEventCompetitors: competitorEntityAdapter.removeOne(action.payload.competitorId, state.selectedEventCompetitors),
                    };
                }
                return state;
            }
            case CATEGORY_STATE_DELETED:
            case CATEGORY_DELETED:
                if (action.competitionId === state.id && action.id) {
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
                if (action.competitionId === state.id) {
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
                if (state.id === competitionId && payload) {
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
                if (state.selectedEventCategories.selectedCategoryId === categoryId && state.id === competitionId && payload) {
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
                if (action.competitionId === state.id) {
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
                if (state.id === competitionId && payload) {
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
                if (state.id === competitionId) {
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
                if (action.competitionId === state.id && action.payload) {
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
                if (action.competitionId === state.id && category) {
                    return {
                        ...state,
                        selectedEventCategories: categoryEntityAdapter.addOne(category, state.selectedEventCategories)
                    };
                }
                return state;
            }
            case EVENT_MANAGER_SCHEDULE_DROPPED: {
                if (action.competitionId === state.id) {
                    return {
                        ...state,
                        selectedEventSchedule: scheduleInitialState
                    };
                }
                return state;
            }
            case EVENT_MANAGER_ALL_BRACKETS_DROPPED: {
                if (action.competitionId === state.id) {
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
                if (action.competitionId === state.id) {
                    if (action.id === state.selectedEventCategories.selectedCategoryId) {
                        return produce(state, draft => {
                            draft.selectedEventCategories = categoryEntityAdapter.updateOne({
                                    id: action.id,
                                    changes: {fightsNumber: 0}
                                }, {
                                    ...draft.selectedEventCategories,
                                    selectedCategoryFights: fightsInitialState
                                }
                            );
                        });
                    }
                }
                if (action.id) {
                    return produce(state, draft => {
                        draft.selectedEventCategories = categoryEntityAdapter.updateOne({
                            id: action.id,
                            changes: {fightsNumber: 0}
                        }, state.selectedEventCategories);
                    });
                }
                return state;
            }
            case EVENT_MANAGER_COMPETITOR_UPDATED: {
                if (action.competitionId === state.id && action.payload) {
                    const {fighter} = action.payload;
                    return {
                        ...state,
                        selectedEventCompetitors: competitorEntityAdapter.updateOne({
                            id: fighter.email,
                            changes: fighter
                        }, state.selectedEventCompetitors)
                        ,
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

export const getSelectedEventId = createSelector(getSelectedEventState, state => state && state.id);
