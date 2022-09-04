import {Account} from "../../../../../../../libs/protobuf/src/lib/account";


export interface AccountState {
  user: Account;
  error: string;
}


export const initialAccountState: AccountState = {
  user: null,
  error: null
};
