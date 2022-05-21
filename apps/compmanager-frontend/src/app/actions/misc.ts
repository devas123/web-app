import {CategoryState, CompetitionProperties} from '../commons/model/competition.model';

export const CONNECTED_EVENT = 'CONNECTED_EVENT';
export const RESUBSCRIBED_EVENT = 'RESUBSCRIBED_EVENT';
export const LOAD_COMPETITION_PROPERTIES = 'LOAD_COMPETITION_PROPERTIES';
export const LOAD_EVENTS_SINCE = 'LOAD_EVENTS_SINCE';
export const RESET_MENU = 'RESET_MENU';
export const RESET_COMPETITION_STATE = 'RESET_COMPETITION_STATE';
export const CONFIGURE_MENU = 'CONFIGURE_MENU';
export const CATEGORY_STATE_LOADED = 'CATEGORY_STATE_LOADED';
export const COMPETITION_PROPERTIES_LOADED = 'COMPETITION_PROPERTIES_LOADED';
export const MISC_ERROR = 'ERROR_EVENT';

export const START_COMPETITION = 'START_COMPETITION';
export const STOP_COMPETITION = 'STOP_COMPETITION';

export const configureMenu = (competitionId, userRole) => ({type: CONFIGURE_MENU, competitionId, payload: userRole});
export const resetCompetitionState = ({type: RESET_COMPETITION_STATE});
export const miscError = (competitionId, error) => ({type: MISC_ERROR, competitionId, payload: error});

export const loadCompetitionProperties = (competitionId: string) => ({
  type: LOAD_COMPETITION_PROPERTIES,
  competitionId
});
export const startCompetition = (competitionId: string) => ({type: START_COMPETITION, competitionId});
export const stopCompetition = (competitionId: string) => ({type: STOP_COMPETITION, competitionId});
export const connectedEvent = {
  payload: {},
  eventNumber: 0,
  type: CONNECTED_EVENT
};

export const categoryStateLoaded = (competitionId: string, categoryState: CategoryState) => ({
  type: CATEGORY_STATE_LOADED,
  payload: categoryState,
  competitionId: competitionId
});
export const competitionPropertiesLoaded = (props: CompetitionProperties) => (
  {
    type: COMPETITION_PROPERTIES_LOADED,
    payload: props,
    competitionId: props.id
  }
);
