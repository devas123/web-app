import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ItemInputDirective} from '../modules/account/components/account-info/item-input.directive';
import {GetWinnerPipe} from '../pipes/getwinner.pipe';
import {WordbreakPipe} from '../pipes/wordbreak.pipe';
import {TruncatePipe} from '../pipes/truncate.pipe';
import {GetNamePipe} from '../pipes/get-name.pipe';
import {ReversePipe} from '../pipes/ReversePipe';
import {EncodeIdPipe} from '../pipes/encode.id.pipe';
import {GroupCompListPipe} from '../pipes/complist.pipe';
import {ZonedDatePipe} from '../pipes/zoned-date-pipe';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [ItemInputDirective, WordbreakPipe, TruncatePipe, GetWinnerPipe, GetNamePipe, GroupCompListPipe, EncodeIdPipe, ReversePipe, ZonedDatePipe],
  exports: [ItemInputDirective, WordbreakPipe, TruncatePipe, GetWinnerPipe, GetNamePipe, GroupCompListPipe, EncodeIdPipe, ReversePipe, ZonedDatePipe]
})
export class CommonsModule {
}
