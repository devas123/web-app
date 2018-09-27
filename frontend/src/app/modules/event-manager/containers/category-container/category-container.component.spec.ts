import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CategoryContainerComponent} from './category-container.component';
import {RouterTestingModule} from '@angular/router/testing';
import {combineReducers, StoreModule} from '@ngrx/store';
import {competitionPropertiesEntitiesInitialState, reducers} from '../../../../reducers';
import {eventManagerReducers} from '../../redux/event-manager-reducers';
import {initialAccountState} from '../../../account/flux/account.state';
import {periodsInitialState} from '../../redux/dashboard-reducers';

describe('CategoryContainerComponent', () => {
  let component: CategoryContainerComponent;
  let fixture: ComponentFixture<CategoryContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CategoryContainerComponent],
      imports: [RouterTestingModule, StoreModule.forRoot({
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
    fixture = TestBed.createComponent(CategoryContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
