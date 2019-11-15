import {ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges, ViewEncapsulation} from '@angular/core';
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
  public fightInPercent: number;
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

  public slotHeightPx: number;

  public competitorsNumbers: number[] = [];

  @Input()
  public rowWidthPx: number;

  public enrichedFights: Fight[];

  static getOneFightInPercent(fightsNumber: number, totalFightsNumber: number) {
    return 100 * fightsNumber / totalFightsNumber;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.initialized) {
      this.enrichedFights = [];
      this.updateDimensions();
    }
  }

  updateDimensions() {
    this.getExtraFights(this.round, this.fights);
    this.calculateDimensions();
  }

  getSlotYOffset(oneFightInPercent: number) {
    if (this.round === 0) {
      return '0';
    } else {
      return 50 - oneFightInPercent / 2 + '%';
    }
  }

  getExtraFights(round: number, fights: Fight[]) {
    if (!this.enrichedFights || this.enrichedFights.length === 0) {
      if (round === 0 && fights.length < this.totalfights) {
        const extraFights = [] as Fight[];
        fights.forEach(f => extraFights.push(f));
        let i = fights.length;
        while (i++ < this.totalfights) {
          const f = {
            id: '' + i,
            round: this.round,
            scores: [],
            stage: 'BYE'
          } as Fight;
          extraFights.push(f);
        }
        this.enrichedFights = extraFights;
      } else {
        this.enrichedFights = fights;
      }
    }
    return this.enrichedFights;
  }

  trackByFights = (index: number, fight: Fight) => fight.id;


  getOffset() {
    if (this.round === 0) {
      return 0;
    }
    return this.slotHeightPx * (this.totalfights - (this.totalfights / Math.pow(2, this.round))) / (2 * this.enrichedFights.length);
  }

  getSpaceBetween(index: number) {
    return index * 100 / this.enrichedFights.length + '%';
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
    this.slotHeightPx = 80;
    if (!this.rowWidthPx) {
      this.rowWidthPx = 300;
    }
    this.fightInPercent = BracketRoundComponent.getOneFightInPercent(this.enrichedFights.length, this.totalfights);
    this.slotYOffset = this.getSlotYOffset(this.fightInPercent);
    this.spaceBetween = [];
    for (const i of this.enrichedFights.map(f => this.enrichedFights.indexOf(f))) {
      this.spaceBetween.push(this.getSpaceBetween(i));
    }
    this.offset = this.getOffset();
    this.paths = [];
    const lineBoxHeight = this.slotHeightPx * this.totalfights / this.enrichedFights.length;
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
