import {createFeatureSelector} from '@ngrx/store';
import {Competitor, EventManagerState, Fight} from '../../../commons/model/competition.model';

export const getEventManagerState = createFeatureSelector<EventManagerState>('eventManagerState');


export const obsoleteFight = (f: Fight, threeCompetitorCategory: boolean) => {
  if (threeCompetitorCategory) {
    return false;
  }
  if ((f.parentId1 !== null) || (f.parentId2 !== null)) {
    return false;
  }
  return f.scores.filter(it => compNotEmpty(it.competitor)).length !== 2;
};

export const compNotEmpty = (comp: Competitor) => {
  if (comp == null) {
    return false;
  }
  const firstName = comp.firstName || '';
  const lastName = comp.lastName || '';
  return firstName.trim().length > 0 && lastName.trim().length > 0;
};
