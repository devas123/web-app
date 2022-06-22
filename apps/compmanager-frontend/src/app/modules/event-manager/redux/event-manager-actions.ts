// commands
import {AdjacencyList, FightEditorChange, HeaderDescription,} from '../../../commons/model/competition.model';
import {Action, createAction, props} from '@ngrx/store';
import {Dictionary} from '@ngrx/entity';
import {
  CategoryDescriptor,
  CategoryRestriction,
  CategoryState,
  CommandType,
  CompetitionProperties,
  Competitor,
  CompetitorMovedToGroup,
  FightDescription,
  FightResultOption,
  GetCompetitorsResponse,
  ManagedCompetition,
  MatDescription,
  MatState,
  Period,
  RegistrationInfo,
  Schedule,
  ScheduleRequirement,
  StageDescriptor,
  StageStatus
} from "@frontend-nx/protobuf";
import {COMPETITION_LIST_LOADED} from "../../../actions/actions";
import {ErrorCallback, SuccessCallback} from "../../../reducers/global-reducers";

export const BATCH_ACTION = 'BATCH_ACTION';
export const EVENT_MANAGER_LOAD_COMPETITIONS_COMMAND = 'EVENT_MANAGER_LOAD_COMPETITIONS_COMMAND';
export const LOAD_SCHEDULE_COMMAND = 'LOAD_SCHEDULE_COMMAND';
export const ADD_CATEGORY_COMMAND = 'ADD_CATEGORY_COMMAND';
export const GENERATE_PREVIEW_CATEGORIES_COMMAND = 'GENERATE_PREVIEW_CATEGORIES_COMMAND';
export const CHANGE_CATEGORY_REGISTRATION_STATUS_COMMAND = 'CHANGE_CATEGORY_REGISTRATION_STATUS_COMMAND';
export const EVENT_MANAGER_CONNECT_SOCKET = 'EVENT_MANAGER_CONNECT_SOCKET';
export const EVENT_MANAGER_DISCONNECT_SOCKET = 'EVENT_MANAGER_DISCONNECT_SOCKET';
export const EVENT_MANAGER_DROP_SCHEDULE_COMMAND = 'DROP_SCHEDULE_COMMAND';
export const EVENT_MANAGER_LOAD_FIGHTER_COMMAND = 'EVENT_MANAGER_LOAD_FIGHTER_COMMAND';
export const EVENT_MANAGER_LOAD_REGISTRATION_INFO = 'EVENT_MANAGER_LOAD_REGISTRATION_INFO';
export const EVENT_MANAGER_LOAD_DEFAULT_FIGHT_RESULTS = 'EVENT_MANAGER_LOAD_DEFAULT_FIGHT_RESULTS';
export const EVENT_MANAGER_LOAD_DEFAULT_CATEGORY_RESTRICTIONS = 'EVENT_MANAGER_LOAD_DEFAULT_CATEGORY_RESTRICTIONS';


// events
export const EVENT_MANAGER_DEFAULT_FIGHT_RESULTS_LOADED = 'EVENT_MANAGER_DEFAULT_FIGHT_RESULTS_LOADED';
export const EVENT_MANAGER_DEFAULT_RESTRICTIONS_LOADED = 'EVENT_MANAGER_DEFAULT_RESTRICTIONS_LOADED';
export const EVENT_MANAGER_FIGHTER_LOADED = 'EVENT_MANAGER_FIGHTER_LOADED';
export const EVENT_MANAGER_FIGHTERS_FOR_COMPETITION_LOADED = 'EVENT_MANAGER_FIGHTERS_FOR_COMPETITION_LOADED';
export const EVENT_MANAGER_FIGHTERS_FOR_COMPETITION_PAGE_UPDATED = 'EVENT_MANAGER_FIGHTERS_FOR_COMPETITION_PAGE_UPDATED';
export const EVENT_MANAGER_CATEGORIES_LOADED = 'EVENT_MANAGER_CATEGORIES_LOADED';
export const EVENT_MANAGER_SCHEDULE_LOADED = 'EVENT_MANAGER_SCHEDULE_LOADED';
export const EVENT_MANAGER_CATEGORY_STATE_LOADED = 'EVENT_MANAGER_CATEGORY_STATE_LOADED';
export const EVENT_MANAGER_CATEGORY_STAGES_LOADED = 'EVENT_MANAGER_CATEGORY_STAGES_LOADED';
export const FIGHT_IDS_BY_CATEGORY_ID_LOADED = 'FIGHT_IDS_BY_CATEGORY_ID_LOADED';
export const COMPETITION_SELECTED = 'COMPETITION_SELECTED';
export const EVENT_MANAGER_FIGHTER_SELECTED = 'EVENT_MANAGER_FIGHTER_SELECTED';
export const EVENT_MANAGER_FIGHTER_UNSELECTED = 'EVENT_MANAGER_FIGHTER_UNSELECTED';
export const EVENT_MANAGER_CATEGORY_SELECTED = 'EVENT_MANAGER_CATEGORY_SELECTED';
export const EVENT_MANAGER_PREVIEW_CATEGORIES_GENERATED = 'EVENT_MANAGER_PREVIEW_CATEGORIES_GENERATED';
export const EVENT_MANAGER_PREVIEW_CATEGORIES_CLEARED = 'EVENT_MANAGER_PREVIEW_CATEGORIES_CLEARED';
export const EVENT_MANAGER_CATEGORY_BRACKETS_STAGE_SELECTED = 'EVENT_MANAGER_CATEGORY_BRACKETS_STAGE_SELECTED';
export const EVENT_MANAGER_FIGHTS_LOADED = 'EVENT_MANAGER_FIGHTS_LOADED';
export const EVENT_MANAGER_CATEGORY_BRACKETS_STAGE_FIGHTS_LOADING = 'EVENT_MANAGER_CATEGORY_BRACKETS_STAGE_FIGHTS_LOADING';
export const EVENT_MANAGER_CATEGORY_UNSELECTED = 'EVENT_MANAGER_CATEGORY_UNSELECTED';
export const COMPETITION_UNSELECTED = 'COMPETITION_UNSELECTED';

