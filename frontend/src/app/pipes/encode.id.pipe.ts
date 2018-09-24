import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'encodeId'
})
export class EncodeIdPipe implements PipeTransform {
  transform(id: string): string {
    if (id) {
      const str = id.replace(/\W+/g, '_');
      return 'id' + str;
    } else {
      return '';
    }
  }
}
