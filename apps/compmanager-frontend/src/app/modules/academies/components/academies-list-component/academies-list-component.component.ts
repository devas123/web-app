import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {FullAcademyInfo} from "@frontend-nx/protobuf";

@Component({
  selector: 'compmanager-frontend-academies-list-component',
  template: `
    <div class="ui cards">
      <compmanager-frontend-academy-card *ngFor="let academy of academies"
                                         [fullAcademyInfo]="academy"></compmanager-frontend-academy-card>
    </div>`,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AcademiesListComponentComponent {

  @Input()
  academies: FullAcademyInfo[]

  constructor() {
  }

}
