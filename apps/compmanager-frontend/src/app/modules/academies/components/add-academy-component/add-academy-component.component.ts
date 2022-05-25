import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'compmanager-frontend-add-academy-component',
  template: `
    <form class="ui form" [formGroup]="academyForm">
      <div class="field">
        <label>Name</label>
        <div class="two fields">
          <div class="field">
            <input type="text" name="name" placeholder="Academy Name">
          </div>
          <div class="field">
            <input type="text" name="shipping[last-name]" placeholder="Last Name">
          </div>
        </div>
      </div>
    </form>`,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddAcademyComponentComponent {

  academyForm: FormGroup;

  constructor() {
  }
}
