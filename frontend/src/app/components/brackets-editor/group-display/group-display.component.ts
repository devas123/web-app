import {ChangeDetectionStrategy, Component, Input, ViewEncapsulation} from '@angular/core';
import {BracketsType, Competitor, Fight} from '../../../commons/model/competition.model';
import {CommonFightsEditorComponent} from '../common-fights-editor.component';
import {Dictionary} from '@ngrx/entity';

@Component({
  selector: 'app-group-display',
  styleUrls: ['group-display.component.scss'],
  templateUrl: 'group-display.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class GroupDisplayComponent extends CommonFightsEditorComponent {

  private competitorNameSize = `100px`;

  @Input()
  groupName: string;

  @Input()
  set fights(value: Fight[]) {
    if (value) {
      this._fights = value;
      const competitors = value.map(f => f.scores.map(s => s.competitor.id)).reduce((prev, curr) => {
        if (!prev) {
          return curr;
        } else {
          return [...prev, ...curr];
        }
      }).filter(((value1, index, array) => array.indexOf(value1) === index));
      this._fightsPerCompetitor = <Dictionary<Fight[]>>{};
      this._competitorsDictionary = <Dictionary<Competitor>>{};
      const fightStub = <Fight>{};
      competitors.forEach((cmp, index) => {
        const competitorFights = value.filter(f => f.scores.find(s => s.competitor.id === cmp));
        this._competitorsDictionary[cmp] = value.find(f => !!f.scores.find(s => s.competitor.id === cmp))
          .scores.find(s => s.competitor.id === cmp).competitor;
        this._fightsPerCompetitor[cmp] = [...competitorFights.slice(0, index), fightStub, ...competitorFights.slice(index)];
      });
      this._competitorIds = Object.keys(this._fightsPerCompetitor);
      this.ngStyle = {'grid-template-columns': `${this.competitorNameSize} repeat(${this._competitorIds.length}, 1fr)`};
    }
  }

  _fights: Fight[] = [];
  _competitorIds: string[];
  _fightsPerCompetitor: Dictionary<Fight[]>;
  _competitorsDictionary: Dictionary<Competitor>;

  @Input()
  bracketsType: BracketsType;
  ngStyle: any = {'grid-template-columns': `${this.competitorNameSize} repeat(10, 1fr)`};

  displayFight = (f: Fight, competitorPerspective: string) => {
    if (f && f.fightResult && f.fightResult.winnerId) {
      let wol: string;
      const score = f.scores.find(s => s.competitor.id === competitorPerspective).score;
      if (competitorPerspective === f.fightResult.winnerId) {
        wol =  `<span class="green centered">W</span>`;
      } else {
        wol =  `<span class="red centered">L</span>`;
      }
      return `<div class="score"><div>${wol}</div><div><span>${score.points}/${score.advantages}/${score.penalties}</span></div></div>`;
    } else if (f.mat && f.mat.id) {
      return `<span>M ${f.mat} / F#${f.numberOnMat + 1}</span>`;
    } else {
      return `<span>F#${f.numberInRound + 1}</span>`;
    }
  };
}
