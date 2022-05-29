import {ChangeDetectionStrategy, Component, Input} from "@angular/core";
import {AbstractControl, FormControl} from "@angular/forms";

@Component({
  selector: 'compmanager-frontend-form-error-list',
  template: `
    <sui-message class="error" [isDismissable]="isDismissable">
      <div class="ui relaxed list">
        <ng-content></ng-content>
      </div>
    </sui-message>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormErrorListComponent {
  @Input()
  isDismissable: boolean
}
