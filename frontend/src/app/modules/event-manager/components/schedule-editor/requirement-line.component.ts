import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation} from '@angular/core';
import {Category, ScheduleRequirement} from '../../../../commons/model/competition.model';

@Component({
  selector: 'app-requirement-line',
  template: `
    <div class="item schedule_page flex-container"
         [ngClass]="{'category-restriction': req.entryType === 'CATEGORIES',
             'pause': req.entryType === 'RELATIVE_PAUSE',
             'fight-restriction': req.entryType === 'FIGHTS',
              'selected': selected && canSelect}">
      <div cdkDragHandle class="handle"><i class="fas fa-arrows-alt"></i></div>
      <div>{{ getRequirementDisplay(req) }}</div>
      <div class="filler"></div>
      <div class="right-floated">
        <ng-container *ngIf="req.entryType !== 'RELATIVE_PAUSE' && canSelect">
          <a><i *ngIf="!selected" class="ui check icon" (click)="addToSelected()"></i></a>
          <a><i *ngIf="selected" class="ui minus icon" (click)="removeFromSelected()"></i></a>
        </ng-container>
        <a *ngIf="canSplit"><i class="fas fa-project-diagram" (click)="split.next()"></i></a>
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
  requirementCategories: Category[];

  @Output()
  selectionChanged = new EventEmitter<boolean>();

  @Output()
  removed = new EventEmitter<void>();

  @Output()
  split = new EventEmitter<void>();

  getRequirementDisplay(req: ScheduleRequirement) {
    if (req.entryType === 'CATEGORIES') {
      if (!this.requirementCategories) {
        return 'empty';
      }
      return this.requirementCategories.length + ' cat. ' + this.req.fightIds.length + ' f.';
    }
    if (req.entryType === 'FIGHTS') {
      return req.fightIds && req.fightIds.length + ' Fights';
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
