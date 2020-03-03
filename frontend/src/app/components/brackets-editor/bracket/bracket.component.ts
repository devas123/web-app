import {ChangeDetectionStrategy, Component, Input, OnDestroy, OnInit} from '@angular/core';
import {BracketsType, Fight} from '../../../commons/model/competition.model';
import {CommonFightsEditorComponent} from '../common-fights-editor.component';
import {mockData} from '../group-display/mockdata';

@Component({
  selector: 'app-bracket',
  templateUrl: './bracket.component.html',
  styleUrls: ['./bracket.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BracketComponent extends CommonFightsEditorComponent implements OnInit, OnDestroy {

  @Input()
  set fights(fights: Fight[]) {
    this._fights = fights.filter(f => f.roundType !== 'LOSER_BRACKETS');
    this._loserFights = fights.filter(f => f.roundType === 'LOSER_BRACKETS');
  }

  @Input()
  bracketsType: BracketsType;

  @Input()
  bucketsize = 3;

  _mockFights = mockData;
  _fights: Fight[];
  _loserFights: Fight[];

  public rowWidthPx = 180;

  showUpperBrackets = true;

  ngOnDestroy(): void {
  }


  ngOnInit() {
  }

  getWInnerFightsLength() {
    return this._fights.filter(f => f.round === 0).length / 2;
  }
}
