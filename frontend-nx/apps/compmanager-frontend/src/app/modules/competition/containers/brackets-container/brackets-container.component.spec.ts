import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {SuiCheckboxModule, SuiDimmerModule, SuiPopupModule, SuiSelectModule} from '@devas123/ng2-semantic';
import {GetNamePipe} from '../../../../pipes/get-name.pipe';
import {combineReducers, StoreModule} from '@ngrx/store';
import {competitionPropertiesEntitiesInitialState, reducers} from '../../../../reducers/global-reducers';
import {initialAccountState} from '../../../account/flux/account.state';
import {RouterTestingModule} from '@angular/router/testing';
import {TruncatePipe} from '../../../../pipes/truncate.pipe';
import {BracketComponent} from '../../../../components/brackets-editor/bracket/bracket.component';
import {BracketRoundComponent} from '../../../../components/brackets-editor/bracketround/bracketround.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {FightsEditorContainerComponent} from '../../../event-manager/containers/brackets-editor-container/fights-editor-container.component';
import {FightsEditorComponent} from '../../../event-manager/components/fights-editor/fights-editor.component';
import {eventManagerReducers} from '../../../event-manager/redux/event-manager-reducers';
import {competitionListReducer} from '../../redux/reducers';
import {periodsInitialState} from '../../../event-manager/redux/dashboard-reducers';
import {HeaderDescription} from '../../../../commons/model/competition.model';
import {BracketsContainerComponent} from './brackets-container.component';
import {StageDisplayComponent} from '../../../../components/stage-display/stage-display.component';
import {BracketPartComponent} from '../../../../components/brackets-editor/bracket/bracket-part.component';
import {GetAcademyPipe} from '../../../../pipes/get-academy.pipe';

describe('BracketsContainerComponent', () => {
  let component: BracketsContainerComponent;
  let fixture: ComponentFixture<BracketsContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BracketsContainerComponent, GetNamePipe, GetAcademyPipe, TruncatePipe, BracketComponent, FightsEditorContainerComponent,
        BracketRoundComponent, StageDisplayComponent, BracketPartComponent, BracketRoundComponent, FightsEditorComponent],
      imports: [SuiSelectModule, SuiCheckboxModule, SuiPopupModule, SuiDimmerModule, DragDropModule, RouterTestingModule, StoreModule.forRoot({
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
    fixture = TestBed.createComponent(BracketsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
