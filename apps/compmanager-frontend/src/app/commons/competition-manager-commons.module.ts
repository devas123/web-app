import {NgModule} from '@angular/core';
import {ItemInputDirective} from './directives/item-input.directive';
import {WordbreakPipe} from '../pipes/wordbreak.pipe';
import {TruncatePipe} from '../pipes/truncate.pipe';
import {GetNamePipe} from '../pipes/get-name.pipe';
import {ReversePipe} from '../pipes/ReversePipe';
import {EncodeIdPipe} from '../pipes/encode.id.pipe';
import {DisplayCategoryPipe} from '../pipes/display-category.pipe';
import {GetAcademyPipe} from '../pipes/get-academy.pipe';
import {BracketComponent} from '../components/brackets-editor/bracket/bracket.component';
import {BracketRoundComponent} from '../components/brackets-editor/bracketround/bracketround.component';
import {ScheduleDisplayComponent} from '../components/schedule-display/schedule-display.component';
import {CommonModule} from '@angular/common';
import {
  SuiAccordionModule,
  SuiCheckboxModule,
  SuiCollapseModule,
  SuiMessageModule,
  SuiPaginationModule,
  SuiPopupModule
} from '@frontend-nx/ng2-semantic-ui';
import {CategoryEditorComponent} from '../components/category-editor/category-editor.component';
import {RouterModule} from '@angular/router';
import {FightersEditorComponent} from '../components/fighters-editor/fighters-editor.component';
import {FightersContainerComponent} from '../components/fighters-container/fighters-container.component';
import {BracketPartComponent} from '../components/brackets-editor/bracket/bracket-part.component';
import {StageDisplayComponent} from '../components/stage-display/stage-display.component';
import {TagListComponent} from '../components/tag-list/tag-list.component';
import {CommonFightsEditorComponent} from '../components/brackets-editor/common-fights-editor.component';
import {GroupDisplayComponent} from '../components/brackets-editor/group-display/group-display.component';
import {MultipleGroupsDisplayComponent} from '../components/brackets-editor/group-display/multiple-groups-display';
import {ScheduleEntryDisplayComponent} from '../components/schedule-display/schedule-entry-display.component';
import {ScheduleMatDisplayComponent} from '../components/schedule-display/schedule-mat-display.component';
import {StageResultDisplayComponent} from '../components/stage-result-display/stage-result-display.component';
import {FlexibleColumnDirective} from "./directives/flexible.column.directive";
import {DynamicHeaderDirective} from "./directives/dynamic.header.directive";
import {EventManagerMenuComponent} from "./components/event-manager-menu.component";
import {FighterCardComponent} from "./components/fighter-card-component";
import {CommonContainerWithPaginationComponent} from "./components/custom-container-with-pagination-component";
import {CommonCardComponent} from "./components/common-card-component";
import {CommonPaginationComponent} from "./components/common-pagination-component";
import {FormSimpleFieldComponent} from "./components/form-simple-field-component";
import {ReactiveFormsModule} from "@angular/forms";
import {FormErrorMessageComponent} from "./components/form-error-message-component";
import {FormFieldComponent} from "./components/form-field-component";
import {SubmitButtonComponent} from "./components/submit-button.component";
import {ButtonComponent} from "./components/button-component";
import {DateFieldComponent} from "./components/date-field-component";
import {DateRangeComponent} from "./components/date-range-component";
import {FormErrorListComponent} from "./components/form-error-list-component";
import {EditableFieldComponent} from "./components/editable-field/editable-field.component";
import {LeftFloatedTextInputComponent} from "./components/editable-field/left-floated-text-input.component";
import {LeftFloatedValueDisplayComponent} from "./components/editable-field/left-floated-value-display.component";
import {LeftFloatedContainerComponent} from "./components/editable-field/left-floated-container.component";
import {
  TransparentRightFloatedContainerComponent
} from "./components/editable-field/transparent-right-floated-container.component";

const importsExports = [
  CommonContainerWithPaginationComponent,
  BracketPartComponent,
  WordbreakPipe,
  TruncatePipe,
  GetNamePipe,
  EncodeIdPipe,
  ReversePipe,
  DisplayCategoryPipe,
  GetAcademyPipe,
  BracketComponent,
  BracketRoundComponent,
  FighterCardComponent,
  EventManagerMenuComponent,
  ScheduleMatDisplayComponent,
  ScheduleEntryDisplayComponent,
  ScheduleDisplayComponent,
  CategoryEditorComponent,
  FightersEditorComponent,
  FightersContainerComponent,
  DynamicHeaderDirective,
  StageDisplayComponent,
  TagListComponent,
  CommonFightsEditorComponent,
  GroupDisplayComponent,
  StageResultDisplayComponent,
  FlexibleColumnDirective,
  CommonCardComponent,
  CommonPaginationComponent,
  FormSimpleFieldComponent,
  FormErrorMessageComponent,
  FormErrorListComponent,
  FormFieldComponent,
  SubmitButtonComponent,
  ButtonComponent,
  DateFieldComponent,
  DateRangeComponent,
  ItemInputDirective,
  EditableFieldComponent,
  LeftFloatedTextInputComponent,
  LeftFloatedValueDisplayComponent,
  LeftFloatedContainerComponent,
  TransparentRightFloatedContainerComponent,
  MultipleGroupsDisplayComponent];

@NgModule({
  declarations: importsExports,
  exports: importsExports,
  imports: [CommonModule, SuiPopupModule, SuiCollapseModule, SuiAccordionModule, SuiPaginationModule, RouterModule, SuiCheckboxModule, ReactiveFormsModule, SuiMessageModule]
})
export class CompetitionManagerCommonsModule {
}
