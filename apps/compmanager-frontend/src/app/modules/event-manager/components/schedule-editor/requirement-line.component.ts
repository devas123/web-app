import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation} from '@angular/core';
import {CategoryDescriptor, ScheduleRequirement} from "@frontend-nx/protobuf";

@Component({
  selector: 'app-requirement-line',
  template: `
    <div class="item schedule_page flex-container"
         [ngClass]="{'category-restriction': req.entryType === 'SCHEDULE_REQUIREMENT_TYPE_CATEGORIES',
             'pause': req.entryType === 'SCHEDULE_REQUIREMENT_TYPE_RELATIVE_PAUSE',
             'fight-restriction': req.entryType === 'SCHEDULE_REQUIREMENT_TYPE_FIGHTS',
              'selected': selected && canSelect}" [style]="getRequirementStyle(req)">
      <div cdkDragHandle class="handle"><i class="fas fa-arrows-alt"></i></div>
      <div>{{ getRequirementDisplay(req) }}</div>
      <div class="filler"></div>
      <div class="right-floated">
        <ng-container *ngIf="req.entryType !== 'SCHEDULE_REQUIREMENT_TYPE_RELATIVE_PAUSE' && canSelect">
          <a><i *ngIf="!selected" class="ui check icon" (click)="addToSelected()"></i></a>
          <a><i *ngIf="selected" class="ui minus icon" (click)="removeFromSelected()"></i></a>
        </ng-container>
        <a *ngIf="canSplit"><i class="ui edit icon" (click)="edit.next()"></i></a>
        <a *ngIf="canDelete"><i class="ui trash icon" (click)="removed.next()"></i></a>
      </div>
    </div>`,
  styleUrls: ['schedule-editor.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RequirementLineComponent {

  @Input()
  canDelete = true;

  @Input()
  canSplit = false;

  @Input()
  matId: string;

  @Input()
  req: ScheduleRequirement;

  @Input()
  selected: boolean;

  @Input()
  canSelect = true;

  @Input()
  requirementCategories: CategoryDescriptor[];

  @Output()
  selectionChanged = new EventEmitter<boolean>();

  @Output()
  removed = new EventEmitter<void>();

  @Output()
  edit = new EventEmitter<void>();

  getRequirementDisplay(req: ScheduleRequirement) {
    if (req.name && req.name.length > 0) {
      return req.name;
    }
    if (req.entryType === 'SCHEDULE_REQUIREMENT_TYPE_CATEGORIES') {
      if (!this.requirementCategories) {
        return 'empty';
      }
      return this.requirementCategories.length + ' cat. ' + this.req.fightIds.length + ' f.';
    }
    if (req.entryType === 'SCHEDULE_REQUIREMENT_TYPE_FIGHTS') {
      return req.fightIds && req.fightIds.length + ' Fights';
    }
    if (req.entryType === 'SCHEDULE_REQUIREMENT_TYPE_FIXED_PAUSE') {
      return `Pause ${req.durationSeconds} min`;
    }
  }

  addToSelected() {
    this.selectionChanged.next(true);
  }

  removeFromSelected() {
    this.selectionChanged.next(false);
  }

  getRequirementStyle(req: ScheduleRequirement) {
    return (req.color && `border: 2px solid ${req.color}`) || '';
  }
}
