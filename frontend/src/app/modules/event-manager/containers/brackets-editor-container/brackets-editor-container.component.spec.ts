import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {BracketsEditorContainerComponent} from './brackets-editor-container.component';
import {SuiDimmerModule, SuiSelectModule} from 'ng2-semantic';
import {GetNamePipe} from '../../../../pipes/get-name.pipe';
import {combineReducers, StoreModule} from '@ngrx/store';
import {competitionPropertiesEntitiesInitialState, reducers} from '../../../../reducers';
import {eventManagerReducers, HeaderDescription} from '../../redux/event-manager-reducers';
import {initialAccountState} from '../../../account/flux/account.state';
import {periodsInitialState} from '../../redux/dashboard-reducers';
import {RouterTestingModule} from '@angular/router/testing';
import {TruncatePipe} from '../../../../pipes/truncate.pipe';
import {RouterReducerState} from '@ngrx/router-store';
import {BracketComponent} from '../../../../components/brackets-editor/bracket/bracket.component';
import {FightsEditorContainerComponent} from './fights-editor-container.component';
import {BracketRoundComponent} from '../../../../components/brackets-editor/bracketround/bracketround.component';
import {FightsEditorComponent} from '../../components/fights-editor/fights-editor.component';
import {DragDropModule} from '@angular/cdk/drag-drop';

describe('BracketsEditorContainerComponent', () => {
  let component: BracketsEditorContainerComponent;
  let fixture: ComponentFixture<BracketsEditorContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BracketsEditorContainerComponent, GetNamePipe, TruncatePipe, BracketComponent, FightsEditorContainerComponent, BracketRoundComponent, FightsEditorComponent],
      imports: [SuiSelectModule, SuiDimmerModule, DragDropModule, RouterTestingModule, StoreModule.forRoot({
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
