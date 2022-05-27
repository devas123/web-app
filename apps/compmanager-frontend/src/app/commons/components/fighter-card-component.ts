import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from "@angular/core";
import {Competitor} from "@frontend-nx/protobuf";

@Component({
  selector: 'compmanager-frontend-fighter-card',
  template: `
    <div class="ui basic segment customline">
      <a class="ui header link" (click)="sendHeaderClicked()">{{fighter?.firstName}} {{fighter?.lastName}}</a>
      <ng-container *ngIf="showPersonalData">
        <div class="description">Email: {{fighter?.email}}</div>
        <div class="description">Birth date: {{fighter?.birthDate | zdate:false}}</div>
      </ng-container>
      <div class="description">Academy: {{fighter?.academy?.name}}</div>
      <div *ngFor="let cat of fighter?.categories" class="description">Category: {{getCategoryName(cat)}}</div>
      <div class="description" *ngIf="showRegistrationStatus">Registration status: {{fighter?.registrationStatus}}</div>
      <div class="action_buttons" *ngIf="editMode">
        <div class="ui icon button" (click)="sendEditClicked()">
          <i class="edit icon"></i>
        </div>
        <div class="ui icon button" (click)="sendDeleteClicked()">
          <i class="trash icon"></i>
        </div>
      </div>
    </div>
  `,
  styles: [`
    a.ui.header.link {
      cursor: pointer;
    }`],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FighterCardComponent {
  @Input()
  fighter: Competitor

  @Input()
  getCategoryName: (category: string) => string

  @Input()
  showPersonalData: boolean

  @Input()
  showRegistrationStatus: boolean

  @Input()
  editMode: boolean

  @Output()
  headerClicked = new EventEmitter<Competitor>();

  @Output()
  deleteClicked = new EventEmitter<Competitor>();

  @Output()
  editClicked = new EventEmitter<Competitor>();

  sendHeaderClicked() {
    this.headerClicked.next(this.fighter);
  }
  sendDeleteClicked() {
    this.deleteClicked.next(this.fighter);
  }
  sendEditClicked() {
    this.editClicked.next(this.fighter);
  }
}
