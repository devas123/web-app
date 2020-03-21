import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation} from '@angular/core';
import {Category, ScheduleRequirement} from '../../../../commons/model/competition.model';
import {CdkDragDrop} from '@angular/cdk/drag-drop';
import {CatReq} from './schedule-editor.component';

@Component({
  template: `
    <div class="list-container" [ngClass]="{'empty-container bordered': !linesToDisplay || linesToDisplay.length === 0}"
         cdkDropList [cdkDropListData]="linesToDisplay"
         (cdkDropListDropped)="onItemDrop($event)">
      <div class="inner-list padded-vertical">
        <ng-container *ngFor="let catReq of linesToDisplay">
          <div *ngIf="catReq.cat" class="item flex-container" cdkDrag
               [cdkDragData]="{fromPeriod: periodId, cat: catReq.cat}">
            <div cdkDragHandle class="handle"><i class="fas fa-arrows-alt"></i></div>
            <div class="content">
              <div class="header">{{catReq.cat | displayCategory}}</div>
            </div>
            <div class="filler"></div>
            <div class="right-floated">
              <a (click)="infoIconClicked.next(catReq.cat)"><i class="info icon"></i></a>
              <a (click)="editIconCicked.next(catReq.cat)"><i class="edit icon"></i></a>
            </div>
          </div>
          <app-requirement-line
            *ngIf="catReq.req && !catReq.cat"
            cdkDrag
            [cdkDragData]="{fromPeriod: periodId, req: catReq.req}"
            [matId]="null"
            [selected]="false"
            [canSelect]="false"
            [req]="catReq.req"
            [requirementCategories]="getRequirementCategories(catReq.req)"
            (removed)="requirementRemoveClicked.next(catReq)"
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
  periodId: string;

  @Input()
  linesToDisplay: CatReq[];

  @Input()
  allCategories: Category[];

  @Output()
  itemDropped = new EventEmitter<CdkDragDrop<any, any>>();
  @Output()
  editIconCicked = new EventEmitter<Category>();
  @Output()
  infoIconClicked = new EventEmitter<Category>();
  @Output()
  requirementRemoveClicked = new EventEmitter<CatReq>();

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
