import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import * as _ from 'lodash';
import {uniqueFilter} from "../../modules/account/utils";
import {ScheduleEntry, ScheduleEntryType} from "@frontend-nx/protobuf";

@Component({
  selector: 'app-schedule-entry-display',
  template: `
    <div class="ui middle aligned divided list">
      <a class="item" *ngFor="let scheduleEntry of scheduleEntries" [style]="getEntryStyle(scheduleEntry)">
        <i class="users icon"></i>
        <div class="content">
          <div class="header" *ngIf="scheduleEntry.name && !isPause(scheduleEntry)">{{scheduleEntry.name}}</div>
          <div class="header" *ngIf="isPause(scheduleEntry)">Pause</div>
          <ng-container *ngIf="!isPause(scheduleEntry)">
            <div class="category_hoverable"
                 (mouseenter)="highlightCategory(categoryId)"
                 (mouseleave)="clearCategoryHighLight(categoryId)"
                 (click)="goToCategoryEditor(categoryId)"
                 [ngClass]="{pause: isPause(scheduleEntry),header: isFirst && !scheduleEntry.name, description: !isFirst || scheduleEntry.name, group_selected: highlightedCategories?.has(categoryId)}"
                 *ngFor="let categoryId of scheduleEntry.categoryIds; first as isFirst">{{!!categoryFormat ? categoryFormat(categoryId) : categoryId | truncate}}</div>
            <div class="description">{{scheduleEntry?.fightScheduleInfo.length}} fights</div>
          </ng-container>
          <div class="description">{{getEntryMatId(scheduleEntry)}}</div>
          <compmanager-frontend-date-field
            *ngIf="!isPause(scheduleEntry)"
            class="description"
            [date]="scheduleEntry?.startTime"
            [showTime]="true"
            [text]="'Starts at '"
            [timeZone]="timeZone"
          ></compmanager-frontend-date-field>
          <div class="description" *ngIf="isRelativePause(scheduleEntry)">{{scheduleEntry.duration}} min</div>
          <ng-container *ngIf="isFixedPause(scheduleEntry)">
            <compmanager-frontend-date-field
              class="description"
              [date]="scheduleEntry?.startTime"
              [showTime]="true"
              [text]="'Starts at '"
              [timeZone]="timeZone"
            ></compmanager-frontend-date-field>
            <compmanager-frontend-date-field
              class="description"
              [date]="scheduleEntry?.endTime"
              [showTime]="true"
              [text]="'Ends at '"
              [timeZone]="timeZone"
            ></compmanager-frontend-date-field>
          </ng-container>
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

  isPause(scheduleEntry: ScheduleEntry) {
    return scheduleEntry.entryType === ScheduleEntryType.SCHEDULE_ENTRY_TYPE_RELATIVE_PAUSE || scheduleEntry.entryType === ScheduleEntryType.SCHEDULE_ENTRY_TYPE_FIXED_PAUSE;
  }

  isRelativePause(scheduleEntry: ScheduleEntry) {
    return scheduleEntry.entryType === ScheduleEntryType.SCHEDULE_ENTRY_TYPE_RELATIVE_PAUSE;
  }

  isFixedPause(scheduleEntry: ScheduleEntry) {
    return scheduleEntry.entryType === ScheduleEntryType.SCHEDULE_ENTRY_TYPE_FIXED_PAUSE;
  }

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

  getEntryMatId(scheduleEntry: ScheduleEntry) {
    if (!_.isEmpty(scheduleEntry.fightScheduleInfo)) {
      const matIds = scheduleEntry.fightScheduleInfo.map(f => f.matId).filter(uniqueFilter);
      if (matIds.length === 1) {
        return this.matFormat(matIds[0]);
      } else {
        return 'Several mats';
      }
    }
  }
}
