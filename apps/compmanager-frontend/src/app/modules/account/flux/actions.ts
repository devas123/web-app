
// Actions
// Auth
import {Account} from "@frontend-nx/protobuf";

export const AUTHORIZE_USER = 'AUTHORIZE_USER';
export const AUTHORIZE_TOKEN = 'AUTHORIZE_WITH_TOKEN';
export const LOGOUT = 'LOGOUT';
export const ACCOUNT_ERROR = 'ACCOUNT_ERROR';
// Account
export const CHANGE_AVATAR = 'CHANGE_AVATAR';


// Events
export const USER_AUTHORIZED = 'USER_AUTHORIZED';

export const userAuthorized = (payload: Account) => {
  return {type: USER_AUTHORIZED, payload};
};

export const authorizeUser = (payload: { email: string, password: string }) => {
  return {type: AUTHORIZE_USER, payload};
};

export const authorizeToken = (payload: string) => {
  return {type: AUTHORIZE_TOKEN, payload};
};

export const logout = (payload?: null) => {
  return {type: LOGOUT, payload};
};

export const changeAvatar = function (payload: { blobBase64: string }) {
  return {type: CHANGE_AVATAR, payload};
};

export const accountError = function (payload: string) {
  return {type: ACCOUNT_ERROR, payload};
};
