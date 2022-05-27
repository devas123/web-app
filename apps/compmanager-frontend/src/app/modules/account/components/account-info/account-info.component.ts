
import {filter} from 'rxjs/operators';
import {Component, OnInit} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {AccountState} from '../../flux/account.state';
import {select, Store} from '@ngrx/store';
import {AppState, selectAccountState} from '../../../../reducers/global-reducers';
import {Account} from '../../model/Account';

@Component({
  selector: 'app-account-info',
  templateUrl: './account-info.component.html',
  styleUrls: ['./account-info.component.css']
})
export class AccountInfoComponent implements OnInit {


  avatarSrc = 'assets/images/empty.png';
  public user: Account;

  constructor(public sanitizer: DomSanitizer, private store: Store<AppState>) {

  }

  ngOnInit() {
    this.store.pipe(select(selectAccountState), filter((data: AccountState) => data.user != null)).subscribe((data: AccountState) => {
      this.avatarSrc = data.user.avatar || this.avatarSrc;
      this.user = data.user;
    });
  }


  openModal() {}
}
