import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges
} from '@angular/core';
import {Dictionary} from '@ngrx/entity';
import {
  collectingReducer,
  defaultBronzeFightColor,
  defaultSelectionColor,
  defaultUncompletableColor,
  getKeyForEntry
} from '../../../modules/account/utils';
import {Competitor, FightDescription, FightStatus, StageRoundType} from "@frontend-nx/protobuf";

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
  set roundFights(val: FightDescription[]) {
    if (val) {
      this.thirdPlaceFight = val.find(f => f.roundType === StageRoundType.STAGE_ROUND_TYPE_THIRD_PLACE_FIGHT);
      this.fights = val.filter(f => f.roundType !== StageRoundType.STAGE_ROUND_TYPE_THIRD_PLACE_FIGHT);
    } else {
      this.fights = [];
      this.thirdPlaceFight = undefined;
    }
  }

  public fights: FightDescription[];
  public thirdPlaceFight: FightDescription;

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

  canSelectFight(fight: FightDescription) {
    const fightId = fight && fight.id;
    return (fightId && this.elementsSelectable);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.initialized) {
      this.updateDimensions();
    }
  }

  selectFightForEdit(fight: FightDescription) {
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

  trackByFights = (index: number, fight: FightDescription) => fight.id;


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
      if (this.fights.find(f => f.id === id)?.status === FightStatus.FIGHT_STATUS_UNCOMPLETABLE) {
        return defaultUncompletableColor;
      } else if (this.thirdPlaceFight?.id === id) {
        return defaultBronzeFightColor;
      }
      return 'black';
    }
  }
}
