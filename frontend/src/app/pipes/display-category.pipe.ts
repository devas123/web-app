import {Pipe, PipeTransform} from '@angular/core';
import {DateTime} from 'luxon';
import {Category} from '../commons/model/competition.model';
import {displayCategory} from '../modules/competition/redux/reducers';

@Pipe({
  name: 'displayCategory'
})
export class DisplayCategoryPipe implements PipeTransform {
  transform(value?: Category): string {
    if (value) {
      return displayCategory(value);
    } else {
      return '';
    }
  }
}

