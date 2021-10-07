import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ReactiveFormsModule} from '@angular/forms';
import {SuiModule} from '@frontend-nx/ng2-semantic-ui';
import {ScheduleDisplayComponent} from '../../../../components/schedule-display/schedule-display.component';
import {combineReducers, StoreModule} from '@ngrx/store';
import {competitionPropertiesEntitiesInitialState, reducers} from '../../../../reducers/global-reducers';
import {initialAccountState} from '../../../account/flux/account.state';
import {ZonedDatePipe} from '../../../../pipes/zoned-date-pipe';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {RouterTestingModule} from '@angular/router/testing';
import {competitionListReducer} from '../../redux/reducers';
import {eventManagerReducers} from '../../../event-manager/redux/event-manager-reducers';
import {periodsInitialState} from '../../../event-manager/redux/dashboard-reducers';
import {HeaderDescription} from '../../../../commons/model/competition.model';
import {ScheduleContainerComponent} from './schedule-container.component';

describe('ScheduleContainerComponent', () => {
  let component: ScheduleContainerComponent;
  let fixture: ComponentFixture<ScheduleContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ScheduleContainerComponent, ScheduleDisplayComponent, ZonedDatePipe],
      imports: [ReactiveFormsModule, SuiModule, DragDropModule, StoreModule.forRoot({
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
      }), RouterTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
