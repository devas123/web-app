import {Directive, HostBinding} from '@angular/core';

@Directive({
  selector: '[compmanagerFrontendSimpleButton]'
})
export class SimpleButtonDirective {

  @HostBinding('class')
  _class: string;

  constructor() {
    this._class = "ui button"
  }

}
