import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation} from '@angular/core';
import {Category, ScheduleRequirement} from '../../../../commons/model/competition.model';

@Component({
  selector: 'app-requirement-line',
  template: `
    <div class="item flex-container"
         [ngClass]="{'category-restriction': req.entryType === 'CATEGORIES',
             'pause': req.entryType === 'RELATIVE_PAUSE',
             'fight-restriction': req.entryType === 'RELATIVE_PAUSE',
              'selected': selected && canSelect}">
      <div cdkDragHandle class="handle"><i class="fas fa-arrows-alt"></i></div>
      <div>{{ getRequirementDisplay(req) }}</div>
      <div class="filler"></div>
      <div class="right-floated">
        <ng-container *ngIf="req.entryType !== 'RELATIVE_PAUSE' && canSelect">
          <a><i class="ui edit icon"></i></a>
          <a><i *ngIf="!selected" class="ui check icon" (click)="addToSelected()"></i></a>
          <a><i *ngIf="selected" class="ui minus icon" (click)="removeFromSelected()"></i></a>
        </ng-container>
        <a><i class="ui trash icon" (click)="removed.next()"></i></a>
      </div>
    </div>`,
  styleUrls: ['schedule-editor.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RequirementLineComponent {

  @Input()
  matId: string;

  @Input()
  req: ScheduleRequirement;

  @Input()
  selected: boolean;

  @Input()
  canSelect = true;

  @Input()
  requirementCategories: Category[];

  @Output()
  selectionChanged = new EventEmitter<boolean>();

  @Output()
  removed = new EventEmitter<void>();

  getRequirementDisplay(req: ScheduleRequirement) {
    if (req.entryType === 'CATEGORIES') {
      if (!this.requirementCategories) {
        return 'empty';
      }
      return this.requirementCategories.length === 1 ? (req.id.substring(0, 5)/*displayCategory(this._categoriesByRequirementId[req.id][0])*/) : this.requirementCategories.length + ' cat.';
    }
    if (req.entryType === 'FIGHTS') {
      return req.fightIds && req.fightIds.length + 'Fights';
    }
    if (req.entryType === 'RELATIVE_PAUSE') {
      return `Pause ${req.durationMinutes} min`;
    }
  }

  addToSelected() {
    this.selectionChanged.next(true);
  }

  removeFromSelected() {
    this.selectionChanged.next(false);
  }
}
