import {batchReducer, CommonAction} from '../../../reducers/global-reducers';
import {AccountState, initialAccountState} from './account.state';
import {ACCOUNT_ERROR, AUTHORIZE_USER, CHANGE_AVATAR, LOGOUT, USER_AUTHORIZED} from './actions';
import {BATCH_ACTION} from "../../event-manager/redux/event-manager-actions";
import {removeToken} from "../../../service/abstract.http.service";


export function accountStateReducer(state: AccountState = initialAccountState, action: CommonAction): AccountState {
  state = {...state, error: null};
  switch (action.type) {
    case BATCH_ACTION:
      return batchReducer(action, state, accountStateReducer);
    case AUTHORIZE_USER:
      return state;
    case USER_AUTHORIZED: {
      if (action.payload) {
        return {
          ...state,
          user: {
            ...action.payload,
          }
        };
      }
      return state;
    }
    case LOGOUT:
      removeToken();
      return {...state, user: null};
    case CHANGE_AVATAR:
      return {
        ...state,
        user: {
          ...state.user,
          // avatar: (window.URL || (window as any).webkitURL).createObjectURL(b64toBlob(action.payload.blobBase64, 'image/png'))
        }
      };
    case ACCOUNT_ERROR:
      return {...state, error: action.payload, user: null};
    default:
      return state;
  }
}
