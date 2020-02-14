import {Pipe, PipeTransform} from '@angular/core';
import {Category} from '../commons/model/competition.model';

@Pipe({
  name: 'displayCategory'
})
export class DisplayCategoryPipe implements PipeTransform {
  transform(value?: Category): string {
    if (value) {
      return 'temp';
    } else {
      return '';
    }
  }
}

