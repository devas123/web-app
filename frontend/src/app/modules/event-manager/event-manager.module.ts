import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MyEventsComponent} from './containers/my-events/my-events.component';
import {CreateEventComponent} from './components/create-event/create-event.component';
import {MyEventsListComponent} from './components/my-events-list/my-events-list.component';
import {
  SuiCollapseModule,
  SuiDatepickerModule,
  SuiDimmerModule,
  SuiDropdownModule,
  SuiMessageModule,
  SuiModalModule,
  SuiPaginationModule,
  SuiPopupModule,
  SuiSelectModule,
  SuiSidebarModule,
  SuiTabsModule
} from 'ng2-semantic-ui';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {EventManagerEffects} from './redux/event-manager-effects';
import {EVENT_MANAGER_REDUCERS} from './redux/event-manager-reducers';
import {EventManagerService} from './event-manager.service';
import {ReactiveFormsModule} from '@angular/forms';
import {CategoryEditorComponent} from './components/category-editor/category-editor.component';
import {CategoryEditorContainerComponent} from './containers/category-editor-container/category-editor-container.component';
import {EventManagerContainerComponent} from './containers/event-manager-container/event-manager-container.component';
import {CreateCategoryComponent} from './components/create-category/create-category.component';
import {EventPropertiesEditorContainerComponent} from './containers/event-properties-editor-container/event-properties-editor-container.component';
import {EventPropertiesEditorComponent} from './components/event-properties-editor/event-properties-editor.component';
import {CategoryFightersEditorContainerComponent} from './containers/category-fighters-editor-container/category-fighters-editor-container.component';
import {FightersEditorComponent} from './components/fighters-editor/fighters-editor.component';
import {AddFighterComponent} from './components/add-fighter/add-fighter.component';
import {EventContainerComponent} from './containers/event-container/event-container.component';
import {FightersEditorContainerComponent} from './containers/fighters-editor-container/fighters-editor-container.component';
import {CategoryContainerComponent} from './containers/category-container/category-container.component';
import {CategorySummaryContainerComponent} from './containers/category-summary-container/category-summary-container.component';
import {CategorySummaryComponent} from './components/category-summary/category-summary.component';
import {EventManagerRouterModule} from './event-manager.router.module';
import {CommonsModule} from '../../commons/commons.module';
import {BracketsEditorComponent} from './components/brackets-editor/brackets-editor.component';
import {BracketsEditorContainerComponent} from './containers/brackets-editor-container/brackets-editor-container.component';
import {BracketMatchComponent} from './components/brackets-editor/bracket-match/bracket-match.component';
import {CategoryBracketsEditorContainerComponent} from './containers/category-brackets-editor-container/category-brackets-editor-container.component';
import {ScheduleEditorContainerComponent} from './containers/schedule-editor-container/schedule-editor-container.component';
import {ScheduleEditorComponent} from './components/schedule-editor/schedule-editor.component';
import {NgDragDropModule} from '../dragdrop/ng-drag-drop.module';
import {FighterProfileContainerComponent} from './containers/fighter-profile-container/fighter-profile-container.component';
import {FighterProfileComponent} from './components/fighter-profile/fighter-profile.component';
import {FightersContainerComponent} from './containers/fighters-container/fighters-container.component';
import {DashboardContainerComponent} from './containers/dashboard-container/dashboard-container.component';
import {MatsOverviewContainerComponent} from './containers/mats-overview-container/mats-overview-container.component';
import {MatsOverviewComponentComponent} from './components/mats-overview-component/mats-overview-component.component';
import {ScoreboardComponentComponent} from './components/scoreboard-component/scoreboard-component.component';
import {ScoreboardContainerComponent} from './containers/scoreboard-container/scoreboard-container.component';
import {DashboardComponentComponent} from './components/dashboard-component/dashboard-component.component';
import {MatManagementComponent} from './components/mat-management/mat-management.component';
import {MatManagementContainerComponent} from './containers/mat-management-container/mat-management-container.component';
import {HotkeyModule} from 'angular2-hotkeys';
import {PeriodManagementContainerComponent} from './containers/period-management-container/period-management-container.component';
import {PeriodsManagementContainerComponent} from './containers/periods-management-container/periods-management-container.component';
import {PeriodsManagementComponent} from './components/periods-management/periods-management.component';
import {ScheduleDisplayComponent} from './components/schedule-editor/schedule-display.component';
import {DashboardEffects} from './redux/dashboard-effects';
import {FightDisplayComponent} from './components/mats-overview-component/fight-display.component';
import {MatDisplayComponent} from './components/mats-overview-component/mat-display.component';
import {MatDetailsComponent} from './components/mat-details/mat-details.component';
import {MatDetailsContainerComponent} from './containers/mat-details-container/mat-details-container.component';
import {RegistrationInfoEditorComponent} from './components/registration-info-editor/registration-info-editor.component';
import {RegistrationInfoEditorContainerComponent} from './containers/registration-info-editor-container/registration-info-editor-container.component';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('eventManagerState', EVENT_MANAGER_REDUCERS),
    EffectsModule.forFeature([EventManagerEffects, DashboardEffects]),
    ReactiveFormsModule,
    SuiDimmerModule,
    SuiDropdownModule,
    SuiDatepickerModule,
    SuiSelectModule,
    SuiTabsModule,
    SuiModalModule,
    SuiPopupModule,
    SuiSidebarModule,
    SuiCollapseModule,
    EventManagerRouterModule,
    SuiPaginationModule,
    SuiMessageModule,
    NgDragDropModule,
    CommonsModule,
    HotkeyModule
  ],
  declarations: [
    RegistrationInfoEditorContainerComponent,
    RegistrationInfoEditorComponent,
    MatDetailsComponent,
    MatDetailsContainerComponent,
    MatDisplayComponent,
    FightDisplayComponent,
    ScheduleDisplayComponent,
    PeriodManagementContainerComponent,
    PeriodsManagementContainerComponent,
    PeriodsManagementComponent,
    DashboardContainerComponent,
    MatsOverviewContainerComponent,
    MatsOverviewComponentComponent,
    ScoreboardComponentComponent,
    ScoreboardContainerComponent,
    DashboardComponentComponent,
    MatManagementComponent,
    MatManagementContainerComponent,
    CategoryBracketsEditorContainerComponent,
    ScheduleEditorContainerComponent,
    ScheduleEditorComponent,
    MyEventsComponent,
    BracketMatchComponent,
    CreateEventComponent,
    MyEventsListComponent,
    CategoryEditorComponent,
    CategoryEditorContainerComponent,
    EventManagerContainerComponent,
    CreateCategoryComponent,
    EventPropertiesEditorContainerComponent,
    EventPropertiesEditorComponent,
    CategoryFightersEditorContainerComponent,
    FightersEditorComponent,
    AddFighterComponent,
    EventContainerComponent,
    FightersEditorContainerComponent,
    CategoryContainerComponent,
    CategorySummaryContainerComponent,
    CategorySummaryComponent,
    BracketsEditorComponent,
    BracketsEditorContainerComponent,
    FighterProfileContainerComponent,
    FighterProfileComponent,
    FightersContainerComponent],
  providers: [EventManagerService]
})
export class EventManagerModule {
}
