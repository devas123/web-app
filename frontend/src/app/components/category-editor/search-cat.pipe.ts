import {Pipe, PipeTransform} from '@angular/core';
import {Category} from "../../commons/model/competition.model";

@Pipe({
  name: 'searchCat'
})
export class SearchCatPipe implements PipeTransform {

  transform(items: Category[], term: string): any {
    if (!term || term == '') {
      return items;
    }
    return items.filter(item => item.name.indexOf(term) !== -1);
  }

}
