// commands
import {
  CompetitionProperties,
  MatDescription,
  RegistrationGroup,
  RegistrationInfo,
  RegistrationPeriod,
  Schedule
} from '../../../reducers/global-reducers';
import {
  AdjacencyList,
  Category,
  CategoryBracketsStage,
  CategoryRestriction,
  Competitor,
  CompetitorGroupChange,
  Fight,
  FightEditorChange,
  FightResultOption,
  HeaderDescription,
  Period,
  ScheduleRequirement,
  StageStatus
} from '../../../commons/model/competition.model';
import {createAction, props} from '@ngrx/store';
import {Dictionary} from '@ngrx/entity';

export const UPDATE_STAGE_STATUS_COMMAND = 'UPDATE_STAGE_STATUS_COMMAND';
export const UPDATE_COMPETITION_PROPERTIES_COMMAND = 'UPDATE_COMPETITION_PROPERTIES_COMMAND';
export const EVENT_MANAGER_LOAD_COMPETITIONS_COMMAND = 'EVENT_MANAGER_LOAD_COMPETITIONS_COMMAND';
export const LOAD_CATEGORIES_COMMAND = 'LOAD_CATEGORIES_COMMAND';
export const LOAD_SCHEDULE_COMMAND = 'LOAD_SCHEDULE_COMMAND';
export const ADD_CATEGORY_COMMAND = 'ADD_CATEGORY_COMMAND';
export const GENERATE_CATEGORIES_COMMAND = 'GENERATE_CATEGORIES_COMMAND';
export const CHANGE_CATEGORY_REGISTRATION_STATUS_COMMAND = 'CHANGE_CATEGORY_REGISTRATION_STATUS_COMMAND';
export const EVENT_MANAGER_ADD_REGISTRATION_PERIOD_COMMAND = 'ADD_REGISTRATION_PERIOD_COMMAND';
export const EVENT_MANAGER_DELETE_REGISTRATION_PERIOD_COMMAND = 'DELETE_REGISTRATION_PERIOD_COMMAND';
export const EVENT_MANAGER_DELETE_REGISTRATION_GROUP_COMMAND = 'DELETE_REGISTRATION_GROUP_COMMAND';
export const EVENT_MANAGER_CREATE_REGISTRATION_GROUP_COMMAND = 'ADD_REGISTRATION_GROUP_COMMAND';
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
export const EVENT_MANAGER_UPDATE_REGISTRATION_INFO = 'UPDATE_REGISTRATION_INFO_COMMAND';
export const EVENT_MANAGER_LOAD_REGISTRATION_INFO = 'EVENT_MANAGER_LOAD_REGISTRATION_INFO';
export const EVENT_MANAGER_LOAD_DEFAULT_FIGHT_RESULTS = 'EVENT_MANAGER_LOAD_DEFAULT_FIGHT_RESULTS';
export const EVENT_MANAGER_LOAD_DEFAULT_CATEGORY_RESTRICTIONS = 'EVENT_MANAGER_LOAD_DEFAULT_CATEGORY_RESTRICTIONS';


