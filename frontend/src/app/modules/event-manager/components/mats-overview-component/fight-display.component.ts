import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Competitor, Fight} from '../../../../commons/model/competition.model';

@Component({
  selector: 'app-fight-display',
  template: `
    <div class="fight-display-container" (click)="selectFight(fight?.id)">
      <div>
        {{fight?.numberOnMat + 1}}
        <p>{{ fight?.startTime | zdate:true:undefined:false }}</p>
      </div>
      <div>
        <div class="content" (click)="selectCompetitor(fight?.scores[0]?.competitor)">
          {{fight?.scores[0]?.competitor?.firstName}}  {{fight?.scores[0]?.competitor?.lastName}}
          <div class="sub header">{{fight?.scores[0]?.competitor?.academy?.name}}</div>
        </div>
      </div>
      <div>
          <p>vs</p>
      </div>
      <div>
        <div class="content" (click)="selectCompetitor(fight?.scores[1]?.competitor)">
          {{fight?.scores[1]?.competitor?.firstName}} {{fight?.scores[1]?.competitor?.lastName}}
          <div class="sub header">{{fight?.scores[1]?.competitor?.academy?.name}}</div>
        </div>
      </div>
    </div>`,
  styleUrls: ['mats-overview-component.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FightDisplayComponent implements OnInit {

  @Input()
  fight: Fight;

  @Output()
  fightClicked = new EventEmitter<string>();

  @Output()
  competitorClicked = new EventEmitter<Competitor>();

  constructor() {
  }

  selectFight(fightId: string) {
    this.fightClicked.next(fightId);
  }

  selectCompetitor(competitor: Competitor) {
    this.competitorClicked.next(competitor);
  }

  ngOnInit() {
  }

}
