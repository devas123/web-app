import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {Competitor, Fight} from '../../../commons/model/competition.model';
import {Dictionary} from '@ngrx/entity';
import {collectingReducer, defaultSelectionColor, getKeyForEntry} from '../../../modules/account/utils';

export type ConnectionType = 'DEFAULT' | 'NONE' | 'STRAIGHT';

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
  public competitorsWidthPercent = 0.9;
  public pathWidthPercent = 1 - this.competitorsWidthPercent;

  @Input()
  competitors: Competitor[] = [];

  @Input()
  elementsSelectable = false;

  @Input()
  public bracketHeightInFights: number;

  @Input()
  public round: number;

  @Input()
  public fights: Fight[];

  @Input()
  public rowWidthPx = 300;

  @Input()
  public slotHeightPx = 160;

  @Input()
  public connectionsType: ConnectionType = 'DEFAULT';

  @Input()
  public oneFightInPercent: number;

  @Input()
  changeFightIds: Dictionary<string[]> = {};

  @Output()
  public fightSelected = new EventEmitter<string>();

  getCompetitor(id: string) {
    return this.competitors.find(c => c.id === id);
  }

  get allSelectedFights() {
    return Object.keys(this.changeFightIds).map(key => this.changeFightIds[key]).reduce(collectingReducer, []);
  }

  isSelected(fightId: string) {
    return this.allSelectedFights.includes(fightId);
  }

  canSelectFight(fight: Fight) {
    const fightId = fight && fight.id;
    return (fightId && this.elementsSelectable);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.initialized) {
      this.updateDimensions();
    }
  }

  selectFightForEdit(fight: Fight) {
    if (this.canSelectFight(fight)) {
      this.fightSelected.next(fight.id);
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
    return this.slotHeightPx * (this.bracketHeightInFights - (this.bracketHeightInFights / Math.pow(2, this.round))) / (2 * this.fights.length);
  }

  getSpaceBetween(index: number) {
    return index * 100 / this.fights.length + '%';
  }

  calculateDimensions() {
    this.slotYOffset = this.getSlotYOffset(this.oneFightInPercent);
    this.spaceBetween = [];
    this.fights.forEach((f, i) => this.spaceBetween.push(this.getSpaceBetween(i)));
    this.offset = this.getOffset();
    this.paths = [];
    const lineBoxHeight = this.slotHeightPx * this.bracketHeightInFights / this.fights.length;
    const lineBoxLength = this.rowWidthPx * 0.1;
    this.paths.push(`M0 ${lineBoxHeight * 0.5} h${lineBoxLength * 0.7} v${lineBoxHeight * 0.5} h${lineBoxLength * 0.3}`);
    this.paths.push(`M0 ${lineBoxHeight * 0.5} h${lineBoxLength * 0.7} v-${lineBoxHeight * 0.5} h${lineBoxLength * 0.3}`);
    this.paths.push(`M0 ${lineBoxHeight * 0.5} h${lineBoxLength * 0.7}`);
    this.paths.push(`M0 ${lineBoxHeight * 0.5} h${lineBoxLength}`);
  }

  ngOnInit() {
    if (!this.initialized) {
      this.updateDimensions();
    }
    this.initialized = true;
  }

  getColor(id: string) {
    if (this.isSelected(id)) {
      return getKeyForEntry(this.changeFightIds, id) || defaultSelectionColor;
    } else {
      return 'black';
    }
  }
}
