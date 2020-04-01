import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {BracketsEditorContainerComponent} from './brackets-editor-container.component';
import {SuiCheckboxModule, SuiDimmerModule, SuiPopupModule, SuiSelectModule} from '@devas123/ng2-semantic';
import {GetNamePipe} from '../../../../pipes/get-name.pipe';
import {combineReducers, StoreModule} from '@ngrx/store';
import {competitionPropertiesEntitiesInitialState, reducers} from '../../../../reducers/global-reducers';
import {eventManagerReducers} from '../../redux/event-manager-reducers';
import {initialAccountState} from '../../../account/flux/account.state';
import {periodsInitialState} from '../../redux/dashboard-reducers';
import {RouterTestingModule} from '@angular/router/testing';
import {TruncatePipe} from '../../../../pipes/truncate.pipe';
import {BracketComponent} from '../../../../components/brackets-editor/bracket/bracket.component';
import {FightsEditorContainerComponent} from './fights-editor-container.component';
import {BracketRoundComponent} from '../../../../components/brackets-editor/bracketround/bracketround.component';
import {FightsEditorComponent} from '../../components/fights-editor/fights-editor.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {competitionListReducer} from '../../../competition/redux/reducers';
import {HeaderDescription} from '../../../../commons/model/competition.model';
import {StageDisplayComponent} from '../../../../components/stage-display/stage-display.component';
import {GenerateBracketsFormComponent} from '../../components/generate-brackets-form/generate-brackets-form.component';
import {BracketPartComponent} from '../../../../components/brackets-editor/bracket/bracket-part.component';
import {GetAcademyPipe} from '../../../../pipes/get-academy.pipe';
import {ReactiveFormsModule} from '@angular/forms';

describe('BracketsEditorContainerComponent', () => {
  let component: BracketsEditorContainerComponent;
  let fixture: ComponentFixture<BracketsEditorContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BracketsEditorContainerComponent, GetNamePipe,
        TruncatePipe, BracketComponent, FightsEditorContainerComponent, BracketRoundComponent, FightsEditorComponent,
        StageDisplayComponent, GenerateBracketsFormComponent, BracketPartComponent, GetAcademyPipe],
      imports: [SuiSelectModule, SuiDimmerModule, SuiPopupModule, DragDropModule, RouterTestingModule, ReactiveFormsModule, SuiCheckboxModule, StoreModule.forRoot({
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
      })]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BracketsEditorContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
