import {ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {
  AdditionalGroupSortingDescriptor,
  BracketsType,
  CategoryBracketsStage,
  CompetitorSelector,
  FightResultOption,
  GroupSortDirection,
  GroupSortSpecifier,
  OperatorType,
  SelectorClassifier,
  StageType
} from '../../../../commons/model/competition.model';
import {AbstractControl, FormArray, FormBuilder, FormGroup, ValidationErrors, Validators} from '@angular/forms';
import produce from 'immer';
import {SuiModalService} from '@frontend-nx/ng2-semantic-ui';
import {AddFightResultOptionModal} from './add-fight-result-option-form.component';
import {AddInputSelectorFormModal} from './add-input-selector-form.component';
import {collectingReducer, generateUuid} from '../../../account/utils';
import {debounceTime, throttle} from 'rxjs/operators';

@Component({
  selector: 'app-generate-brackets-form',
  templateUrl: './generate-brackets-form.component.html',
  styleUrls: ['./generate-brackets-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GenerateBracketsFormComponent implements OnInit {

  @Input()
  set smallScreen(value: boolean) {
    if (!value) {
      this.ngStyle = {'grid-template-columns': `repeat(${2}, 50%)`};
    } else {
      this.ngStyle = {'grid-template-columns': '100%'};
    }
  }

  ngStyle: any;


  @Input()
  set competitorsSize(value: number) {
    this._competitorsSize = value || 0;
    if (this.stageDescriptions.length > 0) {
      this.stageDescriptions.at(0).get('inputDescriptor').patchValue({
        numberOfCompetitors: value
      });
    }
  }

  constructor(private fb: FormBuilder, private modalService: SuiModalService,
              private cd: ChangeDetectorRef) {
    this.createForm();
  }

  get stageDescriptions() {
    return this.form && this.form.get('stageDescriptions') as FormArray;
  }

  @Output()
  generateStages = new EventEmitter<CategoryBracketsStage[]>();

  @Input()
  defaultFightResultOptions: FightResultOption[];


  possibleGroupSortSpecifiers = Object.keys(GroupSortSpecifier).filter(key => !isNaN(Number(GroupSortSpecifier[key])));
  possibleGroupSortDirections = Object.keys(GroupSortDirection).filter(key => !isNaN(Number(GroupSortDirection[key])));

  @Input()
  competitionId: string;

  _competitorsSize = 0;
  bracketTypes: BracketsType[] = ['SINGLE_ELIMINATION', 'DOUBLE_ELIMINATION', 'GROUP'];
  stageTypes: StageType[] = ['PRELIMINARY', 'FINAL'];
  form: FormGroup;
  private typeValidator = (control: FormGroup) => {
    const stageType = this.getStageType(control);
    if (stageType === 'PRELIMINARY' && control.get('bracketType').value === 'DOUBLE_ELIMINATION') {
      return {'typeValidator': true};
    }
    return null;
  };
  private finalStageExistsValidator = (control: FormGroup) => {
    const stages = control.get('stageDescriptions') as FormArray;
    if (!stages.controls.find(c => this.getStageType(c) === 'FINAL')) {
      return {'finalStageExistsValidator': true};
    }
    console.log(control);
    return null;
  };
  private outputSizeValidator = (index: number) => (control: FormGroup) => {
    const stageCtrl = control?.parent?.parent;
    if (stageCtrl) {
      const stageType = this.getStageType(stageCtrl);
      const bracketsType = this.getBracketsType(stageCtrl);
      const inputSize = this.inputCompetitorsForStage(stageCtrl, index);
      const selectorInput = this.selectorsProvidedInput(stageCtrl);
      const output = control.value;
      if (stageType === 'PRELIMINARY') {
        if (selectorInput && selectorInput < output) {
          return {'outputSizeValidator': true};
        } else if (inputSize < output) {
          return {'outputSizeValidator': true};
        }
      }
    }
    return null;
  };

  private numberOfCompetitorsValidator = (index: number) => (control: FormGroup): ValidationErrors | null => {
    const errors = {};
    const selectorsInput = this.selectorsProvidedInput(control);
    if (selectorsInput) {
      const selectorsValid = Object.keys(selectorsInput).map(k => {
        const ctrl = this.stageDescriptions.controls.find(c => c.get('id').value === k);
        const targetStageOutputSize = (ctrl && this.getOutputSize(ctrl)) || -1;
        return selectorsInput[k] <= targetStageOutputSize;
      })
        .reduce((previousValue, currentValue) => previousValue && currentValue, true);
      if (!selectorsValid) {
        errors['selectorsValid'] = true;
      }
    } else {
      const previousStageOutputSize = index === 0 ? this._competitorsSize : this.getOutputSize(this.stageDescriptions.at(index - 1));
      const currentInput = this.inputCompetitorsForStage(control, index);
      if (currentInput > previousStageOutputSize) {
        errors['numberOfCompetitorsValidator'] = true;
      }
      if (currentInput <= 0 || index === 0 && currentInput !== this._competitorsSize) {
        errors['numberOfCompetitorsValidator'] = true;
      }
    }
    return Object.keys(errors).length > 0 ? errors : null;
  };

  updateView() {
    this.cd.markForCheck();
  }

  inputCompetitorsForStage = (sd: AbstractControl, index: number) => {
    const bracketsType = sd.get('bracketType').value as BracketsType;
    if (bracketsType !== 'GROUP') {
      return index === 0 ? this._competitorsSize : sd.get('inputDescriptor.numberOfCompetitors').value;
    } else {
      const groupDescriptors = sd.get('groupDescriptors') as FormArray;
      const groupInputSize: number = groupDescriptors.controls.map(c => c.get('size').value || 0)
        .reduce(((previousValue, currentValue) => previousValue + currentValue), 0);
      return groupInputSize;
    }
  };

  selectorsProvidedInput = (sd: AbstractControl) => {
    const selectors = sd.get('inputDescriptor.selectors').value as CompetitorSelector[];
    const isManual = this.isManualDistributionType(sd);
    if (!isManual && selectors && selectors.length > 0) {
      return selectors.map(s => ({target: s.applyToStageId, number: +s.selectorValue[0] || 0})).reduce((previousValue, currentValue) => {
        if (!previousValue[currentValue.target]) {
          previousValue[currentValue.target] = 0;
        }
        previousValue[currentValue.target] += currentValue.number;
        return previousValue;
      }, {});
    }
  };


  getDefaultNumberOfCompetitors(i) {
    const sd = this.stageDescriptions.at(i) as FormGroup;
    return this.inputCompetitorsForStage(sd, i);
  }

  getOutputSize(stage: AbstractControl) {
    return stage?.get('stageResultDescriptor.outputSize')?.value;
  }


  getStageInputNumberOfCompetitorsByAdvancedSelectors(stage: AbstractControl) {
    const byStages = this.selectorsProvidedInput(stage);
    return (byStages && Object.keys(byStages).map(k => byStages[k] || 0).reduce((a, b) => a + b, 0)) || 0;
  }


  stageDescriptionConfig = (index: number) => this.fb.group({
    id: [generateUuid(), [Validators.required]],
    stageType: ['', [Validators.required]],
    bracketType: ['', [Validators.required]],
    name: [''],
    waitForPrevious: [true],
    hasThirdPlaceFight: [false],
    stageResultDescriptor: this.fb.group({
      forceManualAssignment: [false],
      outputSize: [0, [Validators.required, this.outputSizeValidator(index)]],
      fightResultOptions: this.fb.array([], [Validators.required]),
      additionalGroupSortingDescriptors: this.fb.array([])
    }),
    inputDescriptor: this.fb.group({
      distributionType: ['AUTOMATIC', [Validators.required]],
      selectors: this.fb.array([]),
      numberOfCompetitors: [{value: index === 0 ? this._competitorsSize : 0, disabled: index === 0}, [Validators.max(this._competitorsSize), Validators.min(0)]]
    }),
    groupDescriptors: this.fb.array([])
  }, {validators: [this.numberOfCompetitorsValidator(index), this.typeValidator]});

  groupDescriptorConfig = () => this.fb.group({
    size: [0, [Validators.required, Validators.min(0),
      Validators.max(this._competitorsSize)]],
    name: ['']
  });
  formatter = (option: FightResultOption) => (option && option.shortName) || 'Unnamed';
  filterFightResults = (options: FightResultOption[], query?: string) => (query && options.filter(fr => new RegExp(`.*${query.toLowerCase()}.*`).test(fr.shortName.toLowerCase()))) || options;

  private createForm() {
    this.form = this.fb.group({
      stageDescriptions: this.fb.array([
        this.stageDescriptionConfig(0)
      ])
    }, {validators: [this.finalStageExistsValidator]});
  }

  groupDescriptors(i: number) {
    return this.stageDescriptions.at(i).get('groupDescriptors') as FormArray;
  }

  addGroupDescriptor(i: number) {
    this.groupDescriptors(i).push(this.groupDescriptorConfig());
  }

  addStageDescription() {
    this.stageDescriptions.push(this.stageDescriptionConfig(Math.max(0, this.stageDescriptions.length)));
  }

  openAddFightOptionsModal(i: number) {
    this.modalService.open(new AddFightResultOptionModal(this.getBracketsType(this.stageDescriptions.at(i)), i))
      .onApprove((result: FightResultOption) => {
        this.addFightResultOptionControl(i, result);
      })
      .onDeny(_ => { /* deny callback */
      });
  }

  openAddInputSelectorModal(stage: AbstractControl, i: number) {
    this.modalService.open(new AddInputSelectorFormModal(this.getBracketsType(this.stageDescriptions.at(i)), i,
      this.stageDescriptions.controls.filter((c, ind) => this.getStageType(c) === 'PRELIMINARY' && ind < i).map((control) => control.get('id').value)))
      .onApprove((result: CompetitorSelector[]) => {
        result.forEach(r => this.addAdditionalCompetitorSelector(stage, r));
        this.updateView();
      })
      .onDeny(_ => { /* deny callback */
      });
  }


  ngOnInit() {
    const promise = val =>
      new Promise(resolve =>
        setTimeout(() => {
          this.stageDescriptions.controls.forEach(c => {
            c.get('stageResultDescriptor.outputSize')?.updateValueAndValidity({emitEvent: false});
          });
          this.inputSelectors.forEach(s => s.updateValueAndValidity({emitEvent: false}));
          this.form.updateValueAndValidity({emitEvent: false});
          this.updateView();
          resolve(val);
        })
      );
    this.form.valueChanges.pipe(
      debounceTime(300),
      throttle(promise)
    ).subscribe();
  }

  get inputSelectors() {
    return this.stageDescriptions.controls.map(c => this.getAdditionalCompetitorSelectors(c).controls).reduce(collectingReducer, []);
  }

  removeGroupDescriptor(i: number, k: number) {
    this.groupDescriptors(i).removeAt(k);
  }

  removeStageDescription(i: number) {
    this.stageDescriptions.removeAt(i);
  }

  setStageControlValue(i: number, patch: any) {
    this.stageDescriptions.at(i).patchValue(patch);
    this.updateView();
  }


  setHasThirdPlaceFight(i: number, $event: boolean) {
    this.setStageControlValue(i, {hasThirdPlaceFight: $event});
  }

  setWaitForPrevious(i: number, $event: boolean) {
    this.setStageControlValue(i, {waitForPrevious: $event});
  }

  setForceManualAssignment(i: number, $event: boolean) {
    this.setStageControlValue(i, {'stageResultDescriptor.forceManualAssignment': $event});
  }

  getName(stage: AbstractControl) {
    return stage.get('name').value;
  }

  setBracketsType(i: number, $event: BracketsType) {
    this.setStageControlValue(i, {bracketType: $event});
    if ($event === 'GROUP') {
      this.groupDescriptors(i).push(this.groupDescriptorConfig());
    } else {
      this.groupDescriptors(i).clear();
    }
  }


  setStageType(i: number, $event: StageType) {
    this.setStageControlValue(i, {stageType: $event});
  }

  getBracketsType(ctrl: AbstractControl) {
    return ctrl.get('bracketType').value as BracketsType;
  }

  removeAllStages() {
    this.stageDescriptions.clear();
    this.stageDescriptions.push(this.stageDescriptionConfig(0));
  }

  doGenerateStages() {
    const formValue = this.stageDescriptions.value as CategoryBracketsStage[];
    const stages = formValue.map((value, index) => produce(value, draft => {
      draft.stageOrder = index;
      if (draft.inputDescriptor) {
        const selectorsInput = (draft.inputDescriptor.distributionType !== 'MANUAL' && draft.inputDescriptor.selectors) && draft.inputDescriptor.selectors.map(s => +s.selectorValue[0] || 0).reduce((a, b) => a + b, 0);
        let numberOfCompetitors = selectorsInput || draft.inputDescriptor.numberOfCompetitors || this._competitorsSize;
        if (draft.bracketType === 'GROUP') {
          numberOfCompetitors = (draft.groupDescriptors && draft.groupDescriptors.map(g => g.size || 0).reduce((a, b) => a + b)) || 0;
        }
        draft.inputDescriptor.numberOfCompetitors = numberOfCompetitors;
        draft.inputDescriptor.id = value.id;
        if (!selectorsInput && index > 0) {
          const stage = formValue[index - 1];
          draft.inputDescriptor.selectors = [<CompetitorSelector>{
            classifier: SelectorClassifier.FIRST_N_PLACES,
            operator: OperatorType.EQUALS,
            selectorValue: [`${numberOfCompetitors}`],
            applyToStageId: `${stage.id}`,
            logicalOperator: 'AND'
          }];
        }
      }
      draft.stageResultDescriptor.id = value.id;
      draft.stageResultDescriptor.fightResultOptions = draft.stageResultDescriptor.fightResultOptions.filter(o => !!o);
      draft.inputDescriptor.selectors = draft.inputDescriptor.selectors.filter(o => !!o);
      draft.stageResultDescriptor.additionalGroupSortingDescriptors = draft.stageResultDescriptor.additionalGroupSortingDescriptors.filter(o => !!o);
    }));
    this.generateStages.next(stages);
  }

  addAdditionalSortingOption(i, specifier: any, direction: any) {
    // tslint:disable-next-line:triple-equals
    if (((specifier && direction) || specifier == 'MANUAL') && this.getAdditionalGroupSortingDescriptors(i).value
      && !this.getAdditionalGroupSortingDescriptorsValue(i).find(a => a.groupSortSpecifier === specifier)) {
      this.addAdditionalGroupSortingDescriptor(i, <AdditionalGroupSortingDescriptor>{groupSortSpecifier: specifier, groupSortDirection: direction});
    }
  }

  compSelectorFormatter = (opt: CompetitorSelector) => {
    const targetStage = this.stageDescriptions.controls.find(st => st.get('id').value === opt.applyToStageId);
    const name = (targetStage && (targetStage.value.name || `Stage ${this.stageDescriptions.controls.indexOf(targetStage) + 1}`)) || opt.applyToStageId.substring(0, 7);
    return `From ${name}: ${opt.classifier} ${opt.selectorValue.join()}`;
  };

  // tslint:disable-next-line:triple-equals
  // @ts-ignore
  // tslint:disable-next-line:triple-equals
  additionalGroupSortingFormatter = (opt: AdditionalGroupSortingDescriptor) => opt.groupSortSpecifier + (opt.groupSortSpecifier == 'MANUAL' ? '' : (':' + opt.groupSortDirection));

  addAllFightOptions(i: number) {
    const bracketsType = this.getBracketsType(this.stageDescriptions.at(i));
    if (bracketsType === 'GROUP') {
      this.defaultFightResultOptions.forEach(o => this.addFightResultOptionControl(i, o));
    } else {
      this.defaultFightResultOptions.filter(o => !o.draw).forEach(o => this.addFightResultOptionControl(i, o));
    }
    this.updateView();
  }


  // @ts-ignore
  private fightResultOptionControl = (o?: FightResultOption) => this.fb.group({
    description: [(o && o.description) || ''],
    shortName: [(o && o.shortName) || '', [Validators.required]],
    draw: [(o && o.draw) || false, [Validators.required]],
    winnerPoints: [(o && o.winnerPoints) || ''],
    winnerAdditionalPoints: [(o && o.winnerAdditionalPoints) || ''],
    loserPoints: [(o && o.loserPoints) || ''],
    loserAdditionalPoints: [(o && o.loserPoints)]
  });

  getFightResultOptions(i) {
    return this.stageDescriptions.at(i).get('stageResultDescriptor.fightResultOptions') as FormArray;
  }

  getFightResultOptionsValue(i) {
    return (this.getFightResultOptions(i) && this.getFightResultOptions(i).value && this.getFightResultOptions(i).value.filter(v => !!v)) || [];
  }

  getAdditionalGroupSortingDescriptors(i) {
    return this.stageDescriptions.at(i).get('stageResultDescriptor.additionalGroupSortingDescriptors') as FormArray;
  }

  getAdditionalCompetitorSelectors(stage: AbstractControl) {
    return stage.get('inputDescriptor.selectors') as FormArray;
  }

  isManualDistributionType(stage: AbstractControl) {
    return stage.get('inputDescriptor.distributionType').value === 'MANUAL';
  }

  setManualDistributionType(stage: AbstractControl, manual: boolean) {
    stage.get('inputDescriptor').patchValue({distributionType: manual ? 'MANUAL' : 'AUTOMATIC'});
  }

  addFightResultOptionControl(i: number, o?: FightResultOption) {
    const selectedOptions = this.getFightResultOptions(i).value.filter(v => !!v) as FightResultOption[];
    if (o && !selectedOptions.find(s => s.shortName === o.shortName)) {
      this.getFightResultOptions(i).push(this.fightResultOptionControl(o));
    }
    this.updateView();
  }

  mergeSelectedFightResultOptions(i: number, os: any[]) {
    const optionsControls = this.getFightResultOptions(i);
    const selectedOptions = optionsControls.value.filter(v => !!v) as FightResultOption[];
    const optionsToAdd = os.filter(o => !selectedOptions.find(s => s.shortName === o.shortName));
    const val = [...selectedOptions, ...optionsToAdd];
    optionsControls.clear();
    val.map(o => this.fightResultOptionControl(o)).forEach(c => optionsControls.push(c));
    this.updateView();
  }

  getFilteredDefaultOptions(i: number) {
    const optionsControls = this.getFightResultOptions(i);
    const selectedOptions = optionsControls.value.filter(v => !!v) as FightResultOption[];
    return this.defaultFightResultOptions.filter(d => !selectedOptions.find(s => s.shortName === d.shortName));
  }


  removeFightResultOpiton(i: number, k: number) {
    this.getFightResultOptions(i).removeAt(k);
  }

  addAdditionalGroupSortingDescriptor(i: number, o?: AdditionalGroupSortingDescriptor) {
    this.getAdditionalGroupSortingDescriptors(i).push(this.additionalGroupSortingDescriptorsControl(o));
  }

  removeAdditionalSortingOption(i: number, k: number) {
    this.getAdditionalGroupSortingDescriptors(i).removeAt(k);
  }

  private additionalGroupSortingDescriptorsControl =
    (o?: AdditionalGroupSortingDescriptor) => this.fb.group({
      groupSortDirection: [(o && o.groupSortDirection) || '', [Validators.pattern('DESC|ASC')]],
      groupSortSpecifier: [(o && o.groupSortSpecifier) || '', [Validators.required, Validators.pattern('DIRECT_FIGHT_RESULT|MANUAL|POINTS_DIFFERENCE|TOTAL_POINTS')]]
    });

  private mapSelectors = (selectors: string[]) => selectors.map(s => this.fb.control(s, [Validators.required]));

  private competitorSelector = (o?: CompetitorSelector) => this.fb.group({
    applyToStageId: [(o && o.applyToStageId) || '', [Validators.required]],
    logicalOperator: [(o && o.logicalOperator) || '', [Validators.required]],
    classifier: [(o && o.classifier) || '', [Validators.required]],
    operator: [(o && o.operator) || OperatorType.EQUALS, [Validators.required]],
    selectorValue: this.fb.array(this.mapSelectors((o && o.selectorValue) || []), [Validators.required])
  }, {validators: [this.stageInputValidator]});

  stageInputValidator = (control: FormGroup) => {
    const {applyToStageId, classifier, selectorValue} = control.value;
    const targetStage = this.stageDescriptions.controls.find(c => c.get('id').value === applyToStageId);
    if (!targetStage || this.getStageType(targetStage) !== 'PRELIMINARY') {
      return {'stageInputValidator': true};
    }
    const targetStageOutputSize = this.getOutputSize(targetStage);
    if ((classifier === SelectorClassifier.FIRST_N_PLACES || classifier === SelectorClassifier.LAST_N_PLACES) && selectorValue <= 0 || targetStageOutputSize < selectorValue) {
      return {'stageInputValidator': true};
    }
    return null;
  };

  getStageType(stage: AbstractControl) {
    return stage.get('stageType') && stage.get('stageType').value as StageType;
  }

  addAdditionalCompetitorSelector(stage: AbstractControl, o?: CompetitorSelector) {
    this.getAdditionalCompetitorSelectors(stage).push(this.competitorSelector(o));
  }


  removeAdditionalCompetitorSelector(stage: AbstractControl, k: number) {
    this.getAdditionalCompetitorSelectors(stage).removeAt(k);
  }

  getAdditionalCompetitorSelectorsValue(stage: AbstractControl) {
    return this.getAdditionalCompetitorSelectors(stage).value.filter(v => !!v);
  }

  getAdditionalGroupSortingDescriptorsValue(i: number) {
    return this.getAdditionalGroupSortingDescriptors(i).value.filter(v => !!v);
  }

  competitorSelectorValid = (stage: AbstractControl) => (value, index) => {
    const selector = this.getAdditionalCompetitorSelectors(stage).at(index);
    return !selector.errors;
  };
}
