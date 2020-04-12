import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Competitor, Fight} from '../../../../commons/model/competition.model';
import {AddFighterComponent} from '../add-fighter/add-fighter.component';
import * as _ from 'lodash';

@Component({
  selector: 'app-fight-display',
  template: `
    <div class="fight-display-container" (click)="selectFight(fight?.id)">
      <div class="category_display centered">
        {{displayCategory(fight?.category)}}
      </div>
      <div class="centered">
        {{fight?.numberOnMat + 1}}
        <p>{{ fight?.startTime | zdate:true:undefined:false }}</p>
      </div>
      <ng-container *ngFor="let score of fightScores; last as isLast">
        <div>
          <div class="content" (click)="selectCompetitor(getCompetitor(score?.competitorId))">
            {{getCompetitor(score?.competitorId)?.firstName}}  {{getCompetitor(score?.competitorId)?.lastName}}
            <div class="sub header">{{getCompetitor(score?.competitorId)?.academy?.name}}</div>
          </div>
        </div>
        <div *ngIf="!isLast">
          <p>vs</p>
        </div>
      </ng-container>
    </div>`,
  styleUrls: ['mats-overview-component.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FightDisplayComponent implements OnInit {

  constructor() {
  }

  @Input()
  fight: Fight;

  @Input()
  competitors: Competitor[];

  @Output()
  fightClicked = new EventEmitter<string>();

  @Output()
  competitorClicked = new EventEmitter<Competitor>();


  displayCategory = AddFighterComponent.displayCategory;

  get fightScores() {

    return this.fight && this.fight.scores && _.sortBy(this.fight.scores, sc => sc.order);
  }

  getCompetitor(id) {
    return this.competitors.find(comp => comp.id === id);
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
