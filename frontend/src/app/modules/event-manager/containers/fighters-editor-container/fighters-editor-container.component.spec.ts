import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {FightersEditorContainerComponent} from './fighters-editor-container.component';
import {AddFighterComponent} from '../../components/add-fighter/add-fighter.component';
import {FightersEditorComponent} from '../../components/fighters-editor/fighters-editor.component';
import {SuiModule} from 'ng2-semantic'
import {ReactiveFormsModule} from '@angular/forms';
import {combineReducers, StoreModule} from '@ngrx/store';
import {competitionPropertiesEntitiesInitialState, reducers} from '../../../../reducers';
import {RouterTestingModule} from '@angular/router/testing';
import {eventManagerReducers, HeaderDescription} from '../../redux/event-manager-reducers';
import {initialAccountState} from '../../../account/flux/account.state';
import {periodsInitialState} from '../../redux/dashboard-reducers';
import {ZonedDatePipe} from '../../../../pipes/zoned-date-pipe';
import {RouterReducerState} from '@ngrx/router-store';

describe('FightersEditorContainerComponent', () => {
  let component: FightersEditorContainerComponent;
  let fixture: ComponentFixture<FightersEditorContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FightersEditorContainerComponent, AddFighterComponent, FightersEditorComponent, ZonedDatePipe],
      imports: [SuiModule, ReactiveFormsModule, StoreModule.forRoot({
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
