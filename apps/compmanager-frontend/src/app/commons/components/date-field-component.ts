import {ChangeDetectionStrategy, Component, HostBinding, Input} from "@angular/core";

@Component({
  selector: 'compmanager-frontend-date-field',
  template: `
    <div [class]="hostClass">{{text}}{{date | date:finalFormat}}{{!!timeZone ? ', ' + timeZone : ''}}</div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DateFieldComponent {

  _defaultFormatWithTime= 'dd/MM/yyyy hh:mm'
  _defaultFormatNoTime = 'dd/MM/yyyy'

  @Input()
  showTime: boolean;

  @Input()
  text: string

  @HostBinding('class')
  hostClass: string

  @Input()
  format: string;

  @Input()
  timeZone: string

  @Input()
  date: Date | string | number

  get finalFormat() {
    if (this.format) {
      return this.format;
    }
    return (this.showTime === true) ? this._defaultFormatWithTime : this._defaultFormatNoTime;
  }
}
