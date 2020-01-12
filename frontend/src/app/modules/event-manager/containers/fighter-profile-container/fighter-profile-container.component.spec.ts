import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {FighterProfileContainerComponent} from './fighter-profile-container.component';
import {FighterProfileComponent} from '../../components/fighter-profile/fighter-profile.component';
import {ReactiveFormsModule} from '@angular/forms';
import {SuiModule} from 'ng2-semantic'
import {combineReducers, StoreModule} from '@ngrx/store';
import {competitionPropertiesEntitiesInitialState, reducers} from '../../../../reducers/global-reducers';
import {RouterTestingModule} from '@angular/router/testing';
import {eventManagerReducers, HeaderDescription} from '../../redux/event-manager-reducers';
import {initialAccountState} from '../../../account/flux/account.state';
import {periodsInitialState} from '../../redux/dashboard-reducers';
import {ZonedDatePipe} from '../../../../pipes/zoned-date-pipe';
import {RouterReducerState} from '@ngrx/router-store';

describe('FighterProfileContainerComponent', () => {
  let component: FighterProfileContainerComponent;
  let fixture: ComponentFixture<FighterProfileContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FighterProfileContainerComponent, FighterProfileComponent, ZonedDatePipe],
      imports: [ReactiveFormsModule, SuiModule, StoreModule.forRoot({
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
    fixture = TestBed.createComponent(FighterProfileContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
