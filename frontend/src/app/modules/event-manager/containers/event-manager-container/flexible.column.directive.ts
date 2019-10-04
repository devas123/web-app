import {Directive, HostBinding, Input} from '@angular/core';

@Directive({
  selector: '[app-flex-col]',
})
export class FlexibleColumnDirective {

  @HostBinding('class')
  _menuDisplayed: string;

  @Input()
  set menuDisplayed(value: boolean) {
    if (value) {
      this._menuDisplayed = 'ui twelve wide column';
    } else {
      this._menuDisplayed = 'ui sixteen wide column';
    }
  }

}
