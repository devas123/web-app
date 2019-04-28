// commands
import {CompetitionProperties, RegistrationGroup, RegistrationPeriod, Schedule} from '../../../reducers';
import {Category, Competitor} from '../../../commons/model/competition.model';
import {PeriodProperties} from './event-manager-reducers';

export const UPDATE_COMPETITION_PROPERTIES_COMMAND = 'UPDATE_COMPETITION_PROPERTIES_COMMAND';
export const EVENT_MANAGER_LOAD_COMPETITIONS_COMMAND = 'EVENT_MANAGER_LOAD_COMPETITIONS_COMMAND';
export const EVENT_MANAGER_LOAD_CATEGORIES_COMMAND = 'EVENT_MANAGER_LOAD_CATEGORIES_COMMAND';
export const EVENT_MANAGER_SELECT_COMPETITION_COMMAND = 'EVENT_MANAGER_SELECT_COMPETITION_COMMAND';
export const ADD_CATEGORY_COMMAND = 'ADD_CATEGORY_COMMAND';
export const EVENT_MANAGER_ADD_REGISTRATION_PERIOD_COMMAND = 'ADD_REGISTRATION_PERIOD_COMMAND';
export const EVENT_MANAGER_DELETE_REGISTRATION_PERIOD_COMMAND = 'DELETE_REGISTRATION_PERIOD_COMMAND';
export const EVENT_MANAGER_DELETE_REGISTRATION_GROUP_COMMAND = 'DELETE_REGISTRATION_GROUP_COMMAND';
export const EVENT_MANAGER_ADD_REGISTRATION_GROUP_COMMAND = 'ADD_REGISTRATION_GROUP_COMMAND';
export const DELETE_CATEGORY_COMMAND = 'DELETE_CATEGORY_COMMAND';
export const EVENT_MANAGER_CONNECT_SOCKET = 'EVENT_MANAGER_CONNECT_SOCKET';
export const EVENT_MANAGER_DISCONNECT_SOCKET = 'EVENT_MANAGER_DISCONNECT_SOCKET';
export const EVENT_MANAGER_ADD_COMPETITOR = 'ADD_COMPETITOR_COMMAND';
export const EVENT_MANAGER_MOVE_COMPETITOR = 'MOVE_COMPETITOR_COMMAND';
export const EVENT_MANAGER_REMOVE_COMPETITOR = 'REMOVE_COMPETITOR_COMMAND';
export const EVENT_MANAGER_LOAD_FIGHTERS_FOR_COMPETITION = 'EVENT_MANAGER_LOAD_FIGHTERS_FOR_COMPETITION';
export const EVENT_MANAGER_CREATE_FAKE_COMPETITORS_COMMAND = 'CREATE_FAKE_COMPETITORS_COMMAND';
export const EVENT_MANAGER_GENERATE_BRACKETS_COMMAND = 'GENERATE_BRACKETS_COMMAND';
export const EVENT_MANAGER_GENERATE_SCHEDULE_COMMAND = 'GENERATE_SCHEDULE_COMMAND';
export const EVENT_MANAGER_DROP_SCHEDULE_COMMAND = 'DROP_SCHEDULE_COMMAND';
export const EVENT_MANAGER_DROP_CATEGORY_BRACKETS_COMMAND = 'DROP_CATEGORY_BRACKETS_COMMAND';
export const EVENT_MANAGER_DROP_ALL_BRACKETS_COMMAND = 'DROP_ALL_BRACKETS_COMMAND';
export const EVENT_MANAGER_LOAD_FIGHTER_COMMAND = 'EVENT_MANAGER_LOAD_FIGHTER_COMMAND';
export const EVENT_MANAGER_CHANGE_COMPETITOR_CATEGORY_COMMAND = 'CHANGE_COMPETITOR_CATEGORY_COMMAND';
export const EVENT_MANAGER_UPDATE_COMPETITOR_COMMAND = 'UPDATE_COMPETITOR_COMMAND';

