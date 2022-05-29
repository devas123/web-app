import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from "@angular/core";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'compmanager-frontend-button',
  template: `
    <div class="ui button" [ngClass]="{disabled}" (click)="onClick($event)">
      {{name}}
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent {
  @Input()
  disabled: boolean
  @Input()
  name: string
  @Output()
  click = new EventEmitter();

  onClick(event: Event) {
    event.stopPropagation();
    this.click.next();
  }
}
