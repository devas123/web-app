import {AfterContentInit, ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Category, Competitor, Fight, Score} from '../../../../commons/model/competition.model';
import {AddFighterComponent} from '../add-fighter/add-fighter.component';
import {Hotkey, HotkeysService} from 'angular2-hotkeys';
import {interval, Subscription} from 'rxjs';
import * as screenfull from 'screenfull';


@Component({
  selector: 'app-scoreboard-component',
  templateUrl: './scoreboard-component.component.html',
  styleUrls: ['./scoreboard-component.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ScoreboardComponentComponent implements OnInit, AfterContentInit {

  @Input()
  fight: Fight;

  @Input()
  category: Category;

  stageName;

  @Output()
  fullScreenToggled = new EventEmitter<boolean>();

  @Output()
  goMatViewClicked = new EventEmitter();

  @Output()
  fightResultUpdated = new EventEmitter<{ fight: Fight, competitor: Competitor, score: Score, reason: string | null }>();

  @Output()
  competitorPointsUpdated = new EventEmitter();

  timer$ = interval(1000);
  timerSubscription: Subscription;

  _fullScreen = false;
  set fullScreen(value: boolean) {
    this._fullScreen = value;
    this.fullScreenToggled.next(value);
  }
  showButtons = false;
  currentFightSeconds = 20;
  currentFightMinutes = 0;
  displayCategory = (cat: Category) => AddFighterComponent.displayCategory(cat);

  constructor(private _hotkeysService: HotkeysService, private el: ElementRef) {
  }

  getScore = (compScore: { competitor: Competitor, score: Score }) => compScore && compScore.score;

  updateCompetitorPoints(score: any) {
    this.competitorPointsUpdated.next(score);
  }

  goFullScreen() {
    screenfull.request(this.el.nativeElement.querySelector('#fullscr'));
    this.fullScreen = true;
  }

  goMatView() {
    this.goMatViewClicked.next();
  }

  initHotkeys() {
    this._hotkeysService.add(new Hotkey('q', () => {
      if (this.fight) {
        const score = this.fight.scores[0];
        if (score) {
          score.score.points += 1;
          this.updateCompetitorPoints(score);
        }
      }
      return false;
    }));

    this._hotkeysService.add(new Hotkey('w', () => {
      if (this.fight) {
        const score = this.fight.scores[0];
        if (score) {
          score.score.points += 2;
          this.updateCompetitorPoints(score);
        }
      }
      return false;
    }));

    this._hotkeysService.add(new Hotkey('e', () => {
      if (this.fight) {
        const score = this.fight.scores[0];
        if (score) {
          score.score.points += 3;
          this.updateCompetitorPoints(score);
        }
      }
      return false;
    }));


    this._hotkeysService.add(new Hotkey('r', () => {
      if (this.fight) {
        const score = this.fight.scores[0];
        if (score) {
          score.score.advantages += 1;
          this.updateCompetitorPoints(score);
        }
      }
      return false;
    }));

    this._hotkeysService.add(new Hotkey('t', () => {
      if (this.fight) {
        const score = this.fight.scores[0];
        if (score) {
          score.score.penalties += 1;
          this.updateCompetitorPoints(score);
        }
      }
      return false;
    }));

    this._hotkeysService.add(new Hotkey('y', () => {
      if (this.fight) {
        const score = this.fight.scores[0];
        if (score && score.score.points - 1 >= 0) {
          score.score.points -= 1;
          this.updateCompetitorPoints(score);
        }
      }
      return false;
    }));


    this._hotkeysService.add(new Hotkey('u', () => {
      if (this.fight) {
        const score = this.fight.scores[0];
        if (score && score.score.advantages - 1 >= 0) {
          score.score.advantages -= 1;
          this.updateCompetitorPoints(score);
        }
      }
      return false;
    }));


    this._hotkeysService.add(new Hotkey('i', () => {
      if (this.fight) {
        const score = this.fight.scores[0];
        if (score && score.score.penalties - 1 >= 0) {
          score.score.penalties -= 1;
          this.updateCompetitorPoints(score);
        }
      }
      return false;
    }));


    this._hotkeysService.add(new Hotkey('a', () => {
      if (this.fight) {
        const score = this.fight.scores[1];
        if (score) {
          score.score.points += 1;
          this.updateCompetitorPoints(score);
        }
      }
      return false;
    }));

    this._hotkeysService.add(new Hotkey('s', () => {
      if (this.fight) {
        const score = this.fight.scores[1];
        if (score) {
          score.score.points += 2;
          this.updateCompetitorPoints(score);
        }
      }
      return false;
    }));

    this._hotkeysService.add(new Hotkey('d', () => {
      if (this.fight) {
        const score = this.fight.scores[1];
        if (score) {
          score.score.points += 3;
          this.updateCompetitorPoints(score);
        }
      }
      return false;
    }));


    this._hotkeysService.add(new Hotkey('f', () => {
      if (this.fight) {
        const score = this.fight.scores[1];
        if (score) {
          score.score.advantages += 1;
          this.updateCompetitorPoints(score);
        }
      }
      return false;
    }));

    this._hotkeysService.add(new Hotkey('g', () => {
      if (this.fight) {
        const score = this.fight.scores[1];
        if (score) {
          score.score.penalties += 1;
          this.updateCompetitorPoints(score);
        }
      }
      return false;
    }));

    this._hotkeysService.add(new Hotkey('h', () => {
      if (this.fight) {
        const score = this.fight.scores[1];
        if (score && score.score.points - 1 >= 0) {
          score.score.points -= 1;
          this.updateCompetitorPoints(score);
        }
      }
      return false;
    }));


    this._hotkeysService.add(new Hotkey('j', () => {
      if (this.fight) {
        const score = this.fight.scores[1];
        if (score && score.score.advantages - 1 >= 0) {
          score.score.advantages -= 1;
          this.updateCompetitorPoints(score);
        }
      }
      return false;
    }));

    this._hotkeysService.add(new Hotkey('alt+x', () => {
      if (this.fight.stage !== 'IN_PROGRESS') {
        this.currentFightSeconds++;
        if (this.currentFightSeconds > 59) {
          this.currentFightSeconds = 0;
        }
      }
      return false;
    }));

    this._hotkeysService.add(new Hotkey('alt+z', () => {
      if (this.fight.stage !== 'IN_PROGRESS') {
        this.currentFightSeconds--;
        if (this.currentFightSeconds < 0) {
          this.currentFightSeconds = 0;
        }
      }
      return false;
    }));


    this._hotkeysService.add(new Hotkey('k', () => {
      if (this.fight) {
        const score = this.fight.scores[1];
        if (score && score.score.penalties - 1 >= 0) {
          score.score.penalties -= 1;
          this.updateCompetitorPoints(score);
        }
      }
      return false;
    }));


    this._hotkeysService.add(new Hotkey('alt+m', () => {
      if (this.fight) {
        this.timerSubscription.unsubscribe();
      }
      return false;
    }));


    const score1 = this.fight.scores[1];
    if (score1 && score1.score.points - 1 > 0) {
      score1.score.points -= 1;
      this.updateCompetitorPoints(score1);
    }


    /*this._hotkeysService.add(new Hotkey('shift+o', () => {
     if (this.fight) {
     const  stage = 'FINISHED';
     const scores = this.fight.scores;
     const scores = this.fight.scores;


     this.updateFightResults(this.fight,
     new FightResult().fillResult(scores[0].email, ""), stage, scores);
     return false;
     }
     }));


     this._hotkeysService.add(new Hotkey('shift+l', () => {
     if (this.fight) {
     const  stage = 'FINISHED';
     const scores = this.fight.scores;
     const scores = this.fight.scores;


     this.updateFightResults(this.fight,
     new FightResult().fillResult(scores[1].email, ""), stage, scores);
     return false;
     }}));*/


    this._hotkeysService.add(new Hotkey('shift', () => {
      this.showButtons = true;
      return false;
    }));


    this._hotkeysService.add(new Hotkey('space', () => {
      const stage = this.fight.stage !== 'IN_PROGRESS' ? 'IN_PROGRESS' : 'PENDING';
      this.fight.stage = stage;
      if (stage === 'IN_PROGRESS') {
        if (!this.timerSubscription.closed) {
          this.timerSubscription.unsubscribe();
        }
        this.timerSubscription = this.timer$.subscribe(
          () => {
            if (this.currentFightMinutes <= 0 && this.currentFightSeconds <= 0) {
              this.currentFightSeconds = 0;
              this.currentFightMinutes = 0;
              this.timerSubscription.unsubscribe();
            }
            if (this.fight.stage === 'PENDING') {
              this.timerSubscription.unsubscribe();
            }
          });
      } else {
        this.timerSubscription.unsubscribe();
      }

      if (this.fight.stage !== 'FINISHED') {
        // this.updateFightStage(this.fight.id,
        //   stage);
      }
      return false;
    }));

    this._hotkeysService.add(new Hotkey('esc', () => {
      this.fullScreen = false;
      this._hotkeysService.reset();
      screenfull.exit();
      return false;
    }));
  }

  setWinner(competitor: Competitor, score: Score) {
    this.fightResultUpdated.next({fight: this.fight, competitor, score, reason: null});
  }

  ngOnInit() {
  }

  ngAfterContentInit(): void {
    if (this.fight) {
      this.stageName = this.fight.stage;
      this.initHotkeys();
      this.currentFightMinutes = this.fight.duration;
      this.currentFightSeconds = 0;
    }
  }
}
