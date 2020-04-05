import {Pipe, PipeTransform} from '@angular/core';
import {DateTime} from 'luxon';

type dateOrStr = Date | string;

@Pipe({
  name: 'zdate'
})
export class ZonedDatePipe implements PipeTransform {
  transform(value?: dateOrStr, showtime?: boolean, zone?: string, showDate: boolean = true): string {
    const z = zone || 'UTC';
    if (value) {
      const keepZone = value instanceof Date ? DateTime.fromMillis(value.getTime()) : DateTime.fromISO(value, {zone: z});
      if (showtime) {
        if (showDate) {
          return keepZone.toLocaleString(DateTime.DATETIME_MED) + (zone ? `, ${zone}` : '');
        } else {
          return keepZone.toLocaleString(DateTime.TIME_24_SIMPLE) + (zone ? `, ${zone}` : '');
        }
      } else {
        return keepZone.toLocaleString(DateTime.DATE_MED) + (zone ? `, ${zone}` : '');
      }
    }
    return '';
  }
}

