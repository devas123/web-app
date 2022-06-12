import {ChangeDetectionStrategy, Component, HostBinding, Input} from "@angular/core";

@Component({
  selector: 'compmanager-frontend-date-range',
  template: `
    <span [class]="hostclass">{{prefix}}{{startDate | date:getFormat()}}{{getTimeZone()}} {{delimeter}} {{endDate | date:getFormat()}}{{getTimeZone()}}</span>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DateRangeComponent {

  _defaultFormatWithTime= 'dd/MM/yyyy hh:mm'
  _defaultFormatNoTime = 'dd/MM/yyyy'

  @Input()
  showTime: boolean = true;

  @Input()
  prefix: string

  @Input()
  delimeter: string

  @HostBinding('class')
  hostclass: string

  @Input()
  format: string = 'dd/MM/yyyy hh:mm';

  @Input()
  timeZone: string

  @Input()
  startDate: Date | string | number

  @Input()
  endDate: Date | string | number

  getFormat() {
    if (this.format) {
      return this.format;
    }
    return this.showTime ? this._defaultFormatWithTime : this._defaultFormatNoTime;
  }

  getTimeZone() {
    return !!this.timeZone ? ', ' + this.timeZone : ''
  }
}
