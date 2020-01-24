import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {FightersEditorComponent} from '../../../../components/fighters-editor/fighters-editor.component';
import {SuiModule} from 'ng2-semantic';
import {ReactiveFormsModule} from '@angular/forms';
import {combineReducers, StoreModule} from '@ngrx/store';
import {competitionPropertiesEntitiesInitialState, reducers} from '../../../../reducers/global-reducers';
import {RouterTestingModule} from '@angular/router/testing';
import {initialAccountState} from '../../../account/flux/account.state';
import {ZonedDatePipe} from '../../../../pipes/zoned-date-pipe';
import {FightersDisplayContainerComponent} from './fighters-display-container.component';
import {AddFighterComponent} from '../../../event-manager/components/add-fighter/add-fighter.component';
import {eventManagerReducers} from '../../../event-manager/redux/event-manager-reducers';
import {competitionListReducer} from '../../redux/reducers';
import {periodsInitialState} from '../../../event-manager/redux/dashboard-reducers';
import {HeaderDescription} from '../../../../commons/model/competition.model';

describe('FightersDisplayContainerComponent', () => {
  let component: FightersDisplayContainerComponent;
  let fixture: ComponentFixture<FightersDisplayContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FightersDisplayContainerComponent, AddFighterComponent, FightersEditorComponent, ZonedDatePipe],
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
    fixture = TestBed.createComponent(FightersDisplayContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