// events
export const EVENT_MANAGER_DEFAULT_FIGHT_RESULTS_LOADED = 'EVENT_MANAGER_DEFAULT_FIGHT_RESULTS_LOADED';
export const EVENT_MANAGER_DEFAULT_RESTRICTIONS_LOADED = 'EVENT_MANAGER_DEFAULT_RESTRICTIONS_LOADED';
export const EVENT_MANAGER_REGISTRATION_GROUP_CREATED = 'REGISTRATION_GROUP_ADDED';
export const EVENT_MANAGER_REGISTRATION_GROUP_DELETED = 'REGISTRATION_GROUP_DELETED';
export const REGISTRATION_INFO_UPDATED = 'REGISTRATION_INFO_UPDATED';
export const EVENT_MANAGER_COMPETITOR_UPDATED = 'COMPETITOR_UPDATED';
export const EVENT_MANAGER_CATEGORY_BRACKETS_DROPPED = 'CATEGORY_BRACKETS_DROPPED';
export const EVENT_MANAGER_SCHEDULE_DROPPED = 'SCHEDULE_DROPPED';
export const EVENT_MANAGER_ALL_BRACKETS_DROPPED = 'ALL_BRACKETS_DROPPED';
export const EVENT_MANAGER_FIGHTER_LOADED = 'EVENT_MANAGER_FIGHTER_LOADED';
export const EVENT_MANAGER_FIGHTERS_FOR_COMPETITION_LOADED = 'EVENT_MANAGER_FIGHTERS_FOR_COMPETITION_LOADED';
export const EVENT_MANAGER_FIGHTERS_FOR_COMPETITION_PAGE_UPDATED = 'EVENT_MANAGER_FIGHTERS_FOR_COMPETITION_PAGE_UPDATED';
export const EVENT_MANAGER_CATEGORIES_LOADED = 'EVENT_MANAGER_CATEGORIES_LOADED';
export const EVENT_MANAGER_SCHEDULE_LOADED = 'EVENT_MANAGER_SCHEDULE_LOADED';
export const EVENT_MANAGER_CATEGORY_STATE_LOADED = 'EVENT_MANAGER_CATEGORY_STATE_LOADED';
export const EVENT_MANAGER_CATEGORY_STAGES_LOADED = 'EVENT_MANAGER_CATEGORY_STAGES_LOADED';
export const EVENT_MANAGER_COMPETITIONS_LOADED = 'EVENT_MANAGER_COMPETITIONS_LOADED';
export const FIGHT_IDS_BY_CATEGORY_ID_LOADED = 'FIGHT_IDS_BY_CATEGORY_ID_LOADED';
export const COMPETITION_SELECTED = 'COMPETITION_SELECTED';
export const EVENT_MANAGER_FIGHTER_SELECTED = 'EVENT_MANAGER_FIGHTER_SELECTED';
export const EVENT_MANAGER_FIGHTER_UNSELECTED = 'EVENT_MANAGER_FIGHTER_UNSELECTED';
export const EVENT_MANAGER_CATEGORY_SELECTED = 'EVENT_MANAGER_CATEGORY_SELECTED';
export const EVENT_MANAGER_CATEGORY_BRACKETS_STAGE_SELECTED = 'EVENT_MANAGER_CATEGORY_BRACKETS_STAGE_SELECTED';
export const EVENT_MANAGER_CATEGORY_BRACKETS_STAGE_FIGHTS_LOADED = 'EVENT_MANAGER_CATEGORY_BRACKETS_STAGE_FIGHTS_LOADED';
export const EVENT_MANAGER_CATEGORY_UNSELECTED = 'EVENT_MANAGER_CATEGORY_UNSELECTED';
export const EVENT_MANAGER_COMPETITION_UNSELECTED = 'EVENT_MANAGER_COMPETITION_UNSELECTED';

export const EVENT_MANAGER_HEADER_SET = 'EVENT_MANAGER_HEADER_HTML_SET';
export const EVENT_MANAGER_HEADER_REMOVE = 'EVENT_MANAGER_HEADER_HTML_REMOVE';
export const EVENT_MANAGER_CATEGORY_RESTRICTION_ADDED = 'EVENT_MANAGER_CATEGORY_RESTRICTION_ADDED';
export const EVENT_MANAGER_CATEGORY_RESTRICTION_GROUP_ADDED = 'EVENT_MANAGER_CATEGORY_RESTRICTION_GROUP_ADDED';
export const EVENT_MANAGER_CATEGORY_RESTRICTION_GROUP_REMOVED = 'EVENT_MANAGER_CATEGORY_RESTRICTION_GROUP_REMOVED';
export const EVENT_MANAGER_CATEGORY_RESTRICTION_REMOVED = 'EVENT_MANAGER_CATEGORY_RESTRICTION_REMOVED';
export const EVENT_MANAGER_CATEGORY_RESTRICTION_LINKED = 'EVENT_MANAGER_CATEGORY_RESTRICTION_LINKED';
export const EVENT_MANAGER_CATEGORY_RESTRICTION_UNLINKED = 'EVENT_MANAGER_CATEGORY_RESTRICTION_UNLINKED';
export const EVENT_MANAGER_CATEGORY_ROOT_ADDED = 'EVENT_MANAGER_CATEGORY_ROOT_ADDED';
export const EVENT_MANAGER_CATEGORY_ROOT_REMOVED = 'EVENT_MANAGER_CATEGORY_ROOT_REMOVED';

