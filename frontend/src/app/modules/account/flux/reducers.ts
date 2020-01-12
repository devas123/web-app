import {CommonAction} from '../../../reducers/global-reducers';
import {AccountState, initialAccountState} from './account.state';
import {ACCOUNT_ERROR, AUTHORIZE_USER, CHANGE_AVATAR, LOGOUT, USER_AUTHORIZED} from './actions';
import {b64toBlob} from '../utils';
import {HttpAuthService} from '../service/AuthService';


export function accountStateReducer(state: AccountState = initialAccountState, action: CommonAction): AccountState {
  state = {...state, error: null};
  switch (action.type) {
    case AUTHORIZE_USER:
      return state;
    case USER_AUTHORIZED: {
      if (action.payload) {
        const {avatar} = action.payload;
        return {
          ...state,
          user: {
            ...action.payload,
            avatar: avatar ? (window.URL || (window as any).webkitURL).createObjectURL(b64toBlob(avatar, 'image/png')) : null
          }
        };
      }
      return state;
    }
    case LOGOUT:
      HttpAuthService.removeToken();
      return {...state, user: null};
    case CHANGE_AVATAR:
      return {
        ...state,
        user: {
          ...state.user,
          avatar: (window.URL || (window as any).webkitURL).createObjectURL(b64toBlob(action.payload.blobBase64, 'image/png'))
        }
      };
    case ACCOUNT_ERROR:
      return {...state, error: action.payload, user: null};
    default:
      return state;
  }
}
