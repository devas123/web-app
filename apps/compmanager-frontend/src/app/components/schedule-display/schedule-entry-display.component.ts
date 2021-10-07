import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {ScheduleEntry} from '../../commons/model/competition.model';
import * as _ from 'lodash';

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
            <div class="description">{{scheduleEntry?.fightIds.length}} fights</div>
          </ng-container>
          <div class="description">{{getEntryMatId(scheduleEntry)}}</div>
          <div class="description" *ngIf="!isPause(scheduleEntry)">Starts at {{scheduleEntry?.startTime | zdate:true:timeZone}}</div>
          <div class="description" *ngIf="isRelativePause(scheduleEntry)">{{scheduleEntry.duration}} min</div>
          <div class="description" *ngIf="isFixedPause(scheduleEntry)">{{scheduleEntry?.startTime | zdate:true:timeZone}} - {{scheduleEntry?.endTime | zdate:true:timeZone}}</div>
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
    return scheduleEntry.entryType === 'RELATIVE_PAUSE' || scheduleEntry.entryType === 'FIXED_PAUSE';
  }

  isRelativePause(scheduleEntry: ScheduleEntry) {
    return scheduleEntry.entryType === 'RELATIVE_PAUSE';
  }

  isFixedPause(scheduleEntry: ScheduleEntry) {
    return scheduleEntry.entryType === 'FIXED_PAUSE';
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
    if (!_.isEmpty(scheduleEntry.fightIds)) {
      const matIds = scheduleEntry.fightIds.map(f => f.matId);
      if (matIds.length === 1) {
        return this.matFormat(matIds[0]);
      } else {
        return 'Several mats';
      }
    }
  }
}
