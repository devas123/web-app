import {ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges, ViewEncapsulation} from '@angular/core';
import {CommonFightsEditorComponent} from '../common-fights-editor.component';
import {Dictionary} from '@ngrx/entity';
import {
  collectingReducer,
  defaultSelectionColor,
  defaultUncompletableColor,
  uniqueFilter
} from '../../../modules/account/utils';
import {BracketType, Competitor, CompScore, FightDescription, FightStatus} from "@frontend-nx/protobuf";

const W = `<span class="green centered">W</span>`;
const L = `<span class="red centered">L</span>`;

@Component({
  selector: 'app-group-display',
  styleUrls: ['group-display.component.scss'],
  templateUrl: 'group-display.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class GroupDisplayComponent extends CommonFightsEditorComponent implements OnChanges {

  @Input()
  set fights(value: FightDescription[]) {
    this._fights = value;
    this._fightsMap = new Map<string, FightDescription>();
    if (this._fights) {
      this._fights.forEach(fight => this._fightsMap.set(fight.id, fight));
    }
  }

  @Input()
  set competitors(value: Competitor[]) {
    this._competitors = value && value.sort((a, b) => a.id.localeCompare(b.id));
    this._competitorsMap = new Map<string, Competitor>();
    if (this._competitors) {
      this._competitors.forEach(c => this._competitorsMap.set(c.id, c));
    }
  }

  _competitors: Competitor[];
  _competitorsMap: Map<string, Competitor>;
  changeIdByFightId: Map<string, string>;

  private competitorNameSize = `100px`;

  @Input()
  groupName: string;

  _fights: FightDescription[] = [];
  _fightsMap: Map<string, FightDescription>;
  _fightsPerCompetitor: Dictionary<FightDescription[]>;

  @Input()
  bracketsType: BracketType;
  ngStyle: any = {'grid-template-columns': `${this.competitorNameSize} repeat(10, 1fr)`};

  competitorsOrPlaceholders = [];

  getCompetitorIdOrPlaceholder = (s: CompScore) => s.competitorId || s.placeholderId;

  getCompetitorById(id: string, index: number) {
    return this._competitorsMap.get(id) || <Competitor>{id: id, firstName: `Competitor ${index + 1}`};
  }

  filterFightsByCompetitorIdOrPlaceholderId = (cmp: string) => (f: FightDescription) => {
    return f.scores.find(s => s.competitorId === cmp) || f.scores.find(s => s.placeholderId === cmp);
  };

  displayFight = (f: FightDescription, competitorPerspective: string) => {
    if (f && f.fightResult && f.fightResult.winnerId) {
      let wol: string;
      const score = f.scores.find(s => s.competitorId === competitorPerspective).score;
      if (competitorPerspective === f.fightResult.winnerId) {
        wol = W;
      } else {
        wol = L;
      }
      return `<div class="score"><div>${wol}</div><div><span>${score.points}/${score.advantages}/${score.penalties}</span></div></div>`;
    } else if (f.mat && f.mat.id) {
      return `<span>${f.mat.name}/F#${f.numberOnMat + 1}</span>`;
    } else {
      return `<span>F#${f.numberInRound + 1}</span>`;
    }
  };

  getBackgroundColor(id: string) {
    const defaultColor = this._fightsMap.get(id)?.status === FightStatus.FIGHT_STATUS_UNCOMPLETABLE ? defaultUncompletableColor : defaultSelectionColor;
    return this.changeIdByFightId.get(id) || defaultColor;
  }

  findOpponentId(forWhom: string, fight: FightDescription) {
    const opponentScore = fight.scores.find(s => s.competitorId !== forWhom && s.placeholderId !== forWhom);
    return opponentScore && (opponentScore.competitorId || opponentScore.placeholderId);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this._fights && this._competitors) {
      const competitorsAndPlaceholders = this._fights.map(f => f.scores.map(this.getCompetitorIdOrPlaceholder)).reduce(collectingReducer, [])
        .filter(uniqueFilter)
        .sort((a, b) => a.localeCompare(b));
      this._fightsPerCompetitor = {};
      const fightStub = <FightDescription>{};
      competitorsAndPlaceholders.forEach((cmp, index) => {
        const competitorFights = this._fights.filter(this.filterFightsByCompetitorIdOrPlaceholderId(cmp))
          .sort((a, b) => this.findOpponentId(cmp, a).localeCompare(this.findOpponentId(cmp, b)));
        this._fightsPerCompetitor[cmp] = [...competitorFights.slice(0, index), fightStub, ...competitorFights.slice(index)];
      });
      this.competitorsOrPlaceholders = Object.keys(this._fightsPerCompetitor);
      this.ngStyle = {'grid-template-columns': `${this.competitorNameSize} repeat(${this._competitors.length}, 1fr)`};
      this.changeIdByFightId = new Map<string, string>();
      Object.keys(this.changeFightsIds).forEach(changeId => this._changeFightsIds[changeId].forEach(fightId => this.changeIdByFightId.set(fightId, changeId)));
    }
  }
}
