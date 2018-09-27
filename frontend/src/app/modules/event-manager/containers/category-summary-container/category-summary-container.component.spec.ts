import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CategorySummaryContainerComponent} from './category-summary-container.component';
import {CategorySummaryComponent} from '../../components/category-summary/category-summary.component';
import {combineReducers, StoreModule} from '@ngrx/store';
import {competitionPropertiesEntitiesInitialState, reducers} from '../../../../reducers';
import {RouterTestingModule} from '@angular/router/testing';
import {eventManagerReducers} from '../../redux/event-manager-reducers';
import {initialAccountState} from '../../../account/flux/account.state';
import {periodsInitialState} from '../../redux/dashboard-reducers';

describe('CategorySummaryContainerComponent', () => {
  let component: CategorySummaryContainerComponent;
  let fixture: ComponentFixture<CategorySummaryContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CategorySummaryContainerComponent, CategorySummaryComponent],
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
      }), RouterTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategorySummaryContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
