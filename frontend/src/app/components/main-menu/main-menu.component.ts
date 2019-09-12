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

  private navigate(location: any[]) {
    this.router.navigate(location).catch(error => console.error(`Navigation error ${location}: ${error}`));
  }

  eventsNav() {
    this.navigate(['/events']);
  }

  loginNav() {
    this.navigate(['/login']);
  }


  accountPage() {
    this.navigate(['/user', this.user.userId]);
  }

  eventManagerPage() {
    this.navigate(['/eventmanager']);
  }


  logout() {
    this.store.dispatch(logout());
    this.navigate(['/']);
  }


}
