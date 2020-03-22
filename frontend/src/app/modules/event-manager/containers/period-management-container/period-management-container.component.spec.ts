import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PeriodManagementContainerComponent} from './period-management-container.component';
import {RouterTestingModule} from '@angular/router/testing';
import {combineReducers, StoreModule} from '@ngrx/store';
import {competitionPropertiesEntitiesInitialState, reducers} from '../../../../reducers/global-reducers';
import {SuiModule} from '@devas123/ng2-semantic';
import {eventManagerReducers} from '../../redux/event-manager-reducers';
import {initialAccountState} from '../../../account/flux/account.state';
import {periodsInitialState} from '../../redux/dashboard-reducers';
import {competitionListReducer} from '../../../competition/redux/reducers';
import {HeaderDescription} from '../../../../commons/model/competition.model';

describe('PeriodManagementContainerComponent', () => {
  let component: PeriodManagementContainerComponent;
  let fixture: ComponentFixture<PeriodManagementContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PeriodManagementContainerComponent],
      imports: [SuiModule, RouterTestingModule,         StoreModule.forRoot({
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
      })]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    try {
      fixture = TestBed.createComponent(PeriodManagementContainerComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    } catch (e) {
      console.log(JSON.stringify(e));
      console.log(e);
      throw e;
    }
  });

  it('should create', () => {
    try {
      expect(component).toBeTruthy();
    } catch (e) {
      console.log(JSON.stringify(e));
      console.log(e);
      throw e;
    }
  });
});
