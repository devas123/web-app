import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {
  transform(str: string, maxlength?: number): string {
    const length: number = maxlength || 10;
    if (str) {
      let result = str;
      if (str.length > length + 3) {
        result = str.substr(0, length) + '...';
      }
      return result;
    } else {
      return '';
    }
  }
}

