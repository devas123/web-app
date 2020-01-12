import {NgModule} from '@angular/core';
import {ItemInputDirective} from '../modules/account/components/account-info/item-input.directive';
import {GetWinnerPipe} from '../pipes/getwinner.pipe';
import {WordbreakPipe} from '../pipes/wordbreak.pipe';
import {TruncatePipe} from '../pipes/truncate.pipe';
import {GetNamePipe} from '../pipes/get-name.pipe';
import {ReversePipe} from '../pipes/ReversePipe';
import {EncodeIdPipe} from '../pipes/encode.id.pipe';
import {ZonedDatePipe} from '../pipes/zoned-date-pipe';
import {DisplayCategoryPipe} from '../pipes/display-category.pipe';
import {GetAcademyPipe} from '../pipes/get-academy.pipe';

@NgModule({
  declarations: [ItemInputDirective, WordbreakPipe, TruncatePipe, GetWinnerPipe, GetNamePipe, EncodeIdPipe, ReversePipe, ZonedDatePipe, DisplayCategoryPipe, GetAcademyPipe],
  exports: [ItemInputDirective, WordbreakPipe, TruncatePipe, GetWinnerPipe, GetNamePipe, EncodeIdPipe, ReversePipe, ZonedDatePipe, DisplayCategoryPipe, GetAcademyPipe]
})
export class CommonsModule {
}
