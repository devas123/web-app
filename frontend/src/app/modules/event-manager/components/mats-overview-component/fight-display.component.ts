import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Competitor, Fight} from '../../../../commons/model/competition.model';

@Component({
  selector: 'app-fight-display',
  template: `
    <table class="ui very basic collapsing celled table" (click)="selectFight(fight?.fightId)">
      <tbody>
      <tr>
        <td>
          <h4 class="ui image header">
            <div class="content" (click)="selectCompetitor(fight?.competitors[0]?.competitor)">
              {{fight?.competitors[0]?.competitor?.firstName}}  {{fight?.competitors[0]?.competitor?.lastName}}
              <div class="sub header">{{fight?.competitors[0]?.competitor?.academy}}</div>
            </div>
          </h4>
        </td>
        <td>
          <h4 class="ui image header">
            <div class="content" (click)="selectCompetitor(fight?.competitors[1]?.competitor)">
              {{fight?.competitors[1]?.competitor?.firstName}} {{fight?.competitors[1]?.competitor?.lastName}}
              <div class="sub header">{{fight?.competitors[1]?.competitor?.academy}}</div>
            </div>
          </h4>
        </td>
      </tr>
      </tbody>
    </table>`
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
