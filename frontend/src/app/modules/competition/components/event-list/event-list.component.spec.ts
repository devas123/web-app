import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {EventListComponent} from './event-list.component';
import {EventCardComponent} from '../event-card/event-card.component';
import {SuiTransitionModule} from 'ng2-semantic';
import {combineReducers, StoreModule} from '@ngrx/store';
import {competitionPropertiesEntitiesInitialState, reducers} from '../../../../reducers/global-reducers';
import {eventManagerReducers, HeaderDescription} from '../../../event-manager/redux/event-manager-reducers';
import {initialAccountState} from '../../../account/flux/account.state';
import {periodsInitialState} from '../../../event-manager/redux/dashboard-reducers';
import {RouterReducerState} from '@ngrx/router-store';

describe('EventListComponent', () => {
  let component: EventListComponent;
  let fixture: ComponentFixture<EventListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventListComponent, EventCardComponent ],
      imports: [SuiTransitionModule, StoreModule.forRoot({
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
    fixture = TestBed.createComponent(EventListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
