import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {BracketsType, Fight, StageType} from '../../../commons/model/competition.model';

@Component({
  selector: 'app-bracket',
  templateUrl: './bracket.component.html',
  styleUrls: ['./bracket.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BracketComponent implements OnInit, OnDestroy {

  @Input()
  stageType: StageType;

  @Input()
  editMode = false;

  @Input()
  changeFightsIds: string[];

  @Input()
  set fights(fights: Fight[]) {
    this._fights = fights.filter(f => f.roundType !== 'LOSER_BRACKETS');
    this._loserFights = fights.filter(f => f.roundType === 'LOSER_BRACKETS');
  }

  @Input()
  bracketsType: BracketsType;

  @Input()
  bucketsize = 3;

  _fights: Fight[];
  _loserFights: Fight[];

  public rowWidthPx = 180;

  @Output()
  fightSelected = new EventEmitter<string>();
  showUpperBrackets = true;

  addFightToCurrentChange(fight: string) {
    if (this.editMode && fight) {
      this.fightSelected.next(fight);
    }
  }

  ngOnDestroy(): void {
  }


  ngOnInit() {
  }

  getWInnerFightsLength() {
    return this._fights.filter(f => f.round === 0).length / 2;
  }
}
