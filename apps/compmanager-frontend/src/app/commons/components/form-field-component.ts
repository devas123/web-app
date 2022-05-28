import {ChangeDetectionStrategy, Component, Input} from "@angular/core";
import {AbstractControl, FormControl} from "@angular/forms";

@Component({
  selector: 'compmanager-frontend-form-field',
  template: `
    <div class="field"
         [ngClass]="{error: control.invalid && (control.touched || control.dirty)}">
      <div class="ui input">
        <input [type]="type" [name]="name" [placeholder]="placeholder" [formControl]="control">
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormFieldComponent {
  @Input()
  control: FormControl
  @Input()
  name: string
  @Input()
  placeholder: string
  @Input()
  type: string

}
