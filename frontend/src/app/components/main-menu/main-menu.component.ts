import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {select, Store} from '@ngrx/store';
import {selectAccountState} from '../../reducers';
import {AccountState} from '../../modules/account/flux/account.state';
import {logout} from '../../modules/account/flux/actions';
import {Account} from '../../modules/account/model/Account';
import {DomSanitizer} from '@angular/platform-browser';

declare var $: any;


@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {

  public user: Account;

  constructor(private router: Router, private store: Store<AccountState>, public sanitizer: DomSanitizer) {
  }

  ngOnInit() {
    this.store.pipe(select(selectAccountState)).subscribe((data: AccountState) => {
      this.user = data.user ? {...data.user, avatar: data.user.avatar || 'assets/images/empty.png'} : data.user;
    });
  }

  eventsNav() {
    this.router.navigate(['/events']);
  }

  loginNav() {
    this.router.navigate(['/login']);
  }


  accountPage() {
    this.router.navigate(['/user', this.user.userId]);
  }

  eventManagerPage() {
    this.router.navigate(['/user', this.user.userId, 'eventmanager']);
  }


  logout() {
    this.store.dispatch(logout());
    this.router.navigate(['/']);
  }


}
