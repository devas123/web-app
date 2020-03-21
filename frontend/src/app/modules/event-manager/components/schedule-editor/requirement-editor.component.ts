import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation} from '@angular/core';
import {Category, ScheduleRequirement} from '../../../../commons/model/competition.model';
import {Dictionary} from '@ngrx/entity';
import {CdkDragDrop} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-requirement-editor',
  exportAs: 'requirement-editor',
  template: `
    <div class="ui basic segment" *ngIf="_visible">
      <div class="ui fluid card">
        <div class="content">
          <div class="header">Requirement editor</div>
          <div class="list-container" [ngClass]="{'empty-container bordered': !requirementCategories || requirementCategories.length === 0}"
               cdkDropList [cdkDropListData]="requirementCategories"
               (cdkDropListDropped)="itemDropped.next($event)">
            <div class="inner-list padded-vertical">
              <ng-container *ngFor="let cat of requirementCategories">
                <div *ngIf="cat" class="item flex-container" cdkDrag
                     [cdkDragData]="{fromPeriod: req.periodId, cat: cat, fromRequirement: req.id}">
                  <div cdkDragHandle class="handle"><i class="fas fa-arrows-alt"></i></div>
                  <div class="content">
                    <div class="header">{{cat | displayCategory}}</div>
                  </div>
                  <div class="filler"></div>
                  <div class="right-floated">
                    <a (click)="deleteCategory.next(cat)"><i class="trash icon"></i></a>
                  </div>
                </div>
              </ng-container>
            </div>
          </div>
          <div class="ui tiny button" (click)="saveAndClose()">
            <i class="check icon"></i>
            Save
          </div>
        </div>
      </div>
    </div>`,
  styleUrls: ['schedule-editor.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RequirementEditorComponent {
  @Input()
  matId: string;

  @Input()
  req: ScheduleRequirement;

  @Input()
  requirementCategories: Category[];

  @Input()
  fightIdsByCategory: Dictionary<string[]>;

  @Output()
  save = new EventEmitter<void>();
  @Output()
  deleteCategory = new EventEmitter<Category>();

  @Output()
  itemDropped = new EventEmitter<CdkDragDrop<any, any>>();

  @Input()
  set visible(val: boolean) {
    this._visible = val;
  }

  _visible: boolean;

  saveAndClose() {
    this.visible = false;
    this.save.next();
  }
}
