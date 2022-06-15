import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {format} from 'date-fns';
import {MatDescription, Period, ScheduleEntry} from "@frontend-nx/protobuf";

@Component({
  selector: 'app-schedule-mat-display',
  template: `
    <div class="inner-list list-container mat-grid margin-horizontal"
         [ngClass]="{'single-mat': mats?.length === 1}">
      <div *ngFor="let mat of mats" class="mat-container" [ngClass]="{'single-mat': mats?.length === 1}">
        <p>{{mat.name}}</p>
        <div class="inner-list">
          <div class="item schedule_page flex-container clickable" [style]="getEntryStyle(entry)"
               (mouseenter)="highlightCategory(entry.categoryIds)"
               (mouseleave)="clearCategoryHighLight(entry.categoryIds)"
               [ngClass]="getNgClass(entry)"
               *ngFor="let entry of getMatEntries(mat.id)">
            <ng-container *ngIf="isNotPause(entry)">
              <span class="break_word" *ngFor="let cat of entry.categoryIds">{{categoryFormat(cat)}}</span>
              <span class="flexible"></span>
              <span>{{getEntryStartTimeForMat(mat.id, entry)}}</span>
              <span class="break_word">{{getEntryFightsForMat(mat.id, entry)?.length}} fights</span>
            </ng-container>
            <ng-container *ngIf="entry.entryType === 'SCHEDULE_ENTRY_TYPE_RELATIVE_PAUSE'">
              <span>Pause</span>
              <span>{{entry.duration / 60}} minutes</span>
            </ng-container>
            <ng-container *ngIf="entry.entryType === 'SCHEDULE_ENTRY_TYPE_FIXED_PAUSE'">
              <span>Pause</span>
              <compmanager-frontend-date-range
                [startDate]="entry.startTime"
                [endDate]="entry.endTime"
                [format]="'hh:mm'"
                [delimeter]="'till'"
                [prefix]="'From '"
              ></compmanager-frontend-date-range>
            </ng-container>
          </div>
        </div>
        <section>{{getTotalMatFights(mat.id)}} fights</section>
      </div>
    </div>
  `,
  styleUrls: ['schedule-display.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ScheduleMatDisplayComponent {

  @Input()
  mats: MatDescription[];


  @Input()
  scheduleEntries: ScheduleEntry[];


  @Input()
  period: Period;

  @Input()
  categoryFormat: (id: string) => string;

  @Input()
  timeZone: string;

  @Input()
  matFormat: (id: string) => string;

  @Input()
  highlightedCategories: Set<string>;

  @Output()
  categoryMouseEnter = new EventEmitter<string[]>();

  @Output()
  categoryMouseLeave = new EventEmitter<string[]>();

  @Output()
  categoryClicked = new EventEmitter<string>();

  getNgClass(entry: ScheduleEntry) {
    return {
      'group_selected': this.isCategorySelected(entry.categoryIds),
      'pause': entry.entryType === 'SCHEDULE_ENTRY_TYPE_RELATIVE_PAUSE' || entry.entryType === 'SCHEDULE_ENTRY_TYPE_FIXED_PAUSE'
    }
  }

  isNotPause(entry: ScheduleEntry) {
    return entry.entryType !== 'SCHEDULE_ENTRY_TYPE_RELATIVE_PAUSE' && entry.entryType !== 'SCHEDULE_ENTRY_TYPE_FIXED_PAUSE'
  }

  getMatEntries(matId) {
    return this.scheduleEntries?.filter(e => e.fightScheduleInfo.find(f => f.matId === matId));
  }

  getEntryFightsForMat(matId: string, entry: ScheduleEntry) {
    return entry.fightScheduleInfo.filter(f => f.matId === matId);
  }

  getTotalMatFights(matId: string) {
    const fightCounts = this.scheduleEntries?.map(e => e.fightScheduleInfo.filter(fsi => fsi.matId === matId)?.length || 0);
    if (fightCounts?.length > 0) {
      return fightCounts.reduce((a, b) => (a || 0) + (b || 0));
    }
    return 0
  }

  getEntryStartTimeForMat(matId: string, entry: ScheduleEntry) {
    const st = entry.fightScheduleInfo.filter(f => f.matId === matId && !!f.startTime)
      .sort((a, b) => a.startTime.getTime() - b.startTime.getTime())[0]?.startTime;
    if (st) {
      return format(st, 'HH:mm');
    }
  }

  getEntryStyle(req: ScheduleEntry) {
    return (req.color && `border: 2px solid ${req.color}`) || '';
  }


  highlightCategory(categoryId: string[]) {
    this.categoryMouseEnter.next(categoryId);
  }

  clearCategoryHighLight(categoryId: string[]) {
    this.categoryMouseLeave.next(categoryId);
  }

  goToCategoryEditor(categoryId: string) {
    this.categoryClicked.next(categoryId);
  }

  isCategorySelected(categoryIds: string[]) {
    return categoryIds?.find(cat => this.highlightedCategories.has(cat));
  }
}
