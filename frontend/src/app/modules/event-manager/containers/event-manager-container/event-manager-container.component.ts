import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subscription} from 'rxjs';
import {select, Store} from '@ngrx/store';
import {AppState, selectUser} from '../../../../reducers';
import {Account} from '../../../account/model/Account';
import {
  eventManagerConnectSocket,
  eventManagerDisconnectSocket,
  loadMyCompetitions
} from '../../redux/event-manager-actions';
import {
  eventManagerGetSelectedEventName,
  eventManagerGetSelectedEventSelectedCategory,
  eventManagerGetSelectedEventSelectedCategorySelectedCompetitor,
  eventManagerGetSelectedEventSelectedCompetitor,
  eventManagerGetSocketConnected
} from '../../redux/event-manager-reducers';
import {NavigationEnd, Router} from '@angular/router';
import {Location} from '@angular/common';
import {Category, Competitor} from '../../../../commons/model/competition.model';
import {AddFighterComponent} from '../../components/add-fighter/add-fighter.component';
import {EventManagerService} from '../../event-manager.service';
import {
  dashboardGetSelectedPeriod,
  dashboardGetSelectedPeriodSelectedMatId,
  extractMatNumberFromId
} from '../../redux/dashboard-reducers';
import {filter, map} from 'rxjs/operators';

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
        <div class="ui container">
          <div class="ui breadcrumb">
            <ng-container *ngFor="let b of breadcrumb; let i = index">
              <a class="section" [ngClass]="{active: i == breadcrumb.length - 1}"
                 (click)="goback(b.stepsback)">{{b.name | truncate}}</a>
              <div class="divider" *ngIf="i < breadcrumb.length - 1">/</div>
            </ng-container>
          </div>
        </div>
        <p></p>
        <router-outlet></router-outlet>
      </ng-container>
    </div>
  `,
})
export class EventManagerContainerComponent implements OnInit, OnDestroy {

  socketConnected$: Observable<boolean>;

  breadcrumb: [{ name: string, stepsback: number }] = [] as [{ name: string, stepsback: number }];

  selectedCompetitionName: string;
  selectedCategory: Category;
  dashboardSelectedPeriod: string;
  dashboardSelectedMat: string;
  selectedCompetitor: Competitor;
  selectedCategorySelectedCompetitor: Competitor;

  routerSubscription: Subscription = new Subscription();


  url: string;

  constructor(private store: Store<AppState>, private location: Location, private router: Router, private eventManagerService: EventManagerService) {
    this.routerSubscription.add(this.store.pipe(
      select(selectUser),
      filter(user => user && user != null),
      map((user: Account) => loadMyCompetitions(user.userId))).subscribe(store));
    this.socketConnected$ = this.store.pipe(select(eventManagerGetSocketConnected));
    this.routerSubscription.add(this.store.pipe(
      select(eventManagerGetSelectedEventName),
      filter(name => name && name != null)).subscribe(name => {
      this.selectedCompetitionName = name;
      this.createBreadcrumb();
    }));
    this.routerSubscription.add(this.store.pipe(
      select(eventManagerGetSelectedEventSelectedCategory),
      filter(category => category && category != null)).subscribe(category => {
      this.selectedCategory = category;
      this.createBreadcrumb();
    }));
    this.routerSubscription.add(this.store.pipe(
      select(eventManagerGetSelectedEventSelectedCompetitor),
      filter(competitor => competitor && competitor != null)).subscribe(competitor => {
      this.selectedCompetitor = competitor;
      this.createBreadcrumb();
    }));
    this.routerSubscription.add(this.store.pipe(
      select(eventManagerGetSelectedEventSelectedCategorySelectedCompetitor),
      filter(competitor => competitor && competitor != null)).subscribe(competitor => {
      this.selectedCategorySelectedCompetitor = competitor;
      this.createBreadcrumb();
    }));
    this.routerSubscription.add(this.store.pipe(
      select(dashboardGetSelectedPeriod),
      filter(period => period && period != null && period.name != null)).subscribe(period => {
      this.dashboardSelectedPeriod = period.name;
      this.createBreadcrumb();
    }));
    this.routerSubscription.add(this.store.pipe(
      select(dashboardGetSelectedPeriodSelectedMatId),
      filter(matId => matId && matId != null)).subscribe(matId => {
      this.dashboardSelectedMat = extractMatNumberFromId(matId);
      this.createBreadcrumb();
    }));
    this.routerSubscription.add(router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        this.url = val.url;
        this.createBreadcrumb();
      }
    }));
  }

  cancelConnect() {
    this.router.navigate(['/']).then(() => this.eventManagerService.dropConnection());
  }

  createBreadcrumb() {
    const url = this.url;
    if (url && url.lastIndexOf('eventmanager') >= 0) {
      const relativeUrl = url.substr(url.lastIndexOf('eventmanager'));
      this.breadcrumb = [] as [{ name: string, stepsback: number }];
      const path = relativeUrl.split('/');
      for (let i = 0; i < path.length; i++) {
        if (i > 0 && path[i - 1] === 'eventmanager' && path[i] !== 'create') {
          this.breadcrumb.push({name: this.selectedCompetitionName, stepsback: path.length - i - 1});
        } else if (i > 0 && path[i - 1] === 'categories' && path[i] !== 'create') {
          this.breadcrumb.push({
            name: AddFighterComponent.displayCategory(this.selectedCategory),
            stepsback: path.length - i - 1
          });
        } else if (i > 0 && path[i - 1] === 'dashboard') {
          this.breadcrumb.push({
            name: this.dashboardSelectedPeriod,
            stepsback: path.length - i - 1
          });
        } else if (i > 1 && path[i - 2] === 'dashboard') {
          this.breadcrumb.push({
            name: 'Mat ' + (+this.dashboardSelectedMat + 1),
            stepsback: path.length - i - 1
          });
        } else if (i > 0 && path[i - 1] === 'fighters') {
          let competitor: Competitor = null;
          if (path.find(value => value === 'categories')) {
            competitor = this.selectedCategorySelectedCompetitor;
          } else {
            competitor = this.selectedCompetitor;
          }
          this.breadcrumb.push({
            name: (competitor && `${competitor.firstName} ${competitor.lastName}`) || 'unknown',
            stepsback: path.length - i - 1
          });
        } else {
          this.breadcrumb.push({name: path[i], stepsback: path.length - i - 1});
        }
      }
    } else {
      this.breadcrumb = [] as [{ name: string, stepsback: number }];
    }
  }

  goback(steps) {
    let newpath = this.location.path(false);
    for (let i = 0; i < steps; i++) {
      newpath = newpath.slice(0, newpath.lastIndexOf('/'));
    }
    this.router.navigateByUrl(newpath);
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
