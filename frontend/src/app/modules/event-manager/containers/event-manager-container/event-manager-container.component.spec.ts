import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {EventManagerContainerComponent} from './event-manager-container.component';
import {SuiModule} from 'ng2-semantic'
import {TruncatePipe} from '../../../../pipes/truncate.pipe';
import {RouterTestingModule} from '@angular/router/testing';
import {combineReducers, StoreModule} from '@ngrx/store';
import {competitionPropertiesEntitiesInitialState, reducers} from '../../../../reducers/global-reducers';
import {EventManagerService} from '../../event-manager.service';
import {HttpClientModule} from '@angular/common/http';
import {eventManagerReducers, HeaderDescription} from '../../redux/event-manager-reducers';
import {initialAccountState} from '../../../account/flux/account.state';
import {periodsInitialState} from '../../redux/dashboard-reducers';
import {ZonedDatePipe} from '../../../../pipes/zoned-date-pipe';
import {InfoService} from '../../../../service/info.service';
import {RouterReducerState} from '@ngrx/router-store';
import {EventManagerMenuComponent} from './event-manager-menu.component';
import {DynamicHeaderDirective} from './dynamic.header.directive';
import {FlexibleColumnDirective} from './flexible.column.directive';

describe('EventManagerContainerComponent', () => {
  let component: EventManagerContainerComponent;
  let fixture: ComponentFixture<EventManagerContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EventManagerContainerComponent, TruncatePipe, ZonedDatePipe, EventManagerMenuComponent, DynamicHeaderDirective, FlexibleColumnDirective],
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
      }), HttpClientModule],
      providers: [EventManagerService, InfoService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventManagerContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
