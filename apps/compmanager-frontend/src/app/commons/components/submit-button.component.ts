import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from "@angular/core";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'compmanager-frontend-submit-button',
  template: `
    <div class="ui positive submit button" [ngClass]="{disabled}" (click)="onClick($event)">
      {{name}}
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SubmitButtonComponent {
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