// events
export const EVENT_MANAGER_DEFAULT_CATEGORIES_LOADED = 'EVENT_MANAGER_DEFAULT_CATEGORIES_LOADED';
export const EVENT_MANAGER_REGISTRATION_PERIOD_ADDED = 'REGISTRATION_PERIOD_ADDED';
export const EVENT_MANAGER_REGISTRATION_PERIOD_DELETED = 'REGISTRATION_PERIOD_DELETED';
export const EVENT_MANAGER_REGISTRATION_GROUP_ADDED = 'REGISTRATION_GROUP_ADDED';
export const EVENT_MANAGER_REGISTRATION_GROUP_DELETED = 'REGISTRATION_GROUP_DELETED';
export const EVENT_MANAGER_COMPETITOR_UPDATED = 'COMPETITOR_UPDATED';
export const EVENT_MANAGER_CATEGORY_BRACKETS_DROPPED = 'CATEGORY_BRACKETS_DROPPED';
export const EVENT_MANAGER_SCHEDULE_DROPPED = 'SCHEDULE_DROPPED';
export const EVENT_MANAGER_ALL_BRACKETS_DROPPED = 'ALL_BRACKETS_DROPPED';
export const EVENT_MANAGER_FIGHTER_LOADED = 'EVENT_MANAGER_FIGHTER_LOADED';
export const EVENT_MANAGER_FIGHTERS_FOR_COMPETITION_LOADED = 'EVENT_MANAGER_FIGHTERS_FOR_COMPETITION_LOADED';
export const EVENT_MANAGER_FIGHTERS_FOR_COMPETITION_PAGE_CHANGED = 'EVENT_MANAGER_FIGHTERS_FOR_COMPETITION_PAGE_CHANGED';
export const EVENT_MANAGER_CATEGORIES_LOADED = 'EVENT_MANAGER_CATEGORIES_LOADED';
export const EVENT_MANAGER_SCHEDULE_LOADED = 'EVENT_MANAGER_SCHEDULE_LOADED';
export const EVENT_MANAGER_CATEGORY_STATE_LOADED = 'EVENT_MANAGER_CATEGORY_STATE_LOADED';
export const EVENT_MANAGER_COMPETITIONS_LOADED = 'EVENT_MANAGER_COMPETITIONS_LOADED';
export const EVENT_MANAGER_COMPETITION_SELECTED = 'EVENT_MANAGER_COMPETITION_SELECTED';
export const EVENT_MANAGER_FIGHTER_SELECTED = 'EVENT_MANAGER_FIGHTER_SELECTED';
export const EVENT_MANAGER_FIGHTER_UNSELECTED = 'EVENT_MANAGER_FIGHTER_UNSELECTED';
export const EVENT_MANAGER_CATEGORY_SELECTED = 'EVENT_MANAGER_CATEGORY_SELECTED';
export const EVENT_MANAGER_CATEGORY_UNSELECTED = 'EVENT_MANAGER_CATEGORY_UNSELECTED';
export const EVENT_MANAGER_COMPETITION_UNSELECTED = 'EVENT_MANAGER_COMPETITION_UNSELECTED';
export const COMPETITION_CREATED = 'COMPETITION_CREATED';
export const CATEGORY_ADDED = 'CATEGORY_ADDED';
export const CATEGORY_DELETED = 'CATEGORY_DELETED';
export const CATEGORY_STATE_DELETED = 'CATEGORY_STATE_DELETED';

export const BRACKETS_GENERATED = 'BRACKETS_GENERATED';
export const SCHEDULE_GENERATED = 'SCHEDULE_GENERATED';
export const FIGHTS_START_TIME_UPDATED = 'FIGHTS_START_TIME_UPDATED';
export const EVENT_MANAGER_COMPETITOR_ADDED = 'COMPETITOR_ADDED';
export const EVENT_MANAGER_COMPETITOR_REMOVED = 'COMPETITOR_REMOVED';
export const EVENT_MANAGER_COMPETITORS_MOVED = 'COMPETITORS_MOVED';
export const COMPETITION_PROPERTIES_UPDATED = 'COMPETITION_PROPERTIES_UPDATED';
export const EVENT_MANAGER_PERIOD_ADDED = 'EVENT_MANAGER_PERIOD_ADDED';
export const EVENT_MANAGER_PERIOD_REMOVED = 'EVENT_MANAGER_PERIOD_REMOVED';
export const EVENT_MANAGER_CATEGORY_MOVED = 'EVENT_MANAGER_CATEGORY_MOVED';

export const EVENT_MANAGER_SOCKET_CONNECTED = 'EVENT_MANAGER_SOCKET_CONNECTED';
export const EVENT_MANAGER_SOCKET_DISCONNECTED = 'EVENT_MANAGER_SOCKET_DISCONNECTED';

export const loadMyCompetitions = (creatorId: any, status?: string) => ({
  type: EVENT_MANAGER_LOAD_COMPETITIONS_COMMAND, payload: {
    creatorId,
    status
  }
});

export const eventManagerAddRegistrationPeriod = (competitionId: string, period: RegistrationPeriod) => ({
  type: EVENT_MANAGER_ADD_REGISTRATION_PERIOD_COMMAND,
  competitionId,
  payload: {period}
});

