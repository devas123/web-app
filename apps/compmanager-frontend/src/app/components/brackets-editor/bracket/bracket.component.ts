import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {CommonFightsEditorComponent} from '../common-fights-editor.component';
import {BracketType, Competitor, FightDescription, FightResultOption, StageRoundType} from "@frontend-nx/protobuf";

@Component({
  selector: 'app-bracket',
  templateUrl: './bracket.component.html',
  styleUrls: ['./bracket.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BracketComponent extends CommonFightsEditorComponent  {

  @Input()
  set fights(fights: FightDescription[]) {
    this._fights = fights.filter(f => f.roundType !== StageRoundType.STAGE_ROUND_TYPE_LOSER_BRACKETS);
    this._loserFights = fights.filter(f => f.roundType === StageRoundType.STAGE_ROUND_TYPE_LOSER_BRACKETS);
  }

  @Input()
  fightResultOptions: FightResultOption[]

  @Input()
  bracketsType: BracketType;

  @Input()
  bucketsize = 3;

  _fights: FightDescription[];
  _loserFights: FightDescription[];

  public rowWidthPx = 180;

  showUpperBrackets = true;

  @Input()
  competitors: Competitor[] = [];

  getWInnerFightsLength() {
    return this._fights.filter(f => f.round === 0).length / 2;
  }
}
