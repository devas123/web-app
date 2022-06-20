import {ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, Output} from '@angular/core';
import {IDashboardFightScheduleChangedPayload} from '../../redux/dashboard-actions';
import {CategoryState, Competitor, MatState} from "@frontend-nx/protobuf";

@Component({
  selector: 'app-mats-overview-component',
  templateUrl: './mats-overview-component.component.html',
  styleUrls: ['./mats-overview-component.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MatsOverviewComponentComponent  {

  @Input()
  periodId: string;

  @Input()
  competitionId: string;

  @Input()
  mats: MatState[];

  @Input()
  categories: CategoryState[];

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

  dragEnd() {
    this.cd.reattach();
    this.cd.markForCheck();
  }

  dragStart() {
    this.cd.detach();
  }
}
