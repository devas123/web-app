import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {FullAcademyInfo} from "@frontend-nx/protobuf";
import {generateUuid} from "../../../account/utils";

@Component({
  selector: 'compmanager-frontend-add-academy-component',
  template: `
    <div class="ui segment">
      <form class="ui form" [formGroup]="academyForm">
        <div class="field">
          <div class="field">
            <label>Academy name</label>
            <input type="text" name="academyName" placeholder="Academy Name" formControlName="academyName">
          </div>
          <div class="field">
            <label>Academy manager</label>
            <input type="text" name="academyManager" placeholder="Academy manager" formControlName="academyManager">
          </div>
        </div>
        <div class="ui positive submit button" [ngClass]="{disabled: academyForm.invalid}" (click)="submitForm()">
          Create
        </div>
      </form>
    </div>`,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddAcademyComponentComponent {

  academyForm: FormGroup;

  @Input()
  userId: number

  @Output()
  academyAdded: EventEmitter<FullAcademyInfo> = new EventEmitter<FullAcademyInfo>();

  constructor(private fb: FormBuilder) {
    this.academyForm = fb.group({
      academyName: ['', [Validators.required]],
      academyManager: ['', [Validators.required]]
    })
  }

  get academyName() {
    return this.academyForm.get('academyName')
  }
  get academyManager() {
    return this.academyForm.get('academyManager')
  }

  submitForm() {
    const academy = <FullAcademyInfo>{
      id: generateUuid(),
      coaches: [this.academyManager.value],
      name: this.academyName.value,
      contactEmail: 'devas123@bk.ru', //TODO - take email from profile.
      contactUserId: Number(this.userId).toString(),
      created: new Date(),
      updated: new Date()
    };
    this.academyAdded.next(academy);
  }
}
