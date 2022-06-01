
import {filter} from 'rxjs/operators';
import {Component} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {select, Store} from '@ngrx/store';
import {FormGroup} from "@angular/forms";
import {Observable} from "rxjs";
import {Account} from "../model/Account";
import {AppState, selectAccountState} from "../../../reducers/global-reducers";
import {AccountState} from "../flux/account.state";

@Component({
  template: `<app-account-info [accountState]="accountState$ | async"></app-account-info>`
})
export class AccountInfoContainerComponent  {


  accountState$: Observable<AccountState>;

  form: FormGroup

  constructor(public sanitizer: DomSanitizer, private store: Store<AppState>) {
    this.accountState$ = this.store.pipe(
      select(selectAccountState)
    )
  }
}
