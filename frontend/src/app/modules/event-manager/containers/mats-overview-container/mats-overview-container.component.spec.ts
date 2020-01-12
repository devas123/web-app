import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatsOverviewContainerComponent } from './mats-overview-container.component';
import {MatsOverviewComponentComponent} from '../../components/mats-overview-component/mats-overview-component.component';
import {MatDisplayComponent} from '../../components/mats-overview-component/mat-display.component';
import {FightDisplayComponent} from '../../components/mats-overview-component/fight-display.component';
import {RouterTestingModule} from '@angular/router/testing';
import {combineReducers, StoreModule} from '@ngrx/store';
import {competitionPropertiesEntitiesInitialState, reducers} from '../../../../reducers/global-reducers';
import {eventManagerReducers, HeaderDescription} from '../../redux/event-manager-reducers';
import {initialAccountState} from '../../../account/flux/account.state';
import {periodsInitialState} from '../../redux/dashboard-reducers';
import {RouterReducerState} from '@ngrx/router-store';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {ZonedDatePipe} from '../../../../pipes/zoned-date-pipe';

describe('MatsOverviewContainerComponent', () => {
  let component: MatsOverviewContainerComponent;
  let fixture: ComponentFixture<MatsOverviewContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatsOverviewContainerComponent, MatsOverviewComponentComponent, MatDisplayComponent, FightDisplayComponent, ZonedDatePipe ],
      imports: [RouterTestingModule, DragDropModule, StoreModule.forRoot({
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
    fixture = TestBed.createComponent(MatsOverviewContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
