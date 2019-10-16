import {Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {AppState, menuButtonDisplay, selectAccountState} from '../reducers';
import {authorizeToken} from '../modules/account/flux/actions';
import {from, Observable, Subscription} from 'rxjs';
import {eventManagerGetMenu, MenuItem} from '../modules/event-manager/redux/event-manager-reducers';
import {AccountState} from '../modules/account/flux/account.state';
import {Account} from '../modules/account/model/Account';
import {filter, map, mergeMap, tap} from 'rxjs/operators';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {menuButtonDisplaySet} from '../actions/actions';

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

  constructor(private store: Store<AppState>, private observer: BreakpointObserver) {
    this.displayMenuButton$ = store.pipe(
      select(menuButtonDisplay)
    );
    this.menu$ = store.pipe(
      select(eventManagerGetMenu),
      tap(m => console.log(JSON.stringify(m)))
    );
    this.subs.add(observer.observe([Breakpoints.Handset, Breakpoints.Small, Breakpoints.Medium]).pipe(mergeMap(b => from([menuButtonDisplaySet(b.matches)]))).subscribe(store));
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
