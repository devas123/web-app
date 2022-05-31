export const COMPETITOR_ADDED = 'COMPETITOR_ADDED';
export const COMPETITOR_REMOVED = 'COMPETITOR_REMOVED';
export const ADD_COMPETITOR = 'ADD_COMPETITOR';

export const COMPETITORS_ERROR = 'COMPETITORS_ERROR';
export const REMOVE_COMPETITOR = 'REMOVE_COMPETITOR';

export const competitorsError = (error, competitionId) => ({type: COMPETITORS_ERROR, payload: error, competitionId: competitionId});
