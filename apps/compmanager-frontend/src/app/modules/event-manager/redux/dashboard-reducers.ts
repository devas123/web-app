import {createSelector} from '@ngrx/store';
import {AppState, SuccessCallback} from '../../../reducers/global-reducers';
import {DASHBOARD_SOCKET_CONNECTED, DASHBOARD_SOCKET_DISCONNECTED} from './dashboard-actions';
import {getEventManagerState} from './reducers';
import {CompScore, FightResult, FightStatus} from "@frontend-nx/protobuf";


export interface DashboardState {
  dashboardSocketConnected: boolean;
}

export const getDashboardState = createSelector(getEventManagerState, state => state && state.dashboardState);

export function socketStateReducer(state: boolean = false, action): boolean {
  switch (action.type) {
    case DASHBOARD_SOCKET_CONNECTED:
      return true;
    case DASHBOARD_SOCKET_DISCONNECTED:
      return false;
    default:
      return state;
  }
}

export interface State extends AppState {
  eventManagerState: DashboardState;
}

export interface IScoreboardFightResultSet {
  competitionId: string;
  categoryId: string;
  periodId: string;
  matId: string;
  fightId: string;
  fightResult: FightResult;
  scores: CompScore[];
  status: FightStatus;
  successCallback: SuccessCallback;
}
