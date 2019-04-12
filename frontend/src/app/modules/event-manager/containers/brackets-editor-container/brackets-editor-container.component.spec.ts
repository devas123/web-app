import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {BracketsEditorContainerComponent} from './brackets-editor-container.component';
import {SuiSelectModule} from 'ng2-semantic-ui';
import {BracketsEditorComponent} from '../../components/brackets-editor/brackets-editor.component';
import {NgDragDropModule} from '../../../dragdrop/ng-drag-drop.module';
import {BracketMatchComponent} from '../../components/brackets-editor/bracket-match/bracket-match.component';
import {GetNamePipe} from '../../../../pipes/get-name.pipe';
import {combineReducers, StoreModule} from '@ngrx/store';
import {competitionPropertiesEntitiesInitialState, reducers} from '../../../../reducers';
import {eventManagerReducers} from '../../redux/event-manager-reducers';
import {initialAccountState} from '../../../account/flux/account.state';
import {periodsInitialState} from '../../redux/dashboard-reducers';
import {RouterTestingModule} from '@angular/router/testing';

describe('BracketsEditorContainerComponent', () => {
  let component: BracketsEditorContainerComponent;
  let fixture: ComponentFixture<BracketsEditorContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BracketsEditorContainerComponent, BracketsEditorComponent, BracketMatchComponent, GetNamePipe],
      imports: [SuiSelectModule, RouterTestingModule, NgDragDropModule.forRoot(), StoreModule.forRoot({
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
    fixture = TestBed.createComponent(BracketsEditorContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
