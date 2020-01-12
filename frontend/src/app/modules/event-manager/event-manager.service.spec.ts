import {TestBed, inject} from '@angular/core/testing';

import {EventManagerService} from './event-manager.service';
import {HttpClientModule} from '@angular/common/http';
import {combineReducers, StoreModule} from '@ngrx/store';
import {competitionPropertiesEntitiesInitialState, reducers} from '../../reducers/global-reducers';
import {eventManagerReducers, HeaderDescription} from './redux/event-manager-reducers';
import {initialAccountState} from '../account/flux/account.state';
import {periodsInitialState} from './redux/dashboard-reducers';
import {InfoService} from '../../service/info.service';
import {RouterReducerState} from '@ngrx/router-store';

describe('EventManagerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EventManagerService, InfoService],
      imports: [HttpClientModule, StoreModule.forRoot({
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
    });
  });

  it('should be created', inject([EventManagerService], (service: EventManagerService) => {
    expect(service).toBeTruthy();
  }));
});
