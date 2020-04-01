import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ComponentModalConfig, ModalSize, SuiModal} from '@devas123/ng2-semantic';
import {BracketsType, CompetitorSelector, OperatorType, SelectorClassifier} from '../../../../commons/model/competition.model';
import produce from 'immer';

export class AddInputSelectorFormModal extends ComponentModalConfig<IAddInputSelectorFormContext, CompetitorSelector[], void> {
  constructor(bracketsType: BracketsType, stageNumber: number, precedingStages: string[], size = ModalSize.Small) {
    super(AddInputSelectorFormComponent, {bracketsType, stageNumber, precedingStages});
    this.isClosable = true;
    this.transitionDuration = 200;
    this.size = size;
  }
}

export interface IAddInputSelectorFormContext {
  stageNumber: number;
  bracketsType: BracketsType;
  precedingStages: string[];
}

@Component({
  selector: 'app-add-group-form',
  template: `
    <div class="header">Add competitor selectors for stage #{{modal.context.stageNumber + 1}}</div>
    <div class="content" [formGroup]="f">
      <div class="ui form" formArrayName="form" [ngClass]="{error: form.invalid && form.touched}">
        <section *ngFor="let sel of form.controls; index as i; last as isLast">
          <div class="ui field">
            <div class="ui label" *ngIf="i > 0">AND</div>
          </div>
          <div class="ui fields" [formGroupName]="i">
            <div class="ui field">
              <sui-select
                [isDisabled]="false"
                formControlName="applyToStageId"
                [optionFormatter]="stageNumbersFormatter"
                [options]="modal.context.precedingStages"
                placeholder="From stage"
                #applyToStageId>
                <sui-select-option *ngFor="let o of applyToStageId.filteredOptions"
                                   [value]="o"></sui-select-option>
              </sui-select>
            </div>
            <div class="ui field">
              <sui-select
                formControlName="classifier"
                [isDisabled]="false"
                [optionFormatter]="selectorClassifiersFormatter"
                [options]="selectorClassifiers"
                placeholder="Selector"
                #specifierSelect>
                <sui-select-option *ngFor="let o of specifierSelect.filteredOptions"
                                   [value]="o"></sui-select-option>
              </sui-select>
            </div>
            <div class="ui field">
              <div class="ui input">
                <input type="number" [formControl]="getSelectorValue(i)" placeholder="Value">
              </div>
            </div>
            <button class="ui icon button" *ngIf="isLast" (click)="addFormLine()"><i class="plus icon"></i></button>
            <button class="ui icon button" (click)="removeFormLine(i)"><i class="delete icon"></i></button>
          </div>
        </section>
        <button class="ui icon button" *ngIf="form.controls?.length <= 0" (click)="addFormLine()"><i class="plus icon"></i></button>
      </div>
    </div>
    <div class="actions">
      <button class="ui red button" (click)="modal.deny(undefined)">Cancel</button>
      <button class="ui green button" [disabled]="f.invalid" (click)="addOptions()" autofocus>OK</button>
    </div>`,
  styleUrls: ['./generate-brackets-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddInputSelectorFormComponent implements OnInit {

  f: FormGroup;
  selectorClassifiers = Object.keys(SelectorClassifier).filter(key => !isNaN(Number(SelectorClassifier[key])));
  stageNumbersFormatter = (opt: string) => `${this.modal.context.precedingStages.indexOf(opt) + 1}`;
  selectorClassifiersFormatter = (opt: string) => opt === 'LAST_N_PLACES' ? 'Take last' : 'Take first';
  addOptions() {
    const groups = this.form.value as CompetitorSelector[];
    if (groups) {
      this.modal.approve(produce(groups, draft => { draft.forEach(d => d.operator = OperatorType.EQUALS); }));
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
      applyToStageId: ['', [Validators.required]],
      logicalOperator: ['AND'],
      classifier: ['', [Validators.required]],
      selectorValue: this.fb.array([this.fb.control(0, [Validators.required, Validators.min(1)])], [Validators.required])
    });
  }

  getSelectorValue(i) {
    return this.getSelectorValues(i).at(0) as FormControl;
  }

  getSelectorValues(i: number) {
    return this.form.at(i).get('selectorValue') as FormArray;
  }
}
