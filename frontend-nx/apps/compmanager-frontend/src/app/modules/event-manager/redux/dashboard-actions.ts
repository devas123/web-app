// commands
import {Fight} from '../../../commons/model/competition.model';
import {createAction, props} from '@ngrx/store';
import {IScoreboardFightResultSet} from './dashboard-reducers';

export interface IDashboardFightScheduleChangedPayload {
  competitionId: string;
  fightId: string;
  currentMatId: string;
  newMatId: string;
  currentOrderOnMat: number;
  newOrderOnMat: number;
  periodId: string;
}

export const DASHBOARD_LOAD_MATS_COMMAND = 'DASHBOARD_LOAD_MATS_COMMAND';
export const DASHBOARD_LOAD_DASHBOARD_STATE_COMMAND = 'DASHBOARD_LOAD_DASHBOARD_STATE_COMMAND';
export const DASHBOARD_UNLOAD_DASHBOARD_STATE_COMMAND = 'DASHBOARD_UNLOAD_DASHBOARD_STATE_COMMAND';
export const DASHBOARD_INIT_PERIOD_COMMAND = 'INIT_PERIOD_COMMAND';
export const DASHBOARD_DELETE_PERIOD_COMMAND = 'DELETE_PERIOD_COMMAND';
export const DASHBOARD_INIT_DASHBOARD_STATE_COMMAND = 'CREATE_DASHBOARD_COMMAND';
export const DASHBOARD_DELETE_DASHBOARD_STATE_COMMAND = 'DELETE_DASHBOARD_COMMAND';
export const DASHBOARD_FIGHT_ORDER_CHANGE_COMMAND = 'DASHBOARD_FIGHT_ORDER_CHANGE_COMMAND';
export const DASHBOARD_SET_FIGHT_RESULT_COMMAND = 'DASHBOARD_SET_FIGHT_RESULT_COMMAND';


// events
export const DASHBOARD_FIGHT_ORDER_CHANGED = 'DASHBOARD_FIGHT_ORDER_CHANGED';
export const DASHBOARD_STATE_LOADED = 'DASHBOARD_STATE_LOADED';
export const PERIOD_SELECTED = 'PERIOD_SELECTED';
export const REFRESH_MATS_VIEW = 'REFRESH_MATS_VIEW';
export const DASHBOARD_PERIOD_UNSELECTED = 'DASHBOARD_PERIOD_UNSELECTED';
export const DASHBOARD_MAT_SELECTED = 'DASHBOARD_MAT_SELECTED';
export const DASHBOARD_FIGHT_SELECTED = 'DASHBOARD_FIGHT_SELECTED';
export const DASHBOARD_FIGHT_UNSELECTED = 'DASHBOARD_FIGHT_UNSELECTED';
export const DASHBOARD_MAT_UNSELECTED = 'DASHBOARD_MAT_UNSELECTED';
export const DASHBOARD_MATS_LOADED = 'DASHBOARD_MATS_LOADED';
export const DASHBOARD_MAT_FIGHTS_LOADED = 'DASHBOARD_MAT_FIGHTS_LOADED';
export const DASHBOARD_MAT_FIGHTS_UNLOADED = 'DASHBOARD_MAT_FIGHTS_UNLOADED';
export const DASHBOARD_SOCKET_CONNECTED = 'DASHBOARD_SOCKET_CONNECTED';
export const DASHBOARD_SOCKET_DISCONNECTED = 'DASHBOARD_SOCKET_DISCONNECTED';

export const refreshMatView = (periodId, competitionId) => ({
  type: REFRESH_MATS_VIEW,
  payload: periodId,
  competitionId
});
export const dashboardLoadPeriodMatsCommand = createAction(DASHBOARD_LOAD_MATS_COMMAND, props<{ competitionId: string, periodId: string }>());
export const dashboardMatFightsUnloaded = {type: DASHBOARD_MAT_FIGHTS_UNLOADED};
export const dashboardSocketConnected = {type: DASHBOARD_SOCKET_CONNECTED};
export const dashboardSocketDisconnected = {type: DASHBOARD_SOCKET_DISCONNECTED};

export const dashboardFightOrderChangeCommand = createAction(DASHBOARD_FIGHT_ORDER_CHANGE_COMMAND, props<IDashboardFightScheduleChangedPayload>());
export const dashboardSetFightResultCommand = createAction(DASHBOARD_SET_FIGHT_RESULT_COMMAND, props<IScoreboardFightResultSet>());

export const dashboardRemovePeriod = (competitionId, periodId) => ({
  type: DASHBOARD_DELETE_PERIOD_COMMAND,
  competitionId,
  periodId
});

export const dashboardPeriodSelected = (periodId, competitionId) => ({
  type: PERIOD_SELECTED,
  payload: periodId,
  competitionId
});

export const loadDashboardState = (competitionId: string) => (
  {
    type: DASHBOARD_LOAD_DASHBOARD_STATE_COMMAND,
    competitionId
  }
);

export const dashboardStateLoaded = (state: any, competitionId: string) => ({
  type: DASHBOARD_STATE_LOADED,
  competitionId,
  payload: state
});

export const dashboardMatsLoaded = (mats: any[], competitionId: string, periodId: string) => ({
  type: DASHBOARD_MATS_LOADED,
  competitionId,
  periodId,
  payload: mats
});

export const dashboardSelectedPeriodSelectedMatFightsLoaded = (fights: Fight[], matId: string) => ({
  type: DASHBOARD_MAT_FIGHTS_LOADED,
  matId,
  payload: fights
});

export const dashboardUnloadState = {type: DASHBOARD_UNLOAD_DASHBOARD_STATE_COMMAND};

export const dashboardPeriodUnselected = ({
  type: DASHBOARD_PERIOD_UNSELECTED
});

export const dashboardMatSelected = (competitionId: string, matId: string) => ({
  type: DASHBOARD_MAT_SELECTED,
  competitionId,
  payload: matId
});

export const dashboardMatUnselected = {
  type: DASHBOARD_MAT_UNSELECTED,
  payload: ''
};

export const dashboardFightSelected = (fightId: string) => ({
  type: DASHBOARD_FIGHT_SELECTED,
  payload: fightId
});

export const dashboardFightUnselected = {
  type: DASHBOARD_FIGHT_UNSELECTED,
  payload: ''
};

export const dashboardInitState = (competitionId: string) => ({
  type: DASHBOARD_INIT_DASHBOARD_STATE_COMMAND,
  competitionId
});

export const dashboardDeleteState = (competitionId: string) => ({
  type: DASHBOARD_DELETE_DASHBOARD_STATE_COMMAND,
  competitionId
});
