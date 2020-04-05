import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ScheduleEditorContainerComponent} from './schedule-editor-container.component';
import {ScheduleEditorComponent} from '../../components/schedule-editor/schedule-editor.component';
import {ReactiveFormsModule} from '@angular/forms';
import {SuiModule} from '@devas123/ng2-semantic';
import {ScheduleDisplayComponent} from '../../../../components/schedule-display/schedule-display.component';
import {combineReducers, StoreModule} from '@ngrx/store';
import {competitionPropertiesEntitiesInitialState, reducers} from '../../../../reducers/global-reducers';
import {eventManagerReducers} from '../../redux/event-manager-reducers';
import {initialAccountState} from '../../../account/flux/account.state';
import {periodsInitialState} from '../../redux/dashboard-reducers';
import {ZonedDatePipe} from '../../../../pipes/zoned-date-pipe';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {RouterTestingModule} from '@angular/router/testing';
import {competitionListReducer} from '../../../competition/redux/reducers';
import {HeaderDescription} from '../../../../commons/model/competition.model';

describe('ScheduleEditorContainerComponent', () => {
  let component: ScheduleEditorContainerComponent;
  let fixture: ComponentFixture<ScheduleEditorContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ScheduleEditorContainerComponent, ScheduleEditorComponent, ScheduleDisplayComponent, ZonedDatePipe],
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
    fixture = TestBed.createComponent(ScheduleEditorContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
