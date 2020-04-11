import {ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Competitor, Fight} from '../../../../commons/model/competition.model';
import {IDashboardFightScheduleChangedPayload} from '../../redux/dashboard-actions';
import {MatDescription} from '../../../../reducers/global-reducers';

@Component({
  selector: 'app-mats-overview-component',
  templateUrl: './mats-overview-component.component.html',
  styleUrls: ['./mats-overview-component.component.scss']
})
export class MatsOverviewComponentComponent implements OnInit {

  @Input()
  matsFights: Fight[];

  @Input()
  periodId: string;

  @Input()
  competitionId: string;

  @Input()
  mats: MatDescription[];

  @Input()
  competitors: Competitor[];

  @Output()
  competitorClicked = new EventEmitter<Competitor>();

  @Output()
  matDetailsClicked = new EventEmitter<string>();

  @Output()
  fightScheduleChanged = new EventEmitter<IDashboardFightScheduleChangedPayload>();

  constructor(private cd: ChangeDetectorRef) { }

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

  getMatFights(id: string) {
    return this.matsFights.filter(f => f.mat?.id === id);
  }

  dragEnd() {
    this.cd.reattach();
    this.cd.markForCheck();
  }

  dragStart() {
    this.cd.detach();
  }
}
