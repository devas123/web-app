import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {SuiDimmerModule, SuiSelectModule} from 'ng2-semantic';
import {GetNamePipe} from '../../../../pipes/get-name.pipe';
import {combineReducers, StoreModule} from '@ngrx/store';
import {competitionPropertiesEntitiesInitialState, reducers} from '../../../../reducers/global-reducers';
import {initialAccountState} from '../../../account/flux/account.state';
import {RouterTestingModule} from '@angular/router/testing';
import {TruncatePipe} from '../../../../pipes/truncate.pipe';
import {RouterReducerState} from '@ngrx/router-store';
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

describe('BracketsEditorContainerComponent', () => {
  let component: BracketsContainerComponent;
  let fixture: ComponentFixture<BracketsContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BracketsContainerComponent, GetNamePipe, TruncatePipe, BracketComponent, FightsEditorContainerComponent, BracketRoundComponent, FightsEditorComponent],
      imports: [SuiSelectModule, SuiDimmerModule, DragDropModule, RouterTestingModule, StoreModule.forRoot({
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
          },
          router: {} as RouterReducerState<any>
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
