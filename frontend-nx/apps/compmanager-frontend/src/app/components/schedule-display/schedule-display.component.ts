import {ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {MatDescription, Schedule} from '../../reducers/global-reducers';
import {Category, Period} from '../../commons/model/competition.model';
import {AddFighterComponent} from '../../modules/event-manager/components/add-fighter/add-fighter.component';
import {Dictionary} from '@ngrx/entity';
import produce from 'immer';
import {InfoService} from '../../service/info.service';

@Component({
  selector: 'app-schedule-display',
  styleUrls: ['schedule-display.component.scss'],
  template: `
    <div [suiCollapse]="scheduleEmpty">
      <div class="ui two stackable cards no_margin">
        <div class="card" *ngFor="let period of schedulePeriods">
          <div class="content">
            <div class="header">{{period?.name}}</div>
            <div class="meta">Begins {{period?.startTime | zdate:true:timeZone}}</div>
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
            <span *ngIf="showDuration">Duration: {{period?.duration || 'N/A'}} <span *ngIf="period?.duration">h</span></span>
          </div>
        </div>
      </div>
    </div>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ScheduleDisplayComponent implements OnInit, OnChanges {
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
  categories: Category[];

  @Input()
  schedule: Schedule;

  @Input()
  schedulePeriods: Period[];

  @Output()
  categoryClicked = new EventEmitter<string>();

  @Input()
  showTotalFights = true;
  @Input()
  showDuration = true;

  matsView = <Dictionary<boolean>>{};


  getFightsNumberForPeriod = (period: Period) => {
    if (!period || !period.scheduleEntries || period.scheduleEntries.length === 0) {
      return 0;
    }
    return period.scheduleEntries.map(e => e.fightIds.length).reduce((previousValue, currentValue) => previousValue + currentValue);
  };
  categoryName = (cat: Category) => AddFighterComponent.displayCategory(cat);

  getPeriodEntries(period: Period) {
    return (period.scheduleEntries.filter(e => e.entryType !== 'FIXED_PAUSE') && produce(period.scheduleEntries, draft => {
      draft.sort((a, b) => InfoService.parseDate(a.startTime).getTime() - InfoService.parseDate(b.startTime).getTime());
    })) || [];
  }

  getPeriodFixedPauses(period: Period) {
    return (period.scheduleEntries.filter(e => e.entryType === 'FIXED_PAUSE') && produce(period.scheduleEntries, draft => {
      draft.sort((a, b) => InfoService.parseDate(a.startTime).getTime() - InfoService.parseDate(b.startTime).getTime());
    })) || [];
  }

  matName = (periodId: string) => (matId: string) => {
    if (matId) {
      return this.mats.find(m => m.id === matId && m.periodId === periodId).name;
    } else {
      return 'Several mats.';
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

  ngOnInit() {

  }

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

  ngOnChanges(changes: SimpleChanges): void {
  }
}
