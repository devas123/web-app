import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {ComponentModalConfig, ModalSize, SuiModal} from "ng2-semantic";
import {Category, RangeRestriction, ValueRestriction} from "../../commons/model/competition.model";
import {FormBuilder, FormGroup} from "@angular/forms";

interface ICreateCategoryModalContext {
  category: Category;
}


export class CreateCategoryModal extends ComponentModalConfig<ICreateCategoryModalContext, string, string> {
  constructor(category: Category,size = ModalSize.Small) {
    super(AddRestrictionGroupModalComponent, {category});
    this.isClosable = false;
    this.transitionDuration = 200;
    this.size = size;
  }
}

@Component({
  selector: 'app-restriction-group-modal',
  template: `
      <div class="header">Configure restriction group</div>
      <div class="content">
          <div class="ui container">
              <div class="ui segment">
                  <form class="ui form" [formGroup]="form" [ngClass]="{error: (form.touched || form.dirty) && form.invalid}">
                      <div class="field">
                          <label>Name</label>
                          <div class="ui input">
                              <input type="text" name="name" placeholder="Name*" formControlName="name" required>
                          </div>
                      </div>
                      <div class="inline fields">
                          <div class="field">
                              <sui-radio-button name="example" value="Value" formControlName="type">
                                  Value
                              </sui-radio-button>
                          </div>
                          <div class="field">
                              <sui-radio-button name="example" value="Range" formControlName="type">
                                  Range
                              </sui-radio-button>
                          </div>
                      </div>
                  </form>
              </div>
          </div>

      </div>
      <div class="actions">
          <button class="ui red button" (click)="modal.deny('denied')">Cancel</button>
          <button class="ui green button" (click)="modal.approve('approved')" autofocus>OK</button>
      </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddRestrictionGroupModalComponent implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder,public modal: SuiModal<ICreateCategoryModalContext, string, string>) {
  }

  ngOnInit() {
    this.form=this.fb.group({});
  }

}
