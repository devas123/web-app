import {Action, createAction, props} from '@ngrx/store';
import {CommandType, CompetitionProperties, ManagedCompetition, RegistrationInfo} from "@frontend-nx/protobuf";
import {SuccessCallback} from "../reducers/global-reducers";

// Commands
export const LOAD_COMPETITIONS_LIST = 'LOAD_COMPETITIONS_LIST';
export const START_COMPETITION_COMMAND = 'START_COMPETITION_COMMAND';


// Events
export const COMPETITION_LIST_LOADED = 'COMPETITION_LIST_LOADED';
export const REGISTRATION_INFO_LOADED = 'REGISTRATION_INFO_LOADED';
export const COMPETITION_PUBLISHED = 'COMPETITION_PUBLISHED';
export const COMPETITION_UNPUBLISHED = 'COMPETITION_UNPUBLISHED';

export const ERROR_EVENT = 'ERROR_EVENT';

export const errorEvent = (text: string) => ({type: ERROR_EVENT, payload: text} as Action);
export const competitionsLoaded = (payload: ManagedCompetition[]) => ({type: COMPETITION_LIST_LOADED, payload});
export const registrationInfoLoaded = (payload: RegistrationInfo) => ({type: REGISTRATION_INFO_LOADED, payload});
export const loadCompetitionsList = {type: LOAD_COMPETITIONS_LIST};
export const publishCompetition = (competitionId: string) => ({
  type: CommandType.PUBLISH_COMPETITION_COMMAND,
  competitionId: competitionId
});
export const unpublishCompetition = (competitionId: string) => ({
  type: CommandType.UNPUBLISH_COMPETITION_COMMAND,
  competitionId: competitionId
});
export const deleteCompetition = createAction(CommandType.DELETE_COMPETITION_COMMAND, props<{ competitionId: string }>());
export const createCompetition = createAction(CommandType.CREATE_COMPETITION_COMMAND, props<{
  properties: CompetitionProperties, regInfo: RegistrationInfo,
  successCallback: SuccessCallback
}>());


