import {
  CommonAction,
  CompetitionProperties,
  competitionPropertiesEntitiesAdapter,
  competitionPropertiesEntitiesInitialState,
  EventPropsEntities,
  getSelectedEventState
} from '../../../reducers/global-reducers';
import {
  COMPETITION_CREATED,
  COMPETITION_SELECTED,
  EVENT_MANAGER_COMPETITION_UNSELECTED,
  EVENT_MANAGER_COMPETITIONS_LOADED,
  EVENT_MANAGER_HEADER_REMOVE,
  EVENT_MANAGER_HEADER_SET,
  EVENT_MANAGER_SOCKET_CONNECTED,
  EVENT_MANAGER_SOCKET_DISCONNECTED
} from './event-manager-actions';
import {ActionReducerMap, createSelector} from '@ngrx/store';
import {COMPETITION_DELETED, COMPETITION_PUBLISHED, COMPETITION_UNPUBLISHED} from '../../../actions/actions';
import {
  categoriesInitialState,
  categoryEntityAdapter,
  competitorEntityAdapter,
  competitorsInitialState,
  EventManagerState,
  fightEntityAdapter,
  fightsEditorChangeEntityAdapter,
  fightsInitialState,
  HeaderDescription,
  stagesEntityAdapter
} from '../../../commons/model/competition.model';
import {dashboardReducers} from './dashboard-reducers';
import {getEventManagerState} from './reducers';
import {InjectionToken} from '@angular/core';
import {COMPETITION_PROPERTIES_LOADED} from '../../../actions/misc';

export const eventManagerGetMyEventsCollection = createSelector(getEventManagerState, state => state && state.myEvents);
export const eventManagerGetSocketConnected = createSelector(getEventManagerState, state => state.socketConnected);
export const eventManagerGetHeaderDescription = createSelector(getEventManagerState, state => state.header);

