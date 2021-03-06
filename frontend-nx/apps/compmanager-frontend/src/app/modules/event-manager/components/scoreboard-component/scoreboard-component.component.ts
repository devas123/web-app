import {
  AfterContentInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  OnInit,
  Output
} from '@angular/core';
import {
  Category,
  Competitor,
  Fight,
  FightResult,
  FightResultOption,
  Score
} from '../../../../commons/model/competition.model';
import {AddFighterComponent} from '../add-fighter/add-fighter.component';
import produce from 'immer';
import {IScoreboardFightResultSet} from '../../redux/dashboard-reducers';


@Component({
  selector: 'app-scoreboard-component',
  templateUrl: './scoreboard-component.component.html',
  styleUrls: ['./scoreboard-component.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ScoreboardComponentComponent implements OnInit, AfterContentInit {

  @Input()
  fightResultOptions: FightResultOption[];

  @Input()
  set selectedFight(f: Fight) {
    if (f) {
      this.fight = produce(f, d => {
        d.scores.forEach( sc => {
          sc.score = (!!sc.score && Object.keys(sc.score).length > 0) ? sc.score : <Score>{advantages: 0, penalties: 0, points: 0};
        });
      });
      this.currentFightMinutes = f.duration;
      this.currentFightSeconds = 0;
      this.stageName = `Round ${f.round + 1}`;
    }
  }

  set fullScreen(value: boolean) {
    this._fullScreen = value;
    this.fullScreenToggled.next(value);
  }

  constructor(private el: ElementRef) {
  }

  @Input()
  competitors: Competitor[];

  showControls = false;

  fight: Fight;

  @Input()
  category: Category;

  stageName;

  @Output()
  fullScreenToggled = new EventEmitter<boolean>();

  @Output()
  goMatViewClicked = new EventEmitter();

  @Output()
  fightResultUpdated = new EventEmitter<IScoreboardFightResultSet>();

  @Output()
  competitorPointsUpdated = new EventEmitter();

  _fullScreen = false;

  currentFightSeconds = 20;
  currentFightMinutes = 0;

  getCompetitor(id) {
    return this.competitors.find(c => c.id === id);
  }


  updateAdvantage(value: number, scoreIndex: number) {
    this.fight = produce(this.fight, draft => {
      draft.scores[scoreIndex].score.advantages += value;
    });
  }

  updatePoint(value: number, scoreIndex: number) {
    this.fight = produce(this.fight, draft => {
      draft.scores[scoreIndex].score.points += value;
    });
  }

  updatePenalties(value: number, scoreIndex: number) {
    this.fight = produce(this.fight, draft => {
      draft.scores[scoreIndex].score.penalties += value;
    });
  }

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    if (event.key === 'Shift') {
      this.showControls = !this.showControls;
    }
  }

  displayCategory = (cat: Category) => AddFighterComponent.displayCategory(cat);

  getScore = (compScore: { competitorId: string, score: Score }) => {
    return compScore && compScore.score;
  };

  updateCompetitorPoints(score: any) {
    this.competitorPointsUpdated.next(score);
  }

  goFullScreen() {
    this.fullScreen = true;
  }

  goMatView() {
    this.goMatViewClicked.next();
  }


  setWinner(competitor: Competitor, resultType: FightResultOption) {
    this.fightResultUpdated.next(<IScoreboardFightResultSet>{
      categoryId: this.fight.categoryId,
      competitionId: this.fight.competitionId,
      matId: this.fight.mat.id,
      fightId: this.fight.id,
      fightResult: <FightResult>{
        reason: '',
        resultTypeId: `${resultType.id}`,
        winnerId: competitor.id
      },
      scores: this.fight.scores

    });
  }

  ngOnInit() {
  }

  ngAfterContentInit(): void {
    if (this.fight) {
      this.stageName = this.fight.status;
      this.currentFightMinutes = this.fight.duration;
      this.currentFightSeconds = 0;
    }
  }
}
