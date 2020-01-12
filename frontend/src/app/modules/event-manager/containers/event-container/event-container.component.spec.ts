import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {EventContainerComponent} from './event-container.component';
import {RouterTestingModule} from '@angular/router/testing';
import {combineReducers, StoreModule} from '@ngrx/store';
import {competitionPropertiesEntitiesInitialState, reducers} from '../../../../reducers/global-reducers';
import {eventManagerReducers, HeaderDescription} from '../../redux/event-manager-reducers';
import {initialAccountState} from '../../../account/flux/account.state';
import {periodsInitialState} from '../../redux/dashboard-reducers';
import {RouterReducerState} from '@ngrx/router-store';
import {competitionListReducer} from '../../../competition/redux/reducers';

describe('EventContainerComponent', () => {
  let component: EventContainerComponent;
  let fixture: ComponentFixture<EventContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EventContainerComponent],
      imports: [ RouterTestingModule, StoreModule.forRoot({
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
          },
          router: {} as RouterReducerState<any>
        }
      })]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
