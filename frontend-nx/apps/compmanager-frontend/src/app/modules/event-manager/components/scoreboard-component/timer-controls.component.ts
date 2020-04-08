import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';


@Component({
  selector: 'app-timer-controls',
  template: `
    <div class="number_controls">
      <button class="ui small icon button transparent" (click)="changeAmount(1)">
        <i *ngIf="initialValue" class="fas fa-play"></i>
        <i *ngIf="!initialValue" class="fas fa-pause"></i>
      </button>
    </div>`,
  styleUrls: ['scoreboard-component.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TimerControlsComponent implements OnInit {
  @Output()
  valueChanged = new EventEmitter<boolean>();

  @Input()
  initialValue = false;

  changeAmount(val: number) {
    this.initialValue = !this.initialValue;
    this.valueChanged.next(this.initialValue);
  }

  ngOnInit(): void {
  }
}
