import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {FullAcademyInfo} from "@frontend-nx/protobuf";

@Component({
  selector: 'compmanager-frontend-academy-card',
  template: `
    <div class="ui card" *ngIf="!!fullAcademyInfo">
      <div class="content">
<!--        <img class="right floated mini ui image" src="/images/avatar/large/elliot.jpg">-->
        <div class="header">
          {{fullAcademyInfo?.name}}
        </div>
        <div class="meta">
          Location
        </div>
        <div class="description">
          <p>Coaches: </p>
          <div class="line" *ngFor="let coach of fullAcademyInfo.coaches">
            {{coach}}
          </div>
        </div>
      </div>
    </div>`,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AcademyCardComponent {

  @Input()
  fullAcademyInfo: FullAcademyInfo

  constructor() {
  }
}
