import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SignInComponent} from './sign-in.component';
import {SuiTransitionModule} from '@frontend-nx/ng2-semantic-ui';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpAuthService} from '../../../service/AuthService';
import {combineReducers, StoreModule} from '@ngrx/store';
import {competitionPropertiesEntitiesInitialState, reducers} from '../../../../../reducers/global-reducers';
import {eventManagerReducers} from '../../../../event-manager/redux/event-manager-reducers';
import {initialAccountState} from '../../../flux/account.state';
import {periodsInitialState} from '../../../../event-manager/redux/dashboard-reducers';
import {competitionListReducer} from '../../../../competition/redux/reducers';
import {HeaderDescription} from '../../../../../commons/model/competition.model';


describe('SignInComponent', () => {
  let component: SignInComponent;
  let fixture: ComponentFixture<SignInComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SignInComponent],
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
      })],
      providers: [HttpAuthService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
