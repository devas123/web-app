import {ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges, ViewEncapsulation} from '@angular/core';
import {BracketsType, Competitor, CompScore, Fight} from '../../../commons/model/competition.model';
import {CommonFightsEditorComponent} from '../common-fights-editor.component';
import {Dictionary} from '@ngrx/entity';
import {
  collectingReducer,
  defaultSelectionColor,
  defaultUncompletableColor,
  getKeyForEntry,
  uniqueFilter
} from '../../../modules/account/utils';

@Component({
  selector: 'app-group-display',
  styleUrls: ['group-display.component.scss'],
  templateUrl: 'group-display.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class GroupDisplayComponent extends CommonFightsEditorComponent implements OnChanges {

  @Input()
  set fights(value: Fight[]) {
    this._fights = value;
  }

  @Input()
  set competitors(value: Competitor[]) {
    this._competitors = value && value.sort((a, b) => a.id.localeCompare(b.id));
  }

  _competitors: Competitor[];

  private competitorNameSize = `100px`;

  @Input()
  groupName: string;

  _fights: Fight[] = [];
  _fightsPerCompetitor: Dictionary<Fight[]>;

  @Input()
  bracketsType: BracketsType;
  ngStyle: any = {'grid-template-columns': `${this.competitorNameSize} repeat(10, 1fr)`};

  getCompetitorsOrPlaceholders() {
    return Object.keys(this._fightsPerCompetitor);
  }

  getCompetitorIdOrPlaceholder = (s: CompScore) => s.competitorId || s.placeholderId;

  getCompetitorById(id: string, index: number) {
    return this._competitors.find(c => c.id === id) || <Competitor>{id: id, firstName: `Competitor ${index + 1}`};
  }

  filterFightsByCompetitorIdOrPlaceholderId = (cmp: string) => (f: Fight) => {
    return f.scores.find(s => s.competitorId === cmp) || f.scores.find(s => s.placeholderId === cmp);
  };

  displayFight = (f: Fight, competitorPerspective: string) => {
    if (f && f.fightResult && f.fightResult.winnerId) {
      let wol: string;
      const score = f.scores.find(s => s.competitorId === competitorPerspective).score;
      if (competitorPerspective === f.fightResult.winnerId) {
        wol = `<span class="green centered">W</span>`;
      } else {
        wol = `<span class="red centered">L</span>`;
      }
      return `<div class="score"><div>${wol}</div><div><span>${score.points}/${score.advantages}/${score.penalties}</span></div></div>`;
    } else if (f.mat && f.mat.id) {
      return `<span>${f.mat.name}/F#${f.numberOnMat + 1}</span>`;
    } else {
      return `<span>F#${f.numberInRound + 1}</span>`;
    }
  };

  getBackgroundColor(id: string) {
    const defaultColor = this._fights.find(f => f.id === id)?.status === 'UNCOMPLETABLE' ? defaultUncompletableColor : defaultSelectionColor;
    return getKeyForEntry(this.changeFightsIds, id) || defaultColor;
  }

  findOpponentId(forWhom: string, fight: Fight) {
    const opponentScore = fight.scores.find(s => s.competitorId !== forWhom && s.placeholderId !== forWhom);
    return opponentScore && (opponentScore.competitorId || opponentScore.placeholderId);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this._fights && this._competitors) {
      const competitorsAndPlaceholders = this._fights.map(f => f.scores.map(this.getCompetitorIdOrPlaceholder)).reduce(collectingReducer, [])
        .filter(uniqueFilter)
        .sort((a, b) => a.localeCompare(b));
      this._fightsPerCompetitor = {};
      const fightStub = <Fight>{};
      competitorsAndPlaceholders.forEach((cmp, index) => {
        const competitorFights = this._fights.filter(this.filterFightsByCompetitorIdOrPlaceholderId(cmp))
          .sort((a, b) => this.findOpponentId(cmp, a).localeCompare(this.findOpponentId(cmp, b)));
        this._fightsPerCompetitor[cmp] = [...competitorFights.slice(0, index), fightStub, ...competitorFights.slice(index)];
      });
      this.ngStyle = {'grid-template-columns': `${this.competitorNameSize} repeat(${this._competitors.length}, 1fr)`};
    }

  }
}
