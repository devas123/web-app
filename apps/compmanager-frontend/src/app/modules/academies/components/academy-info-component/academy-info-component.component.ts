import {Component, Input} from '@angular/core';
import {FullAcademyInfo} from "@frontend-nx/protobuf";

@Component({
  selector: 'compmanager-frontend-academy-info-component',
  template: `<p>Academy info!</p>
  <p>{{ getAcademy() }}</p>`,
  styles: [],
})
export class AcademyInfoComponentComponent  {

  getAcademy() {
    return JSON.stringify(this.academy)
  }

  @Input()
  academy: FullAcademyInfo;

  constructor() {}
}
