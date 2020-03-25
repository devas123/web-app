import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';
import {ComponentModalConfig, ModalSize, SuiModal} from '@devas123/ng2-semantic';
import {CommonBracketsInfoContainer} from '../../../../commons/classes/common-brackets-container.component';
import {Category, ScheduleRequirement} from '../../../../commons/model/competition.model';
import {Dictionary} from '@ngrx/entity';
import produce from 'immer';

export interface IEditFightsRequirementContext {
  competitionId: string;
  categoryIds?: string[];
  fightIdsByCategoryId: Dictionary<string[]>;
  allCategories: Category[];
  requirement: ScheduleRequirement;
  requirementFactory: (fightIds, categoryId) => ScheduleRequirement;
}

export interface IEditFightsRequirementResult {
  requirement: ScheduleRequirement;
}

export class EditFightsRequirementModal extends ComponentModalConfig<IEditFightsRequirementContext, IEditFightsRequirementResult, void> {
  constructor(competitionId: string, allCategories: Category[], categoryIds: string[], fightIdsByCategoryId: Dictionary<string[]>, requirement: ScheduleRequirement,
              requirementFactory: (fightIds, categoryId) => ScheduleRequirement, size = ModalSize.Large) {
    super(EditFightsRequirementModalComponent, {competitionId, allCategories, categoryIds, fightIdsByCategoryId, requirementFactory, requirement});
    this.isClosable = true;
    this.transitionDuration = 200;
    this.size = size;
  }
}


@Component({
  selector: 'app-edit-fights-requirement-modal',
  template: `
    <div class="header">Edit linked requirements.</div>
    <div class="content">
      <div class="ui stackable compact menu">
        <a class="item" *ngFor="let category of getCategories()" (click)="selectCategory(category.id)">
          <i class="icon users"></i><span>{{category | displayCategory}}</span>
          <a><i class="delete icon"></i></a>
          <div class="floating ui red label">{{getFightsForCategoryIdInThisRequirement(category.id)?.length}}</div>
        </a>
      </div>
      <div class="schedule_page_scrollable">
        <app-stage-display [fights]="bracketsInfo.fights$ | async"
                           [editMode]="true"
                           [bucketSize]="bracketsInfo.mapBucketSize(4, 2) | async"
                           (fightSelected)="toggleFightSelection($event)"
                           (stageSelected)="bracketsInfo.selectStage($event, modal.context.competitionId)"
                           [changeFightIds]="getFightsForCategoryIdInThisRequirement(selectedCategory)"
                           [fightsAreLoading]="bracketsInfo.fightsAreLoading$ | async"
                           [selectedStage]="bracketsInfo.stage$ | async"
                           [stages]="bracketsInfo.stages$ | async"
                           [category]="bracketsInfo.category$ | async"></app-stage-display>
      </div>
    </div>
    <div class="actions">
      <button class="ui red button" (click)="modal.deny(undefined)">Cancel</button>
      <button class="ui green button" [disabled]="!requirement || !requirementUpdated" (click)="sendFightsSelected()" autofocus>OK</button>
    </div>`,
  styleUrls: ['./schedule-editor.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditFightsRequirementModalComponent implements OnInit, OnDestroy {
  selectedCategory: string;
  requirement: ScheduleRequirement;
  requirementUpdated = false;

  getFightsForCategoryId(id: string) {
    return this.modal.context.fightIdsByCategoryId[id] || [];
  }

  getFightsForCategoryIdInThisRequirement(id: string) {
    return this.requirement.fightIds.filter(fid => this.getFightsForCategoryId(id).indexOf(fid) >= 0);
  }

  createRequirement(fightIds: string[], categoryIds: string[]) {
    return this.modal.context.requirementFactory(fightIds, categoryIds);
  }

  getCategories() {
    return this.modal.context.categoryIds.map(id => this.modal.context.allCategories.find(cat => cat.id === id)).filter(c => !!c);
  }

  constructor(public modal: SuiModal<IEditFightsRequirementContext, IEditFightsRequirementResult, void>, public bracketsInfo: CommonBracketsInfoContainer) {
  }

  toggleFightSelection(id: string) {
    if (id) {
      if (this.requirement) {
        this.requirement = produce(this.requirement, draft => {
          if (draft.fightIds.indexOf(id) < 0) {
            draft.fightIds.push(id);
          } else {
            draft.fightIds = draft.fightIds.filter(sf => sf !== id);
          }
        });
        this.requirementUpdated = true;
      }
    }
  }

  sendFightsSelected() {
    this.modal.approve({requirement: this.requirement});
  }

  ngOnInit(): void {
    this.requirement = this.modal.context.requirement;
    this.selectCategory(this.modal.context.categoryIds[0]);
  }

  selectCategory(category: string) {
    this.selectedCategory = category;
    this.bracketsInfo.selectCategory(category, this.modal.context.competitionId);
  }

  ngOnDestroy(): void {
    this.bracketsInfo.clearCategorySelection(this.modal.context.competitionId);
  }
}
