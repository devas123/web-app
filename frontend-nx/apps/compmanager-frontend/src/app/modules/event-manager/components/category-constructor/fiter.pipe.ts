import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], searchTerm: string) {
    if (!items || !searchTerm) {
      return items;
    }

    return items.filter(
      item =>
        item
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) === true
    );
  }
}
