import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {ComponentModalConfig, IPopup, ModalSize, SuiModal} from '@frontend-nx/ng2-semantic-ui';
import {CommonBracketsInfoContainer} from '../../../../commons/classes/common-brackets-container.component';
import {displayCategory} from '../../../../commons/model/competition.model';
import {Dictionary} from '@ngrx/entity';
import produce from 'immer';
import {defaultActiveSelectionColor, uniqueFilter} from '../../../account/utils';
import {ColorEvent} from 'ngx-color';
import {CategoryState, ScheduleRequirement} from "@frontend-nx/protobuf";

export interface IEditRequirementContext {
  competitionId: string;
  fightIdsByCategoryId: Dictionary<string[]>;
  fightsColors: Dictionary<string[]>;
  allCategories: CategoryState[];
  undispatchedCategories: string[];
  requirement: ScheduleRequirement;
  requirementFactory: (fightIds, categoryId) => ScheduleRequirement;
}

export interface IEditRequirementResult {
  requirement: ScheduleRequirement;
  affectedCategoryIds: string[];
}

export class EditRequirementModal extends ComponentModalConfig<IEditRequirementContext, IEditRequirementResult, void> {
  constructor(competitionId: string, allCategories: CategoryState[], undispatchedCategories: string[], fightIdsByCategoryId: Dictionary<string[]>, fightsColors: Dictionary<string[]>, requirement: ScheduleRequirement,
              requirementFactory: (fightIds, categoryId) => ScheduleRequirement, size = ModalSize.Large) {
    super(EditRequirementModalComponent, {competitionId, undispatchedCategories, allCategories, fightIdsByCategoryId, requirementFactory, fightsColors, requirement});
    this.isClosable = true;
    this.transitionDuration = 200;
    this.size = size;
  }
}


