import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {FullAcademyInfo} from "@frontend-nx/protobuf";

@Component({
  selector: 'compmanager-frontend-academy-card',
  template: `
    <compmanager-frontend-common-card>
      <!--        <img class="right floated mini ui image" src="/images/avatar/large/elliot.jpg">-->
      <a class="ui header link">
        {{fullAcademyInfo?.name}}
      </a>
      <div class="meta">
        Location
      </div>
      <div class="description">
        <p>Coaches: </p>
        <div class="line" *ngFor="let coach of fullAcademyInfo.coaches">
          {{coach}}
        </div>
      </div>
      <div class="action_buttons" *ngIf="editMode">
        <div class="ui icon button" (click)="editClicked.next()">
          <i class="edit icon"></i>
        </div>
        <div class="ui icon button" (click)="deleteClicked.next()">
          <i class="trash icon"></i>
        </div>
      </div>
    </compmanager-frontend-common-card>`,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AcademyCardComponent {

  @Input()
  editMode: boolean;

  @Input()
  fullAcademyInfo: FullAcademyInfo;

  @Output()
  editClicked = new EventEmitter<void>();

  @Output()
  deleteClicked = new EventEmitter<void>();

  constructor() {
  }
}
