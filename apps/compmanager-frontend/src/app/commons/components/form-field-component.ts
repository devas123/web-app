import {ChangeDetectionStrategy, Component, Input} from "@angular/core";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'compmanager-frontend-form-generic-field',
  template: `
    <div class="ui field"
         [ngClass]="{error: control.invalid && (control.touched || control.dirty)}">
      <ng-content select="label"></ng-content>
      <div class="ui input">
        <ng-content select="[input]"></ng-content>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormFieldComponent {
  @Input()
  control: FormControl
}
