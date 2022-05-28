import {ChangeDetectionStrategy, Component, Input} from "@angular/core";
import {AbstractControl, FormControl} from "@angular/forms";

@Component({
  selector: 'compmanager-frontend-form-error-message',
  template: `
    <div class="item" *ngIf="control?.errors">
      <div class="content">
        <div class="header">{{name}}: {{control?.errors | json}}</div>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormErrorMessageComponent {
  @Input()
  control: AbstractControl
  @Input()
  name: string
}
