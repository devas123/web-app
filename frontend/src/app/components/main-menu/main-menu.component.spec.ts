import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MainMenuComponent} from './main-menu.component';
import {AvatarModule} from 'ngx-avatar';
import {RouterTestingModule} from '@angular/router/testing';
import {combineReducers, StoreModule} from '@ngrx/store';
import {competitionPropertiesEntitiesInitialState, reducers} from '../../reducers';
import {eventManagerReducers, HeaderDescription} from '../../modules/event-manager/redux/event-manager-reducers';
import {initialAccountState} from '../../modules/account/flux/account.state';
import {periodsInitialState} from '../../modules/event-manager/redux/dashboard-reducers';
import {RouterReducerState} from '@ngrx/router-store';

describe('MainMenuComponent', () => {
  let component: MainMenuComponent;
  let fixture: ComponentFixture<MainMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MainMenuComponent],
      imports: [AvatarModule, RouterTestingModule, StoreModule.forRoot({
        ...reducers,
        'eventManagerState': combineReducers(eventManagerReducers()),
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
          },
          router: {} as RouterReducerState<any>
        }
      })]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
