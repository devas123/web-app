import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {EventPropertiesEditorContainerComponent} from './event-properties-editor-container.component';
import {EventPropertiesEditorComponent} from '../../components/event-properties-editor/event-properties-editor.component';
import {ReactiveFormsModule} from '@angular/forms';
import {SuiModule} from 'ng2-semantic-ui'
import {combineReducers, StoreModule} from '@ngrx/store';
import {competitionPropertiesEntitiesInitialState, reducers} from '../../../../reducers';
import {RouterTestingModule} from '@angular/router/testing';
import {eventManagerReducers} from '../../redux/event-manager-reducers';
import {initialAccountState} from '../../../account/flux/account.state';
import {periodsInitialState} from '../../redux/dashboard-reducers';
import {ZonedDatePipe} from '../../../../pipes/zoned-date-pipe';
import {TruncatePipe} from '../../../../pipes/truncate.pipe';


describe('EventPropertiesEditorContainerComponent', () => {
  let component: EventPropertiesEditorContainerComponent;
  let fixture: ComponentFixture<EventPropertiesEditorContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EventPropertiesEditorContainerComponent, EventPropertiesEditorComponent, ZonedDatePipe, TruncatePipe],
      imports: [ReactiveFormsModule, SuiModule, StoreModule.forRoot({
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
      }), RouterTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventPropertiesEditorContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
