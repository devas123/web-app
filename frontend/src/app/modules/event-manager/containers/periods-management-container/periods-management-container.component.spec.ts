import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PeriodsManagementContainerComponent} from './periods-management-container.component';

import {SuiModule} from 'ng2-semantic';
import {ScheduleDisplayComponent} from '../../../../components/schedule-display/schedule-display.component';
import {combineReducers, StoreModule} from '@ngrx/store';
import {competitionPropertiesEntitiesInitialState, reducers} from '../../../../reducers/global-reducers';
import {RouterTestingModule} from '@angular/router/testing';
import {eventManagerReducers, HeaderDescription} from '../../redux/event-manager-reducers';
import {initialAccountState} from '../../../account/flux/account.state';
import {periodsInitialState} from '../../redux/dashboard-reducers';
import {ZonedDatePipe} from '../../../../pipes/zoned-date-pipe';
import {RouterReducerState} from '@ngrx/router-store';

describe('PeriodsManagementContainerComponent', () => {
  let component: PeriodsManagementContainerComponent;
  let fixture: ComponentFixture<PeriodsManagementContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PeriodsManagementContainerComponent, ScheduleDisplayComponent, ZonedDatePipe],
      imports: [SuiModule, StoreModule.forRoot({
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
      }), RouterTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeriodsManagementContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
