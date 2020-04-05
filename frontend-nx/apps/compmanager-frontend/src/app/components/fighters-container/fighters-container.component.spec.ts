import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {FightersContainerComponent} from './fighters-container.component';
import {RouterTestingModule} from '@angular/router/testing';
import {combineReducers, StoreModule} from '@ngrx/store';
import {competitionListReducer} from '../../modules/competition/redux/reducers';
import {competitionPropertiesEntitiesInitialState, reducers} from '../../reducers/global-reducers';
import {eventManagerReducers} from '../../modules/event-manager/redux/event-manager-reducers';
import {initialAccountState} from '../../modules/account/flux/account.state';
import {periodsInitialState} from '../../modules/event-manager/redux/dashboard-reducers';
import {HeaderDescription} from '../../commons/model/competition.model';

describe('FightersContainerComponent', () => {
  let component: FightersContainerComponent;
  let fixture: ComponentFixture<FightersContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FightersContainerComponent],
      imports: [ RouterTestingModule,         StoreModule.forRoot({
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
      }) ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FightersContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
