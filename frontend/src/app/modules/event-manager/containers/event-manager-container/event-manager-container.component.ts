import {Component, OnDestroy, OnInit} from '@angular/core';
import {combineLatest, Observable, Subscription} from 'rxjs';
import {select, Store} from '@ngrx/store';
import {AppState, selectUser} from '../../../../reducers';
import {Account} from '../../../account/model/Account';
import {eventManagerBreadcrumbClear, eventManagerConnectSocket, eventManagerDisconnectSocket, loadMyCompetitions} from '../../redux/event-manager-actions';
import {BreadCrumbItem, eventManagerGetBreadcrumb, eventManagerGetHeaderDescription, eventManagerGetSocketConnected, HeaderDescription, MenuItem} from '../../redux/event-manager-reducers';
import {Router} from '@angular/router';
import {Location} from '@angular/common';
import {EventManagerService} from '../../event-manager.service';
import {filter, map} from 'rxjs/operators';
import {ComponentCommonMetadataProvider, EventManagerRouterEntryComponent} from './common-classes';
import {MenuService} from '../../../../components/main-menu/menu.service';

@Component({
  selector: 'app-event-manager-container',
  template: `
      <sui-dimmer class="page" [isDimmed]="!(socketConnected$ | async)" [isClickable]="false">
          <div class="ui medium text loader">
              Connecting to server.
              <p></p>
              <button class="ui button" (click)="cancelConnect()">Cancel</button>
          </div>
      </sui-dimmer>
      <p></p>
      <ng-container *ngIf="socketConnected$ | async">
          <div class="ui grid container">
              <div class="row">
                  <div class="column" app-dynamic-header [hederDescription]="header$ | async"></div>
              </div>
              <div class="row">
                  <app-eventmanager-menu *ngIf="(displayAsSidebar$ | async) !== true" [menu]="menu$ | async" (itemClicked)="$event.action()" [displayMenu]="shrinkMainContent$ | async"></app-eventmanager-menu>
                  <div app-flex-col [shrink]="shrinkMainContent$ | async" id="maincontent">
                      <router-outlet></router-outlet>
                  </div>
              </div>
          </div>
      </ng-container>
  `
})
export class EventManagerContainerComponent extends EventManagerRouterEntryComponent implements OnInit, OnDestroy {

  socketConnected$: Observable<boolean>;

  breadcrumb$: Observable<BreadCrumbItem[]>;
  menu$: Observable<MenuItem[]>;
  header$: Observable<HeaderDescription>;
  shrinkMainContent$: Observable<boolean>;
  routerSubscription: Subscription = new Subscription();
  displayAsSidebar$: Observable<boolean>;
  url: string[];

  constructor(store: Store<AppState>, private location: Location,
              private router: Router, private eventManagerService: EventManagerService, menuService: MenuService) {
    super(store, <ComponentCommonMetadataProvider>{
      breadCrumbItem: <BreadCrumbItem>{
        name: 'Event Manager',
        level: 0
      },
      menu: []
    }, menuService);
    this.routerSubscription.add(this.store.pipe(
      select(selectUser),
      filter(user => !!user),
      map((user: Account) => loadMyCompetitions(user.userId))).subscribe(store));
    this.socketConnected$ = this.store.pipe(select(eventManagerGetSocketConnected));
    this.breadcrumb$ = this.store.pipe(select(eventManagerGetBreadcrumb));
    this.menu$ = menuService.menu$;
    this.header$ = this.store.pipe(select(eventManagerGetHeaderDescription));
    this.displayAsSidebar$ = menuService.displaySidebar$;
    this.shrinkMainContent$ = combineLatest([this.menu$, this.displayAsSidebar$]).pipe(
      map(([menu, button]) => !button && (menu && menu.length > 0))
    );
  }

  cancelConnect() {
    this.router.navigate(['/']).then(() => this.eventManagerService.dropConnection());
  }

  ngOnInit() {
    this.store.dispatch(eventManagerConnectSocket);
  }

  ngOnDestroy() {
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }
    this.store.dispatch(eventManagerDisconnectSocket);
    this.store.dispatch(eventManagerBreadcrumbClear);
  }

}
