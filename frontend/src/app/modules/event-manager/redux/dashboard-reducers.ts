import {combineReducers, createSelector} from '@ngrx/store';
import {AppState} from '../../../reducers/global-reducers';
import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';
import {Fight, fightEntityAdapter, FightsCollection, fightsInitialState} from '../../../commons/model/competition.model';
import {
  DASHBOARD_FIGHT_SELECTED,
  DASHBOARD_FIGHT_UNSELECTED,
  DASHBOARD_MAT_FIGHTS_LOADED,
  DASHBOARD_MAT_SELECTED,
  DASHBOARD_MAT_UNSELECTED,
  DASHBOARD_MATS_LOADED,
  DASHBOARD_PERIOD_SELECTED,
  DASHBOARD_PERIOD_UNSELECTED,
  DASHBOARD_SOCKET_CONNECTED,
  DASHBOARD_SOCKET_DISCONNECTED,
  DASHBOARD_STATE_LOADED,
  DASHBOARD_UNLOAD_DASHBOARD_STATE_COMMAND
} from './dashboard-actions';
import {EVENT_MANAGER_COMPETITION_SELECTED, EVENT_MANAGER_COMPETITION_UNSELECTED} from './event-manager-actions';
import {getEventManagerState} from './reducers';


export interface DashboardState {
  eventPeriods: PeriodsCollection;
  dashboardSocketConnected: boolean;
}

export interface DashboardPeriod {
  id: string;
  name: string;
  mats: MatDescription[];
  startTime: Date;
  isActive: boolean;
}


export interface MatDescription {
  id: string;
  name: string;
}

export interface Mat {
  matDescription: MatDescription;
  numberOfFights: number;
  topFiveFights: Fight[];
}

export interface PeriodsCollection extends EntityState<DashboardPeriod> {
  selectedPeriodId: string | null;
  eventId: string | null;
  selectedPeriodMats: MatsCollection;
}

export interface MatsCollection extends EntityState<Mat> {
  selectedMatId: string | null;
  selectedMatFights: FightsCollection;
}

export const matEntityAdapter: EntityAdapter<Mat> = createEntityAdapter<Mat>({
  selectId: (c: Mat) => c.matDescription.id,
  sortComparer: false
});

export const periodEntityAdapter: EntityAdapter<DashboardPeriod> = createEntityAdapter<DashboardPeriod>({
  selectId: (c: DashboardPeriod) => c.id,
  sortComparer: false
});

export const matsInitialState = matEntityAdapter.getInitialState({
  selectedMatId: null,
  selectedMatFights: fightsInitialState
});

export const periodsInitialState = periodEntityAdapter.getInitialState({
  selectedPeriodId: null,
  eventId: null,
  selectedPeriodMats: matsInitialState
});


export const getDashboardState = createSelector(getEventManagerState, state => state && state.dashboardState);
export const dashboardGetPeriodsCollection = createSelector(getDashboardState, state => state && state.eventPeriods);
export const dashboardGetSelectedPeriodId = createSelector(dashboardGetPeriodsCollection, state => state && state.selectedPeriodId);
export const dashboardGetSelectedPeriodMatsCollection = createSelector(dashboardGetPeriodsCollection, state => state && state.selectedPeriodMats);

export const {
  selectEntities: dasboardGetSelectedPeriodMatsDictionary,
  selectAll: dashboardGetSelectedPeriodAllMats,
  selectIds: dashboardGetSelectedPeriodAllMatIds,
} = matEntityAdapter.getSelectors(dashboardGetSelectedPeriodMatsCollection);

export const dashboardGetSelectedPeriodMats = dashboardGetSelectedPeriodAllMats;
export const dashboardGetSelectedPeriodSelectedMatId = createSelector(dashboardGetSelectedPeriodMatsCollection, state => state && state.selectedMatId);
export const dashboardGetSelectedPeriodSelectedMatNumber = createSelector(dashboardGetSelectedPeriodSelectedMatId, dashboardGetSelectedPeriodAllMatIds, (id, matIds: string[]) => id && matIds.indexOf(id));
export const dashboardGetSelectedPeriodSelectedMat = createSelector(dashboardGetSelectedPeriodSelectedMatId, dasboardGetSelectedPeriodMatsDictionary, (id, entities) => id && entities[id]);

export const dashboardGetSelectedPeriodSelectedMatFightsCollection = createSelector(dashboardGetSelectedPeriodMatsCollection, state => state && state.selectedMatFights);
export const dashboardGetSelectedPeriodSelectedMatSelectedFightId = createSelector(dashboardGetSelectedPeriodSelectedMatFightsCollection, state => state && state.selectedFightId);


