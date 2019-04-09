import {Pipe, PipeTransform} from '@angular/core';
import {DateTime} from 'luxon';

type dateOrStr = Date | string;

@Pipe({
  name: 'zdate'
})
export class ZonedDatePipe implements PipeTransform {
  transform(value?: dateOrStr, showtime?: boolean, zone?: string): string {
    const z = zone || 'UTC';
    if (value) {
      const keepZone = value instanceof Date ? DateTime.fromMillis(value.getTime()) : DateTime.fromISO(value, {zone: z});
      if (showtime) {
        return keepZone.toLocaleString(DateTime.DATETIME_SHORT) + (zone ? `, ${zone}` : '');
      } else {
        return keepZone.toLocaleString(DateTime.DATE_SHORT) + (zone ? `, ${zone}` : '');
      }
    }
    return '';
  }
}
