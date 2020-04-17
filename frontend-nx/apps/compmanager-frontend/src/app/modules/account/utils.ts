import {Dictionary} from '@ngrx/entity';
import * as uuidv4 from 'uuid/v4';


export function  b64toBlob(b64Data, contentType, sliceSize?) {
  contentType = contentType || '';
  sliceSize = sliceSize || 512;
  const byteCharacters = atob(b64Data);
  const byteArrays = [];
  for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
    const slice = byteCharacters.slice(offset, offset + sliceSize);
    const byteNumbers = new Array(slice.length);
    for (let i = 0; i < slice.length; i++) {
      byteNumbers[i] = slice.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers);

    byteArrays.push(byteArray);
  }
  return new Blob(byteArrays, {type: contentType});
}

export const collectingReducer = <T>(previousValue: T[], currentValue: T[]) => [...previousValue, ...currentValue];
export const uniqueFilter = <T>(e: T, i: number, a: T[]) => a.indexOf(e) === i;

export const getKeyForEntry = <T>(dic: Dictionary<T[]>, entry: T) => Object.keys(dic).find(key => dic[key].includes(entry));
export const defaultSelectionColor = '#3c5d96';
export const defaultActiveSelectionColor = '#0e5375';
export const defaultUncompletableColor = '#754c0e';

export const generateUuid = () => uuidv4().toString();
