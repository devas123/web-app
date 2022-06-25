// commands
import {createAction, props} from '@ngrx/store';
import {IScoreboardFightResultSet} from './dashboard-reducers';
import {CommandType, Competitor, FightDescription, FightResultOption, MatsQueryResult} from "@frontend-nx/protobuf";

export interface IDashboardFightScheduleChangedPayload {
  competitionId: string;
  categoryId: string;
  fightId: string;
  currentMatId: string;
  newMatId: string;
  currentOrderOnMat: number;
  newOrderOnMat: number;
  periodId: string;
}

export const DASHBOARD_LOAD_MATS_COMMAND = 'DASHBOARD_LOAD_MATS_COMMAND';

// events
export const DASHBOARD_FIGHT_LOADED = 'DASHBOARD_FIGHT_LOADED';
export const PERIOD_SELECTED = 'PERIOD_SELECTED';
export const REFRESH_MATS_VIEW = 'REFRESH_MATS_VIEW';
export const DASHBOARD_PERIOD_UNSELECTED = 'DASHBOARD_PERIOD_UNSELECTED';
export const DASHBOARD_MAT_SELECTED = 'DASHBOARD_MAT_SELECTED';
export const DASHBOARD_FIGHT_SELECTED = 'DASHBOARD_FIGHT_SELECTED';
export const DASHBOARD_FIGHT_UNSELECTED = 'DASHBOARD_FIGHT_UNSELECTED';
export const DASHBOARD_MAT_UNSELECTED = 'DASHBOARD_MAT_UNSELECTED';
export const DASHBOARD_MATS_LOADED = 'DASHBOARD_MATS_LOADED';
export const DASHBOARD_MAT_FIGHTS_LOADED = 'DASHBOARD_MAT_FIGHTS_LOADED';
export const DASHBOARD_SOCKET_CONNECTED = 'DASHBOARD_SOCKET_CONNECTED';
export const DASHBOARD_SOCKET_DISCONNECTED = 'DASHBOARD_SOCKET_DISCONNECTED';
export const DASHBOARD_CLAIM_FIGHTS = 'DASHBOARD_CLAIM_FIGHTS';

export const refreshMatView = (periodId, competitionId) => ({
  type: REFRESH_MATS_VIEW,
  payload: periodId,
  competitionId
});
export const dashboardLoadPeriodMatsCommand = createAction(DASHBOARD_LOAD_MATS_COMMAND, props<{ competitionId: string, periodId: string }>());
export const dashboardFightLoaded = createAction(DASHBOARD_FIGHT_LOADED, props<{ competitionId: string, fightId: string, fightresultOptions: FightResultOption[], fight: FightDescription }>());
export const dashboardSocketConnected = {type: DASHBOARD_SOCKET_CONNECTED};
export const dashboardFightUnselected = createAction(DASHBOARD_FIGHT_UNSELECTED);

export const dashboardFightOrderChangeCommand = createAction(CommandType.DASHBOARD_FIGHT_ORDER_CHANGE_COMMAND, props<IDashboardFightScheduleChangedPayload>());
export const dashboardSetFightResultCommand = createAction(CommandType.DASHBOARD_SET_FIGHT_RESULT_COMMAND, props<IScoreboardFightResultSet>());
export const dashboardClaimFights = createAction(DASHBOARD_CLAIM_FIGHTS, props<{ matId: string, periodId: string }>());


export const dashboardPeriodSelected = (periodId, competitionId) => ({
  type: PERIOD_SELECTED,
  payload: periodId,
  competitionId
});

export const dashboardMatsLoaded = (mats: MatsQueryResult, competitionId: string, periodId: string) => ({
  type: DASHBOARD_MATS_LOADED,
  competitionId,
  periodId,
  payload: mats
});

export const dashboardMatFightsLoaded = (fights: FightDescription[], competitors: Competitor[], matId: string) => ({
  type: DASHBOARD_MAT_FIGHTS_LOADED,
  matId,
  payload: {fights, competitors}
});


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

export const dashboardFightSelected = (fightId: string, categoryId: string) => ({
  type: DASHBOARD_FIGHT_SELECTED,
  categoryId,
  payload: fightId
});

