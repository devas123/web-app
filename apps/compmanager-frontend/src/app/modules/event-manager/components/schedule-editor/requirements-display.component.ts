import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges
} from '@angular/core';
import {CdkDragDrop} from '@angular/cdk/drag-drop';
import {Dictionary} from '@ngrx/entity';
import {CategoryDescriptor, ScheduleRequirement} from "@frontend-nx/protobuf";

@Component({
  template: `
    <div class="margin-vertical list-container" *ngIf="_fixedPauses?.length > 0">
      <p>Fixed pauses.</p>
      <div class="item schedule_page flex-container small-line pause" *ngFor="let fp of _fixedPauses; last as isLast">
        <span>{{fp.startTime | zdate:true:null:true}}-{{fp.endTime | zdate:true:null:true}}</span>
        <div class="filler"></div>
        <a class="right-floated"><i class="ui trash icon" (click)="requirementRemoved.next(fp)"></i></a>
      </div>
    </div>
    <div class="empty-container list-container padded-vertical" cdkDropList
         (cdkDropListDropped)="onItemDropped($event, periodId)"
         *ngIf="requirementsEmpty">
      <span>Drop here to add requirement</span>
    </div>
    <div class="list-container" cdkDropList (cdkDropListDropped)="onItemDropped($event, periodId)"
         *ngIf="this._requirements?.length > 0">
      <div class="inner-list">
        <app-requirement-line cdkDrag (cdkDragStarted)="dragStart()"
                              (cdkDragEnded)="dragEnd()" [cdkDragData]="{fromPeriod: periodId, req: req, fromMatId: matId}"
                              [req]="req"
                              [matId]="matId"
                              [selected]="isSelected(req.id)"
                              [requirementCategories]="_categoriesByRequirementId[req.id]"
                              (removed)="requirementRemoved.next(req)"
                              (selectionChanged)="changeSelection($event, req.id)"
                              [canDelete]="req.entryType === 'SCHEDULE_REQUIREMENT_TYPE_FIGHTS' || req.entryType === 'SCHEDULE_REQUIREMENT_TYPE_CATEGORIES' || req.entryType === 'SCHEDULE_REQUIREMENT_TYPE_RELATIVE_PAUSE'"
                              [canSplit]="req.entryType === 'SCHEDULE_REQUIREMENT_TYPE_FIGHTS' || req.entryType === 'SCHEDULE_REQUIREMENT_TYPE_CATEGORIES'"
                              [canSelect]="canSelect(req)"
                              (edit)="this.splitIconCicked.next(req)"
                              *ngFor="let req of _requirements"></app-requirement-line>
      </div>
    </div>
  `,
  styleUrls: ['schedule-editor.component.scss'],
  selector: 'app-requirements-display',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RequirementsDisplayComponent implements  OnChanges {

  constructor(private el: ElementRef) {
  }


  @Input()
  set requirements(srs: ScheduleRequirement[]) {
    const val = srs || [];
    this._requirements = val.filter(v => v.entryType !== 'SCHEDULE_REQUIREMENT_TYPE_FIXED_PAUSE');
    this._fixedPauses = val.filter(v => v.entryType === 'SCHEDULE_REQUIREMENT_TYPE_FIXED_PAUSE');
  }

  @Input()
  set categories(val: CategoryDescriptor[]) {
    this._categories = val || [];
  }

  get requirementsEmpty() {
    return !this._requirements
      || this._requirements.filter(r => r.entryType !== 'SCHEDULE_REQUIREMENT_TYPE_RELATIVE_PAUSE').length <= 0;
  }

  @Input()
  timeZone: string;

  @Input()
  matId: string;

  @Output()
  splitIconCicked = new EventEmitter<ScheduleRequirement>();

  @Input()
  periodId: string;

  _requirements: ScheduleRequirement[];
  _fixedPauses: ScheduleRequirement[];

  @Input()
  allRequirements: ScheduleRequirement[];

  @Input()
  selectedReqs: Set<string> = new Set<string>();

  private _categories: CategoryDescriptor[];

  @Output()
  itemDropped = new EventEmitter<{ event: CdkDragDrop<any, any>, periodId: string }>();

  @Output()
  requirementRemoved = new EventEmitter<ScheduleRequirement>();

  @Output()
  requirementSelectionChanged = new EventEmitter<{ id: string, value: boolean }>();

  _categoriesByRequirementId: Dictionary<CategoryDescriptor[]>;

  dragStart() {
    this.el.nativeElement.dispatchEvent(
      new CustomEvent('app-drag-start', {
        bubbles: true
      })
    );
  }

  dragEnd() {
    this.el.nativeElement.dispatchEvent(
      new CustomEvent('app-drag-end', {
        bubbles: true
      })
    );
  }

  isSelected(id: string) {
    return this.selectedReqs.has(id);
  }

  canSelect(scheduleRequirement: ScheduleRequirement) {
    if (!scheduleRequirement || (scheduleRequirement.entryType !== 'SCHEDULE_REQUIREMENT_TYPE_FIGHTS' && scheduleRequirement.entryType !== 'SCHEDULE_REQUIREMENT_TYPE_CATEGORIES')) {
      return false;
    }
    return this.selectedReqs.size === 0 || this.allRequirements.find(r => r.id === this.selectedReqs.values().next().value).entryType === scheduleRequirement.entryType;
  }

  getRequirementCategories(categoryIds: string[]) {
    return categoryIds.map(cid => this._categories.find(c => c.id === cid)).filter(cat => !!cat);
  }

  onItemDropped(event: CdkDragDrop<any, any>, periodId: string) {
    this.itemDropped.next({event, periodId});
  }

  ngOnChanges(changes: SimpleChanges): void {
    this._categoriesByRequirementId = {};
    if (this._categories && this._requirements) {
      this._requirements.forEach(req => this._categoriesByRequirementId[req.id] = this.getRequirementCategories(req.categoryIds));
    }
  }

  changeSelection(value: boolean, id: string) {
    this.requirementSelectionChanged.next({id, value});
  }
}
