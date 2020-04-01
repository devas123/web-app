import {async, TestBed} from '@angular/core/testing';

import {AppComponent} from './app.component';
import {RouterTestingModule} from '@angular/router/testing';
import {MainMenuComponent} from '../components/main-menu/main-menu.component';
import {AvatarModule} from 'ngx-avatar';
import {combineReducers, StoreModule} from '@ngrx/store';
import {competitionPropertiesEntitiesInitialState, reducers} from '../reducers/global-reducers';
import {eventManagerReducers} from '../modules/event-manager/redux/event-manager-reducers';
import {initialAccountState} from '../modules/account/flux/account.state';
import {periodsInitialState} from '../modules/event-manager/redux/dashboard-reducers';
import {SuiSidebarModule} from '@devas123/ng2-semantic';
import {HeaderDescription} from '../commons/model/competition.model';
import {competitionListReducer} from '../modules/competition/redux/reducers';


describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        MainMenuComponent,

      ],
      imports: [ RouterTestingModule, AvatarModule,
        SuiSidebarModule,
        StoreModule.forRoot({
        ...reducers,
        'eventManagerState': combineReducers(eventManagerReducers()),
          events: competitionListReducer
      }, {
        initialState: {
          events: competitionPropertiesEntitiesInitialState,
          accountState: initialAccountState,
          eventManagerState: {
            myEvents: competitionPropertiesEntitiesInitialState,
            socketConnected: false,
            dashboardState: {
              dashboardSocketConnected: false,
              eventPeriods: periodsInitialState
            },
            header: {} as HeaderDescription
          }
        }
      })]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));
});
