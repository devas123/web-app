import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MatDescription, Schedule} from '../../reducers/global-reducers';
import {Category, Period} from '../../commons/model/competition.model';
import {AddFighterComponent} from '../../modules/event-manager/components/add-fighter/add-fighter.component';
import {Dictionary} from '@ngrx/entity';

@Component({
  selector: 'app-schedule-display',
  template: `
    <div [suiCollapse]="scheduleEmpty">
      <div class="ui two stackable cards">
        <div class="card" *ngFor="let period of schedulePeriods">
          <div class="content">
            <div class="header">{{period?.name}}</div>
            <div class="meta">Begins {{period?.startTime | zdate:true:timeZone}}</div>
            <div class="ui middle aligned divided list">
              <a class="item" *ngFor="let scheduleEntry of period.scheduleEntries"
                 (click)="goToCategoryEditor(scheduleEntry?.categoryId)">
                <i class="users icon"></i>
                <div class="content">
                  <div class="header">{{categoryNameForCategoryId(scheduleEntry?.categoryId)}}</div>
                  <div class="description">{{scheduleEntry?.numberOfFights}} fights</div>
                  <div class="description">Starts at {{scheduleEntry?.startTime | zdate:true:timeZone}}</div>
                </div>
              </a>
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
export class ScheduleDisplayComponent implements OnInit {

  constructor() {
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
  getFightsNumberForPeriod = (period: Period) => {
    if (!period || !period.scheduleEntries || period.scheduleEntries.length === 0) {
      return 0;
    }
    return period.scheduleEntries.map(e => e.numberOfFights).reduce((previousValue, currentValue) => previousValue + currentValue);
  };
  categoryName = (cat: Category) => AddFighterComponent.displayCategory(cat);

  goToCategoryEditor(categoryId: string) {
    this.categoryClicked.next(categoryId);
  }

  categoryNameForCategoryId(categoryId: string) {
    const category = this.categories.find(cat => cat.id === categoryId);
    if (category) {
      return this.categoryName(category);
    } else {
      return categoryId;
    }
  }

  ngOnInit() {

  }
}