export const {
  // select the dictionary of user entities
  selectEntities: dashboardGetSelectedPeriodSelectedMatFightsEntities,
  selectAll: dashboardGetSelectedPeriodSelectedMatAllFights
} = fightEntityAdapter.getSelectors(dashboardGetSelectedPeriodSelectedMatFightsCollection);

export const dashboardGetSelectedPeriodSelectedMatFights = dashboardGetSelectedPeriodSelectedMatAllFights;

export const dashboardGetSelectedPeriodSelectedMatSelectedFight = createSelector(dashboardGetSelectedPeriodSelectedMatSelectedFightId,
  dashboardGetSelectedPeriodSelectedMatFightsEntities,
  (id, entities) => id && entities[id]);

export const {
  // select the dictionary of user entities
  selectEntities: dashboardGetPeriodsEntities,
  selectAll: dashboardGetAllPeriods
} = periodEntityAdapter.getSelectors(dashboardGetPeriodsCollection);
export const dashboardGetSelectedPeriod = createSelector(dashboardGetSelectedPeriodId, dashboardGetPeriodsEntities, (periodId, entities) => periodId && entities[periodId]);
export const dashboardGetSocketConnected = createSelector(getDashboardState, state => state && state.dashboardSocketConnected);
export const dashboardGetPeriods = dashboardGetAllPeriods;

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

export function eventPeriodsReducer(state: PeriodsCollection = periodsInitialState, action): PeriodsCollection {
  switch (action.type) {
    case DASHBOARD_UNLOAD_DASHBOARD_STATE_COMMAND: {
      return {...periodsInitialState, eventId: state.eventId};
    }
    case DASHBOARD_MATS_LOADED: {
      if (action.periodId === state.selectedPeriodId && action.payload) {
        const mats = action.payload as Mat[];
        return {
          ...state,
          selectedPeriodMats: matEntityAdapter.addAll(mats, matEntityAdapter.removeAll(state.selectedPeriodMats))
        };
      }
      return state;
    }
    case DASHBOARD_PERIOD_SELECTED: {
      if (action.competitionId === state.eventId) {
        return {
          ...state,
          selectedPeriodId: action.payload
        };
      }
      return state;
    }
    case DASHBOARD_PERIOD_UNSELECTED: {
      return {
        ...state,
        selectedPeriodId: null
      };
    }
    case DASHBOARD_MAT_SELECTED: {
      return {
        ...state,
        selectedPeriodMats: {
          ...state.selectedPeriodMats,
          selectedMatId: action.payload
        }
      };
    }
    case DASHBOARD_MAT_UNSELECTED: {
      return {
        ...state,
        selectedPeriodMats: {
          ...state.selectedPeriodMats,
          selectedMatId: null,
          selectedMatFights: fightsInitialState,
        }
      };
    }
    case DASHBOARD_MAT_FIGHTS_LOADED: {
      if (state.selectedPeriodMats.selectedMatId === action.matId) {
        return {
          ...state,
          selectedPeriodMats: {
            ...state.selectedPeriodMats,
            selectedMatFights: fightEntityAdapter.addAll(action.payload, {
              ...fightsInitialState,
              selectedFightId: state.selectedPeriodMats.selectedMatFights.selectedFightId
            }),
          }
        };
      }
      return state;
    }
    case DASHBOARD_FIGHT_SELECTED: {
      return {
        ...state,
        selectedPeriodMats: {
          ...state.selectedPeriodMats,
          selectedMatFights: {
            ...state.selectedPeriodMats.selectedMatFights,
            selectedFightId: action.payload
          }
        }
      };
    }
    case DASHBOARD_FIGHT_UNSELECTED: {
      return {
        ...state,
        selectedPeriodMats: {
          ...state.selectedPeriodMats,
          selectedMatFights: {
            ...state.selectedPeriodMats.selectedMatFights,
            selectedFightId: null
          }
        }
      };
    }
    case EVENT_MANAGER_COMPETITION_SELECTED: {
      return {
        ...state,
        eventId: action.competitionId
      };
    }
    case EVENT_MANAGER_COMPETITION_UNSELECTED: {
      return {
        ...state,
        eventId: null
      };
    }
    case DASHBOARD_STATE_LOADED: {
      if (action.competitionId === state.eventId) {
        if (action.payload && action.payload.periods) {
          return periodEntityAdapter.addAll(action.payload.periods, {
            ...periodsInitialState,
            selectedPeriodId: state.selectedPeriodId,
            selectedPeriodMats: state.selectedPeriodMats,
            eventId: state.eventId
          });
        }
      }
      return state;
    }
    default:
      return state;
  }

}


export interface State extends AppState {
  eventManagerState: DashboardState;
}

export const dashboardReducers = combineReducers({
  dashboardSocketConnected: socketStateReducer,
  eventPeriods: eventPeriodsReducer
});
