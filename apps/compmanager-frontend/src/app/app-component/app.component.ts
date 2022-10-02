import {Component, ViewChild, ViewContainerRef} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {AppState, selectUser} from '../reducers/global-reducers';
import {logout} from '../modules/account/flux/actions';
import {Observable, Subscription} from 'rxjs';
import {map, tap} from 'rxjs/operators';
import {MenuService} from '../components/main-menu/menu.service';
import {MenuItem} from '../commons/model/competition.model';
import {Router} from '@angular/router';
import {Account} from "@frontend-nx/protobuf";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'app';
  displayMenuButton$: Observable<boolean>;
  user$: Observable<Account>;
  menu$: Observable<MenuItem[]>;
  subs = new Subscription();

  @ViewChild('childcontainer', {read: ViewContainerRef})
  childcontainer: ViewContainerRef;
  sidebarVisible = false;

  constructor(private store: Store<AppState>, private menuService: MenuService, private router: Router) {
    this.displayMenuButton$ = menuService.displaySidebar$;
    this.menu$ = menuService.menu$.pipe(tap(m => m.filter(me => !!me.itemDisplayAction).forEach(me => setTimeout(() => me.itemDisplayAction(this.childcontainer)))),
      map(m => m.filter(me => !me.itemDisplayAction)));
    this.user$ = this.store.pipe(select(selectUser));
  }

  navigate(location: any[]) {
    console.log("Navigating to", location)
    this.router.navigate(location).catch(error => console.error(`Navigation error ${location}: ${error}`));
  }


  doLogout() {
    this.store.dispatch(logout());
    this.navigate(['/']);
  }
}
