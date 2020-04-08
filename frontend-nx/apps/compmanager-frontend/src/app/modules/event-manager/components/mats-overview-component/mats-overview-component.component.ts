import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Competitor} from '../../../../commons/model/competition.model';
import {IDashboardFightScheduleChangedPayload} from '../../redux/dashboard-actions';
import {MatDescription} from '../../../../reducers/global-reducers';

@Component({
  selector: 'app-mats-overview-component',
  templateUrl: './mats-overview-component.component.html',
  styleUrls: ['./mats-overview-component.component.scss']
})
export class MatsOverviewComponentComponent implements OnInit {

  @Input()
  periodId: string;

  @Input()
  competitionId: string;

  @Input()
  mats: MatDescription[];

  @Output()
  competitorClicked = new EventEmitter<Competitor>();

  @Output()
  matDetailsClicked = new EventEmitter<string>();

  @Output()
  fightScheduleChanged = new EventEmitter<IDashboardFightScheduleChangedPayload>();

  constructor() { }

  selectMat(matId: string) {
    this.matDetailsClicked.next(matId);
  }

  openCompetitorPage(competitor: Competitor) {
    this.competitorClicked.next(competitor);
  }

  ngOnInit() {
  }

  fightMatChanged($event: any) {
    this.fightScheduleChanged.next({...$event, competitionId: this.competitionId, periodId: this.periodId});
  }
}
