import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
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

  @Output()
  logout = new EventEmitter<void>();

  @Output()
  navigate = new EventEmitter<any[]>();

  constructor(public sanitizer: DomSanitizer) {
  }

  eventsNav() {
    this.navigate.next(['/events']);
  }

  loginNav() {
    this.navigate.next(['/login']);
  }


  accountPage() {
    this.navigate.next(['/user', this.user.userId]);
  }

  eventManagerPage() {
    this.navigate.next(['/eventmanager']);
  }

  academiesPage() {
    this.navigate.next(['/academies']);
  }


  doLogout() {
    this.logout.next();
  }


  sidebarToggled() {
    this.sidebarToggle.next();
  }
}
