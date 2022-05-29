import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from "@angular/core";
import {CategoryDescriptor, Competitor} from "@frontend-nx/protobuf";
import {AddFighterComponent} from "../../modules/event-manager/components/add-fighter/add-fighter.component";

@Component({
  selector: 'compmanager-frontend-fighter-card',
  template: `
    <compmanager-frontend-common-card>
      <a class="ui header link" (click)="sendHeaderClicked()">{{fighter?.firstName}} {{fighter?.lastName}}</a>
      <ng-container *ngIf="showPersonalData">
        <div class="description">Email: {{fighter?.email}}</div>
        <compmanager-frontend-date-field
          class="description"
          [date]="fighter?.birthDate"
          [showTime]="false"
          [text]="'Birth date '"
        ></compmanager-frontend-date-field>
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
    </compmanager-frontend-common-card>
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
  categories: CategoryDescriptor[]

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

  getCategoryName(categoryId: string): string {
    const cat = this.categories?.find(c => c.id === categoryId);
    if (cat) {
      return AddFighterComponent.displayCategory(cat);
    }
    return categoryId;
  }
}
