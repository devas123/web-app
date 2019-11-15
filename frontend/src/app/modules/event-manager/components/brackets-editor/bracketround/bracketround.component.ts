import {ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Competitor, Fight, Score} from '../../../../../commons/model/competition.model';


@Component({
  selector: 'app-bracketround',
  templateUrl: './bracketround.component.html',
  styleUrls: ['./bracketround.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BracketRoundComponent implements OnInit, OnChanges {

  constructor() {
  }

  public slotYOffset: string;
  public spaceBetween: Array<string>;
  public offset: number;
  public paths: Array<string>;
  public initialized = false;

  @Input()
  public totalfights: number;

  @Input()
  public round: number;

  @Input()
  public fights: Fight[];

  public competitorsNumbers: number[] = [];

  @Input()
  public rowWidthPx = 300;

  @Input()
  public slotHeightPx = 80;

  @Input()
  public drawConnections = true;

  public competitorsWidthPercent = 0.9;
  public pathWidthPercent = 1 - this.competitorsWidthPercent;

  @Input()
  public oneFightInPercent: number;

  ngOnChanges(changes: SimpleChanges): void {
    if (this.initialized) {
      this.updateDimensions();
    }
  }

  updateDimensions() {
    this.calculateDimensions();
  }

  getSlotYOffset(oneFightInPercent: number) {
    if (this.round === 0) {
      return '0';
    } else {
      return 50 - oneFightInPercent / 2 + '%';
    }
  }

  trackByFights = (index: number, fight: Fight) => fight.id;


  getOffset() {
    if (this.round === 0) {
      return 0;
    }
    return this.slotHeightPx * (this.totalfights - (this.totalfights / Math.pow(2, this.round))) / (2 * this.fights.length);
  }

  getSpaceBetween(index: number) {
    return index * 100 / this.fights.length + '%';
  }

  public onItemDrop(e: any, f: Fight) {
    const fromFight = e.dragData.fight as Fight;
    const comScore = e.dragData.comp as { competitor: Competitor, score: Score };
    fromFight.scores.splice(fromFight.scores.indexOf(comScore), 1);
    if (f.scores.length >= 2) {
      const removedComp = f.scores.reverse().pop();
      fromFight.scores.push(removedComp);
    }
    f.scores.push(comScore);
  }

  calculateDimensions() {
    this.slotYOffset = this.getSlotYOffset(this.oneFightInPercent);
    this.spaceBetween = [];
    this.fights.forEach((f, i) => this.spaceBetween.push(this.getSpaceBetween(i)));
    this.offset = this.getOffset();
    this.paths = [];
    const lineBoxHeight = this.slotHeightPx * this.totalfights / this.fights.length;
    const lineBoxLength = this.rowWidthPx * 0.1;
    this.paths.push(`M0 ${lineBoxHeight * 0.5} h${lineBoxLength * 0.7} v${lineBoxHeight * 0.5} h${lineBoxLength * 0.3}`);
    this.paths.push(`M0 ${lineBoxHeight * 0.5} h${lineBoxLength * 0.7} v-${lineBoxHeight * 0.5} h${lineBoxLength * 0.3}`);
    this.paths.push(`M0 ${lineBoxHeight * 0.5} h${lineBoxLength * 0.7}`);
  }

//

  ngOnInit() {
    if (!this.initialized) {
      this.competitorsNumbers = [];

      this.competitorsNumbers.push(2);
      this.competitorsNumbers.push(2);
      //  this.enrichFights()
      this.updateDimensions();
    }
    this.initialized = true;
  }
}
