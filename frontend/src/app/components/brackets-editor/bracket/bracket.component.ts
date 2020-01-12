import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges} from '@angular/core';
import {Fight} from '../../../commons/model/competition.model';

@Component({
  selector: 'app-bracket',
  templateUrl: './bracket.component.html',
  styleUrls: ['./bracket.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BracketComponent implements OnInit, OnDestroy, OnChanges {

  @Input()
  editMode = false;

  @Input()
  changeFightsIds: string[];

  @Input()
  set fights(fights: Fight[]) {
    this.rounds = [];
    if (fights) {
      this._fights = fights;
    } else {
      this._fights = [];
      this._flatRoundsReversed = [];
    }
  }

  @Input()
  bucketsize = 3;
  rounds: number[][];
  _fights: Fight[];
  _flatRoundsReversed: number[] = [];

  public rowWidthPx = 200;

  @Output()
  fightSelected = new EventEmitter<string>();

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
    this.rounds.push([...tmp]);
    this._flatRoundsReversed = flatRounds.reverse();
  }

  isLastRoundInBucket(round: number, bucket: number[]) {
    return bucket.indexOf(round) >= bucket.length - 1;
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
          stage: 'BYE'
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

  getRoundName(round) {
    if (this._flatRoundsReversed.indexOf(round) === 0) {
      return 'FINAL';
    }
    if (this._flatRoundsReversed.indexOf(round) === 1) {
      return 'SEMI-FINAL';
    }
    if (this._flatRoundsReversed.indexOf(round) === 2) {
      return 'QUARTER-FINAL';
    }
    return `Round ${round + 1}`;
  }

  getFightsNumberForBucket(bucket: number[]) {
    if (bucket && bucket.length > 0) {
      const round = bucket[0];
      return Math.pow(2, this._flatRoundsReversed.indexOf(round));
    } else {
      return 0;
    }
  }

  getFightsNumberForRound(round: number) {
    const bucket = this.rounds.find(b => b.indexOf(round) >= 0);
    if (bucket) {
      return this.getFightsNumberForBucket(bucket);
    } else {
      return 0;
    }
  }

  ngOnInit() {
  }
}
