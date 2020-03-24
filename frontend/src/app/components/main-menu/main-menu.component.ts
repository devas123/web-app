import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {Router} from '@angular/router';
import {Store} from '@ngrx/store';
import {AppState} from '../../reducers/global-reducers';
import {logout} from '../../modules/account/flux/actions';
import {Account} from '../../modules/account/model/Account';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainMenuComponent {

  @Input()
  public user: Account;

  @Input()
  displayButton: boolean;

  @Output()
  sidebarToggle = new EventEmitter<void>();

  constructor(private router: Router, private store: Store<AppState>, public sanitizer: DomSanitizer) {
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


  sidebarToggled() {
    this.sidebarToggle.next();
  }
}
