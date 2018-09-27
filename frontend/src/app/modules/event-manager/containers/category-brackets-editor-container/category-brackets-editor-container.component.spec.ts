import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CategoryBracketsEditorContainerComponent} from './category-brackets-editor-container.component';
import {BracketsEditorComponent} from '../../components/brackets-editor/brackets-editor.component';
import {NgDragDropModule} from '../../../dragdrop/ng-drag-drop.module';
import {BracketMatchComponent} from '../../components/brackets-editor/bracket-match/bracket-match.component';
import {GetNamePipe} from '../../../../pipes/get-name.pipe';
import {combineReducers, StoreModule} from '@ngrx/store';
import {competitionPropertiesEntitiesInitialState, reducers} from '../../../../reducers';
import {eventManagerReducers} from '../../redux/event-manager-reducers';
import {initialAccountState} from '../../../account/flux/account.state';
import {periodsInitialState} from '../../redux/dashboard-reducers';

describe('CategoryBracketsEditorContainerComponent', () => {
  let component: CategoryBracketsEditorContainerComponent;
  let fixture: ComponentFixture<CategoryBracketsEditorContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CategoryBracketsEditorContainerComponent, BracketsEditorComponent, BracketMatchComponent, GetNamePipe],
      imports: [NgDragDropModule.forRoot(), StoreModule.forRoot({
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
    fixture = TestBed.createComponent(CategoryBracketsEditorContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
