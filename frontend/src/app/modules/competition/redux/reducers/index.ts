import {categoryEntityAdapter, competitorEntityAdapter} from '../../../../commons/model/competition.model';
import {COMPETITION_LIST_LOADED} from '../../../../actions/actions';
import * as competitorsActions from '../actions/competitors';
import {AppState, CompetitionProperties, competitionPropertiesEntitiesAdapter, competitionPropertiesEntitiesInitialState, EventPropsEntities} from '../../../../reducers';
import {createFeatureSelector, createSelector} from '@ngrx/store';
import {initialAccountState} from '../../../account/flux/account.state';

export const featureKey = 'events';

export const eventsListState = createFeatureSelector<EventPropsEntities>(featureKey);
export const getSelectedEventId = createSelector(eventsListState, state => state && state.selectedEventId);
const selectCategoriesEntities = createSelector(eventsListState, state => state && state.selectedEventCategories);
export const selectAccountState = (state: AppState) => (state && state.accountState) || initialAccountState;
export const selectUser = createSelector(selectAccountState, state => state && state.user);
export const selectUserId = createSelector(selectUser, state => state && state.userId);

export const {
  selectAll: getAllCompetitions,
} = competitionPropertiesEntitiesAdapter.getSelectors(eventsListState);

export const selectAllCompetitions = getAllCompetitions;

export const getSelectedEventProperties = createSelector(
  getAllCompetitions,
  getSelectedEventId,
  (entities, selectedId) => {
    return selectedId && entities[selectedId];
  }
);

export const {
  // select the array of users
  selectAll: getAllCategories,
} = categoryEntityAdapter.getSelectors(selectCategoriesEntities);

export const getSelectedCompetitionCategories = getAllCategories;

export function competitionListReducer(state: EventPropsEntities = competitionPropertiesEntitiesInitialState, action): EventPropsEntities {
  switch (action.type) {
    case COMPETITION_LIST_LOADED:
      const payload = action.payload as CompetitionProperties[];
      const updates = payload;
      const newState = competitionPropertiesEntitiesAdapter.removeAll(state);
      return competitionPropertiesEntitiesAdapter.upsertMany(updates, newState);
    case competitorsActions.COMPETITOR_ADDED: {
      const {competitor} = action.payload;
      if (state.selectedEventId === action.competitionId) {
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
      if (state.selectedEventId === action.competitionId) {
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
      if (state.selectedEventId === action.competitionId) {
        return {
          ...state,
          selectedEventCompetitors: competitorEntityAdapter.removeOne(fighterId, state.selectedEventCompetitors)
        };
      } else {
        return state;
      }
    }

    default:
      return state;
  }
}

