import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {AddFighterComponent} from '../add-fighter/add-fighter.component';
import * as _ from 'lodash';
import {CategoryState, Competitor, FightDescription} from "@frontend-nx/protobuf";

@Component({
  selector: 'app-fight-display',
  template: `
    <div class="fight-display-container" (click)="selectFight(fight?.id)">
      <div class="category_display centered">
        {{displayCategory(fight?.categoryId)}}
      </div>
      <div class="centered">
        {{fight?.numberOnMat + 1}}
        <compmanager-frontend-date-field [date]="fight?.startTime" [format]="'hh:mm'"></compmanager-frontend-date-field>
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
export class FightDisplayComponent {

  constructor() {
  }

  @Input()
  fight: FightDescription;

  @Input()
  competitors: Competitor[];

  @Output()
  fightClicked = new EventEmitter<string>();

  @Output()
  competitorClicked = new EventEmitter<Competitor>();

  @Input()
  categories: CategoryState[];


  displayCategory(id: string) {
    return !!this.categories && this.categories.find(c => c.id === id) && AddFighterComponent.displayCategory(this.categories.find(c => c.id === id)?.category);
  }

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
}
