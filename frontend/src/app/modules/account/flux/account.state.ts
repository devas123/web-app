import {Account} from "../model/Account";


export interface AccountState {
  user: Account
  error: string
}


export const initialAccountState: AccountState = {
  user: null,
  error: null
};