export const eventManagerAddRegistrationGroup = (competitionId: string, periodId, group: RegistrationGroup) => ({
  type: EVENT_MANAGER_ADD_REGISTRATION_GROUP_COMMAND,
  competitionId,
  payload: {
    periodId,
    group
  }
});

export const eventManagerDeleteRegistrationPeriod = (competitionId: string, periodId: string) => ({
  type: EVENT_MANAGER_DELETE_REGISTRATION_PERIOD_COMMAND,
  competitionId,
  payload: {periodId}
});

export const eventManagerDeleteRegistrationGroup = (competitionId: string, periodId: string, groupId: string) => ({
  type: EVENT_MANAGER_DELETE_REGISTRATION_GROUP_COMMAND,
  competitionId,
  payload: {
    periodId,
    groupId
  }
});


export const myCompetitionsLoaded = (competitionProperties: CompetitionProperties[]) => ({
  type: EVENT_MANAGER_COMPETITIONS_LOADED,
  payload: competitionProperties
});

export const eventManagerCategoriesLoaded = (competitionId: string, categories: any[]) => ({
  type: EVENT_MANAGER_CATEGORIES_LOADED,
  payload: categories,
  competitionId
});

export const eventManagerScheduleLoaded = (competitionId: string, schedule: Schedule) => ({
  type: EVENT_MANAGER_SCHEDULE_LOADED,
  payload: schedule,
  competitionId
});

export const eventManagerCategoryMoved = (competitionId: string, payload: any) => ({
  type: EVENT_MANAGER_CATEGORY_MOVED,
  payload,
  competitionId
});

export const eventManagerLoadCategories = (competitionId: string) => ({
  type: EVENT_MANAGER_LOAD_CATEGORIES_COMMAND,
  payload: competitionId
});

export const eventManagerCompetitionSelected = (competitionProperties: CompetitionProperties) => ({
  competitionId: competitionProperties.id,
  type: EVENT_MANAGER_COMPETITION_SELECTED,
  payload: competitionProperties
});
export const eventManagerSelectCompetition = (competitionId: string) => ({
  type: EVENT_MANAGER_SELECT_COMPETITION_COMMAND,
  payload: competitionId,
  competitionId
});

export const eventManagerAddCategory = (competitionId, category: Category) => ({
  type: ADD_CATEGORY_COMMAND,
  competitionId,
  payload: {category}
});

export const eventManagerPeriodAdded = (competitionId, period: PeriodProperties) => ({
  type: EVENT_MANAGER_PERIOD_ADDED,
  competitionId,
  payload: period
});

export const eventManagerPeriodRemoved = (competitionId, periodId: string) => ({
  type: EVENT_MANAGER_PERIOD_REMOVED,
  competitionId,
  payload: periodId
});

export const deleteCategory = (competitionId, categoryId: string) => ({
  type: DELETE_CATEGORY_COMMAND,
  competitionId,
  categoryId,
  payload: {categoryId}
});

export const eventManagerDefaultCategoriesLoaded = (competitionId, categories: Category[]) => ({
  type: EVENT_MANAGER_DEFAULT_CATEGORIES_LOADED,
  competitionId,
  payload: categories
});

export const updateCompetitionProperties = (props: CompetitionProperties) => ({
  type: UPDATE_COMPETITION_PROPERTIES_COMMAND,
  competitionId: props.id,
  payload: props
});

export const addCompetitor = (competitionId: string, competitor: Competitor) => ({
  type: EVENT_MANAGER_ADD_COMPETITOR,
  competitionId: competitionId,
  categoryId: competitor.categoryId,
  payload: competitor
});

export const eventManagerCreateFakeCompetitorsCommand = (competitionId: string, categoryId: string, numberOfCompetitors: number, numberOfAcademies: number) => ({
  type: EVENT_MANAGER_CREATE_FAKE_COMPETITORS_COMMAND,
  competitionId,
  categoryId,
  payload: {
    numberOfCompetitors,
    numberOfAcademies
  }
});

export const socketConnected = {type: EVENT_MANAGER_SOCKET_CONNECTED};
export const socketDisconnected = {type: EVENT_MANAGER_SOCKET_DISCONNECTED};
export const eventManagerConnectSocket = {type: EVENT_MANAGER_CONNECT_SOCKET};
export const eventManagerDisconnectSocket = {type: EVENT_MANAGER_DISCONNECT_SOCKET};
export const eventManagerGenerateBrackets = (competitionId, categoryId) => ({
  type: EVENT_MANAGER_GENERATE_BRACKETS_COMMAND,
  competitionId,
  categoryId
});

