import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';
import {ComponentModalConfig, ModalSize, SuiModal} from '@devas123/ng2-semantic';
import {CommonBracketsInfoContainer} from '../../../../commons/classes/common-brackets-container.component';
import {Category, displayCategory, ScheduleRequirement} from '../../../../commons/model/competition.model';
import {Dictionary} from '@ngrx/entity';
import produce from 'immer';
import {defaultActiveSelectionColor, uniqueFilter} from '../../../account/utils';

export interface IEditRequirementContext {
  competitionId: string;
  fightIdsByCategoryId: Dictionary<string[]>;
  fightsColors: Dictionary<string[]>;
  allCategories: Category[];
  undispatchedCategories: string[];
  requirement: ScheduleRequirement;
  requirementFactory: (fightIds, categoryId) => ScheduleRequirement;
}

export interface IEditRequirementResult {
  requirement: ScheduleRequirement;
  affectedCategoryIds: string[];
}

export class EditRequirementModal extends ComponentModalConfig<IEditRequirementContext, IEditRequirementResult, void> {
  constructor(competitionId: string, allCategories: Category[], undispatchedCategories: string[], fightIdsByCategoryId: Dictionary<string[]>, fightsColors: Dictionary<string[]>, requirement: ScheduleRequirement,
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
    <div class="header">Edit requirement.</div>
    <div class="content">
      <div class="ui stackable compact menu">
        <a class="item" *ngFor="let category of getCategories()" (click)="selectCategory(category.id)">
          <i class="icon users"></i><span>{{category | displayCategory}}</span>
          <a (click)="deleteCategory(category.id)"><i class="delete icon"></i></a>
          <div class="floating ui red label">{{getCategoryFightsForThisRequirement(category.id)?.length}}</div>
        </a>
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
      <div class="schedule_page_scrollable" *ngIf="selectedCategory">
        <app-stage-display [fights]="bracketsInfo.fights$ | async"
                           [editMode]="true"
                           [bucketSize]="bracketsInfo.mapBucketSize(4, 2) | async"
                           (fightSelected)="toggleFightSelection($event)"
                           (stageSelected)="bracketsInfo.selectStage($event, modal.context.competitionId)"
                           [changeFightIds]="getFightsColors()"
                           [fightsAreLoading]="bracketsInfo.fightsAreLoading$ | async"
                           [selectedStage]="bracketsInfo.stage$ | async"
                           [stages]="bracketsInfo.stages$ | async"
                           [category]="bracketsInfo.category$ | async"></app-stage-display>
      </div>
    </div>
    <div class="ui basic segment" *ngIf="!selectedCategory">Select category.</div>
    <div class="actions">
      <button class="ui red button" (click)="modal.deny(undefined)">Cancel</button>
      <button class="ui green button" [disabled]="!requirement" (click)="approveModal()" autofocus>OK</button>
    </div>`,
  styleUrls: ['./schedule-editor.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditRequirementModalComponent implements OnInit, OnDestroy {
  selectedCategory: string;
  requirement: ScheduleRequirement;
  affectedCategoryIds = new Set<string>();
  categoryFormatter = (category: Category) => displayCategory(category, 10);

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

  constructor(public modal: SuiModal<IEditRequirementContext, IEditRequirementResult, void>, public bracketsInfo: CommonBracketsInfoContainer) {
  }

  deleteCategory(catId: string) {
    this.requirement = produce(this.requirement, draft => {
      draft.categoryIds = draft.categoryIds.filter(id => id !== catId);
      const fights = this.getFightsForCategoryId(catId);
      draft.fightIds = draft.fightIds.filter(id => !fights.includes(id));
    });
    this.affectedCategoryIds.add(catId);
    if (this.selectedCategory === catId) {
      this.selectedCategory = null;
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

  get undispatchedCategories() {
    return this.modal.context.undispatchedCategories || [];
  }

  get fightIdsByCategoryId() {
    return this.modal.context.fightIdsByCategoryId;
  }

  approveModal() {
    this.modal.approve({requirement: this.requirement, affectedCategoryIds: Array.from(this.affectedCategoryIds)});
  }

  ngOnInit(): void {
    this.requirement = this.modal.context.requirement;
    this.selectCategory(this.requirement.categoryIds[0]);
  }

  selectCategory(category: string) {
    this.selectedCategory = category;
    this.bracketsInfo.selectCategory(category, this.modal.context.competitionId);
  }

  ngOnDestroy(): void {
    this.bracketsInfo.clearCategorySelection(this.modal.context.competitionId);
  }

  addCategory(event: Category) {
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
}
