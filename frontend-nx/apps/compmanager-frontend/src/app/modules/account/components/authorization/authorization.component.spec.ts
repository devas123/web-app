import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AuthorizationComponent} from './authorization.component';
import {SignInComponent} from './sign-in/sign-in.component';
import {SignUpComponent} from './sign-up/sign-up.component';
import {SuiTransitionModule} from '@frontend-nx/ng2-semantic-ui';
import {ReactiveFormsModule} from '@angular/forms';
import {combineReducers, StoreModule} from '@ngrx/store';
import {competitionPropertiesEntitiesInitialState, reducers} from '../../../../reducers/global-reducers';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientModule} from '@angular/common/http';
import {eventManagerReducers} from '../../../event-manager/redux/event-manager-reducers';
import {initialAccountState} from '../../flux/account.state';
import {periodsInitialState} from '../../../event-manager/redux/dashboard-reducers';
import {competitionListReducer} from '../../../competition/redux/reducers';
import {HeaderDescription} from '../../../../commons/model/competition.model';

describe('AuthorizationComponent', () => {
  let component: AuthorizationComponent;
  let fixture: ComponentFixture<AuthorizationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AuthorizationComponent, SignInComponent, SignUpComponent],
      imports: [SuiTransitionModule, ReactiveFormsModule, StoreModule.forRoot({
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
      }), RouterTestingModule, HttpClientModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