export const EVENT_MANAGER_HEADER_SET = 'EVENT_MANAGER_HEADER_HTML_SET';
export const EVENT_MANAGER_HEADER_REMOVE = 'EVENT_MANAGER_HEADER_HTML_REMOVE';
export const EVENT_MANAGER_CATEGORY_RESTRICTION_ADDED = 'EVENT_MANAGER_CATEGORY_RESTRICTION_ADDED';
export const EVENT_MANAGER_CATEGORY_RESTRICTION_GROUP_ADDED = 'EVENT_MANAGER_CATEGORY_RESTRICTION_GROUP_ADDED';
export const EVENT_MANAGER_CATEGORY_RESTRICTION_GROUP_REMOVED = 'EVENT_MANAGER_CATEGORY_RESTRICTION_GROUP_REMOVED';
export const EVENT_MANAGER_CATEGORY_RESTRICTION_REMOVED = 'EVENT_MANAGER_CATEGORY_RESTRICTION_REMOVED';
export const EVENT_MANAGER_CATEGORY_RESTRICTION_LINKED = 'EVENT_MANAGER_CATEGORY_RESTRICTION_LINKED';
export const EVENT_MANAGER_CATEGORY_RESTRICTION_UNLINKED = 'EVENT_MANAGER_CATEGORY_RESTRICTION_UNLINKED';
export const EVENT_MANAGER_CATEGORY_ROOT_ADDED = 'EVENT_MANAGER_CATEGORY_ROOT_ADDED';

export const CATEGORY_DELETED = 'CATEGORY_DELETED';
export const CATEGORY_STATE_DELETED = 'CATEGORY_STATE_DELETED';

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

export const batchAction = createAction(BATCH_ACTION, props<{actions: Action[]}>())
export const eventManagerCategoriesCleared = createAction(EVENT_MANAGER_PREVIEW_CATEGORIES_CLEARED);
export const eventManagerPreviewCategoriesGenerated = createAction(EVENT_MANAGER_PREVIEW_CATEGORIES_GENERATED, props<{ competitionId: string, categories: CategoryDescriptor[] }>());
export const generateCategoriesCommand = createAction(CommandType.GENERATE_CATEGORIES_COMMAND, props<{
  competitionId: string, restrictions: CategoryRestriction[], idTrees: AdjacencyList<number>[], restrictionNames: string[], successCallback: SuccessCallback
}>());
export const generatePreviewCategoriesCommand = createAction(GENERATE_PREVIEW_CATEGORIES_COMMAND, props<{
  competitionId: string, restrictions: CategoryRestriction[], idTrees: AdjacencyList<number>[], restrictionNames: string[]
}>());
export const eventManagerCategoryRestrictionUnlinked = createAction(EVENT_MANAGER_CATEGORY_RESTRICTION_UNLINKED, props<{ restrictionId: string, root: string, parent: string }>());
export const eventManagerCategoryRestrictionLinked = createAction(EVENT_MANAGER_CATEGORY_RESTRICTION_LINKED, props<{ restrictionId: string, root: string, parent: string[] }>());
export const eventManagerCategoryRestrictionAdded = createAction(EVENT_MANAGER_CATEGORY_RESTRICTION_ADDED, props<{ payload: CategoryRestriction }>());
export const eventManagerCategoryRestrictionGroupAdded = createAction(EVENT_MANAGER_CATEGORY_RESTRICTION_GROUP_ADDED,
  props<{ name: string }>());
