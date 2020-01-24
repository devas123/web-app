import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CompetitionMainInfoComponent} from './competition-main-info.component';
import {CompetitionDescriptionComponent} from './competition-description/competition-description.component';
import {RouterTestingModule} from '@angular/router/testing';
import {ZonedDatePipe} from '../../../../pipes/zoned-date-pipe';
import {combineReducers, StoreModule} from '@ngrx/store';
import {competitionPropertiesEntitiesInitialState, reducers} from '../../../../reducers/global-reducers';
import {eventManagerReducers} from '../../../event-manager/redux/event-manager-reducers';
import {competitionListReducer} from '../../redux/reducers';
import {initialAccountState} from '../../../account/flux/account.state';
import {periodsInitialState} from '../../../event-manager/redux/dashboard-reducers';
import {HeaderDescription} from '../../../../commons/model/competition.model';

describe('CompetitionMainInfoComponent', () => {
  let component: CompetitionMainInfoComponent;
  let fixture: ComponentFixture<CompetitionMainInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompetitionMainInfoComponent, CompetitionDescriptionComponent, ZonedDatePipe ],
      imports: [RouterTestingModule,         StoreModule.forRoot({
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
    fixture = TestBed.createComponent(CompetitionMainInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
