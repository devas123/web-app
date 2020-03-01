import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators} from '@angular/forms';
import {ComponentModalConfig, ModalSize, SuiModal} from 'ng2-semantic';
import {BracketsType, CompetitorSelector, OperatorType, SelectorClassifier} from '../../../../commons/model/competition.model';

export class AddInputSelectorFormModal extends ComponentModalConfig<IAddInputSelectorFormContext, CompetitorSelector[], void> {
  constructor(bracketsType: BracketsType, stageNumber: number, precedingStages: number[], size = ModalSize.Small) {
    super(AddInputSelectorFormComponent, {bracketsType, stageNumber, precedingStages});
    this.isClosable = true;
    this.transitionDuration = 200;
    this.size = size;
  }
}

export interface IAddInputSelectorFormContext {
  stageNumber: number;
  bracketsType: BracketsType;
  precedingStages: number[];
}

@Component({
  selector: 'app-add-group-form',
  template: `
    <div class="header">Add competitor selectors for stage #{{modal.context.stageNumber + 1}}</div>
    <div class="content" [formGroup]="f">
      <div class="ui form" formArrayName="form" [ngClass]="{error: form.invalid && form.touched}">
        <ng-container *ngFor="let sel of form.controls; index as i; last as isLast">
          <div class="ui fields" [formGroupName]="i">
            <div class="ui field" *ngIf="i > 0">
              <sui-select
                formControlName="logicalOperator"
                [isDisabled]="false"
                [options]="logicalOperators"
                placeholder="Logical operator"
                #logicalOperator>
                <sui-select-option *ngFor="let o of logicalOperator.filteredOptions"
                                   [value]="o"></sui-select-option>
              </sui-select>
            </div>
            <div class="ui field">
              <sui-select
                [isDisabled]="false"
                formControlName="applyToStageNumber"
                [optionFormatter]="stageNumbersFormatter"
                [options]="modal.context.precedingStages"
                placeholder="Apply to stage"
                #applyToStageNumber>
                <sui-select-option *ngFor="let o of applyToStageNumber.filteredOptions"
                                   [value]="o"></sui-select-option>
              </sui-select>
            </div>
            <div class="ui field">
              <sui-select
                formControlName="classifier"
                [isDisabled]="false"
                [options]="selectorClassifiers"
                placeholder="Selector"
                #specifierSelect>
                <sui-select-option *ngFor="let o of specifierSelect.filteredOptions"
                                   [value]="o"></sui-select-option>
              </sui-select>
            </div>
            <div class="ui field">
              <sui-select
                formControlName="operator"
                [isDisabled]="false"
                [options]="operations"
                placeholder="Operation"
                #operatorTypeSelect>
                <sui-select-option *ngFor="let o of operatorTypeSelect.filteredOptions"
                                   [value]="o"></sui-select-option>
              </sui-select>
            </div>
            <div class="ui field">
              <div class="ui action input">
                <input type="text" [formControl]="getLastSelectorValueControl(i)" placeholder="Add value">
                <button class="ui icon button" (click)="addSelectorValue(i)"><i class="check icon"></i></button>
              </div>
            </div>
          </div>
          <app-tag-list [values]="getSelectorValue(i).controls.slice(0, getSelectorValue(i).controls.length - 1)"
                        [vertical]="true">
            <ng-template let-control="$implicit" let-k="index">
              <div>
                <span>{{control.value}}</span>
                <i class="delete icon" (click)="removeSelectorValue(i, k)"></i>
              </div>
            </ng-template>
          </app-tag-list>
          <div class="ui buttons padded">
            <button class="ui icon button" *ngIf="isLast" (click)="addFormLine()"><i class="plus icon"></i></button>
            <button class="ui icon button" (click)="removeFormLine(i)"><i class="delete icon"></i></button>
          </div>
        </ng-container>
        <button class="ui icon button" *ngIf="form.controls?.length <= 0" (click)="addFormLine()"><i class="plus icon"></i></button>
      </div>
    </div>
    <div class="actions">
      <button class="ui red button" (click)="modal.deny(undefined)">Cancel</button>
      <button class="ui green button" [disabled]="form.invalid" (click)="addOptions()" autofocus>OK</button>
    </div>`,
  styleUrls: ['./generate-brackets-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddInputSelectorFormComponent implements OnInit {

  f: FormGroup;

  errorMessages = {
    required: 'Required',
    maxLength: 'Too long',
    max: 'Too big'
  };

  selectorClassifiers = Object.keys(SelectorClassifier).filter(key => !isNaN(Number(SelectorClassifier[key])));
  operations = Object.keys(OperatorType).filter(key => !isNaN(Number(OperatorType[key])));

  logicalOperators = ['AND', 'OR', 'AND NOT', 'OR NOT', 'NOT'];

  stageNumbersFormatter = (opt: number) => `${opt + 1}`;

  getErrorMsg(fieldName: string, errors: ValidationErrors) {
    if (errors) {
      return Object.keys(errors).map(error => {
        if (this.errorMessages.hasOwnProperty(error)) {
          return fieldName + ' is ' + this.errorMessages[error];
        } else {
          return fieldName + ' is invalid';
        }
      }).join(',');
    }
  }

  getSelectorValue(i: number) {
    return this.form.at(i).get('selectorValue') as FormArray;
  }

  getLastSelectorValueControl(i: number) {
    return this.getSelectorValue(i).controls[this.getSelectorValue(i).controls.length - 1] as FormControl;
  }

  addOptions() {
    const groups = this.form.value as CompetitorSelector[];
    if (groups) {
      this.modal.approve(groups);
    } else {
      this.modal.deny(undefined);
    }
    this.form.reset();
  }

  addFormLine() {
    this.form.push(this.competitorSelectorConfig());
    this.cd.detectChanges();
  }

  removeFormLine(i: number) {
    this.form.removeAt(i);
  }

  constructor(private fb: FormBuilder,
              private cd: ChangeDetectorRef,
              public modal: SuiModal<IAddInputSelectorFormContext, CompetitorSelector[], void>) {
  }

  ngOnInit() {
    this.f = this.fb.group({form: this.fb.array([this.competitorSelectorConfig()])});
  }

  get form() {
    return this.f.get('form') as FormArray;
  }

  private competitorSelectorConfig() {
    return this.fb.group({
      applyToStageNumber: ['', [Validators.required, Validators.maxLength(50)]],
      logicalOperator: ['', [Validators.maxLength(50)]],
      classifier: ['', [Validators.required, Validators.maxLength(50)]],
      operator: ['', [Validators.required, Validators.maxLength(50)]],
      selectorValue: this.fb.array([['']])
    });
  }

  removeSelectorValue(i: number, k) {
    this.getSelectorValue(i).removeAt(k);
  }

  addSelectorValue(i: number) {
    this.getSelectorValue(i).push(this.fb.control(['']));
  }
}
