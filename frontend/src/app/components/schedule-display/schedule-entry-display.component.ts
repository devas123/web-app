import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {ScheduleEntry} from '../../commons/model/competition.model';

@Component({
  selector: 'app-schedule-entry-display',
  template: `
    <div class="ui middle aligned divided list">
      <a class="item" *ngFor="let scheduleEntry of scheduleEntries" [style]="getEntryStyle(scheduleEntry)">
        <i class="users icon"></i>
        <div class="content">
          <div class="header" *ngIf="scheduleEntry.name && scheduleEntry.entryType !== 'RELATIVE_PAUSE'">{{scheduleEntry.name}}</div>
          <div class="header" *ngIf="scheduleEntry.entryType === 'RELATIVE_PAUSE'">Pause</div>
          <ng-container *ngIf="scheduleEntry.entryType !== 'RELATIVE_PAUSE'">
            <div class="category_hoverable"
                 (mouseenter)="highlightCategory(categoryId)"
                 (mouseleave)="clearCategoryHighLight(categoryId)"
                 (click)="goToCategoryEditor(categoryId)"
                 [ngClass]="{header: isFirst && !scheduleEntry.name, description: !isFirst || scheduleEntry.name, group_selected: highlightedCategories?.has(categoryId)}"
                 *ngFor="let categoryId of scheduleEntry.categoryIds; first as isFirst">{{!!categoryFormat ? categoryFormat(categoryId) : categoryId | truncate}}</div>
            <div class="description">{{scheduleEntry?.fightIds.length}} fights</div>
          </ng-container>
          <div class="description">{{!!matFormat ? matFormat(scheduleEntry?.matId) : scheduleEntry?.matId}}</div>
          <div class="description" *ngIf="scheduleEntry.entryType !== 'RELATIVE_PAUSE'">Starts at {{scheduleEntry?.startTime | zdate:true:timeZone}}</div>
          <div class="description" *ngIf="scheduleEntry.entryType === 'RELATIVE_PAUSE'">{{scheduleEntry.duration}} min</div>
        </div>
      </a>
    </div>
  `,
  styleUrls: ['schedule-display.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ScheduleEntryDisplayComponent {

  @Input()
  categoryFormat: (id: string) => string;

  @Input()
  timeZone: string;

  @Input()
  matFormat: (id: string) => string;

  @Input()
  scheduleEntries: ScheduleEntry[];

  @Input()
  highlightedCategories: Set<string>;

  @Output()
  categoryMouseEnter = new EventEmitter<string>();

  @Output()
  categoryMouseLeave = new EventEmitter<string>();

  @Output()
  categoryClicked = new EventEmitter<string>();


  getEntryStyle(req: ScheduleEntry) {
    return (req.color && `border: 2px solid ${req.color}`) || '';
  }


  highlightCategory(categoryId: string) {
    this.categoryMouseEnter.next(categoryId);
  }

  clearCategoryHighLight(categoryId: string) {
    this.categoryMouseLeave.next(categoryId);
  }

  goToCategoryEditor(categoryId: string) {
    this.categoryClicked.next(categoryId);
  }
}
