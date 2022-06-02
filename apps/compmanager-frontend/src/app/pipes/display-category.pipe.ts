import {Pipe, PipeTransform} from '@angular/core';
import {displayCategory} from '../commons/model/competition.model';
import {CategoryState} from "@frontend-nx/protobuf";

@Pipe({
  name: 'displayCategory'
})
export class DisplayCategoryPipe implements PipeTransform {
  transform(value?: CategoryState): string {
    return displayCategory(value?.category, 20);
  }
}

