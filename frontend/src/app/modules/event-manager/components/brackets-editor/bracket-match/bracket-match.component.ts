import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Fight} from '../../../../../commons/model/competition.model';
import {CdkDragDrop} from '@angular/cdk/drag-drop';

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


  onItemDrop(event: CdkDragDrop<Fight[]>, targetFight: Fight) {
    const index = event.currentIndex;
    const {from, competitor} = event.item.data;
    this.competitorDropped.next({
      sourceFightId: from.id,
      competitorId: competitor.email,
      targetFightId: targetFight.id,
      index
    });
  }
}
