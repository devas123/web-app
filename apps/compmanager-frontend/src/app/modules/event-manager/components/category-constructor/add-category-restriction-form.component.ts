import {ChangeDetectionStrategy, Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ComponentModalConfig, ModalSize, SuiModal, SuiMultiSelect} from '@frontend-nx/ng2-semantic-ui';

import {
  defaultRestrictionFormatter,
} from '../../../../commons/model/competition.model';
import {generateUuid} from '../../../account/utils';
import {CategoryRestriction, CategoryRestrictionType} from "@frontend-nx/protobuf";

export interface IAddCategoryRestrictionContext {
  name: string;
  defaultRestrictions: CategoryRestriction[];
}

export interface IAddCategoryRestrictionResult {
  restrictions: CategoryRestriction[];
}

export class AddCategoryRestrictionModal extends ComponentModalConfig<IAddCategoryRestrictionContext, IAddCategoryRestrictionResult, void> {
  constructor(name: string, defaultRestrictions: CategoryRestriction[], size = ModalSize.Small) {
    super(AddCategoryRestrictionFormComponent, {name, defaultRestrictions});
    this.isClosable = true;
    this.transitionDuration = 200;
    this.size = size;
  }
}


@Component({
  selector: 'app-add-category-restriction',
  template: `
    <div class="header">Add option</div>
    <div class="content">
      <sui-multi-select
        class="selection"
        [options]="defaultRestrictions"
        placeholder="Select from defaults"
        [optionFormatter]="defaultRestrictionFmt"
        [isSearchable]="false"
        [isDisabled]="false"
        #multiSelect>
        <sui-select-option *ngFor="let option of multiSelect.filteredOptions"
                           [value]="option">
        </sui-select-option>
      </sui-multi-select>
      <div class="ui form" [formGroup]="form"
           *ngIf="!multiSelect.selectedOptions || multiSelect.selectedOptions.length === 0">
        <div class="field">
          <div class="ui input">
            <sui-select class="selection" placeholder="Type"
                        (selectedOptionChange)="setType($event)"
                        [options]="types"
                        [isSearchable]="false"
                        [isDisabled]="false"
                        #select>
              <sui-select-option *ngFor="let option of select.filteredOptions"
                                 [value]="option">
              </sui-select-option>
            </sui-select>
          </div>
        </div>
        <div class="field">
          <div class="ui input">
            <input type="text" name="name" placeholder="Name*" formControlName="name">
          </div>
        </div>
        <div class="field" *ngIf="type === 'Value'">
          <div class="ui input">
            <input type="text" name="value" placeholder="Value" formControlName="value">
          </div>
        </div>
        <ng-container *ngIf="type === 'Range'">
          <div class="field">
            <div class="ui input">
              <input type="text" name="minvalue" placeholder="Minimum value" formControlName="minValue">
            </div>
          </div>
          <div class="field">
            <div class="ui input">
              <input type="text" name="maxvalue" placeholder="Maximum value" formControlName="maxValue">
            </div>
          </div>
        </ng-container>
        <div class="field">
          <div class="ui input">
            <input type="text" name="unit" placeholder="Units" formControlName="unit">
          </div>
        </div>
        <div class="field">
          <div class="ui input">
            <input type="text" name="alias" placeholder="Alias" formControlName="alias">
          </div>
        </div>
      </div>
    </div>
    <div class="actions">
      <button class="ui red button" (click)="modal.deny(undefined)">Cancel</button>
      <button class="ui green button"
              [disabled]="form.invalid && !multiSelect.selectedOptions"
              (click)="triggerAddRestriction()" autofocus>OK
      </button>
    </div>
  `,
  styleUrls: ['./category-constructor.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddCategoryRestrictionFormComponent implements OnInit {
  @ViewChild('multiSelect')
  multiSelect: SuiMultiSelect<CategoryRestriction, CategoryRestriction>;
  restrictionForm: FormGroup;
  types: CategoryRestrictionType[] = this.getDefaultRestricionTypes()
  defaultRestrictionFmt = defaultRestrictionFormatter();

  get form() {
    return this.restrictionForm;
  }

  get defaultRestrictions() {
    return this.modal.context.defaultRestrictions || [];
  }

  triggerAddRestriction() {
    if (this.multiSelect.selectedOptions && this.multiSelect.selectedOptions.length > 0) {
      this.modal.approve({restrictions: this.multiSelect.selectedOptions});
    } else {
      const restriction = this.form.value as CategoryRestriction;
      if (!restriction.restrictionId) {
        restriction.restrictionId = generateUuid();
      }
      restriction.name = this.modal.context.name;
      this.modal.approve({restrictions: [restriction]});
    }
  }


  constructor(private fb: FormBuilder, public modal: SuiModal<IAddCategoryRestrictionContext, IAddCategoryRestrictionResult, void>) {
  }

  ngOnInit() {
    this.restrictionForm = this.fb.group({
      name: this.fb.control({value: this.modal.context.name, disabled: true}),
      type: [null, [Validators.required]],
      minValue: [],
      maxValue: [],
      value: [],
      alias: [],
      unit: []
    });
  }



  setType($event: CategoryRestrictionType) {
    this.form.patchValue({
      type: $event
    });
  }

  get type() {
    return this.form.get('type')?.value as CategoryRestrictionType;
  }


  getDefaultRestricionTypes(): CategoryRestrictionType[] {
    return Object.values(CategoryRestrictionType).map(v => v as CategoryRestrictionType)
  }


}

