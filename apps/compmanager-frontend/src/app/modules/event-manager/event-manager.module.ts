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
} from '@frontend-nx/ng2-semantic-ui';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {EventManagerEffects} from './redux/event-manager-effects';
import {EVENT_MANAGER_REDUCERS} from './redux/event-manager-reducers';
import {EventManagerService} from './event-manager.service';
import {ReactiveFormsModule} from '@angular/forms';
import {
  CategoryEditorContainerComponent
} from './containers/category-editor-container/category-editor-container.component';
import {EventManagerContainerComponent} from './containers/event-manager-container/event-manager-container.component';
import {CreateCategoryComponent} from './components/create-category/create-category.component';
import {
  EventPropertiesEditorContainerComponent
} from './containers/event-properties-editor-container/event-properties-editor-container.component';
import {EventPropertiesEditorComponent} from './components/event-properties-editor/event-properties-editor.component';
import {AddFighterComponent} from './components/add-fighter/add-fighter.component';
import {EventContainerComponent} from './containers/event-container/event-container.component';
import {
  FightersEditorContainerComponent
} from './containers/fighters-editor-container/fighters-editor-container.component';
import {CategoryContainerComponent} from './containers/category-container/category-container.component';
import {
  CategorySummaryContainerComponent
} from './containers/category-summary-container/category-summary-container.component';
import {CategorySummaryComponent} from './components/category-summary/category-summary.component';
import {EventManagerRouterModule} from './event-manager.router.module';
import {CompetitionManagerCommonsModule} from '../../commons/competition-manager-commons.module';
import {
  BracketsEditorContainerComponent
} from './containers/brackets-editor-container/brackets-editor-container.component';
import {
  ScheduleEditorContainerComponent
} from './containers/schedule-editor-container/schedule-editor-container.component';
import {ScheduleEditorComponent} from './components/schedule-editor/schedule-editor.component';
import {
  FighterProfileContainerComponent
} from './containers/fighter-profile-container/fighter-profile-container.component';
import {FighterProfileComponent} from './components/fighter-profile/fighter-profile.component';
import {DashboardContainerComponent} from './containers/dashboard-container/dashboard-container.component';
import {MatsOverviewContainerComponent} from './containers/mats-overview-container/mats-overview-container.component';
import {MatsOverviewComponentComponent} from './components/mats-overview-component/mats-overview-component.component';
import {ScoreboardComponentComponent} from './components/scoreboard-component/scoreboard-component.component';
import {ScoreboardContainerComponent} from './containers/scoreboard-container/scoreboard-container.component';
import {DashboardComponentComponent} from './components/dashboard-component/dashboard-component.component';
import {
  MatManagementContainerComponent
} from './containers/mat-management-container/mat-management-container.component';
import {
  PeriodManagementContainerComponent
} from './containers/period-management-container/period-management-container.component';
import {
  PeriodsManagementContainerComponent
} from './containers/periods-management-container/periods-management-container.component';
import {PeriodsManagementComponent} from './components/periods-management/periods-management.component';
import {DashboardEffects} from './redux/dashboard-effects';
import {FightDisplayComponent} from './components/mats-overview-component/fight-display.component';
import {MatDisplayComponent} from './components/mats-overview-component/mat-display.component';
import {
  RegistrationInfoEditorComponent
} from './components/registration-info-editor/registration-info-editor.component';
import {
  RegistrationInfoEditorContainerComponent
} from './containers/registration-info-editor-container/registration-info-editor-container.component';
import {
  RegistrationGroupEditorComponent
} from './components/registration-group-editor/registration-group-editor.component';
import {
  AddRegistrationPeriodFormComponent
} from './components/registration-info-editor/add-registration-period-form.component';
import {AddGroupFormComponent} from './components/registration-info-editor/add-group-form.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {AddSchedulePeriodFormComponent} from './containers/schedule-editor-container/add-shedule-period-form.component';
import {FightsEditorContainerComponent} from './containers/brackets-editor-container/fights-editor-container.component';
import {FightsEditorComponent} from './components/fights-editor/fights-editor.component';
import {
  CompetitionInfoEditorContainerComponent
} from './containers/competition-info-editor-container/competition-info-editor-container.component';
import {
  CompetitionInfoTemplateEditorComponent
} from './components/competition-info-template-editor/competition-info-template-editor.component';
import {GenerateBracketsFormComponent} from './components/generate-brackets-form/generate-brackets-form.component';
import {NumberControlsComponent} from './components/scoreboard-component/number-controls.component';
import {TimerComponent} from './components/scoreboard-component/timer-component';
import {TimerControlsComponent} from './components/scoreboard-component/timer-controls.component';
import {
  AddFightResultOptionFormComponent
} from './components/generate-brackets-form/add-fight-result-option-form.component';
import {AddInputSelectorFormComponent} from './components/generate-brackets-form/add-input-selector-form.component';
import {RequirementsDisplayComponent} from './components/schedule-editor/requirements-display.component';
import {CategoriesListComponent} from './components/schedule-editor/categories-list.component';
import {AddSchedulePauseFormComponent} from './components/schedule-editor/add-pause-form.component';
import {RequirementLineComponent} from './components/schedule-editor/requirement-line.component';
import {SplitCategoryFormComponent} from './components/schedule-editor/split-category-modal.component';
import {EditRequirementModalComponent} from './components/schedule-editor/edit-requirement-modal.component';
import {ColorChromeModule} from 'ngx-color/chrome';
import {GroupsEditorComponent} from './components/fights-editor/groups-editor.component';
import {CategoryConstructorComponent} from './components/category-constructor/category-constructor.component';
import {RestrictionItem} from './components/category-constructor/restriction-item';
import {
  AddCategoryRestrictionFormComponent
} from './components/category-constructor/add-category-restriction-form.component';
import {OptionComponent} from './components/category-constructor/option.component';
import {FilterPipe} from './components/category-constructor/fiter.pipe';
import {OverlayModule} from '@angular/cdk/overlay';
import {AppAutocompleteDirective} from './components/category-constructor/autocomplete.directive';
import {
  AddCompetitorContainerComponent
} from "./containers/add-competitor-container/add-competitor-container.component";
import {CreateEventContainerComponent} from "./containers/create-event-container/create-event-container.component";
import {GroupDescriptorFormComponent} from "./components/generate-brackets-form/group-descriptor-form.component";
import {RestrictionHeaderComponent} from "./components/category-constructor/restriction-header.component";
import {PictureUploadService} from "../../service/picture.upload.service";

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
    CompetitionManagerCommonsModule,
    DragDropModule,
    OverlayModule,
    ColorChromeModule
  ],
  declarations: [
    AddCompetitorContainerComponent,
    FilterPipe,
    AddCategoryRestrictionFormComponent,
    RestrictionItem,
    CategoryConstructorComponent,
    GroupsEditorComponent,
    RequirementLineComponent,
    AddSchedulePauseFormComponent,
    CategoriesListComponent,
    RequirementsDisplayComponent,
    FightsEditorComponent,
    OptionComponent,
    FightsEditorContainerComponent,
    AddSchedulePeriodFormComponent,
    AddFightResultOptionFormComponent,
    AppAutocompleteDirective,
    AddGroupFormComponent,
    AddRegistrationPeriodFormComponent,
    RegistrationGroupEditorComponent,
    RegistrationInfoEditorContainerComponent,
    RegistrationInfoEditorComponent,
    MatDisplayComponent,
    FightDisplayComponent,
    RestrictionHeaderComponent,
    GroupDescriptorFormComponent,
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
    CategoryEditorContainerComponent,
    EventManagerContainerComponent,
    CreateCategoryComponent,
    EventPropertiesEditorContainerComponent,
    EventPropertiesEditorComponent,
    AddFighterComponent,
    EventContainerComponent,
    FightersEditorContainerComponent,
    CategoryContainerComponent,
    CategorySummaryContainerComponent,
    CategorySummaryComponent,
    BracketsEditorContainerComponent,
    FighterProfileContainerComponent,
    CompetitionInfoEditorContainerComponent,
    CompetitionInfoTemplateEditorComponent,
    GenerateBracketsFormComponent,
    NumberControlsComponent,
    TimerComponent,
    TimerControlsComponent,
    FighterProfileComponent,
    SplitCategoryFormComponent,
    EditRequirementModalComponent,
    AddInputSelectorFormComponent,
    CreateEventContainerComponent,
  ],
  providers: [EventManagerService]
})
export class EventManagerModule {
}
