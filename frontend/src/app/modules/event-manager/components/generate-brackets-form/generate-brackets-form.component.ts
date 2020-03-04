import {ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AdditionalGroupSortingDescriptor, BracketsType, CategoryBracketsStage, CompetitorSelector, FightResultOption, GroupSortDirection, GroupSortSpecifier} from '../../../../commons/model/competition.model';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
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
  _fightResultOptions: FightResultOption[][] = [];
  _additionalCompetitorSelector: CompetitorSelector[][] = [];
  _additionalGroupSorting: AdditionalGroupSortingDescriptor[][] = [];

  updateView() {
    this.cd.detectChanges();
  }

  getNumberOfCompetitors(i) {
    if (i === 0) {
      return this._competitorsSize;
    }
    return this.stageDescriptions.at(i).get('inputDescriptor.numberOfCompetitors').value;
  }

  stageDescriptionConfig = (index: number) => this.fb.group({
    fightResults: [null],
    stageType: ['', [Validators.required]],
    bracketType: ['', [Validators.required]],
    name: [''],
    waitForPrevious: [true],
    forceManualAssignment: [false],
    hasThirdPlaceFight: [false],
    inputDescriptor: this.fb.group({
      numberOfCompetitors: [{value: index === 0 ? this.competitorsSize : 0, disabled: index === 0}, [Validators.max(this._competitorsSize)]]
    }),
    groupDescriptors: this.fb.array([
      this.groupDescriptorConfig()
    ])
  });

  groupDescriptorConfig = () => this.fb.group({
    size: [0, [Validators.required,
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
    this._fightResultOptions.push([]);
    this._additionalGroupSorting.push([]);
    this._additionalCompetitorSelector.push([]);
  }

  groupDescriptors(i: number) {
    return this.stageDescriptions.at(i).get('groupDescriptors') as FormArray;
  }

  addGroupDescriptor(i: number) {
    this.groupDescriptors(i).push(this.groupDescriptorConfig());
  }

  addStageDescription() {
    this.stageDescriptions.push(this.stageDescriptionConfig(Math.max(0, this.stageDescriptions.length)));
    this._fightResultOptions.push([]);
    this._additionalGroupSorting.push([]);
    this._additionalCompetitorSelector.push([]);
  }

  openAddFightOptionsModal(i) {
    this.modalService.open(new AddFightResultOptionModal(this.getBracketsType(i), i))
      .onApprove((result: FightResultOption) => {
        this._fightResultOptions[i].push(result);
        this.cd.detectChanges();
      })
      .onDeny(_ => { /* deny callback */
      });
  }

  openAddInputSelectorModal(i) {
    this.modalService.open(new AddInputSelectorFormModal(this.getBracketsType(i), i,
      this.stageDescriptions.controls.filter((c, ind) => ind < i).map((control, index) => index)))
      .onApprove((result: CompetitorSelector[]) => {
        this._additionalCompetitorSelector[i].push(...result);
        this.cd.detectChanges();
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
    this._fightResultOptions.splice(i, 1);
    this._additionalCompetitorSelector.splice(i, 1);
    this._additionalGroupSorting.splice(i, 1);
  }

  setStageControlValue(i: number, patch: any) {
    this.stageDescriptions.at(i).patchValue(patch);
  }


  setHasThirdPlaceFight(i: number, $event: boolean) {
    this.setStageControlValue(i, {hasThirdPlaceFight: $event});
  }

  setWaitForPrevious(i: number, $event: boolean) {
    this.setStageControlValue(i, {waitForPrevious: $event});
  }

  setForceManualAssignment(i: number, $event: boolean) {
    this.setStageControlValue(i, {forceManualAssignment: $event});
  }

  getForceManualAssignment(i: number) {
    return this.stageDescriptions.at(i).get('forceManualAssignment').value || false;
  }

  setBracketsType(i: number, $event: BracketsType) {
    this.setStageControlValue(i, {bracketType: $event});
  }

  getBracketsType(i: number) {
    return this.stageDescriptions.at(i).get('bracketType').value as BracketsType;
  }

  removeAllStages() {
    this.stageDescriptions.clear();
    this.stageDescriptions.push(this.stageDescriptionConfig(0));
  }

  doGenerateStages() {
    const formValue = this.stageDescriptions.value as CategoryBracketsStage[];
    const fightResultOptions = this._fightResultOptions;
    const additionalGroupSortings = this._additionalGroupSorting;
    const competitorSelectors = this._additionalCompetitorSelector;
    const stages = formValue.map((value, index) => produce(value, draft => {
      draft.stageOrder = index;
      if (index === 0) {
        draft.stageType = 'PRELIMINARY';
      }
      if (index === formValue.length - 1) {
        draft.stageType = 'FINAL';
      }
      if (draft.inputDescriptor) {
        draft.inputDescriptor.selectors = competitorSelectors[index];
      } else {
        draft.inputDescriptor = { numberOfCompetitors: this._competitorsSize, selectors: competitorSelectors[index] };
      }
      draft.resultDescriptor = {
        id: '',
        forceManualAssignment: this.getForceManualAssignment(index),
        additionalGroupSortingDescriptors: additionalGroupSortings[index],
        fightResultOptions: [...this.getFightResultOptions(index), ...(fightResultOptions[index] || [])]
      };
    }));
    this.generateStages.next(stages);
  }

  removeAdditionalCompetitorSelector(i: number, k: number) {
    this._additionalCompetitorSelector[i].splice(k, 1);
  }


  removeFightResultOpiton(i: number, k: number) {
    this._fightResultOptions[i].splice(k, 1);
  }

  removeAdditionalSortingOption(i: number, k: number) {
    this._additionalGroupSorting[i].splice(k, 1);
  }

  addAdditionalSortingOption(i, specifier: any, direction: any) {
    // tslint:disable-next-line:triple-equals
    if (((specifier && direction) || specifier == 'MANUAL') && this._additionalGroupSorting[i]
      && !this._additionalGroupSorting[i].find(a => a.groupSortSpecifier === specifier)) {
      this._additionalGroupSorting[i].push(<AdditionalGroupSortingDescriptor>{groupSortSpecifier: specifier, groupSortDirection: direction});
    }
  }

  compSelectorFormatter = (opt: CompetitorSelector) => `${opt.logicalOperator} in stage ${opt.applyToStageNumber + 1} ${opt.classifier} ${opt.operator} ${opt.selectorValue.join()}`;
  // tslint:disable-next-line:triple-equals
  // @ts-ignore
  // tslint:disable-next-line:triple-equals
  additionalGroupSortingFormatter = (opt: AdditionalGroupSortingDescriptor) => opt.groupSortSpecifier + (opt.groupSortSpecifier == 'MANUAL' ? '' : (':' + opt.groupSortDirection));

  private getFightResultOptions(index: number) {
    return (this.stageDescriptions.at(index).get('fightResults').value || []) as FightResultOption[];
  }
}
