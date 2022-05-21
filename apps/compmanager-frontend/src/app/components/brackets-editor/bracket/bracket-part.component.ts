import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges
} from '@angular/core';
import {ConnectionType} from '../bracketround/bracketround.component';
import {Dictionary} from '@ngrx/entity';
import {Competitor, FightDescription, FightStatus, StageRoundType, StageType} from "@frontend-nx/protobuf";

@Component({
  selector: 'app-bracket-part',
  template: `
    <div class="all-buckets-page">
      <div *ngFor="let bucket of rounds" class="bracket-page">
        <div *ngFor="let round of bucket; index as i; last as isLast">
          <h5 class="ui header">{{getRoundName(round, stageType)}}</h5>
          <app-bracketround [changeFightIds]="changeFightsIds"
                            [rowWidthPx]="rowWidthPx"
                            [bracketHeightInFights]="getHeightOfBucket(bucket)"
                            [roundFights]="getActualFightsForRound(round)"
                            [round]="round"
                            [competitors]="competitors"
                            [oneFightInPercent]="getOneFightInPercent(round)"
                            [elementsSelectable]="editMode"
                            [connectionsType]="getConnectionType(isLast, round)"
                            [slotHeightPx]="120"
                            (fightSelected)="addFightToCurrentChange($event)"></app-bracketround>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./bracket.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BracketPartComponent implements  OnChanges {

  @Input()
  set fights(fights: FightDescription[]) {
    this.rounds = [];
    if (fights) {
      this._fights = fights;
    } else {
      this._fights = [];
      this._flatRoundsReversed = [];
    }
  }

  @Input()
  losersFirstRoundSizeInFights = 0;

  @Input()
  editMode = false;

  @Input()
  changeFightsIds: Dictionary<string[]> = {};

  @Input()
  isLoserBracket = false;

  @Input()
  bucketsize = 3;

  @Input()
  stageType: StageType;

  @Input()
  competitors: Competitor[] = [];

  rounds: number[][];

  _fights: FightDescription[];
  _flatRoundsReversed: number[] = [];

  @Input()
  public rowWidthPx = 200;

  @Output()
  fightSelected = new EventEmitter<string>();

  getConnectionType(isLast: boolean, round: number): ConnectionType {
    if (isLast) {
      return 'NONE';
    } else if (!this.isLoserBracket) {
      return 'DEFAULT';
    } else {
      if (round % 2 === 0) {
        return 'STRAIGHT';
      } else {
        return 'DEFAULT';
      }
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.hasOwnProperty('fights') || changes.hasOwnProperty('bucketsize')) {
      this.calculateRounds();
    }
  }

  addFightToCurrentChange(fight: string) {
    if (this.editMode && fight) {
      this.fightSelected.next(fight);
    }
  }

  calculateRounds() {
    this.rounds = [];
    const flatRounds = this._fights.map(f => f.round || 0).filter((r, i, arr) => arr.indexOf(r) === i).sort((a, b) => a - b);
    let tmp = [];
    flatRounds.forEach((r, i) => {
      tmp.push(r);
      if ((i + 1) % this.bucketsize === 0) {
        if (i !== 0) {
          this.rounds.push([...tmp]);
          tmp = [];
        }
      }
    });
    if (tmp.length > 0) {
      this.rounds.push([...tmp]);
    }
    this._flatRoundsReversed = flatRounds.reverse();
  }

  getOneFightInPercent(round: number) {
    const roundFights = this.getActualFightsForRound(round);
    const fightsNumber = roundFights.filter(f => f.roundType !== StageRoundType.STAGE_ROUND_TYPE_THIRD_PLACE_FIGHT).length;
    const totalFights = this.getCalculatedFightsNumberForRound(round);
    if (this._fights) {
      return 100 * fightsNumber / totalFights;
    } else {
      return 100 / fightsNumber;
    }
  }

  getExtraFights(round: number, fights: FightDescription[]) {
    const totalFights = this.getCalculatedFightsNumberForRound(round);
    if (round === 0 && fights.length < totalFights) {
      const extraFights = [] as FightDescription[];
      fights.forEach(f => extraFights.push(f));
      let i = fights.length;
      while (i++ < totalFights) {
        const f = {
          id: `${i}`,
          round: round,
          scores: [],
          status: FightStatus.FIGHT_STATUS_WALKOVER,
        } as FightDescription;
        extraFights.push(f);
      }
      return extraFights;
    } else {
      return fights;
    }
  }

  getActualFightsForRound(round) {
    return this.getExtraFights(round, this._fights.filter(f => f.round === round));
  }




  getRoundName(round, stageType: StageType) {
    if (stageType === StageType.STAGE_TYPE_PRELIMINARY) {
      return `Prelim. round ${round + 1}`;
    }
    if (this._flatRoundsReversed.indexOf(round) === 0) {
      return  this.isLoserBracket ? 'LOWER FINAL' : 'GRAND FINAL';
    }
    let result =  `Round ${round + 1}`;
    if (this._flatRoundsReversed.indexOf(round) <= 4 && !this.isLoserBracket) {
      const fights = this.getActualFightsForRound(round);
      if (fights.length === 2) {
        result =  'SEMI-FINAL';
      }
      if (fights.length === 4) {
        result =  'QUARTER-FINAL';
      }
      if (fights.length === 1) {
        result = 'WINNER FINAL';
      }
    }
    return this.isLoserBracket ? `LOWER ${result}` : result;
  }

  getHeightOfBucket(bucket: number[]) {
    let result: number;
    if (bucket && bucket.length > 0) { // 8 8 4 4 2 2 1 1
      const round = bucket[0];         // 0 1 2 3 4 5 6 7// 7 6 5 4 3 2 1 0
      result = this._fights.filter(f => f.round === round).length;
    } else {
      result = 0;
    }
    return result;
  }

  getCalculatedFightsNumberForRound(round: number) {
    const bucket = this.rounds.find(b => b.indexOf(round) >= 0);
    if (bucket && bucket.length > 0) {
       return this.getHeightOfBucket(bucket);
    } else {
      return 0;
    }
  }
}
