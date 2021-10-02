export const GENERATE_BRACKETS_ALL = 'GENERATE_BRACKETS_ALL';
export const SAVE_BRACKETS_ALL = 'SAVE_BRACKETS_ALL';
export const RESHUFFLE_COMPETITORS = 'RESHUFFLE_COMPETITORS';

export const BRACKETS_GENERATED_ALL = 'BRACKETS_GENERATED_ALL';
export const BRACKETS_DROPPED = 'BRACKETS_DROPPED';
export const BRACKETS_SAVED = 'BRACKETS_SAVED';
export const COMPETITORS_RESHUFFLED = 'COMPETITORS_RESHUFFLED';
export const ABSOLUTE_CATEGORY_SAVED = 'ABSOLUTE_CATEGORY_SAVED';

export const DROP_BRACKETS_COMMAND = 'DROP_BRACKETS_COMMAND';
export const CHANGE_ORDER_COMMAND = 'CHANGE_ORDER_COMMAND';
export const UPDATE_FIGHT_STAGE_COMMAND = 'UPDATE_FIGHT_STAGE_COMMAND';
export const SCORE_UPDATE_COMMAND = 'SCORE_UPDATE_COMMAND';
export const FIGHT_RESULT_UPDATE_COMMAND = 'FIGHT_RESULT_UPDATE_COMMAND';

export const FIGHTS_ERROR = 'FIGHTS_ERROR';


export const bracketsSaved = (competitionId) => ({
  type: BRACKETS_SAVED,
  competitionId,
  payload: {bracketsPublished: true}
});
export const bracketsDropped = (competitionId) => ({
  type: BRACKETS_DROPPED,
  competitionId,
  fights: [],
  payload: {bracketsPublished: false}
});
