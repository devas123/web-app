import {Component, OnInit, ViewChild, ViewContainerRef, ViewEncapsulation} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {AppState} from '../reducers/global-reducers';
import {authorizeToken} from '../modules/account/flux/actions';
import {Observable, Subscription} from 'rxjs';
import {AccountState} from '../modules/account/flux/account.state';
import {Account} from '../modules/account/model/Account';
import {map, tap} from 'rxjs/operators';
import {MenuService} from '../components/main-menu/menu.service';
import {MenuItem} from '../commons/model/competition.model';
import {selectAccountState} from '../modules/competition/redux/reducers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'app';
  displayMenuButton$: Observable<boolean>;
  user$: Observable<Account>;
  menu$: Observable<MenuItem[]>;
  subs = new Subscription();

  @ViewChild('childcontainer', {read: ViewContainerRef})
  childcontainer: ViewContainerRef;
  sidebarVisible = false;

  constructor(private store: Store<AppState>, private menuService: MenuService) {
    this.displayMenuButton$ = menuService.displaySidebar$;
    this.menu$ = menuService.menu$.pipe(tap(m => m.filter(me => !!me.itemDisplayAction).forEach(me => setTimeout(() => me.itemDisplayAction(this.childcontainer)))),
      map(m => m.filter(me => !me.itemDisplayAction)));
    this.user$ = this.store.pipe(select(selectAccountState), map((data: AccountState) => {
      return data.user ? {...data.user, avatar: data.user.avatar || 'assets/images/empty.png'} : data.user;
    }));
  }


  ngOnInit(): void {
    if (localStorage.getItem('token')) {
      this.store.dispatch(authorizeToken(localStorage.getItem('token')));
    }
  }
}
