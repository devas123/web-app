import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SignInComponent} from './sign-in.component';
import {SuiTransitionModule} from 'ng2-semantic';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpAuthService} from '../../../service/AuthService';
import {combineReducers, StoreModule} from '@ngrx/store';
import {competitionPropertiesEntitiesInitialState, reducers} from '../../../../../reducers/global-reducers';
import {eventManagerReducers, HeaderDescription} from '../../../../event-manager/redux/event-manager-reducers';
import {initialAccountState} from '../../../flux/account.state';
import {periodsInitialState} from '../../../../event-manager/redux/dashboard-reducers';
import {RouterReducerState} from '@ngrx/router-store';


describe('SignInComponent', () => {
  let component: SignInComponent;
  let fixture: ComponentFixture<SignInComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignInComponent ],
      imports: [SuiTransitionModule, ReactiveFormsModule, StoreModule.forRoot({
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
