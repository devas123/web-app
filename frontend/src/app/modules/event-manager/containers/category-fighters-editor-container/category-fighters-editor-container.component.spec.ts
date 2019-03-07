import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CategoryFightersEditorContainerComponent} from './category-fighters-editor-container.component';
import {AddFighterComponent} from '../../components/add-fighter/add-fighter.component';
import {FightersEditorComponent} from '../../components/fighters-editor/fighters-editor.component';
import {SuiModule} from 'ng2-semantic-ui'
import {ReactiveFormsModule} from '@angular/forms';
import {combineReducers, StoreModule} from '@ngrx/store';
import {competitionPropertiesEntitiesInitialState, reducers} from '../../../../reducers';
import {RouterTestingModule} from '@angular/router/testing';
import {eventManagerReducers} from '../../redux/event-manager-reducers';
import {initialAccountState} from '../../../account/flux/account.state';
import {periodsInitialState} from '../../redux/dashboard-reducers';
import {ZonedDatePipe} from '../../../../pipes/zoned-date-pipe';


describe('CategoryFightersEditorContainerComponent', () => {
  let component: CategoryFightersEditorContainerComponent;
  let fixture: ComponentFixture<CategoryFightersEditorContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CategoryFightersEditorContainerComponent, AddFighterComponent, FightersEditorComponent, ZonedDatePipe],
      imports: [SuiModule, ReactiveFormsModule, StoreModule.forRoot({
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
      }), RouterTestingModule]})
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryFightersEditorContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
