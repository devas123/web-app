import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {format, parseISO} from 'date-fns';
import {MatDescription, Period, ScheduleEntry} from "@frontend-nx/protobuf";

@Component({
  selector: 'app-schedule-mat-display',
  template: `
    <div class="inner-list list-container mat-grid margin-horizontal"
         [ngClass]="{'single-mat': mats?.length === 1}">
      <div *ngFor="let mat of mats" class="mat-container" [ngClass]="{'single-mat': mats?.length === 1}">
        <p>{{mat.name}}</p>
        <div class="inner-list">
          <div class="item schedule_page flex-container clickable"  [style]="getEntryStyle(entry)"
               (mouseenter)="highlightCategory(entry.categoryIds)"
               (mouseleave)="clearCategoryHighLight(entry.categoryIds)"
               [ngClass]="{group_selected: isCategorySelected(entry.categoryIds), 'pause': entry.entryType === 'RELATIVE_PAUSE' || entry.entryType === 'FIXED_PAUSE'}"
               *ngFor="let entry of getMatEntries(mat.id)">
            <ng-container *ngIf="entry.entryType !== 'RELATIVE_PAUSE' && entry.entryType !== 'FIXED_PAUSE'">
              <span class="break_word" *ngFor="let cat of entry.categoryIds">{{categoryFormat(cat)}}</span>
              <span class="flexible"></span>
              <span>{{getEntryStartTimeForMat(mat.id, entry)}}</span>
              <span class="break_word">{{getEntryFightsForMat(mat.id, entry)?.length}} fights</span>
            </ng-container>
            <ng-container *ngIf="entry.entryType === 'RELATIVE_PAUSE'">
              <span>Pause</span>
              <span>{{entry.duration}} minutes</span>
            </ng-container>
            <ng-container *ngIf="entry.entryType === 'FIXED_PAUSE'">
              <span>Pause</span>
              <span>From {{entry.startTime | zdate:true:timeZone:false}} till {{entry.endTime | zdate:true:timeZone:false}} </span>
            </ng-container>
          </div>
        </div>
        <section><!--{{mat.numberOfFights}}--> TODO fights</section>
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

  getMatEntries(matId) {
    return this.scheduleEntries?.filter(e => e.fightScheduleInfo.find(f => f.matId === matId));
  }

  getEntryFightsForMat(matId: string, entry: ScheduleEntry) {
    return entry.fightScheduleInfo.filter(f => f.matId === matId);
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
