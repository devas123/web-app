import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'wordbreak'
})
export class WordbreakPipe implements PipeTransform {
  transform(str: string): string {
    if (str) {
      return str.replace(/\//g, '/&shy;');
    } else {
      return '';
    }
  }
}
