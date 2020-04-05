import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetitionInfoEditorContainerComponent } from './competition-info-editor-container.component';
import {CompetitionInfoContactsEditorComponent} from '../../components/competition-info-contacts-editor/competition-info-contacts-editor.component';
import {CompetitionInfoTemplateEditorComponent} from '../../components/competition-info-template-editor/competition-info-template-editor.component';
import {combineReducers, StoreModule} from '@ngrx/store';
import {competitionPropertiesEntitiesInitialState, reducers} from '../../../../reducers/global-reducers';
import {eventManagerReducers} from '../../redux/event-manager-reducers';
import {competitionListReducer} from '../../../competition/redux/reducers';
import {initialAccountState} from '../../../account/flux/account.state';
import {periodsInitialState} from '../../redux/dashboard-reducers';
import {HeaderDescription} from '../../../../commons/model/competition.model';
import {RouterTestingModule} from '@angular/router/testing';

describe('CompetitionInfoEditorContainerComponent', () => {
  let component: CompetitionInfoEditorContainerComponent;
  let fixture: ComponentFixture<CompetitionInfoEditorContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompetitionInfoEditorContainerComponent, CompetitionInfoContactsEditorComponent, CompetitionInfoTemplateEditorComponent ],
      imports: [
        StoreModule.forRoot({
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
        }),
        RouterTestingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompetitionInfoEditorContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
