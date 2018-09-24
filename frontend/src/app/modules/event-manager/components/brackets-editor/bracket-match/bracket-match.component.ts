import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Fight} from '../../../../../commons/model/competition.model';
import {DropEvent} from '../../../../dragdrop/shared/drop-event.model';

@Component({
  selector: 'app-bracket-match',
  templateUrl: './bracket-match.component.html',
  styleUrls: ['./bracket-match.component.css']
})
export class BracketMatchComponent implements OnInit {

  @Input()
  fight: Fight;

  @Input()
  isChampionship: boolean;

  @Output()
  competitorDropped = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }


  onItemDrop(event: DropEvent, targetFight: Fight) {
    const index = event.index;
    const {from, competitor} = event.dragData;
    this.competitorDropped.next({
      sourceFightId: from.fightId,
      competitorId: competitor.email,
      targetFightId: targetFight.fightId,
      index
    });
  }
}
