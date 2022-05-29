import {ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, Output} from '@angular/core';
import {AddFighterComponent} from '../../modules/event-manager/components/add-fighter/add-fighter.component';
import {Dictionary} from '@ngrx/entity';
import produce from 'immer';
import {CategoryDescriptor, MatDescription, Period, Schedule, ScheduleEntryType} from "@frontend-nx/protobuf";
import {InternalScheduleState} from "../../reducers/global-reducers";

@Component({
  selector: 'app-schedule-display',
  styleUrls: ['schedule-display.component.scss'],
  template: `
    <div [suiCollapse]="scheduleEmpty">
      <div class="ui two stackable cards no_margin">
        <div class="card" *ngFor="let period of schedulePeriods">
          <div class="content">
            <div class="header">{{period?.name}}</div>
            <compmanager-frontend-date-field
              class="meta"
              [date]="period?.startTime"
              [showTime]="true"
              [text]="'Begins '"
              [timeZone]="timeZone"
            ></compmanager-frontend-date-field>
            <div class="ui toggle checkbox margin-vertical">
              <input type="checkbox" name="public" [value]="matsView[period?.id]" (click)="toggleMatsView(period.id)">
              <label>{{matsView[period?.id] ? 'Hide mats' : 'Show mats' }}</label>
            </div>
            <app-schedule-entry-display
              [timeZone]="timeZone"
              [categoryFormat]="categoryNameForCategoryId"
              [matFormat]="matName(period.id)"
              [scheduleEntries]="getPeriodEntries(period)"
              [highlightedCategories]="highlightedCategories"
              (categoryMouseEnter)="highlightCategory([$event])"
              (categoryMouseLeave)="clearCategoryHighLight([$event])"
              (categoryClicked)="goToCategoryEditor($event)"></app-schedule-entry-display>
            <div class="header" *ngIf="matsView[period?.id]">Areas view</div>
            <app-schedule-mat-display *ngIf="matsView[period?.id]"
              [scheduleEntries]="getPeriodEntries(period)"
              [matFormat]="matName(period.id)"
              [categoryFormat]="categoryNameForCategoryId"
              [highlightedCategories]="highlightedCategories"
              [timeZone]="timeZone"
              [mats]="getPeriodMats(period.id)"
              [period]="period"
              (categoryMouseEnter)="highlightCategory($event)"
              (categoryMouseLeave)="clearCategoryHighLight($event)"
              (categoryClicked)="goToCategoryEditor($event)"></app-schedule-mat-display>
          </div>
          <div class="extra content">
            <span *ngIf="showTotalFights">Total fights: {{getFightsNumberForPeriod(period)}}</span>
            <br/>
            <span *ngIf="showDuration">Duration: {{getPeriodDuration(period) || 'N/A'}} <span *ngIf="getPeriodDuration(period)">h</span></span>
          </div>
        </div>
      </div>
    </div>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ScheduleDisplayComponent  {
  highlightedCategories = new Set<string>();

  constructor(private cd: ChangeDetectorRef) {
  }

  @Input()
  private fightIdsByCategoryId: Dictionary<string[]>;

  @Input()
  mats: MatDescription[];

  @Input()
  scheduleEmpty = true;

  @Input()
  timeZone = 'UTC';

  @Input()
  competitionId: string;

  @Input()
  categories: CategoryDescriptor[];

  @Input()
  schedule: InternalScheduleState;

  @Input()
  schedulePeriods: Period[];

  @Output()
  categoryClicked = new EventEmitter<string>();

  @Input()
  showTotalFights = true;
  @Input()
  showDuration = true;

  matsView = <Dictionary<boolean>>{};

  getPeriodDuration= (p: Period) => undefined


  getFightsNumberForPeriod = (period: Period) => {
    if (!period || !period.scheduleEntries || period.scheduleEntries.length === 0) {
      return 0;
    }
    return period.scheduleEntries.map(e => e.fightScheduleInfo.length).reduce((previousValue, currentValue) => previousValue + currentValue);
  };
  categoryName = (cat: CategoryDescriptor) => AddFighterComponent.displayCategory(cat);

  getPeriodEntries(period: Period) {
    return (period.scheduleEntries.filter(e => e.entryType !== ScheduleEntryType.SCHEDULE_ENTRY_TYPE_FIXED_PAUSE) && produce(period.scheduleEntries, draft => {
      draft.sort((a, b) => a.startTime?.getTime() - b.startTime?.getTime());
    })) || [];
  }

  getPeriodFixedPauses(period: Period) {
    return (period.scheduleEntries.filter(e => e.entryType === ScheduleEntryType.SCHEDULE_ENTRY_TYPE_FIXED_PAUSE) && produce(period.scheduleEntries, draft => {
      draft.sort((a, b) => a.startTime.getTime() - b.startTime.getTime());
    })) || [];
  }

  matName = (periodId: string) => (matId: string) => {
    if (matId) {
      return this.mats.find(m => m.id === matId && m.periodId === periodId).name;
    } else {
      return `Unknown ${matId}`;
    }
  };

  goToCategoryEditor(categoryId: string) {
    console.log(categoryId);
    this.categoryClicked.next(categoryId);
  }

  categoryNameForCategoryId = (id: string) => {
    const category = this.categories.find(cat => cat.id === id);
    if (category) {
      return this.categoryName(category);
    } else {
      return id;
    }
  };



  getPeriodMats(id: string) {
    return this.mats.filter(mat => mat.periodId === id);
  }

  highlightCategory(categoryIds: string[]) {
    categoryIds.forEach(cat => this.highlightedCategories.add(cat));
  }

  clearCategoryHighLight(categoryIds: string[]) {
    categoryIds.forEach(cat => this.highlightedCategories.delete(cat));
  }

  toggleMatsView(periodId: string) {
    this.matsView[periodId] = !this.matsView[periodId];
    this.cd.markForCheck();
  }
}