export const {
  selectEntities: selectMyCompetitions,

  selectAll: getAllMyCompetitions
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

export function myEventsReducer(state: EventPropsEntities = competitionPropertiesEntitiesInitialState, action): EventPropsEntities {
  switch (action.type) {
    case EVENT_MANAGER_COMPETITIONS_LOADED: {
      const compStates = action.payload;
      if (Array.isArray(compStates)) {
        const removedState = competitionPropertiesEntitiesAdapter.removeAll(state);
        return competitionPropertiesEntitiesAdapter.addMany(compStates, removedState);
      }
      return state;
    }
    case COMPETITION_SELECTED: {
      return {
        ...state,
        selectedEventId: action.competitionId
      };
    }
    case COMPETITION_PROPERTIES_LOADED: {
      const newState = {
        ...state,
        selectedEventId: action.competitionId
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
    case EVENT_MANAGER_COMPETITION_UNSELECTED: {
      return {
        ...state,
        selectedEventId: null
      };
    }
    case COMPETITION_CREATED:
      return competitionPropertiesEntitiesAdapter.addOne(action.payload.properties, state);
    case COMPETITION_DELETED:
      return competitionPropertiesEntitiesAdapter.removeOne(action.competitionId, state);

    default: {
      return state;
    }
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

export const eventManagerGetMyEventsProperties = getAllMyCompetitions;
export const eventManagerGetSelectedEventDefaultCategories = createSelector(getSelectedEventState, state => state && state.selectedEventDefaultCategories);

export const eventManagerGetSelectedEventRegistrationInfo = createSelector(getSelectedEventState, event => event && event.registrationInfo);
export const eventManagerGetSelectedEventRegistrationPeriods = createSelector(eventManagerGetSelectedEventRegistrationInfo, registrationInfo => registrationInfo && registrationInfo.registrationPeriods || []);
export const eventManagerGetSelectedEventTimeZone = createSelector(getSelectedEventState, event => event && event.timeZone);

export const eventManagerGetSelectedEventName = createSelector(getSelectedEventState, event => event && event.competitionName);

export const getSelectedEventCategoriesCollection = createSelector(getSelectedEventState, state => {
  return (state && state.selectedEventCategories) || categoriesInitialState;
});
export const getSelectedEventSelectedCategoryState = createSelector(getSelectedEventCategoriesCollection, cats => cats.selectedCategoryState);
export const getSelectedEventSelectedCategoryNumberOfCompetitors = createSelector(getSelectedEventSelectedCategoryState, state => state && state.numberOfCompetitors);
export const eventManagerGetSelectedEventSelectedCategoryId = createSelector(getSelectedEventCategoriesCollection, cats => cats.selectedCategoryId);
export const eventManagerGetSelectedEventSelectedCategoryStagesCollection = createSelector(getSelectedEventCategoriesCollection, cats => cats.selectedCategoryStages);
export const eventManagerGetSelectedEventSelectedCategorySelectedStageId = createSelector(eventManagerGetSelectedEventSelectedCategoryStagesCollection, stages => stages.selectedStageId);

const {
  // select the dictionary of user entities
  selectEntities: eventManagerGetSelectedEventSelectedCategoryStagesDictionary,

  // select the array of users
  selectAll: eventManagerGetSelectedEventSelectedCategoryALLStages

  // select the total user count
} = stagesEntityAdapter.getSelectors(eventManagerGetSelectedEventSelectedCategoryStagesCollection);

export const eventManagerGetSelectedEventSelectedCategorySelectedStages = eventManagerGetSelectedEventSelectedCategoryALLStages;

export const eventManagerGetSelectedEventSelectedCategorySelectedStage =
  createSelector(eventManagerGetSelectedEventSelectedCategorySelectedStageId, eventManagerGetSelectedEventSelectedCategoryStagesDictionary, (stageId, stages) => stageId && stages[stageId]);
export const eventManagerGetSelectedEventSelectedCategorySelectedStageFightsCollection =
  createSelector(eventManagerGetSelectedEventSelectedCategoryStagesCollection, stage =>
    (stage && stage.selectedStageFights) || fightsInitialState);


export const {
  // select the dictionary of user entities
  selectEntities: eventManagerGetSelectedEventCategoriesDictionary,

  // select the array of users
  selectAll: eventManagerGetSelectedEventAllCategories

  // select the total user count
} = categoryEntityAdapter.getSelectors(getSelectedEventCategoriesCollection);

export const {
  selectAll: eventManagerGetSelectedEventSelectedCategorySelectedStageAllFights,
  selectEntities: eventManagerGetSelectedEventSelectedCategorySelectedStageFightsEntities
} = fightEntityAdapter.getSelectors(eventManagerGetSelectedEventSelectedCategorySelectedStageFightsCollection);

export const eventManagerGetSelectedEventSelectedCategoryNumberOfCompetitors = createSelector(getSelectedEventSelectedCategoryState, state => state && state.numberOfCompetitors);

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
export const eventManagerGetSelectedEventSchedule = createSelector(getSelectedEventState, state => {
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

export const eventManagerGetSelectedEventSelectedCategoryFightsEditorState = createSelector(getSelectedEventCategoriesCollection, cats => cats.selectedEventFightsEditorState);
export const eventManagerGetSelectedEventSelectedCategoryFightsEditorStateSelectedChangeId = createSelector(eventManagerGetSelectedEventSelectedCategoryFightsEditorState, cats => cats.selectedChangeId);
export const {
  selectAll: eventManagerGetSelectedEventSelectedCategoryFightsEditorStateAll,
  selectEntities: eventManagerGetSelectedEventSelectedCategoryFightsEditorStateEntities,
  selectIds: eventManagerGetSelectedEventSelectedCategoryFightsEditorSelectStateIds
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
  eventManagerGetSelectedEventSelectedCategorySelectedStageFightsEntities,
  (change, fightsEntities) => {
    return (change && fightsEntities && change.selectedFightIds && change.selectedFightIds.map(id => fightsEntities[id]).filter(f => !!f)) || [];
  });

export const eventManagerGetSelectedEventScheduleProperties = createSelector(getSelectedEventState, state => {
  return state && state.selectedEventSchedule && state.selectedEventSchedule.scheduleProperties;
});

export const eventManagerGetSelectedEventScheduleEmpty = createSelector(getSelectedEventState, state => {
  return !(!!state && !!state.selectedEventSchedule && !!state.selectedEventSchedule.periods && state.selectedEventSchedule.periods.length > 0);
});

export const eventManagerGetSelectedEventSchedulePeriods = createSelector(getSelectedEventState, state => {
  return state && state.selectedEventSchedule && state.selectedEventSchedule.periods;
});

export const eventManagerGetSelectedEventSelectedCategorySelectedStageFights = eventManagerGetSelectedEventSelectedCategorySelectedStageAllFights;
export const eventManagerGetSelectedEventSelectedCategoryStateLoading = createSelector(getSelectedEventCategoriesCollection,
  (category) => category && category.categoryStateLoading);

export const eventManagerGetSelectedEventCompetitorsCollection = createSelector(getSelectedEventState, state => {
  return (state && state.selectedEventCompetitors) || competitorsInitialState;
});

export const {
  selectEntities: eventManagerGetSelectedEventCompetitorsDictionary,
  selectAll: eventManagerGetSelectedEventAllCompetitors
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
