import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CompetitionInfoComponent} from './competition-info.component';
import {CompetitionMainInfoComponent} from '../../components/competition-main-info/competition-main-info.component';
import {CompetitionDivisionsComponent} from '../../components/competition-main-info/competition-divisions/competition-divisions.component';
import {CompetitionDescriptionComponent} from '../../components/competition-main-info/competition-description/competition-description.component';
import {combineReducers, StoreModule} from '@ngrx/store';
import {competitionPropertiesEntitiesInitialState, reducers} from '../../../../reducers';
import {eventManagerReducers} from '../../../event-manager/redux/event-manager-reducers';
import {initialAccountState} from '../../../account/flux/account.state';
import {periodsInitialState} from '../../../event-manager/redux/dashboard-reducers';

describe('CompetitionInfoComponent', () => {
  let component: CompetitionInfoComponent;
  let fixture: ComponentFixture<CompetitionInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompetitionInfoComponent, CompetitionMainInfoComponent, CompetitionDivisionsComponent, CompetitionDescriptionComponent ],
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
      })]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompetitionInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
