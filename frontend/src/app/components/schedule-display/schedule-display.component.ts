import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Schedule} from '../../reducers';
import {Category, Period} from '../../commons/model/competition.model';
import {AddFighterComponent} from '../../modules/event-manager/components/add-fighter/add-fighter.component';

@Component({
  selector: 'app-schedule-display',
  template: `
    <div [suiCollapse]="!schedule?.periods  || schedule?.periods?.length === 0">
      <div class="ui two stackable cards">
        <div class="card" *ngFor="let period of schedule?.periods">
          <div class="content">
            <div class="header">{{period?.name}}</div>
            <div class="meta">Begins {{period?.startTime | zdate:true:timeZone}}</div>
            <div class="ui middle aligned divided list">
              <a class="item" *ngFor="let scheduleEntry of period.schedule"
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
            Total fights: {{getFightsNumberForPeriod(period)}}
            <br/>
            Duration: {{period?.duration || 'N/A'}} <span *ngIf="period?.duration">h</span>
          </div>
        </div>
      </div>
    </div>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ScheduleDisplayComponent implements OnInit {

  @Input()
  timeZone = 'UTC';

  @Input()
  competitionId: string;

  @Input()
  categories: Category[];

  @Input()
  schedule: Schedule;

  @Output()
  categoryClicked = new EventEmitter<string>();
  getFightsNumberForPeriod = (period: Period) => {
    if (!period || !period.schedule || period.schedule.length === 0) {
      return 0;
    }
    return period.schedule.map(e => e.numberOfFights).reduce((previousValue, currentValue) => previousValue + currentValue);
  };
  categoryName = (cat: Category) => AddFighterComponent.displayCategory(cat);

  constructor() {
  }

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
