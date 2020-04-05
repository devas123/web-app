import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {EventCalendarComponent} from './event-calendar.component';
import {EventListComponent} from '../event-list/event-list.component';
import {EventCardComponent} from '../event-card/event-card.component';
import {SuiModule} from '@frontend-nx/ng2-semantic-ui';
import {combineReducers, StoreModule} from '@ngrx/store';
import {competitionPropertiesEntitiesInitialState, reducers} from '../../../../reducers/global-reducers';
import {eventManagerReducers} from '../../../event-manager/redux/event-manager-reducers';
import {initialAccountState} from '../../../account/flux/account.state';
import {periodsInitialState} from '../../../event-manager/redux/dashboard-reducers';
import {HeaderDescription} from '../../../../commons/model/competition.model';
import {competitionListReducer} from '../../redux/reducers';

describe('EventCalendarComponent', () => {
  let component: EventCalendarComponent;
  let fixture: ComponentFixture<EventCalendarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EventCalendarComponent, EventListComponent, EventCardComponent],
      imports: [SuiModule, StoreModule.forRoot({
        ...reducers,
        'eventManagerState': combineReducers(eventManagerReducers()),
        'events': competitionListReducer
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
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
