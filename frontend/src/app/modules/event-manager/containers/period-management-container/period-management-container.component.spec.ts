import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PeriodManagementContainerComponent} from './period-management-container.component';
import {RouterTestingModule} from '@angular/router/testing';
import {combineReducers, StoreModule} from '@ngrx/store';
import {competitionPropertiesEntitiesInitialState, reducers} from '../../../../reducers';
import {SuiModule} from 'ng2-semantic'
import {eventManagerReducers, HeaderDescription} from '../../redux/event-manager-reducers';
import {initialAccountState} from '../../../account/flux/account.state';
import {periodsInitialState} from '../../redux/dashboard-reducers';
import {RouterReducerState} from '@ngrx/router-store';

describe('PeriodManagementContainerComponent', () => {
  let component: PeriodManagementContainerComponent;
  let fixture: ComponentFixture<PeriodManagementContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PeriodManagementContainerComponent],
      imports: [SuiModule, RouterTestingModule, StoreModule.forRoot({
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
      console.log(JSON.stringify(e))
      console.log(e)
      throw e
    }
  });

  it('should create', () => {
    try {
      expect(component).toBeTruthy();
    } catch (e) {
      console.log(JSON.stringify(e))
      console.log(e)
      throw e
    }
  });
});
