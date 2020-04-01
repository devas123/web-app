import {ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {FightStartTime, MatDescription, Schedule} from '../../reducers/global-reducers';
import {Category, Period, ScheduleEntry} from '../../commons/model/competition.model';
import {AddFighterComponent} from '../../modules/event-manager/components/add-fighter/add-fighter.component';
import {Dictionary} from '@ngrx/entity';
import produce from 'immer';
import {InfoService} from '../../service/info.service';
import {uniqueFilter} from '../../modules/account/utils';

@Component({
  selector: 'app-schedule-display',
  styleUrls: ['schedule-display.component.scss'],
  template: `
    <div [suiCollapse]="scheduleEmpty">
      <div class="ui three stackable cards no_margin">
        <div class="card" *ngFor="let period of schedulePeriods">
          <div class="content">
            <div class="header">{{period?.name}}</div>
            <div class="meta">Begins {{period?.startTime | zdate:true:timeZone}}</div>
            <div class="ui toggle checkbox margin-vertical">
              <input type="checkbox" name="public" [value]="matsView" (click)="toggleMatsView()">
              <label>{{matsView ? 'Hide mats' : 'Show mats' }}</label>
            </div>
            <div class="ui middle aligned divided list">
              <a class="item" *ngFor="let scheduleEntry of getPeriodEntries(period)" [style]="getEntryStyle(scheduleEntry)">
                <i class="users icon"></i>
                <div class="content">
                  <div class="header" *ngIf="scheduleEntry.name && scheduleEntry.entryType !== 'RELATIVE_PAUSE'">{{scheduleEntry.name}}</div>
                  <div class="header" *ngIf="scheduleEntry.entryType === 'RELATIVE_PAUSE'">Pause</div>
                  <ng-container *ngIf="scheduleEntry.entryType !== 'RELATIVE_PAUSE'">
                    <div class="category_hoverable"
                         (mouseenter)="highlightCategory(categoryId)"
                         (mouseleave)="clearCategoryHighLight()"
                         (click)="goToCategoryEditor(categoryId)"
                         [ngClass]="{header: isFirst && !scheduleEntry.name, description: !isFirst || scheduleEntry.name, group_selected: isCategorySelected(categoryId)}"
                         *ngFor="let categoryId of scheduleEntry.categoryIds; first as isFirst">{{categoryNameForCategoryId(categoryId)}}</div>
                    <div class="description">{{scheduleEntry?.fightIds.length}} fights</div>
                  </ng-container>
                  <div class="description">{{matName(scheduleEntry?.matId)}}</div>
                  <div class="description" *ngIf="scheduleEntry.entryType !== 'RELATIVE_PAUSE'">Starts at {{scheduleEntry?.startTime | zdate:true:timeZone}}</div>
                  <div class="description" *ngIf="scheduleEntry.entryType === 'RELATIVE_PAUSE'">{{scheduleEntry.duration}} min</div>
                </div>
              </a>
            </div>
            <div class="header" *ngIf="matsView">Mats view</div>
            <div class="inner-list list-container mat-grid margin-horizontal" *ngIf="matsView"
                 [ngClass]="{'single-mat': getPeriodMats(period?.id)?.length === 1}">
              <div *ngFor="let mat of getPeriodMats(period.id)" class="mat-container" [ngClass]="{'single-mat': getPeriodMats(period.id)?.length === 1}">
                <p>{{mat.name}}</p>
                <div class="inner-list">
                  <div class="item schedule_page flex-container clickable"
                       (mouseenter)="highlightCategory(mfs.cat)"
                       (mouseleave)="clearCategoryHighLight()"
                       (click)="goToCategoryEditor(mfs.cat)"
                       [ngClass]="{group_selected: isCategorySelected(mfs.cat)}"
                       *ngFor="let mfs of _matCategories[mat.id]">
                    <span>{{categoryNameForCategoryId(mfs.cat)}}</span>
                    <span>{{mfs.fightStartTimes?.length}} fights</span>
                  </div>
                </div>
                <section>{{mat.fightStartTimes?.length}} fights</section>
              </div>
            </div>
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
  @Input()
  highlightedCategory: string;

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

  @Input()
  matsView = false;

  _matCategories = {} as Dictionary<{ cat: string, fightStartTimes: FightStartTime[] }[]>;


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

  matName = (matId: string) => {
    if (matId) {
      return this.mats.find(m => m.id === matId).name;
    } else {
      return 'Several mats.';
    }
  };

  goToCategoryEditor(categoryId: string) {
    console.log(categoryId);
    this.categoryClicked.next(categoryId);
  }

  categoryNameForCategoryId(id: string) {
    const category = this.categories.find(cat => cat.id === id);
    if (category) {
      return this.categoryName(category);
    } else {
      return id;
    }
  }

  ngOnInit() {

  }

  getEntryStyle(req: ScheduleEntry) {
    return (req.color && `border: 2px solid ${req.color}`) || '';
  }


  getPeriodMats(id: string) {
    return this.mats.filter(mat => mat.periodId === id);
  }

  getMatCategories() {
    this._matCategories = {};
    this.mats.forEach(mat => {
      const categories = mat?.fightStartTimes?.map(f => f?.fightCategoryId).filter(f => !!f)?.filter(uniqueFilter) || [];
      this._matCategories[mat.id] = categories.map(cat => ({cat, fightStartTimes: mat.fightStartTimes.filter(fs => fs.fightCategoryId === cat)}));
    });
  }

  highlightCategory(categoryId: string) {
    this.highlightedCategory = categoryId;
  }

  clearCategoryHighLight() {
    this.highlightedCategory = null;
  }

  isCategorySelected(cat: string) {
    return cat === this.highlightedCategory;
  }

  toggleMatsView() {
    this.matsView = !this.matsView;
    this.cd.markForCheck();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.getMatCategories();
  }
}
