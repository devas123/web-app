import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {RegistrationInfoEditorContainerComponent} from './registration-info-editor-container.component';
import {
  RegistrationInfoEditorComponent
} from '../../components/registration-info-editor/registration-info-editor.component';
import {
  RegistrationGroupEditorComponent
} from '../../components/registration-group-editor/registration-group-editor.component';
import {TruncatePipe} from '../../../../pipes/truncate.pipe';
import {SuiDatepickerModule, SuiModalModule} from '@frontend-nx/ng2-semantic-ui';
import {ReactiveFormsModule} from '@angular/forms';
import {combineReducers, StoreModule} from '@ngrx/store';
import {competitionPropertiesEntitiesInitialState, reducers} from '../../../../reducers/global-reducers';
import {eventManagerReducers} from '../../redux/event-manager-reducers';
import {initialAccountState} from '../../../account/flux/account.state';
import {periodsInitialState} from '../../redux/dashboard-reducers';
import {RouterTestingModule} from '@angular/router/testing';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {DisplayCategoryPipe} from '../../../../pipes/display-category.pipe';
import {competitionListReducer} from '../../../competition/redux/reducers';
import {HeaderDescription} from '../../../../commons/model/competition.model';

describe('RegistrationInfoEditorContainerComponent', () => {
  let component: RegistrationInfoEditorContainerComponent;
  let fixture: ComponentFixture<RegistrationInfoEditorContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrationInfoEditorContainerComponent, RegistrationInfoEditorComponent, RegistrationGroupEditorComponent, TruncatePipe, DisplayCategoryPipe],
      imports: [        StoreModule.forRoot({
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
      }), SuiDatepickerModule, ReactiveFormsModule, RouterTestingModule, SuiModalModule, DragDropModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationInfoEditorContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
