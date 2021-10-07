import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  HostListener,
  Input,
  OnDestroy,
  OnInit
} from '@angular/core';
import {BehaviorSubject, interval, NEVER, Subscription} from 'rxjs';
import {map, switchMap, tap} from 'rxjs/operators';


@Component({
  selector: 'app-timer-component',
  template: `
    <div class="info__time"
         [ngClass]="{'red': minutes == 0 && (seconds < 10 && seconds != 0)}">
      <div class="participant__score_controls grid_controls">
        <app-number-controls
          (valueChanged)="updateMinutes($event)"
          *ngIf="showControls"></app-number-controls>
        <app-number-controls
          (valueChanged)="updateSeconds($event)" *ngIf="showControls"></app-number-controls>
      </div>
      <span [ngClass]="{gold: !timerPaused}">
      {{(minutes < 10 &&
      minutes != 0 ? "0" : "") + minutes + ":" + (seconds < 10 ? "0" : "") + seconds}}</span>
      <app-timer-controls *ngIf="showControls" class="timer_start_stop_controls" [initialValue]="timerPaused" (valueChanged)="togglePause()"></app-timer-controls>
    </div>`,
  styleUrls: ['scoreboard-component.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TimerComponent implements OnInit, OnDestroy {
  @Input()
  minutes = 5;
  @Input()
  seconds = 0;

  @Input()
  showControls = false;

  timerPaused = true;
  timer$ = interval(1000);
  pauseTimer = new BehaviorSubject(true);
  timerObservable = this.pauseTimer.pipe(switchMap(paused => paused ? NEVER : this.timer$.pipe(tap(() => console.log('tick')), map(() => this.decreaseSeconds()))));
  timerSubscription = new Subscription();

  private decreaseSeconds() {
    if (this.seconds > 0) {
      this.seconds -= 1;
      this.cdref.markForCheck();
    } else {
      if (this.minutes > 0) {
        this.minutes -= 1;
        this.seconds = 59;
        this.cdref.markForCheck();
      }
    }
    if (this.seconds <= 0 && this.minutes <= 0) {
      this.togglePause();
    }
  }


  updateMinutes(number2: number) {
    if (this.minutes < 99 && this.minutes + number2 >= 0) {
      this.minutes += number2;
    } else {
      this.minutes = 0;
    }
  }

  updateSeconds(number2: number) {
    if (this.seconds < 60 && this.seconds + number2 >= 0) {
      this.seconds += number2;
    } else {
      this.seconds = 0;
    }
  }

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    if (event.key === ' ' || event.key === 'Spacebar') {
      this.togglePause();
    }
  }

  togglePause() {
    this.timerPaused = !this.timerPaused;
    this.pauseTimer.next(this.timerPaused);
  }

  constructor(private cdref: ChangeDetectorRef) {
    this.timerSubscription.add(this.timerObservable.subscribe());
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.timerSubscription.unsubscribe();
  }
}
