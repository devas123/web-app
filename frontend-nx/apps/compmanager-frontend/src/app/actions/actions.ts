import {Action} from '@ngrx/store';
import {CompetitionProperties, RegistrationInfo} from '../reducers/global-reducers';

// Commands
export const LOAD_COMPETITIONS_LIST = 'LOAD_COMPETITIONS_LIST';
export const CREATE_COMPETITION_COMMAND = 'CREATE_COMPETITION_COMMAND';
export const START_COMPETITION_COMMAND = 'START_COMPETITION_COMMAND';
export const PUBLISH_COMPETITION_COMMAND = 'PUBLISH_COMPETITION_COMMAND';
export const UNPUBLISH_COMPETITION_COMMAND = 'UNPUBLISH_COMPETITION_COMMAND';
export const DELETE_COMPETITION_COMMAND = 'DELETE_COMPETITION_COMMAND';
export const LOAD_CATEGORIES_COMMAND = 'LOAD_CATEGORIES_COMMAND';


// Events
export const CATEGORIES_LOADED = 'CATEGORIES_LOADED';
export const COMPETITION_LIST_LOADED = 'COMPETITION_LIST_LOADED';
export const REGISTRATION_INFO_LOADED = 'REGISTRATION_INFO_LOADED';
export const COMPETITION_DELETED = 'COMPETITION_DELETED';
export const COMPETITION_PUBLISHED = 'COMPETITION_PUBLISHED';
export const COMPETITION_UNPUBLISHED = 'COMPETITION_UNPUBLISHED';

export const ERROR_EVENT = 'ERROR_EVENT';

export const errorEvent = (text: string) => ({type: ERROR_EVENT, payload: text} as Action);
export const competitionsLoaded = (payload: CompetitionProperties[]) => ({type: COMPETITION_LIST_LOADED, payload});
export const registrationInfoLoaded = (payload: RegistrationInfo) => ({type: REGISTRATION_INFO_LOADED, payload});
export const loadCompetitionsList = {type: LOAD_COMPETITIONS_LIST};
export const publishCompetition = (competitionId: string) => ({
  type: PUBLISH_COMPETITION_COMMAND,
  competitionId: competitionId
});
export const unpublishCompetition = (competitionId: string) => ({
  type: UNPUBLISH_COMPETITION_COMMAND,
  competitionId: competitionId
});
export const deleteCompetition = (competitionProperties: CompetitionProperties) => ({
  type: DELETE_COMPETITION_COMMAND,
  competitionId: competitionProperties.id,
  payload: competitionProperties
});
export const createCompetition = (competitionInfo: CompetitionProperties, reginfo: RegistrationInfo) => ({
  type: CREATE_COMPETITION_COMMAND,
  competitionId: competitionInfo.id,
  payload: {properties: competitionInfo, reginfo}
});



