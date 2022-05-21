import {Pipe, PipeTransform} from '@angular/core';
import {Competitor} from "@frontend-nx/protobuf";

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
  name: 'getname'
})
export class GetNamePipe implements PipeTransform {
  public static transliterateStr(str: string) {
    if (!str) {
      return '';
    }
    let uc = str.toUpperCase().trim();
    for (const property in translitMatrix) {
      if (translitMatrix.hasOwnProperty(property)) {
        uc = uc.replace(new RegExp(property, 'g'), translitMatrix[property]);
      }
    }
    return uc;
  }

  public static fullOrShort(name: string, maxLength = 10) {
    const ml = Math.max(3, maxLength);
    if (name) {
      if (name.length > ml) {
        return name.slice(0, ml - 3) + '...';
      }  else {
        return name;
      }
    } else {
      return '';
    }
  }

  public static fullOrFirstLetter(name: string, truncate) {
    if (!truncate) {
      return name;
    }
    if (name) {
      return name.slice(0, 1) + '.';
    }
  }

  transform(comp: Competitor, trunkate?: boolean): string {
    if (comp) {
      const str = GetNamePipe.fullOrFirstLetter(GetNamePipe.transliterateStr(comp.firstName), trunkate);
      return str + ' ' + GetNamePipe.fullOrShort(GetNamePipe.transliterateStr(comp.lastName));
    } else {
      return '';
    }
  }
}