export const COMPETITION_CREATED = 'COMPETITION_CREATED';
export const CATEGORY_ADDED = 'CATEGORY_ADDED';
export const CATEGORY_DELETED = 'CATEGORY_DELETED';
export const CATEGORY_STATE_DELETED = 'CATEGORY_STATE_DELETED';

export const SCHEDULE_GENERATED = 'SCHEDULE_GENERATED';
export const FIGHTS_START_TIME_UPDATED = 'FIGHTS_START_TIME_UPDATED';
export const EVENT_MANAGER_COMPETITOR_ADDED = 'COMPETITOR_ADDED';
export const EVENT_MANAGER_COMPETITOR_REMOVED = 'COMPETITOR_REMOVED';
export const COMPETITION_PROPERTIES_UPDATED = 'COMPETITION_PROPERTIES_UPDATED';
export const EVENT_MANAGER_PERIOD_ADDED = 'EVENT_MANAGER_PERIOD_ADDED';
export const EVENT_MANAGER_SCHEDULE_PERIODS_UPDATED = 'EVENT_MANAGER_PERIODS_UPDATED';
export const EVENT_MANAGER_PERIOD_REMOVED = 'EVENT_MANAGER_PERIOD_REMOVED';
export const EVENT_MANAGER_CATEGORY_MOVED = 'EVENT_MANAGER_CATEGORY_MOVED';

export const EVENT_MANAGER_SOCKET_CONNECTED = 'EVENT_MANAGER_SOCKET_CONNECTED';
export const EVENT_MANAGER_SOCKET_DISCONNECTED = 'EVENT_MANAGER_SOCKET_DISCONNECTED';
export const FIGHTS_EDITOR_APPLY_CHANGE = 'FIGHTS_EDITOR_APPLY_CHANGE';
export const eventManagerHeaderClear = {
  type: EVENT_MANAGER_HEADER_REMOVE
};

export const generateCategoriesCommand = createAction(GENERATE_CATEGORIES_COMMAND, props<{
  competitionId: string, restrictions: CategoryRestriction[], idTrees: AdjacencyList<number>[], restrictionNames: string[] }>());
export const eventManagerCategoryRestrictionUnlinked = createAction(EVENT_MANAGER_CATEGORY_RESTRICTION_UNLINKED, props<{ restrictionId: string, root: string, parent: string }>());
export const eventManagerCategoryRestrictionLinked = createAction(EVENT_MANAGER_CATEGORY_RESTRICTION_LINKED, props<{ restrictionId: string, root: string, parent: string[] }>());
export const eventManagerCategoryRestrictionAdded = createAction(EVENT_MANAGER_CATEGORY_RESTRICTION_ADDED, props<{ payload: CategoryRestriction }>());
export const eventManagerCategoryRestrictionGroupAdded = createAction(EVENT_MANAGER_CATEGORY_RESTRICTION_GROUP_ADDED,
  props<{ name: string }>());
export const eventManagerCategoryRestrictionGroupRemoved = createAction(EVENT_MANAGER_CATEGORY_RESTRICTION_GROUP_REMOVED,
  props<{ name: string }>());
