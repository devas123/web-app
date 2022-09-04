import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subscription} from 'rxjs';
import {select, Store} from '@ngrx/store';
import {AppState, eventManagerGetHeaderDescription, selectUser} from '../../../../reducers/global-reducers';
import {
  eventManagerConnectSocket,
  eventManagerDisconnectSocket,
  loadMyCompetitions
} from '../../redux/event-manager-actions';
import {Router} from '@angular/router';
import {Location} from '@angular/common';
import {EventManagerService} from '../../event-manager.service';
import {filter, map} from 'rxjs/operators';
import {
  CompetitionManagerModuleRouterEntryComponent,
  ComponentCommonMetadataProvider
} from '../../../../commons/directives/common-classes';
import {MenuService} from '../../../../components/main-menu/menu.service';
import {HeaderDescription, MenuItem} from '../../../../commons/model/competition.model';
import {eventManagerGetSocketConnected} from "../../redux/event-manager-reducers";
import {Account} from "../../../../../../../../libs/protobuf/src/lib/account";

@Component({
  selector: 'app-event-manager-container',
  template: `
    <sui-dimmer class="page" [isDimmed]="(socketConnected$ | async) === false" [isClickable]="false">
      <div class="ui medium text loader">
        Connecting to server.
        <p></p>
        <button class="ui button" (click)="cancelConnect()">Cancel</button>
      </div>
    </sui-dimmer>
    <p></p>
    <ng-container *ngIf="socketConnected$ | async">
      <div class="event_manager_container">
        <div class="event_manager_header" app-dynamic-header [hederDescription]="header$ | async"></div>
        <div class="menu_row">
          <app-eventmanager-menu *ngIf="(displayAsSidebar$ | async) !== true" [menu]="menu$ | async" (itemClicked)="$event.action()" [displayMenu]="shrinkMainContent$ | async"></app-eventmanager-menu>
          <div appFlexCol [shrink]="shrinkMainContent$ | async" class="maincontent">
            <router-outlet></router-outlet>
          </div>
        </div>
      </div>
    </ng-container>
  `
})
export class EventManagerContainerComponent extends CompetitionManagerModuleRouterEntryComponent implements OnInit, OnDestroy {

  socketConnected$: Observable<boolean>;
  menu$: Observable<MenuItem[]>;
  header$: Observable<HeaderDescription>;
  shrinkMainContent$: Observable<boolean>;
  routerSubscription: Subscription = new Subscription();
  displayAsSidebar$: Observable<boolean>;
  url: string[];

  constructor(store: Store<AppState>, private location: Location,
              private router: Router, private eventManagerService: EventManagerService, menuService: MenuService) {
    super(store, <ComponentCommonMetadataProvider>{
      menu: []
    }, menuService);
    this.routerSubscription.add(this.store.pipe(
      select(selectUser),
      filter(user => !!user),
      map((user: Account) => loadMyCompetitions(user.userId))).subscribe(store));
    this.socketConnected$ = this.store.pipe(select(eventManagerGetSocketConnected));
    this.menu$ = menuService.menu$;
    this.header$ = this.store.pipe(select(eventManagerGetHeaderDescription));
    this.displayAsSidebar$ = menuService.displaySidebar$;
    this.shrinkMainContent$ = this.displayAsSidebar$.pipe(
      map((button) => !button)
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
  }

}
