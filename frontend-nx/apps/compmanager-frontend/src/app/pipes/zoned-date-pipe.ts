import {Pipe, PipeTransform} from '@angular/core';
import {format, zonedTimeToUtc} from 'date-fns-tz';

type DateOrStr = Date | string;

@Pipe({
  name: 'zdate'
})
export class ZonedDatePipe implements PipeTransform {
  transform(value?: DateOrStr, showtime?: boolean, zone?: string, showDate: boolean = true): string {
    const z = zone || 'UTC';
    if (value) {
      const keepZone = value instanceof Date ? value as Date : zonedTimeToUtc(value, z);
      if (showtime) {
        if (showDate) {
          return format(keepZone, 'dd.MM.yyyy\'T\'HH:mm:ss') + (zone ? `, ${zone}` : '');
        } else {
          return format(keepZone, 'HH:mm:ss') + (zone ? `, ${zone}` : '');
        }
      } else {
        return format(keepZone, 'dd.MM.yyyy') + (zone ? `, ${zone}` : '');
      }
    }
    return '';
  }
}