export const eventManagerCategoryRestrictionRootAdded = createAction(EVENT_MANAGER_CATEGORY_ROOT_ADDED, props<{ root: string }>());
export const eventManagerCategoryRestrictionRootRemoved = createAction(EVENT_MANAGER_CATEGORY_ROOT_REMOVED, props<{ root: string }>());
export const eventManagerCategoryRestrictionRemoved = createAction(EVENT_MANAGER_CATEGORY_RESTRICTION_REMOVED, props<{ restrictionId: string }>());
export const eventManagerLoadCategoryRestrictionsCommand = createAction(EVENT_MANAGER_LOAD_DEFAULT_CATEGORY_RESTRICTIONS);
export const loadScheduleCommand = createAction(LOAD_SCHEDULE_COMMAND, props<{ competitionId: string }>());
export const updateScheduleStatusCommand = createAction(UPDATE_STAGE_STATUS_COMMAND, props<{ competitionId: string, stageId: string, status: StageStatus }>());
export const schedulePeriodsUpdated = createAction(EVENT_MANAGER_SCHEDULE_PERIODS_UPDATED, props<{ periods: Period[], undispatchedRequirements: ScheduleRequirement[] }>());
export const fightIdsByCategoryIdLoaded = createAction(FIGHT_IDS_BY_CATEGORY_ID_LOADED, props<{ fightIdsBycategoryId: Dictionary<string[]> }>());
export const eventManagerLoadDefaultFightResults = createAction(EVENT_MANAGER_LOAD_DEFAULT_FIGHT_RESULTS, props<{ competitionId: string }>());
export const eventManagerDefaultFightResultsLoaded = createAction(EVENT_MANAGER_DEFAULT_FIGHT_RESULTS_LOADED, props<{ competitionId: string, fightResults: FightResultOption[] }>());
export const eventManagerUpdateRegistrationInfo = createAction(EVENT_MANAGER_UPDATE_REGISTRATION_INFO, props<{ registrationInfo: RegistrationInfo, competitionId: string }>());
export const eventManagerLoadRegistrationInfo = createAction(EVENT_MANAGER_LOAD_REGISTRATION_INFO, props<{ competitionId: string }>());
export const eventManagerSetCategoryRegistrationStatus = createAction(CHANGE_CATEGORY_REGISTRATION_STATUS_COMMAND, props<{ competitionId: string, categoryId: string; newStatus: boolean }>());
export const eventManagerFightsEditorSubmitChangesCommand = createAction(FIGHTS_EDITOR_APPLY_CHANGE, props<{ bracketsChanges: FightEditorChange[], competitorGroupChanges: CompetitorGroupChange[], competitionId: string, categoryId: string, stageId: string }>());
export const eventManagerCategoryBracketsStageSelected = createAction(EVENT_MANAGER_CATEGORY_BRACKETS_STAGE_SELECTED, props<{ competitionId: string, selectedStageId: string }>());
export const eventManagerCategoryBracketsStageFightsLoaded = createAction(EVENT_MANAGER_CATEGORY_BRACKETS_STAGE_FIGHTS_LOADED, props<{ fights: Fight[] }>());

export const eventManagerHeaderSet = (payload: HeaderDescription) => ({
  type: EVENT_MANAGER_HEADER_SET,
  payload
});

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

