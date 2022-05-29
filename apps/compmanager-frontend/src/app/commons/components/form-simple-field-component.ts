import {ChangeDetectionStrategy, Component, Input} from "@angular/core";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'compmanager-frontend-form-simple-field',
  template: `
    <compmanager-frontend-form-generic-field [control]="control">
      <label>{{labelName || placeholder}}</label>
      <input input [type]="type" [name]="name" [placeholder]="placeholder" [formControl]="control">
    </compmanager-frontend-form-generic-field>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormSimpleFieldComponent {
  @Input()
  control: FormControl
  @Input()
  name: string
  @Input()
  placeholder: string
  @Input()
  labelName: string
  @Input()
  type: string

}
