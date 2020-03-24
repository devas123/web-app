import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges
} from '@angular/core';
import {Fight, StageType} from '../../../commons/model/competition.model';
import {ConnectionType} from '../bracketround/bracketround.component';

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
                            [fights]="getFightsForRound(round)"
                            [round]="round"
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
export class BracketPartComponent implements OnInit, OnDestroy, OnChanges {

  @Input()
  set fights(fights: Fight[]) {
    console.log(fights);
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
  changeFightsIds: string[];

  @Input()
  isLoserBracket = false;

  @Input()
  bucketsize = 3;

  @Input()
  stageType: StageType;

  rounds: number[][];

  _fights: Fight[];
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
    console.log(this.rounds);
    this._flatRoundsReversed = flatRounds.reverse();
  }

  getOneFightInPercent(round: number) {
    const fightsNumber = this.getFightsForRound(round).length;
    const totalFights = this.getFightsNumberForRound(round);
    if (this._fights) {
      return 100 * fightsNumber / totalFights;
    } else {
      return 100 / fightsNumber;
    }
  }

  getExtraFights(round: number, fights: Fight[]) {
    const totalFights = this.getFightsNumberForRound(round);
    if (round === 0 && fights.length < totalFights) {
      const extraFights = [] as Fight[];
      fights.forEach(f => extraFights.push(f));
      let i = fights.length;
      while (i++ < totalFights) {
        const f = {
          id: `${i}`,
          round: round,
          scores: [],
          status: 'BYE'
        } as Fight;
        extraFights.push(f);
      }
      return extraFights;
    } else {
      return fights;
    }
  }

  getFightsForRound(round) {
    return this.getExtraFights(round, this._fights.filter(f => f.round === round));
  }


  ngOnDestroy(): void {
  }

  getRoundName(round, stageType: StageType) {
    if (stageType === 'PRELIMINARY') {
      return `Prelim. round ${round + 1}`;
    }
    if (this._flatRoundsReversed.indexOf(round) === 0) {
      return  this.isLoserBracket ? 'LOWER FINAL' : 'GRAND FINAL';
    }
    let result =  `Round ${round + 1}`;
    if (this._flatRoundsReversed.indexOf(round) <= 4 && !this.isLoserBracket) {
      const fights = this.getFightsForRound(round);
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

  getFightsNumberForRound(round: number) {
    const bucket = this.rounds.find(b => b.indexOf(round) >= 0);
    if (bucket && bucket.length > 0) {
       return this.getHeightOfBucket(bucket);
    } else {
      return 0;
    }
  }

  ngOnInit() {
  }
}