export const eventManagerGenerateSchedule = (competitionId, scheduleProperties) => ({
  type: EVENT_MANAGER_GENERATE_SCHEDULE_COMMAND,
  competitionId,
  payload: scheduleProperties
});
export const eventManagerCategorySelected = (competitionId: string, categoryId: string) => ({
  type: EVENT_MANAGER_CATEGORY_SELECTED,
  competitionId,
  categoryId,
  payload: {
    bracketType: 'SINGLE_ELIMINATION'
  }
});
export const eventManagerCategoryStateLoaded = (categoryState) => ({
  type: EVENT_MANAGER_CATEGORY_STATE_LOADED,
  competitionId: categoryState.competitionId,
  categoryId: categoryState.category.id,
  payload: categoryState
});

export const eventManagerCategoryUnselected = (competitionId: string) => ({
  type: EVENT_MANAGER_CATEGORY_UNSELECTED,
  competitionId
});

export const eventManagerCompetitionUnselected = ({
  type: EVENT_MANAGER_COMPETITION_UNSELECTED
});

export const eventManagerRemoveCompetitor = (competitor: Competitor) => ({
  type: EVENT_MANAGER_REMOVE_COMPETITOR,
  competitionId: competitor.competitionId,
  categoryId: competitor.categoryId,
  payload: {competitorId: competitor.email}
});

export const eventManagerLoadFightersForCompetition = (competitionId, categoryId, pageNumber, pageSize, searchString?) => ({
  type: EVENT_MANAGER_LOAD_FIGHTERS_FOR_COMPETITION,
  competitionId,
  categoryId,
  payload: {
    pageSize,
    pageNumber,
    searchString
  }
});

export const eventManagerCompetitionFightersPageChanged = (competitionId: string, categoryId, pageNumber: number) => ({
  type: EVENT_MANAGER_FIGHTERS_FOR_COMPETITION_PAGE_CHANGED,
  competitionId,
  categoryId,
  payload: pageNumber
});

export const eventManagerFightersForCompetitionLoaded = (competitionId, payload) => ({
  type: EVENT_MANAGER_FIGHTERS_FOR_COMPETITION_LOADED,
  competitionId,
  payload
});

export const eventManagerMoveFighter = (competitionId, categoryId, payload) => ({
  type: EVENT_MANAGER_MOVE_COMPETITOR,
  competitionId,
  categoryId,
  payload
});

export const eventManagerFighterSelected = (competitionId, categoryId, fighterId) => ({
  type: EVENT_MANAGER_FIGHTER_SELECTED,
  competitionId,
  categoryId,
  payload: fighterId
});

export const eventManagerLoadFighterCommand = (competitionId, categoryId, fighterId) => ({
  type: EVENT_MANAGER_LOAD_FIGHTER_COMMAND,
  competitionId,
  categoryId,
  payload: fighterId
});

export const eventManagerFighterLoaded = (competitor: Competitor) => ({
  type: EVENT_MANAGER_FIGHTER_LOADED,
  competitionId: competitor.competitionId,
  categoryId: competitor.categoryId,
  payload: competitor
});

export const eventManagerFighterUnselected = (competitionId, categoryId) => ({
  type: EVENT_MANAGER_FIGHTER_UNSELECTED,
  competitionId,
  categoryId
});

export const eventManagerChangeCompetitorCategoryCommand = (fighter: Competitor, newCategory: string) => ({
  type: EVENT_MANAGER_CHANGE_COMPETITOR_CATEGORY_COMMAND,
  competitionId: fighter.competitionId,
  payload: {
    fighter,
    newCategory
  }
});
export const eventManagerUpdateCompetitorCommand = (fighter: Competitor) => ({
  type: EVENT_MANAGER_UPDATE_COMPETITOR_COMMAND,
  competitionId: fighter.competitionId,
  categoryId: fighter.categoryId,
  payload: {
    fighter
  }
});

export const eventManagerDropScheduleCommand = (competitionId: string) => ({
  type: EVENT_MANAGER_DROP_SCHEDULE_COMMAND,
  competitionId
});

export const eventManagerDropCategoryBracketsCommand = (competitionId: string, categoryId: string) => ({
  type: EVENT_MANAGER_DROP_CATEGORY_BRACKETS_COMMAND,
  competitionId,
  categoryId
});

export const eventManagerDropAllBracketsCommand = (competitionId: string) => ({
  type: EVENT_MANAGER_DROP_ALL_BRACKETS_COMMAND,
  competitionId
});
