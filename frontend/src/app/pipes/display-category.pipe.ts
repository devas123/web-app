import {Pipe, PipeTransform} from '@angular/core';
import {Category, displayCategory} from '../commons/model/competition.model';

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

