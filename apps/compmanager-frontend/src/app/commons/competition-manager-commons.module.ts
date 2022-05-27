import {NgModule} from '@angular/core';
import {ItemInputDirective} from '../modules/account/components/account-info/item-input.directive';
import {WordbreakPipe} from '../pipes/wordbreak.pipe';
import {TruncatePipe} from '../pipes/truncate.pipe';
import {GetNamePipe} from '../pipes/get-name.pipe';
import {ReversePipe} from '../pipes/ReversePipe';
import {EncodeIdPipe} from '../pipes/encode.id.pipe';
import {ZonedDatePipe} from '../pipes/zoned-date-pipe';
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

@NgModule({
  declarations: [ItemInputDirective, WordbreakPipe, TruncatePipe, GetNamePipe, EncodeIdPipe, ReversePipe, ZonedDatePipe, DisplayCategoryPipe, GetAcademyPipe, BracketComponent,
    BracketRoundComponent,
    ScheduleDisplayComponent,
    FlexibleColumnDirective,
    CategoryEditorComponent,
    FightersEditorComponent,
    DynamicHeaderDirective,
    FightersContainerComponent, BracketPartComponent, StageDisplayComponent,
    TagListComponent,
    CommonFightsEditorComponent,
    GroupDisplayComponent,
    MultipleGroupsDisplayComponent,
    ScheduleMatDisplayComponent,
    ScheduleEntryDisplayComponent,
    StageResultDisplayComponent],
  exports: [ItemInputDirective, BracketPartComponent, WordbreakPipe, TruncatePipe, GetNamePipe, EncodeIdPipe, ReversePipe, ZonedDatePipe, DisplayCategoryPipe, GetAcademyPipe, BracketComponent,
    BracketRoundComponent,
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
    MultipleGroupsDisplayComponent],
  imports: [CommonModule, SuiPopupModule, SuiCollapseModule, SuiAccordionModule, SuiPaginationModule, RouterModule, SuiCheckboxModule]
})
export class CompetitionManagerCommonsModule {
}
