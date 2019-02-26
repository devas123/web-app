import {Pipe, PipeTransform} from '@angular/core';
import {DateTime} from 'luxon'

@Pipe({
  name: 'zdate'
})
export class ZonedDatePipe implements PipeTransform {
  transform(value?: string, showtime?: boolean): string {
    if (value) {
      const keepZone = DateTime.fromFormat(value, "yyyy-MM-dd'T'HH:mm:ss.SZZ[z]", {
        setZone: true
      });
      if (showtime) {
        return keepZone.toLocaleString(DateTime.DATETIME_SHORT);
      } else {
        return keepZone.toLocaleString(DateTime.DATE_SHORT);

      }
    }
    return ''
  }
}

