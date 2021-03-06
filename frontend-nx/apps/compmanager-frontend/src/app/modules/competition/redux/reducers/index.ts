import {categoryEntityAdapter} from '../../../../commons/model/competition.model';
import {COMPETITION_LIST_LOADED} from '../../../../actions/actions';
import {AppState, CompetitionProperties, competitionPropertiesEntitiesAdapter, competitionPropertiesEntitiesInitialState, EventPropsEntities, getSelectedEventState} from '../../../../reducers/global-reducers';
import {createFeatureSelector, createSelector} from '@ngrx/store';
import {initialAccountState} from '../../../account/flux/account.state';
import {COMPETITION_SELECTED} from '../../../event-manager/redux/event-manager-actions';
import {Update} from '@ngrx/entity';

export const featureKey = 'events';

export const eventsListState = createFeatureSelector<EventPropsEntities>(featureKey);
const selectCategoriesEntities = createSelector(getSelectedEventState, state => state && state.selectedEventCategories);
export const selectAccountState = createSelector(state => state, (state: AppState) => (state && state.accountState) || initialAccountState);
export const selectUser = createSelector(selectAccountState, state => state && state.user);
export const selectUserId = createSelector(selectUser, state => state && state.userId);

export const {
  selectAll: getAllCompetitions
} = competitionPropertiesEntitiesAdapter.getSelectors(eventsListState);

export const selectAllCompetitions = getAllCompetitions;

export const {
  // select the array of users
  selectAll: getAllCategories
} = categoryEntityAdapter.getSelectors(selectCategoriesEntities);

export const getSelectedCompetitionCategories = getAllCategories;

export function competitionListReducer(state: EventPropsEntities = competitionPropertiesEntitiesInitialState, action): EventPropsEntities {
  switch (action.type) {
    case COMPETITION_LIST_LOADED:
      const payload = action.payload as CompetitionProperties[];
      return competitionPropertiesEntitiesAdapter.setAll(payload, state);
    case COMPETITION_SELECTED: {
      return {...state, selectedEventId: action.competitionId};
    }
    default:
      return state;
  }
}

