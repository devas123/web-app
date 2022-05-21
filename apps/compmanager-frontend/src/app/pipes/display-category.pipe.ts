import {Pipe, PipeTransform} from '@angular/core';
import {displayCategory} from '../commons/model/competition.model';
import {CategoryDescriptor} from "@frontend-nx/protobuf";

@Pipe({
  name: 'displayCategory'
})
export class DisplayCategoryPipe implements PipeTransform {
  transform(value?: CategoryDescriptor): string {
    if (value) {
      return displayCategory(value, 20);
    } else {
      return '';
    }
  }
}