export const eventManagerCategoryRestrictionGroupRemoved = createAction(EVENT_MANAGER_CATEGORY_RESTRICTION_GROUP_REMOVED,
  props<{ name: string }>());
export const eventManagerCategoryRestrictionRootAdded = createAction(EVENT_MANAGER_CATEGORY_ROOT_ADDED, props<{ root: string }>());
export const eventManagerCategoryRestrictionRemoved = createAction(EVENT_MANAGER_CATEGORY_RESTRICTION_REMOVED, props<{ restrictionId: string }>());
export const eventManagerLoadCategoryRestrictionsCommand = createAction(EVENT_MANAGER_LOAD_DEFAULT_CATEGORY_RESTRICTIONS);
export const loadScheduleCommand = createAction(LOAD_SCHEDULE_COMMAND, props<{ competitionId: string }>());
export const updateScheduleStatusCommand = createAction(CommandType.UPDATE_STAGE_STATUS_COMMAND, props<{ competitionId: string, categoryId: string, stageId: string, status: StageStatus }>());
export const schedulePeriodsUpdated = createAction(EVENT_MANAGER_SCHEDULE_PERIODS_UPDATED, props<{ periods: Period[], undispatchedRequirements: ScheduleRequirement[] }>());
export const fightIdsByCategoryIdLoaded = createAction(FIGHT_IDS_BY_CATEGORY_ID_LOADED, props<{ fightIdsBycategoryId: Dictionary<string[]> }>());
export const eventManagerLoadDefaultFightResults = createAction(EVENT_MANAGER_LOAD_DEFAULT_FIGHT_RESULTS, props<{ competitionId: string }>());
export const eventManagerDefaultFightResultsLoaded = createAction(EVENT_MANAGER_DEFAULT_FIGHT_RESULTS_LOADED, props<{ competitionId: string, fightResults: FightResultOption[] }>());
export const eventManagerUpdateRegistrationInfo = createAction(CommandType.UPDATE_REGISTRATION_INFO_COMMAND, props<{ registrationInfo: RegistrationInfo, competitionId: string }>());
export const eventManagerLoadRegistrationInfo = createAction(EVENT_MANAGER_LOAD_REGISTRATION_INFO, props<{ competitionId: string }>());
export const eventManagerSetCategoryRegistrationStatus = createAction(CHANGE_CATEGORY_REGISTRATION_STATUS_COMMAND, props<{ competitionId: string, categoryId: string; newStatus: boolean }>());
export const eventManagerFightsEditorSubmitChangesCommand = createAction(CommandType.FIGHTS_EDITOR_APPLY_CHANGE, props<{ bracketsChanges: FightEditorChange[], competitorMovedToGroups: CompetitorMovedToGroup[], competitionId: string, categoryId: string, stageId: string }>());
export const eventManagerCategoryBracketsStageSelected = createAction(EVENT_MANAGER_CATEGORY_BRACKETS_STAGE_SELECTED, props<{ competitionId: string, categoryId: string, selectedStageId: string }>());
export const eventManagerFightsLoaded = createAction(EVENT_MANAGER_FIGHTS_LOADED, props<{ fights: FightDescription[] }>());
export const eventManagerCategoryBracketsStageFightsLoading = createAction(EVENT_MANAGER_CATEGORY_BRACKETS_STAGE_FIGHTS_LOADING);

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

export const cometitionListLoaded = (competitionProperties: ManagedCompetition[]) => ({
  type: COMPETITION_LIST_LOADED,
  payload: competitionProperties
});

