import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoreboardContainerComponent } from './scoreboard-container.component';
import {FightDisplayComponent} from '../../components/mats-overview-component/fight-display.component';
import {ScoreboardComponentComponent} from '../../components/scoreboard-component/scoreboard-component.component';
import {GetNamePipe} from '../../../../pipes/get-name.pipe';
import {TruncatePipe} from '../../../../pipes/truncate.pipe';
import {combineReducers, StoreModule} from '@ngrx/store';
import {competitionPropertiesEntitiesInitialState, reducers} from '../../../../reducers';
import {RouterTestingModule} from '@angular/router/testing';
import {HotkeyModule} from 'angular2-hotkeys';
import {eventManagerReducers} from '../../redux/event-manager-reducers';
import {initialAccountState} from '../../../account/flux/account.state';
import {periodsInitialState} from '../../redux/dashboard-reducers';

describe('ScoreboardContainerComponent', () => {
  let component: ScoreboardContainerComponent;
  let fixture: ComponentFixture<ScoreboardContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScoreboardContainerComponent, FightDisplayComponent, ScoreboardComponentComponent, GetNamePipe, TruncatePipe],
      imports: [StoreModule.forRoot({
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
      }), RouterTestingModule, HotkeyModule.forRoot()]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoreboardContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
