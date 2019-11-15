import {ChangeDetectionStrategy, Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Fight} from '../../../../../commons/model/competition.model';

@Component({
  selector: 'app-bracket',
  templateUrl: './bracket.component.html',
  styleUrls: ['./bracket.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BracketComponent implements OnInit, OnDestroy {

  rounds: number[];
  _fights: Fight[];

  @Input()
  set fights(fights: Fight[]) {
    if (fights) {
      this._fights = fights;
      this.rounds = fights.map((f, i, v) => f.round || 0).filter((r, i, arr) => arr.indexOf(r) === i).sort((a, b) => a - b);
    } else {
      this._fights = [];
      this.rounds = [];
    }
  }

  getFightsForRound(round) {
    return this._fights.filter(f => f.round === round);
  }

  public rowWidthPx = 200;

  ngOnDestroy(): void {
  }

  getFightsNumber(rounds: number) {
    return Math.pow(2, rounds - 1);
  }

  ngOnInit() {
  }
}
