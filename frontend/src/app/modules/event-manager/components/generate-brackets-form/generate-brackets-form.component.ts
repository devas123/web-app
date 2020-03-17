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
  SelectorClassifier
} from '../../../../commons/model/competition.model';
import {FormArray, FormBuilder, FormGroup, ValidationErrors, Validators} from '@angular/forms';
import produce from 'immer';
import {SuiModalService} from 'ng2-semantic';
import {AddFightResultOptionModal} from './add-fight-result-option-form.component';
import {AddInputSelectorFormModal} from './add-input-selector-form.component';

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
    return this.form.get('stageDescriptions') as FormArray;
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
  form: FormGroup;

  private numberOfCompetitorsValidator = (index: number) => (control: FormGroup): ValidationErrors | null => {
    const previousStageInput = index === 0 ? this._competitorsSize : this.getNumberOfCompetitors(index - 1);
    const currentInput = this.inputCompetitorsForStage(control);
    if (currentInput <= 0 || index === 0 && currentInput !== this._competitorsSize) {
      return {'numberOfCompetitorsInvalid': true};
    }
    return currentInput <= previousStageInput ? null : {'numberOfCompetitorsInvalid': true};
  };


  updateView() {
    this.cd.detectChanges();
  }

  inputCompetitorsForStage = (sd: FormGroup) => {
    const bracketsType = sd.get('bracketType').value as BracketsType;
    if (bracketsType !== 'GROUP') {
      return sd.get('inputDescriptor.numberOfCompetitors').value;
    } else {
      const groupDescriptors = sd.get('groupDescriptors') as FormArray;
      const groupInputSize: number = groupDescriptors.controls.map(c => c.get('size').value || 0).reduce(((previousValue, currentValue) => previousValue + currentValue));
      return groupInputSize;
    }
  };

  getNumberOfCompetitors(i) {
    const sd = this.stageDescriptions.at(i) as FormGroup;
    return this.inputCompetitorsForStage(sd);
  }

  stageDescriptionConfig = (index: number) => this.fb.group({
    stageType: [''],
    bracketType: ['', [Validators.required]],
    name: [''],
    waitForPrevious: [true],
    hasThirdPlaceFight: [false],
    resultDescriptor: this.fb.group({
      forceManualAssignment: [false],
      fightResultOptions: this.fb.array([[]]),
      additionalGroupSortingDescriptors: this.fb.array([[]])
    }),
    inputDescriptor: this.fb.group({
      selectors: this.fb.array([[]]),
      numberOfCompetitors: [{value: index === 0 ? this.competitorsSize : 0, disabled: index === 0}, [Validators.max(this._competitorsSize), Validators.min(1)]]
    }),
    groupDescriptors: this.fb.array([this.groupDescriptorConfig()])
  }, {validators: this.numberOfCompetitorsValidator(index)});

  groupDescriptorConfig = () => this.fb.group({
    size: [0, [Validators.required, Validators.min(0),
      Validators.max(this.competitorsSize)]],
    name: ['']
  });
  formatter = (option: FightResultOption) => (option && option.shortName) || 'Unnamed';
  filterFightResults = (options: FightResultOption[], query?: string) => (query && options.filter(fr => new RegExp(`.*${query.toLowerCase()}.*`).test(fr.shortName.toLowerCase()))) || options;

  private createForm() {
    this.form = this.fb.group({
      stageDescriptions: this.fb.array([
        this.stageDescriptionConfig(0)
      ])
    });
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

  openAddFightOptionsModal(i) {
    this.modalService.open(new AddFightResultOptionModal(this.getBracketsType(i), i))
      .onApprove((result: FightResultOption) => {
        this.addFightResultOptionControl(i, result);
        this.cd.markForCheck();
      })
      .onDeny(_ => { /* deny callback */
      });
  }

  openAddInputSelectorModal(i) {
    this.modalService.open(new AddInputSelectorFormModal(this.getBracketsType(i), i,
      this.stageDescriptions.controls.filter((c, ind) => ind < i).map((control, index) => index)))
      .onApprove((result: CompetitorSelector[]) => {
        result.forEach(r => this.addAdditionalCompetitorSelector(i, r));
        this.cd.markForCheck();
      })
      .onDeny(_ => { /* deny callback */
      });
  }


  ngOnInit() {
  }

  removeGroupDescriptor(i: number, k: number) {
    this.groupDescriptors(i).removeAt(k);
  }

  removeStageDescription(i: number) {
    this.stageDescriptions.removeAt(i);
  }

  setStageControlValue(i: number, patch: any, reset?: boolean) {
    if (reset) {
      const val = this.stageDescriptionConfig(i);
      this.stageDescriptions.at(i).reset({...val, ...patch});
    } else {
      this.stageDescriptions.at(i).patchValue(patch);
    }
  }


  setHasThirdPlaceFight(i: number, $event: boolean) {
    this.setStageControlValue(i, {hasThirdPlaceFight: $event});
  }

  setWaitForPrevious(i: number, $event: boolean) {
    this.setStageControlValue(i, {waitForPrevious: $event});
  }

  setForceManualAssignment(i: number, $event: boolean) {
    this.setStageControlValue(i, {'resultDescriptor.forceManualAssignment': $event});
  }

  setBracketsType(i: number, $event: BracketsType) {
    this.setStageControlValue(i, {bracketType: $event}, true);
  }

  getBracketsType(i: number) {
    return this.stageDescriptions.at(i).get('bracketType').value as BracketsType;
  }

  getErrors() {
    return (this.form.errors && Object.keys(this.form.errors)) || [];
  }

  removeAllStages() {
    this.stageDescriptions.clear();
    this.stageDescriptions.push(this.stageDescriptionConfig(0));
  }

  doGenerateStages() {
    const formValue = this.stageDescriptions.value as CategoryBracketsStage[];
    const stages = formValue.map((value, index) => produce(value, draft => {
      draft.stageOrder = index;
      if (index === 0) {
        draft.stageType = 'PRELIMINARY';
      }
      if (index === formValue.length - 1) {
        draft.stageType = 'FINAL';
      }
      if (draft.inputDescriptor) {
        let numberOfCompetitors = draft.inputDescriptor.numberOfCompetitors || this._competitorsSize;
        if (draft.bracketType === 'GROUP') {
          numberOfCompetitors = (draft.groupDescriptors && draft.groupDescriptors.map(g => g.size || 0).reduce((a, b) => a + b)) || 0;
        }
        draft.inputDescriptor.numberOfCompetitors = numberOfCompetitors;
        if (!draft.inputDescriptor.selectors) {
          draft.inputDescriptor.selectors = [<CompetitorSelector>{
            classifier: SelectorClassifier.FIRST_N_PLACES,
            operator: OperatorType.EQUALS,
            selectorValue: [`${numberOfCompetitors}`],
            applyToStageNumber: `${index - 1}`,
            logicalOperator: 'AND'
          }];
        }

      }
      draft.resultDescriptor.id = '';
      draft.resultDescriptor.fightResultOptions = draft.resultDescriptor.fightResultOptions.filter(o => !!o);
      draft.inputDescriptor.selectors = draft.inputDescriptor.selectors.filter(o => !!o);
      draft.resultDescriptor.additionalGroupSortingDescriptors = draft.resultDescriptor.additionalGroupSortingDescriptors.filter(o => !!o);
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

  compSelectorFormatter = (opt: CompetitorSelector) => `From ${opt.applyToStageNumber + 1}: ${opt.classifier} ${opt.operator} ${opt.selectorValue.join()}`;
  // tslint:disable-next-line:triple-equals
  // @ts-ignore
  // tslint:disable-next-line:triple-equals
  additionalGroupSortingFormatter = (opt: AdditionalGroupSortingDescriptor) => opt.groupSortSpecifier + (opt.groupSortSpecifier == 'MANUAL' ? '' : (':' + opt.groupSortDirection));

  addAllFightOptions(i: number) {
    const bracketsType = this.getBracketsType(i);
    if (bracketsType === 'GROUP') {
      this.defaultFightResultOptions.forEach(o => this.addFightResultOptionControl(i, o));
    } else {
      this.defaultFightResultOptions.filter(o => !o.draw).forEach(o => this.addFightResultOptionControl(i, o));
    }
    this.cd.markForCheck();
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
    return this.stageDescriptions.at(i).get('resultDescriptor.fightResultOptions') as FormArray;
  }

  getFightResultOptionsValue(i) {
    const av = this.getFightResultOptions(i).value.filter(v => !!v);
    return av;
  }

  getAdditionalGroupSortingDescriptors(i) {
    return this.stageDescriptions.at(i).get('resultDescriptor.additionalGroupSortingDescriptors') as FormArray;
  }

  getAdditionalCompetitorSelectors(i) {
    return this.stageDescriptions.at(i).get('inputDescriptor.selectors') as FormArray;
  }

  addFightResultOptionControl(i: number, o?: FightResultOption) {
    const selectedOptions = this.getFightResultOptions(i).value.filter(v => !!v) as FightResultOption[];
    if (o && !selectedOptions.find(s => s.shortName === o.shortName)) {
      this.getFightResultOptions(i).push(this.fightResultOptionControl(o));
    }
  }

  mergeSelectedFightResultOptions(i: number, os: any[]) {
    const optionsControls = this.getFightResultOptions(i);
    const selectedOptions = optionsControls.value.filter(v => !!v) as FightResultOption[];
    const optionsToAdd = os.filter(o => !selectedOptions.find(s => s.shortName === o.shortName));
    const val = [...selectedOptions, ...optionsToAdd];
    for (const k = 0; k < optionsControls.controls.length; i++) {
      optionsControls.removeAt(k);
    }
    val.map(o => this.fightResultOptionControl(o)).forEach(c => optionsControls.push(c));
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
      groupSortDirection: [(o && o.groupSortDirection) || '', [Validators.required, Validators.pattern('DESC|ASC')]],
      groupSortSpecifier: [(o && o.groupSortSpecifier) || '', [Validators.required, Validators.pattern('DIRECT_FIGHT_RESULT|MANUAL|POINTS_DIFFERENCE|TOTAL_POINTS')]]
    });

  private competitorSelector = (o?: CompetitorSelector) => this.fb.group({
    applyToStageNumber: [(o && o.applyToStageNumber) || '', [Validators.required]],
    logicalOperator: [(o && o.logicalOperator) || '', [Validators.required]],
    classifier: [(o && o.classifier) || '', [Validators.required]],
    operator: [(o && o.operator) || '', [Validators.required]],
    selectorValue: this.fb.array([[(o && o.selectorValue) || '', [Validators.required]]])
  });

  addAdditionalCompetitorSelector(i: number, o?: CompetitorSelector) {
    this.getAdditionalCompetitorSelectors(i).push(this.competitorSelector(o));
  }


  removeAdditionalCompetitorSelector(i: number, k: number) {
    this.getAdditionalCompetitorSelectors(i).removeAt(k);
  }

  getAdditionalCompetitorSelectorsValue(i: number) {
    return this.getAdditionalCompetitorSelectors(i).value.filter(v => !!v);
  }

  getAdditionalGroupSortingDescriptorsValue(i: number) {
    return this.getAdditionalGroupSortingDescriptors(i).value.filter(v => !!v);
  }
}
