import {Pipe, PipeTransform} from '@angular/core';
import {GetNamePipe} from './get-name.pipe';
import {Academy} from "@frontend-nx/protobuf";
@Pipe({
  name: 'getacademy'
})
export class GetAcademyPipe implements PipeTransform {
  transform(academy: Academy, maxLength: number = 15): string {
    if (academy && academy.name) {
      return GetNamePipe.fullOrShort(academy.name, maxLength);
    } else {
      return '';
    }
  }
}
