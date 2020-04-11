import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewEncapsulation
} from '@angular/core';
import {Category, dragEndEvent, dragStartEvent, ScheduleRequirement} from '../../../../commons/model/competition.model';
import {CdkDragDrop} from '@angular/cdk/drag-drop';
import {CatReq} from './schedule-editor.component';

@Component({
  template: `
    <div class="list-container" [ngClass]="{'empty-container bordered': !linesToDisplay || linesToDisplay.length === 0}"
         cdkDropList [cdkDropListData]="linesToDisplay"
         (cdkDropListDropped)="onItemDrop($event)">
      <div class="inner-list padded-vertical">
        <ng-container *ngFor="let catReq of linesToDisplay">
          <div *ngIf="catReq.cat" class="item schedule_page flex-container" cdkDrag (cdkDragStarted)="dragStart()"
               (cdkDragEnded)="dragEnd()"
               [cdkDragData]="{fromPeriod: periodId, cat: catReq.cat}" [ngClass]="{'compman_clickable': categoryClickable}">
            <div *ngIf="canDrag" cdkDragHandle class="handle"><i class="fas fa-arrows-alt"></i></div>
            <div class="content">
              <div class="header">{{catReq.cat | displayCategory}}</div>
            </div>
            <div class="filler"></div>
            <div class="right-floated">
              <a *ngIf="showInfoIcon" (click)="infoIconClicked.next(catReq.cat)"><i class="info icon"></i></a>
              <a *ngIf="canSplitCategories" (click)="splitIconCicked.next(catReq)"><i class="fas fa-project-diagram"></i></a>
              <a *ngIf="canDeleteCategories" (click)="requirementRemoveClicked.next(catReq)"><i class="delete icon"></i></a>
            </div>
          </div>
          <app-requirement-line
            *ngIf="catReq.req && !catReq.cat"
            cdkDrag (cdkDragStarted)="dragStart()"
            (cdkDragEnded)="dragEnd()"
            [cdkDragData]="{fromPeriod: periodId, req: catReq.req}"
            [matId]="null"
            [selected]="false"
            [canSelect]="false"
            [req]="catReq.req"
            [requirementCategories]="getRequirementCategories(catReq.req)"
            (removed)="requirementRemoveClicked.next(catReq)"
            [canDelete]="true"
            [canSplit]="true"
            (edit)="this.splitIconCicked.next(catReq)"
          ></app-requirement-line>
        </ng-container>
      </div>
    </div>
  `,
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['schedule-editor.component.scss'],
  selector: 'app-categories-list',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CategoriesListComponent {

  @Input()


  @Input()
  categoryClickable = false;

  @Input()
  lineColor = '#162830';

  @Input()
  showInfoIcon = true;

  @Input()
  canDrag = true;

  @Input()
  canDeleteCategories = false;

  @Input()
  canSplitCategories = true;

  @Input()
  periodId: string;

  @Input()
  linesToDisplay: CatReq[];

  @Input()
  allCategories: Category[];

  @Output()
  itemDropped = new EventEmitter<CdkDragDrop<any, any>>();
  @Output()
  splitIconCicked = new EventEmitter<CatReq>();
  @Output()
  infoIconClicked = new EventEmitter<Category>();

  @Output()
  requirementRemoveClicked = new EventEmitter<CatReq>();

  @Output()
  itemClicked = new EventEmitter<CatReq>();

  constructor(private el: ElementRef) {
  }

  dragStart() {
    this.el.nativeElement.dispatchEvent(dragStartEvent());
  }

  dragEnd() {
    this.el.nativeElement.dispatchEvent(dragEndEvent());
  }

  getRequirementCategories(req: ScheduleRequirement) {
    if (req && req.categoryIds && this.allCategories) {
      return req.categoryIds.map(id => this.allCategories.find(cat => cat.id === id)).filter(v => !!v);
    }
    return [];
  }

  onItemDrop(event: CdkDragDrop<any, any>) {
    this.itemDropped.next(event);
  }
}
