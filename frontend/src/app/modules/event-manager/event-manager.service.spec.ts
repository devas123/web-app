import {TestBed, inject} from '@angular/core/testing';

import {EventManagerService} from './event-manager.service';
import {HttpClientModule} from '@angular/common/http';
import {combineReducers, StoreModule} from '@ngrx/store';
import {competitionPropertiesEntitiesInitialState, reducers} from '../../reducers';
import {eventManagerReducers} from './redux/event-manager-reducers';
import {initialAccountState} from '../account/flux/account.state';
import {periodsInitialState} from './redux/dashboard-reducers';

describe('EventManagerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EventManagerService],
      imports: [HttpClientModule, StoreModule.forRoot({
        ...reducers,
        'eventManagerState': combineReducers(eventManagerReducers())
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
            }
          }
        }
      })]
    });
  });

  it('should be created', inject([EventManagerService], (service: EventManagerService) => {
    expect(service).toBeTruthy();
  }));
});
