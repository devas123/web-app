import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {FightersEditorContainerComponent} from './fighters-editor-container.component';
import {AddFighterComponent} from '../../components/add-fighter/add-fighter.component';
import {FightersEditorComponent} from '../../../../components/fighters-editor/fighters-editor.component';
import {SuiModule} from '@frontend-nx/ng2-semantic-ui';
import {ReactiveFormsModule} from '@angular/forms';
import {combineReducers, StoreModule} from '@ngrx/store';
import {competitionPropertiesEntitiesInitialState, reducers} from '../../../../reducers/global-reducers';
import {RouterTestingModule} from '@angular/router/testing';
import {eventManagerReducers} from '../../redux/event-manager-reducers';
import {initialAccountState} from '../../../account/flux/account.state';
import {periodsInitialState} from '../../redux/dashboard-reducers';
import {competitionListReducer} from '../../../competition/redux/reducers';
import {HeaderDescription} from '../../../../commons/model/competition.model';

describe('FightersEditorContainerComponent', () => {
  let component: FightersEditorContainerComponent;
  let fixture: ComponentFixture<FightersEditorContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FightersEditorContainerComponent, AddFighterComponent, FightersEditorComponent],
      imports: [SuiModule, ReactiveFormsModule, StoreModule.forRoot({
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
    fixture = TestBed.createComponent(FightersEditorContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
