import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {
  BracketsType,
  CategoryBracketsStage,
  StageInputDescriptor,
  StageType
} from '../../../../commons/model/competition.model';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import produce from 'immer';

@Component({
  selector: 'app-generate-brackets-form',
  templateUrl: './generate-brackets-form.component.html',
  styleUrls: ['./generate-brackets-form.component.scss']
})
export class GenerateBracketsFormComponent implements OnInit {
  @Output()
  generateStages = new EventEmitter<CategoryBracketsStage[]>();

  @Input()
  set competitorsSize(value: number) {
    this._competitorsSize = value || 0;
    if (this.stageDescriptions.length > 0) {
      this.stageDescriptions.at(0).get('inputDescriptor').patchValue({
        numberOfCompetitors: value
      });
    }
  }

  _competitorsSize = 0;
  bracketTypes: BracketsType[] = ['SINGLE_ELIMINATION', 'DOUBLE_ELIMINATION'];
  stageTypes: StageType[] = ['PRELIMINARY', 'FINAL'];
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  stageDescriptionConfig = (index: number) => this.fb.group({
    stageType: ['', [Validators.required]],
    bracketType: ['', [Validators.required]],
    name: [''],
    waitForPrevious: [''],
    hasThirdPlaceFight: [''],
    inputDescriptor: this.fb.group({
      numberOfCompetitors: [{value: index === 0 ? this.competitorsSize : '', disabled: index === 0}]
    })
  });

  private createForm() {
    this.form = this.fb.group({
      stageDescriptions: this.fb.array([
        this.stageDescriptionConfig(0)
      ])
    });
  }

  get stageDescriptions() {
    return this.form.get('stageDescriptions') as FormArray;
  }

  addStageDescription() {
    this.stageDescriptions.push(this.stageDescriptionConfig(Math.max(0, this.stageDescriptions.length)));
  }

  ngOnInit() {
  }

  removeStageDescription(i: number) {
    this.stageDescriptions.removeAt(i);
  }

  setControlValue<T>(i: number, patch: any) {
    this.stageDescriptions.at(i).patchValue(patch);

  }

  setHasThirdPlaceFight(i: number, $event: boolean) {
    this.setControlValue(i, {hasThirdPlaceFight: $event});
  }

  setWaitForPrevious(i: number, $event: boolean) {
    this.setControlValue(i, {waitForPrevious: $event});
  }

  setStageType(i: number, $event: StageType) {
    this.setControlValue(i, {stageType: $event});
  }

  setBracketsType(i: number, $event: BracketsType) {
    this.setControlValue(i, {bracketType: $event});
  }

  removeAllStages() {
    this.stageDescriptions.clear();
    this.stageDescriptions.push(this.stageDescriptionConfig(0));
  }

  doGenerateStages() {
    const formValue = this.stageDescriptions.value as CategoryBracketsStage[];
    this.generateStages.next(formValue.map((value, index) => produce(value, draft => {
      draft.stageOrder = index;
      if (index === 0) {
        draft.stageType = 'PRELIMINARY';
        draft.inputDescriptor = {numberOfCompetitors: this._competitorsSize} as StageInputDescriptor;
      }
      if (index === formValue.length - 1) {
        draft.stageType = 'FINAL';
      } else {
        draft.hasThirdPlaceFight = false;
      }
    })));
  }
}