export const eventManagerAddRegistrationGroup = (competitionId: string, periodId, groups: RegistrationGroup[]) => ({
  type: EVENT_MANAGER_CREATE_REGISTRATION_GROUP_COMMAND,
  competitionId,
  payload: {
    periodId,
    groups
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

export const loadCategories = (competitionId: string) => ({
  type: LOAD_CATEGORIES_COMMAND,
  payload: competitionId
});

export const competitionSelected = (competitionId: string) => ({
  competitionId: competitionId,
  type: COMPETITION_SELECTED
});
export const eventManagerAddCategory = (competitionId, category: Category) => ({
  type: ADD_CATEGORY_COMMAND,
  competitionId,
  payload: {category}
});

export const eventManagerPeriodAdded = (competitionId, period: Period, mats: MatDescription[]) => ({
  type: EVENT_MANAGER_PERIOD_ADDED,
  competitionId,
  payload: {period, mats}
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

export const eventManagerDefaultRestrictionsLoaded = (competitionId, restrictions: CategoryRestriction[]) => ({
  type: EVENT_MANAGER_DEFAULT_RESTRICTIONS_LOADED,
  competitionId,
  payload: restrictions
});

export const updateCompetitionProperties = (compprops: CompetitionProperties) => ({
  type: UPDATE_COMPETITION_PROPERTIES_COMMAND,
  competitionId: compprops.id,
  payload: compprops
});

export const addCompetitor = (competitionId: string, categoryId, competitor: Competitor) => ({
  type: EVENT_MANAGER_ADD_COMPETITOR,
  competitionId: competitionId,
  categoryId,
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
export const eventManagerGenerateBrackets = (competitionId, categoryId, stageDescriptors) => ({
  type: EVENT_MANAGER_GENERATE_BRACKETS_COMMAND,
  competitionId,
  categoryId,
  payload: {
    stageDescriptors
  }
});

export const eventManagerGenerateSchedule = (competitionId, periods: Period[], mats: MatDescription[]) => ({
  type: EVENT_MANAGER_GENERATE_SCHEDULE_COMMAND,
  competitionId,
  payload: {periods, mats}
});
export const eventManagerCategorySelected = (competitionId: string, categoryId: string) => ({
  type: EVENT_MANAGER_CATEGORY_SELECTED,
  competitionId,
  categoryId
});
export const eventManagerCategoryStateLoaded = (categoryState) => ({
  type: EVENT_MANAGER_CATEGORY_STATE_LOADED,
  competitionId: categoryState.competitionId,
  categoryId: categoryState.category.id,
  payload: categoryState
});

export const eventManagerCategoryStagesLoaded = createAction(EVENT_MANAGER_CATEGORY_STAGES_LOADED, props<{ competitionId: string, categoryId: string, categoryStages: CategoryBracketsStage[], selectedStageId: string }>());

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
  categoryId: competitor.categories[0],
  payload: {competitorId: competitor.id}
});

export const eventManagerLoadFightersForCompetition = (competitionId, categoryId, pageNumber, pageSize, searchString?, replace?: boolean) => ({
  type: EVENT_MANAGER_LOAD_FIGHTERS_FOR_COMPETITION,
  competitionId,
  categoryId,
  payload: {
    pageSize,
    pageNumber,
    searchString,
    replace
  }
});

export const eventManagerCompetitionFightersPageChanged = (competitionId: string, categoryId, pageNumber: number) => ({
  type: EVENT_MANAGER_FIGHTERS_FOR_COMPETITION_PAGE_UPDATED,
  competitionId,
  categoryId,
  payload: pageNumber
});

export const eventManagerFightersForCompetitionLoaded = (competitionId, payload, replace?: boolean) => ({
  type: EVENT_MANAGER_FIGHTERS_FOR_COMPETITION_LOADED,
  competitionId,
  payload: {...payload, replace}
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
  categoryId: competitor.categories,
  payload: competitor
});

export const eventManagerFighterUnselected = (competitionId) => ({
  type: EVENT_MANAGER_FIGHTER_UNSELECTED,
  competitionId
});

export const eventManagerChangeCompetitorCategoryCommand = (fighter: Competitor, newCategoryId: string, oldCategoryId: string) => ({
  type: EVENT_MANAGER_CHANGE_COMPETITOR_CATEGORY_COMMAND,
  competitionId: fighter.competitionId,
  payload: {
    fighterId: fighter.id,
    newCategoryId,
    oldCategoryId
  }
});
export const eventManagerUpdateCompetitorCommand = (competitor: Competitor, categoryId: string) => ({
  type: EVENT_MANAGER_UPDATE_COMPETITOR_COMMAND,
  competitionId: competitor.competitionId,
  categoryId,
  payload: {
    competitor
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
