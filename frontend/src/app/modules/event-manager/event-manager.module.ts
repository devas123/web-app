import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MyEventsComponent} from './containers/my-events/my-events.component';
import {CreateEventComponent} from './components/create-event/create-event.component';
import {MyEventsListComponent} from './components/my-events-list/my-events-list.component';
import {
  SuiAccordionModule,
  SuiCheckboxModule,
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
} from 'ng2-semantic';
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
import {FightersEditorComponent} from './components/fighters-editor/fighters-editor.component';
import {AddFighterComponent} from './components/add-fighter/add-fighter.component';
import {EventContainerComponent} from './containers/event-container/event-container.component';
import {FightersEditorContainerComponent} from './containers/fighters-editor-container/fighters-editor-container.component';
import {CategoryContainerComponent} from './containers/category-container/category-container.component';
import {CategorySummaryContainerComponent} from './containers/category-summary-container/category-summary-container.component';
import {CategorySummaryComponent} from './components/category-summary/category-summary.component';
import {EventManagerRouterModule} from './event-manager.router.module';
import {CommonsModule} from '../../commons/commons.module';
import {BracketsEditorContainerComponent} from './containers/brackets-editor-container/brackets-editor-container.component';
import {ScheduleEditorContainerComponent} from './containers/schedule-editor-container/schedule-editor-container.component';
import {ScheduleEditorComponent} from './components/schedule-editor/schedule-editor.component';
import {FighterProfileContainerComponent} from './containers/fighter-profile-container/fighter-profile-container.component';
import {FighterProfileComponent} from './components/fighter-profile/fighter-profile.component';
import {FightersContainerComponent} from './containers/fighters-container/fighters-container.component';
import {DashboardContainerComponent} from './containers/dashboard-container/dashboard-container.component';
import {MatsOverviewContainerComponent} from './containers/mats-overview-container/mats-overview-container.component';
import {MatsOverviewComponentComponent} from './components/mats-overview-component/mats-overview-component.component';
import {ScoreboardComponentComponent} from './components/scoreboard-component/scoreboard-component.component';
import {ScoreboardContainerComponent} from './containers/scoreboard-container/scoreboard-container.component';
import {DashboardComponentComponent} from './components/dashboard-component/dashboard-component.component';
import {MatManagementContainerComponent} from './containers/mat-management-container/mat-management-container.component';
import {HotkeyModule} from 'angular2-hotkeys';
import {PeriodManagementContainerComponent} from './containers/period-management-container/period-management-container.component';
import {PeriodsManagementContainerComponent} from './containers/periods-management-container/periods-management-container.component';
import {PeriodsManagementComponent} from './components/periods-management/periods-management.component';
import {DashboardEffects} from './redux/dashboard-effects';
import {FightDisplayComponent} from './components/mats-overview-component/fight-display.component';
import {MatDisplayComponent} from './components/mats-overview-component/mat-display.component';
import {RegistrationInfoEditorComponent} from './components/registration-info-editor/registration-info-editor.component';
import {RegistrationInfoEditorContainerComponent} from './containers/registration-info-editor-container/registration-info-editor-container.component';
import {RegistrationGroupEditorComponent} from './components/registration-group-editor/registration-group-editor.component';
import {EventManagerMenuComponent} from './containers/event-manager-container/event-manager-menu.component';
import {FlexibleColumnDirective} from './containers/event-manager-container/flexible.column.directive';
import {DynamicHeaderDirective} from './containers/event-manager-container/dynamic.header.directive';
import {AddPeriodFormComponent} from './components/registration-info-editor/add-period-form.component';
import {AddGroupFormComponent} from './components/registration-info-editor/add-group-form.component';
import {SelectCategoriesModalComponent} from './components/category-editor/select-categories-modal.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {AddSchedulePeriodFormComponent} from './containers/schedule-editor-container/add-shedule-period-form.component';
import {FightsEditorContainerComponent} from './containers/brackets-editor-container/fights-editor-container.component';
import {FightsEditorComponent} from './components/fights-editor/fights-editor.component';

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
    SuiCheckboxModule,
    SuiAccordionModule,
    EventManagerRouterModule,
    SuiPaginationModule,
    SuiMessageModule,
    CommonsModule,
    HotkeyModule,
    DragDropModule
  ],
  declarations: [
    FightsEditorComponent,
    FightsEditorContainerComponent,
    AddSchedulePeriodFormComponent,
    AddGroupFormComponent,
    AddPeriodFormComponent,
    SelectCategoriesModalComponent,
    DynamicHeaderDirective,
    FlexibleColumnDirective,
    EventManagerMenuComponent,
    RegistrationGroupEditorComponent,
    RegistrationInfoEditorContainerComponent,
    RegistrationInfoEditorComponent,
    MatDisplayComponent,
    FightDisplayComponent,
    PeriodManagementContainerComponent,
    PeriodsManagementContainerComponent,
    PeriodsManagementComponent,
    DashboardContainerComponent,
    MatsOverviewContainerComponent,
    MatsOverviewComponentComponent,
    ScoreboardComponentComponent,
    ScoreboardContainerComponent,
    DashboardComponentComponent,
    MatManagementContainerComponent,
    ScheduleEditorContainerComponent,
    ScheduleEditorComponent,
    MyEventsComponent,
    CreateEventComponent,
    MyEventsListComponent,
    CategoryEditorComponent,
    CategoryEditorContainerComponent,
    EventManagerContainerComponent,
    CreateCategoryComponent,
    EventPropertiesEditorContainerComponent,
    EventPropertiesEditorComponent,
    FightersEditorComponent,
    AddFighterComponent,
    EventContainerComponent,
    FightersEditorContainerComponent,
    CategoryContainerComponent,
    CategorySummaryContainerComponent,
    CategorySummaryComponent,
    BracketsEditorContainerComponent,
    FighterProfileContainerComponent,
    FighterProfileComponent,
    FightersContainerComponent],
  providers: [EventManagerService],
  entryComponents: [
    AddGroupFormComponent,
    AddPeriodFormComponent,
    SelectCategoriesModalComponent,
    AddSchedulePeriodFormComponent
  ]
})
export class EventManagerModule {
}
