import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ScheduleEditorContainerComponent} from './schedule-editor-container.component';
import {ScheduleEditorComponent} from '../../components/schedule-editor/schedule-editor.component';
import {ReactiveFormsModule} from '@angular/forms';
import {SuiModule} from 'ng2-semantic-ui';
import {NgDragDropModule} from '../../../dragdrop/ng-drag-drop.module';
import {ScheduleDisplayComponent} from '../../components/schedule-editor/schedule-display.component';
import {combineReducers, StoreModule} from '@ngrx/store';
import {competitionPropertiesEntitiesInitialState, reducers} from '../../../../reducers';
import {eventManagerReducers} from '../../redux/event-manager-reducers';
import {initialAccountState} from '../../../account/flux/account.state';
import {periodsInitialState} from '../../redux/dashboard-reducers';

describe('ScheduleEditorContainerComponent', () => {
  let component: ScheduleEditorContainerComponent;
  let fixture: ComponentFixture<ScheduleEditorContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ScheduleEditorContainerComponent, ScheduleEditorComponent, ScheduleDisplayComponent],
      imports: [ReactiveFormsModule, SuiModule, NgDragDropModule, StoreModule.forRoot({
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
