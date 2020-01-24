import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryInfoContainerComponent } from './category-info-container.component';
import {CategoryEditorComponent} from '../../../../components/category-editor/category-editor.component';
import {SuiAccordionModule} from 'ng2-semantic';
import {combineReducers, StoreModule} from '@ngrx/store';
import {competitionPropertiesEntitiesInitialState, reducers} from '../../../../reducers/global-reducers';
import {eventManagerReducers} from '../../../event-manager/redux/event-manager-reducers';
import {competitionListReducer} from '../../redux/reducers';
import {initialAccountState} from '../../../account/flux/account.state';
import {periodsInitialState} from '../../../event-manager/redux/dashboard-reducers';
import {HeaderDescription} from '../../../../commons/model/competition.model';

describe('CategoryInfoContainerComponent', () => {
  let component: CategoryInfoContainerComponent;
  let fixture: ComponentFixture<CategoryInfoContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryInfoContainerComponent, CategoryEditorComponent ],
      imports: [SuiAccordionModule, StoreModule.forRoot({
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
    fixture = TestBed.createComponent(CategoryInfoContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
