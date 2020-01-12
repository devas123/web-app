import {Pipe, PipeTransform} from '@angular/core';
import {Academy, Competitor} from '../commons/model/competition.model';
import {GetNamePipe} from './get-name.pipe';

const translitMatrix = {
  'А': 'A',
  'Б': 'B',
  'В': 'V',
  'Г': 'G',
  'Д': 'D',
  'Е': 'E',
  'Ё': 'E',
  'Ж': 'ZH',
  'З': 'Z',
  'И': 'I',
  'Й': 'I',
  'К': 'K',
  'Л': 'L',
  'М': 'M',
  'Н': 'N',
  'О': 'O',
  'П': 'P',
  'Р': 'R',
  'С': 'S',
  'Т': 'T',
  'У': 'U',
  'Ф': 'F',
  'Х': 'H',
  'Ц': 'TS',
  'Ч': 'CH',
  'Ш': 'SH',
  'Щ': 'SH',
  'Ъ': '',
  'Ы': 'Y',
  'Ь': '',
  'Э': 'E',
  'Ю': 'YU',
  'Я': 'YA'
};

@Pipe({
  name: 'getacademy'
})
export class GetAcademyPipe implements PipeTransform {
  transform(academy: Academy, maxLength: number = 15): string {
    if (academy && academy.name) {
      return GetNamePipe.fullOrShort(academy.name, maxLength);
    } else {
      return 'No academy';
    }
  }
}
