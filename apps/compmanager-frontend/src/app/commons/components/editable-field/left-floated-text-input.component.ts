import {ChangeDetectionStrategy, Component, Input} from "@angular/core";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'compmanager-frontend-left-floated-text-input',
  template: `
    <compmanager-frontend-left-floated-container>
      <compmanager-frontend-transparent-right-floated-container>
        <div class="description">{{name}}<span>&nbsp;&nbsp;</span></div>
        <input type="text" [formControl]="control">
      </compmanager-frontend-transparent-right-floated-container>
    </compmanager-frontend-left-floated-container>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LeftFloatedTextInputComponent {
  @Input()
  control: FormControl

  @Input()
  name: string
  constructor() {
  }
}
