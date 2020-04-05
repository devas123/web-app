import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';


@Component({
  selector: 'app-number-controls',
  template: `
    <div class="number_controls">
      <button class="medium ui icon button transparent" (click)="changeAmount(1)">
        <i class="ui plus icon"></i>
      </button>
      <button class="medium ui icon button transparent" (click)="changeAmount(-1)">
        <i class="ui minus icon"></i>
      </button>
    </div>`,
  styleUrls: ['scoreboard-component.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NumberControlsComponent implements OnInit {
  @Input()
  changeCoeff = 1;

  @Output()
  valueChanged = new EventEmitter<number>();

  changeAmount(val: number) {
    this.valueChanged.next(this.changeCoeff * val);
  }

  ngOnInit(): void {
  }
}
