import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {BracketsEditorContainerComponent} from './brackets-editor-container.component';
import {SuiSelectModule} from 'ng2-semantic';
import {GetNamePipe} from '../../../../pipes/get-name.pipe';
import {combineReducers, StoreModule} from '@ngrx/store';
import {competitionPropertiesEntitiesInitialState, reducers} from '../../../../reducers';
import {eventManagerReducers} from '../../redux/event-manager-reducers';
import {initialAccountState} from '../../../account/flux/account.state';
import {periodsInitialState} from '../../redux/dashboard-reducers';
import {RouterTestingModule} from '@angular/router/testing';
import {TruncatePipe} from '../../../../pipes/truncate.pipe';

describe('BracketsEditorContainerComponent', () => {
  let component: BracketsEditorContainerComponent;
  let fixture: ComponentFixture<BracketsEditorContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BracketsEditorContainerComponent, GetNamePipe, TruncatePipe],
      imports: [SuiSelectModule, RouterTestingModule, StoreModule.forRoot({
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
    fixture = TestBed.createComponent(BracketsEditorContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
