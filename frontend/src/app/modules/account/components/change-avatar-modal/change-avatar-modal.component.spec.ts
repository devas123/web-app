import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ChangeAvatarModalComponent} from './change-avatar-modal.component';
import {AvatarModule} from 'ngx-avatar';
import {combineReducers, StoreModule} from '@ngrx/store';
import {competitionPropertiesEntitiesInitialState, reducers} from '../../../../reducers';
import {eventManagerReducers} from '../../../event-manager/redux/event-manager-reducers';
import {initialAccountState} from '../../flux/account.state';
import {periodsInitialState} from '../../../event-manager/redux/dashboard-reducers';


describe('ChangeAvatarModalComponent', () => {
  let component: ChangeAvatarModalComponent;
  let fixture: ComponentFixture<ChangeAvatarModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ChangeAvatarModalComponent],
      imports: [AvatarModule, StoreModule.forRoot({
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
      })],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeAvatarModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
