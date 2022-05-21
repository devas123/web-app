import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';
import {IDashboardFightScheduleChangedPayload} from '../../redux/dashboard-actions';
import * as _ from 'lodash';
import {CategoryDescriptor, Competitor, FightDescription, MatDescription} from "@frontend-nx/protobuf";

@Component({
  selector: 'app-mats-overview-component',
  templateUrl: './mats-overview-component.component.html',
  styleUrls: ['./mats-overview-component.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MatsOverviewComponentComponent  {

  @Input()
  matsFights: FightDescription[];

  @Input()
  periodId: string;

  @Input()
  competitionId: string;

  @Input()
  mats: MatDescription[];

  @Input()
  categories: CategoryDescriptor[];

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

  fightMatChanged($event: any) {
    this.fightScheduleChanged.next({...$event, competitionId: this.competitionId, periodId: this.periodId});
  }

  getMatFights(id: string) {
    return _.take(this.matsFights.filter(f => f.mat?.id === id).sort((a, b) => a.numberOnMat - b.numberOnMat), 5);
  }

  dragEnd() {
    this.cd.reattach();
    this.cd.markForCheck();
  }

  dragStart() {
    this.cd.detach();
  }
}