export const eventManagerCategoriesLoaded = (categories: CategoryState[]) => ({
  type: EVENT_MANAGER_CATEGORIES_LOADED,
  payload: categories,
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

export const competitionSelected = (competitionId: string) => ({
  competitionId: competitionId,
  type: COMPETITION_SELECTED
});
export const eventManagerAddCategory = (competitionId, category: CategoryDescriptor) => ({
  type: ADD_CATEGORY_COMMAND,
  competitionId,
  payload: {category}
});

export const eventManagerPeriodAdded = (competitionId, period: Period, mats: MatState[]) => ({
  type: EVENT_MANAGER_PERIOD_ADDED,
  competitionId,
  payload: {period, mats}
});

export const eventManagerPeriodRemoved = (competitionId, periodId: string) => ({
  type: EVENT_MANAGER_PERIOD_REMOVED,
  competitionId,
  payload: periodId
});
export const deleteCategory = createAction(CommandType.DELETE_CATEGORY_COMMAND, props<{ competitionId: string, categoryId: string }>())

export const eventManagerDefaultRestrictionsLoaded = (competitionId, restrictions: CategoryRestriction[]) => ({
  type: EVENT_MANAGER_DEFAULT_RESTRICTIONS_LOADED,
  competitionId,
  payload: restrictions
});

export const updateCompetitionProperties = createAction(CommandType.UPDATE_COMPETITION_PROPERTIES_COMMAND, props<{ competitionId: string, competitionProperties: CompetitionProperties }>());

export const addCompetitor = createAction(CommandType.ADD_COMPETITOR_COMMAND, props<{ competitionId: string, competitor: Competitor, successCallback: SuccessCallback, errorCallback: ErrorCallback }>())

export const eventManagerCreateFakeCompetitorsCommand = (competitionId: string, categoryId: string, numberOfCompetitors: number, numberOfAcademies: number) => ({
  type: CommandType.CREATE_FAKE_COMPETITORS_COMMAND,
  competitionId,
  categoryId,
  payload: {
    numberOfCompetitors,
    numberOfAcademies
  }
});

export const socketConnected = {type: EVENT_MANAGER_SOCKET_CONNECTED};
export const eventManagerConnectSocket = {type: EVENT_MANAGER_CONNECT_SOCKET};
export const eventManagerDisconnectSocket = {type: EVENT_MANAGER_DISCONNECT_SOCKET};
export const eventManagerGenerateBrackets = createAction(CommandType.GENERATE_BRACKETS_COMMAND, props<{ competitionId: string, categoryId: string, stageDescriptors: StageDescriptor[] }>());

export const eventManagerGenerateSchedule = (competitionId, periods: Period[], mats: MatDescription[]) => ({
  type: CommandType.GENERATE_SCHEDULE_COMMAND,
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

export const eventManagerCategoryStagesLoaded = createAction(EVENT_MANAGER_CATEGORY_STAGES_LOADED, props<{ competitionId: string, categoryId: string, categoryStages: StageDescriptor[], selectedStageId: string }>());

export const eventManagerCategoryUnselected = (competitionId: string) => ({
  type: EVENT_MANAGER_CATEGORY_UNSELECTED,
  competitionId
});

export const competitionUnselected = ({
  type: COMPETITION_UNSELECTED
});
export const eventManagerRemoveCompetitor = createAction(CommandType.REMOVE_COMPETITOR_COMMAND, props<{ competitorId: string, competitionId: string }>())

export const eventManagerCompetitionFightersPageChanged = (competitionId: string, categoryId, pageNumber: number) => ({
  type: EVENT_MANAGER_FIGHTERS_FOR_COMPETITION_PAGE_UPDATED,
  competitionId,
  categoryId,
  payload: pageNumber
});

export const eventManagerFightersForCompetitionLoaded = (competitionId, payload: GetCompetitorsResponse, replace?: boolean) => ({
  type: EVENT_MANAGER_FIGHTERS_FOR_COMPETITION_LOADED,
  competitionId,
  payload: {...payload, replace}
});

export const eventManagerFighterSelected = (fighterId) => ({
  type: EVENT_MANAGER_FIGHTER_SELECTED,
  payload: fighterId
});

export const eventManagerLoadFighterCommand = (competitionId, fighterId) => ({
  type: EVENT_MANAGER_LOAD_FIGHTER_COMMAND,
  competitionId,
  payload: fighterId
});

export const eventManagerFighterLoaded = (competitor: Competitor) => ({
  type: EVENT_MANAGER_FIGHTER_LOADED,
  competitionId: competitor.competitionId,
  payload: competitor
});

export const eventManagerFighterUnselected = (competitionId) => ({
  type: EVENT_MANAGER_FIGHTER_UNSELECTED,
  competitionId
});

export const eventManagerChangeCompetitorCategoryCommand = (fighter: Competitor, newCategories: string[], oldCategories: string[]) => ({
  type: CommandType.CHANGE_COMPETITOR_CATEGORY_COMMAND,
  competitionId: fighter.competitionId,
  payload: {
    fighterId: fighter.id,
    newCategories,
    oldCategories
  }
});
export const eventManagerUpdateCompetitorCommand = createAction(CommandType.UPDATE_COMPETITOR_COMMAND, props<{
  competitor: Competitor,
  competitionId: string
}>())

export const eventManagerDropScheduleCommand = (competitionId: string) => ({
  type: CommandType.DROP_SCHEDULE_COMMAND,
  competitionId
});

export const eventManagerDropCategoryBracketsCommand = (competitionId: string, categoryId: string) => ({
  type: CommandType.DROP_CATEGORY_BRACKETS_COMMAND,
  competitionId,
  categoryId
});

export const eventManagerDropAllBracketsCommand = (competitionId: string) => ({
  type: CommandType.DROP_ALL_BRACKETS_COMMAND,
  competitionId
});
