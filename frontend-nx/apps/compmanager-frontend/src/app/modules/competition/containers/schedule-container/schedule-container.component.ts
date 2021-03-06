import {Component, OnInit} from '@angular/core';
import {CommonScheduleInfoContainerService} from '../../../../commons/classes/common-schedule-info-container.service';
import {loadScheduleCommand} from '../../../event-manager/redux/event-manager-actions';

@Component({
  selector: 'app-schedule-container',
  template: `
    <div class="ui basic segment margins_container">
      <app-schedule-display
        [mats]="scheduleInfo.mats$ | async"
        [scheduleEmpty]="scheduleInfo.scheduleEmpty$ | async"
        [timeZone]="scheduleInfo.timeZone$ | async"
        [competitionId]="scheduleInfo.competitionId$ | async"
        [schedulePeriods]="scheduleInfo.periods$ | async"
        [schedule]="scheduleInfo.schedule$ | async"
        [categories]="scheduleInfo.categories$ | async"
        [fightIdsByCategoryId]="scheduleInfo.fightsByCategoryId$ | async"
        [showDuration]="false">
      </app-schedule-display>
    </div>`,
  styleUrls: ['./schedule-container.component.scss']
})
export class ScheduleContainerComponent implements OnInit {
  constructor(public scheduleInfo: CommonScheduleInfoContainerService) {
  }

  ngOnInit() {
    this.scheduleInfo.sendCommandFromCompetitionId(competitionId => loadScheduleCommand({competitionId}));
  }
}
