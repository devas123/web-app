import {Directive, HostBinding, Input} from '@angular/core';

@Directive({
  selector: '[app-flex-col]',
})
export class FlexibleColumnDirective {

  @HostBinding('class')
  _class: string;

  @Input()
  set shrink(value: boolean) {
    if (value) {
      this._class = 'ui twelve wide column';
    } else {
      this._class = 'ui sixteen wide column';
    }
  }

}
