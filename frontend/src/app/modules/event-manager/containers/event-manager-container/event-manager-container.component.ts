import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subscription} from 'rxjs';
import {select, Store} from '@ngrx/store';
import {AppState, selectUser} from '../../../../reducers';
import {Account} from '../../../account/model/Account';
import {eventManagerBreadcrumbClear, eventManagerConnectSocket, eventManagerDisconnectSocket, loadMyCompetitions} from '../../redux/event-manager-actions';
import {
  BreadCrumbItem,
  eventManagerGetBreadcrumb,
  eventManagerGetHeaderDescription,
  eventManagerGetMenu,
  eventManagerGetSocketConnected,
  eventManagerShouldDisplayMenu,
  HeaderDescription,
  MenuItem
} from '../../redux/event-manager-reducers';
import {Router} from '@angular/router';
import {Location} from '@angular/common';
import {EventManagerService} from '../../event-manager.service';
import {filter, map} from 'rxjs/operators';
import {ComponentCommonMetadataProvider, EventManagerRouterEntryComponent} from './common-classes';

@Component({
  selector: 'app-event-manager-container',
  template: `
      <div>
          <sui-dimmer class="page" [isDimmed]="!(socketConnected$ | async)" [isClickable]="false">
              <div class="ui medium text loader">
                  Connecting to server.
                  <p></p>
                  <button class="ui button" (click)="cancelConnect()">Cancel</button>
              </div>
          </sui-dimmer>
          <ng-container *ngIf="socketConnected$ | async">
              <div class="ui two column stackable grid container">
                  <div class="ui sixteen wide column">
                      <app-breadcrumb [breadcrumb]="breadcrumb$ | async" (itemClicked)="goback($event.level)"></app-breadcrumb>
                  </div>
                  <div class="sixteen wide column" app-dynamic-header [hederDescription]="header$ | async"></div>
                  <app-eventmanager-menu [menu]="menu$ | async" (itemClicked)="$event.action()" [displayMenu]="displayMenu$ | async"></app-eventmanager-menu>
                  <div app-flex-col [menuDisplayed]="displayMenu$ | async">
                      <router-outlet></router-outlet>
                  </div>
              </div>
          </ng-container>
      </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EventManagerContainerComponent extends EventManagerRouterEntryComponent implements OnInit, OnDestroy {

  socketConnected$: Observable<boolean>;

  breadcrumb$: Observable<BreadCrumbItem[]>;
  menu$: Observable<MenuItem[]>;
  header$: Observable<HeaderDescription>;
  displayMenu$: Observable<boolean>;
  routerSubscription: Subscription = new Subscription();

  url: string[];

  constructor(store: Store<AppState>, private location: Location, private router: Router, private eventManagerService: EventManagerService) {
    super(store, <ComponentCommonMetadataProvider>{
      breadCrumbItem: <BreadCrumbItem>{
        name: 'Event Manager',
        level: 0
      },
      menu: []
    });
    this.routerSubscription.add(this.store.pipe(
      select(selectUser),
      filter(user => !!user),
      map((user: Account) => loadMyCompetitions(user.userId))).subscribe(store));
    this.socketConnected$ = this.store.pipe(select(eventManagerGetSocketConnected));
    this.breadcrumb$ = this.store.pipe(select(eventManagerGetBreadcrumb));
    this.menu$ = this.store.pipe(select(eventManagerGetMenu));
    this.header$ = this.store.pipe(select(eventManagerGetHeaderDescription));
    this.displayMenu$ = this.store.pipe(select(eventManagerShouldDisplayMenu));
  }

  cancelConnect() {
    this.router.navigate(['/']).then(() => this.eventManagerService.dropConnection());
  }

  goback(steps) {
    let newpath = this.location.path(false);
    for (let i = 0; i < steps; i++) {
      newpath = newpath.slice(0, newpath.lastIndexOf('/'));
    }
    this.router.navigateByUrl(newpath).catch(reason => console.error(reason));
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
