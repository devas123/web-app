import {Account} from "@frontend-nx/protobuf";


export interface AccountState {
  user: Account;
  error: string;
}


export const initialAccountState: AccountState = {
  user: null,
  error: null
};