@Component({
  selector: 'app-edit-requirement-modal',
  template: `
    <ng-template let-popup #popupTemplate>
      <div class="header">Pick color</div>
      <div class="content">
        <color-chrome [color]="requirement.color || '#0e5375'" (onChangeComplete)="changeRequirementColor($event);"></color-chrome>
      </div>
    </ng-template>
    <div class="header">Edit requirement.</div>
    <div class="content">
      <div class="ui stackable compact menu">
        <div class="item">
          <sui-select
            [isDisabled]="false"
            [optionFormatter]="categoryFormatter"
            [options]="getCategoriesForSelect()"
            (selectedOptionChange)="addCategory($event)"
            placeholder="Category"
            #categoryToAdd>
            <sui-select-option *ngFor="let o of categoryToAdd.filteredOptions"
                               [value]="o"></sui-select-option>
          </sui-select>
        </div>
      </div>
      <div class="inner-list padded-vertical">
        <div *ngFor="let cat of getCategories()" class="item schedule_page flex-container compman_clickable" (click)="selectCategory(cat.id)" [style]="getCategoryStyle(cat.id)">
          <div class="content">
            <div class="header">{{cat | displayCategory}}</div>
          </div>
          <div class="ui label">{{getCategoryFightsForThisRequirement(cat.id)?.length}} fights</div>
          <div class="filler"></div>
          <div class="right-floated">
            <a (click)="deleteCategory(cat.id)"><i class="delete icon"></i></a>
          </div>
        </div>
      </div>
      <label class="margin-horizontal" for="reqName">Name</label>
      <div class="ui input margin-horizontal">
        <input type="text" maxlength="20" id="reqName" placeholder="Name" (change)="changeName($event)">
      </div>
      <div class="ui button" #popup="suiPopup" suiPopup [popupTemplate]="popupTemplate" popupTrigger="manual" (click)="toggleColorPicker(popup)">{{ showColorPicker ? 'Close' : 'Change color'}}</div>
      <div class="ui button" (click)="toggleBrackets()">{{showFightsPicker ? 'Close' : 'Select fights'}}</div>
    </div>
    <div class="schedule_page_scrollable" *ngIf="selectedCategory && showFightsPicker">
      <app-stage-display [fights]="bracketsInfo.fights$ | async"
                         [competitors]="bracketsInfo.competitors$ | async"
                         [editMode]="true"
                         [bucketSize]="bracketsInfo.mapBucketSize(4, 2) | async"
                         (fightSelected)="toggleFightSelection($event)"
                         (stageSelected)="bracketsInfo.selectStageById($event)"
                         [changeFightIds]="getFightsColors()"
                         [fightsAreLoading]="bracketsInfo.fightsAreLoading$ | async"
                         [selectedStage]="bracketsInfo.stage$ | async"
                         [stages]="bracketsInfo.stages$ | async"
                         [category]="bracketsInfo.category$ | async"></app-stage-display>
    </div>
    <div class="ui basic segment" *ngIf="!selectedCategory && showFightsPicker">Select category.</div>
    <div class="actions">
      <button class="ui red button" (click)="modal.deny(undefined)">Cancel</button>
      <button class="ui green button" [disabled]="!requirement" (click)="approveModal()" autofocus>OK</button>
    </div>`,
  styleUrls: ['./schedule-editor.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditRequirementModalComponent implements OnInit, OnDestroy {

  constructor(public modal: SuiModal<IEditRequirementContext, IEditRequirementResult, void>, public bracketsInfo: CommonBracketsInfoContainer, private cd: ChangeDetectorRef) {
  }

  get undispatchedCategories() {
    return this.modal.context.undispatchedCategories || [];
  }

  get fightIdsByCategoryId() {
    return this.modal.context.fightIdsByCategoryId;
  }

  selectedCategory: string;
  requirement: ScheduleRequirement;
  affectedCategoryIds = new Set<string>();
  showColorPicker = false;
  showFightsPicker = false;
  categoryFormatter = (category: CategoryState) => displayCategory(category.category, 10);

  getFightsForCategoryId(id: string) {
    return this.fightIdsByCategoryId[id] || [];
  }

  getCategoryFightsForThisRequirement(categoryId: string) {
    return this.getFightsForCategoryId(categoryId).filter(fid => this.requirement.fightIds.includes(fid));
  }

  getFightsColors() {
    return produce(this.modal.context.fightsColors, draft => {
      const color = this.requirement.color || defaultActiveSelectionColor;
      Object.keys(draft).forEach(key => {
        draft[key] = draft[key].filter(f => !this.requirement.fightIds.includes(f));
      });
      if (!draft[color]) {
        draft[color] = [];
      }
      draft[color].push(...this.requirement.fightIds);
    });
  }

  getCategories() {
    return this.requirement.categoryIds.map(id => this.modal.context.allCategories.find(cat => cat.id === id)).filter(c => !!c);
  }

  getCategoriesForSelect() {
    return this.modal.context.allCategories.filter(cat => this.requirement.categoryIds.indexOf(cat.id) < 0);
  }

  deleteCategory(catId: string) {
    this.requirement = produce(this.requirement, draft => {
      draft.categoryIds = draft.categoryIds.filter(id => id !== catId);
      const fights = this.getFightsForCategoryId(catId);
      draft.fightIds = draft.fightIds.filter(id => !fights.includes(id));
    });
    this.affectedCategoryIds.add(catId);
    if (this.selectedCategory === catId) {
      this.selectedCategory = undefined;
      this.bracketsInfo.clearCategorySelection(this.modal.context.competitionId);
    }
  }

  toggleFightSelection(id: string) {
    if (id && this.selectedCategory) {
      if (this.requirement) {
        this.requirement = produce(this.requirement, draft => {
          if (draft.fightIds.indexOf(id) < 0) {
            draft.fightIds.push(id);
          } else {
            draft.fightIds.splice(draft.fightIds.indexOf(id), 1);
          }
        });
        this.affectedCategoryIds.add(this.selectedCategory);
      }
    }
  }

  approveModal() {
    this.modal.approve({requirement: this.requirement, affectedCategoryIds: Array.from(this.affectedCategoryIds)});
  }

  ngOnInit(): void {
    this.requirement = this.modal.context.requirement;
  }

  selectCategory(category: string) {
    console.log(category);
    this.selectedCategory = category;
    if (this.showFightsPicker) {
      this.bracketsInfo.selectCategory(category, this.modal.context.competitionId);
    }
  }

  ngOnDestroy(): void {
    this.bracketsInfo.clearCategorySelection(this.modal.context.competitionId);
  }

  addCategory(event: CategoryState) {
    if (event) {
      this.affectedCategoryIds.add(event.id);
      this.requirement = produce(this.requirement, draft => {
        draft.categoryIds = [...draft.categoryIds, event.id].filter(uniqueFilter);
        if (this.undispatchedCategories.includes(event.id)) {
          draft.fightIds = [...draft.fightIds, ...this.fightIdsByCategoryId[event.id]];
        }
      });
    }
  }

  changeRequirementColor(colorEvent: ColorEvent) {
    if (colorEvent.color.hex && colorEvent.color.hex !== this.requirement.color) {
      this.requirement = produce(this.requirement, draft => {
        draft.color = colorEvent.color.hex;
      });
      this.cd.markForCheck();
    }
  }

  changeName($event: any) {
    $event.preventDefault();
    if (this.requirement.name !== $event.target.value) {
      this.requirement = produce(this.requirement, draft => {
        draft.name = $event.target.value;
      });
    }
  }

  toggleBrackets() {
    if (!this.showFightsPicker) {
      if (this.selectedCategory) {
        this.bracketsInfo.selectCategory(this.selectedCategory, this.modal.context.competitionId);
      } else if (this.requirement.categoryIds && this.requirement.categoryIds.length > 0) {
        this.selectedCategory = this.requirement.categoryIds[0];
        this.bracketsInfo.selectCategory(this.requirement.categoryIds[0], this.modal.context.competitionId);
      }
      this.showFightsPicker = true;
    } else {
      this.bracketsInfo.clearCategorySelection(this.modal.context.competitionId);
      this.showFightsPicker = false;
    }
  }

  getCategoryStyle(id: string) {
    if (id === this.selectedCategory) {
      return `border: 2px solid ${this.requirement.color || defaultActiveSelectionColor}`;
    }
    return '';
  }

  toggleColorPicker(popup: IPopup) {
    if (this.showColorPicker) {
      popup.close();
      this.showColorPicker = false;
    } else {
      popup.open();
      this.showColorPicker = true;
    }
  }
}
