import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';
import {ComponentModalConfig, ModalSize, SuiModal} from '@devas123/ng2-semantic';
import {CommonBracketsInfoContainer} from '../../../../commons/classes/common-brackets-container.component';
import {ScheduleRequirement} from '../../../../commons/model/competition.model';

export interface ISplitCategoryContext {
  competitionId: string;
  categoryId?: string;
  connectedRequirements: ScheduleRequirement[];
  requirementFactory: (fightIds, categoryId) => ScheduleRequirement;
}

export interface ISplitCategoryResult {
  requirements: ScheduleRequirement[];
}

export class SplitCategoryModal extends ComponentModalConfig<ISplitCategoryContext, ISplitCategoryResult, void> {
  constructor(competitionId: string, categoryId: string, requirementFactory: (fightIds, categoryId) => ScheduleRequirement, connectedRequirements: ScheduleRequirement[], size = ModalSize.Large) {
    super(SplitCategoryFormComponent, {competitionId, categoryId, requirementFactory, connectedRequirements});
    this.isClosable = true;
    this.transitionDuration = 200;
    this.size = size;
  }
}


@Component({
  selector: 'app-split-category-modal',
  template: `
    <div class="header">Select fights.</div>
    <div class="content">
      <button class="ui button" (click)="addFightsGroup();">Add fightsGroup</button>
      <app-tag-list [values]="requirements">
        <ng-template let-opt="$implicit" let-k="index">
          <div class="ui icon label" [ngClass]="{'large': selectedRequirement === k}">
            <a (click)="selectRequirement(k)"><span>{{opt?.fightIds?.length}} Fights</span></a>
            <i class="delete icon" (click)="removeRequirement(k)"></i>
          </div>
        </ng-template>
      </app-tag-list>
      <div class="schedule_page_scrollable">
        <app-stage-display [fights]="bracketsInfo.fights$ | async"
                           [editMode]="true"
                           [bucketSize]="bracketsInfo.mapBucketSize(4, 2) | async"
                           (fightSelected)="toggleFightSelection($event)"
                           (stageSelected)="bracketsInfo.selectStage($event, modal.context.competitionId)"
                           [changeFightIds]="getAllSelectedFights()"
                           [fightsAreLoading]="bracketsInfo.fightsAreLoading$ | async"
                           [selectedStage]="bracketsInfo.stage$ | async"
                           [stages]="bracketsInfo.stages$ | async"
                           [category]="bracketsInfo.category$ | async"></app-stage-display>
      </div>
    </div>
    <div class="actions">
      <button class="ui red button" (click)="modal.deny(undefined)">Cancel</button>
      <button class="ui green button" [disabled]="!requirements || getAllSelectedFights()?.length === 0" (click)="sendFightsSelected()" autofocus>OK</button>
    </div>`,
  styleUrls: ['./schedule-editor.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SplitCategoryFormComponent implements OnInit, OnDestroy {
  requirements: ScheduleRequirement[] = [];
  selectedRequirement = 0;

  createRequirement(fightIds: string[]) {
    return this.modal.context.requirementFactory(fightIds, [this.modal.context.categoryId]);
  }

  addFightsGroup() {
    this.requirements.push(this.createRequirement([]));
  }

  getAllSelectedFights() {
    return this.requirements.reduce((previousValue, currentValue) => previousValue.concat(currentValue.fightIds || []), <string[]>[]);
  }

  constructor(public modal: SuiModal<ISplitCategoryContext, ISplitCategoryResult, void>, public bracketsInfo: CommonBracketsInfoContainer) {
  }

  toggleFightSelection(id: string) {
    if (id) {
      if (this.requirements[this.selectedRequirement]) {
        if (this.requirements[this.selectedRequirement].fightIds.indexOf(id) < 0) {
          const fightGroup = this.requirements[this.selectedRequirement];
          this.requirements[this.selectedRequirement].fightIds = [...fightGroup.fightIds, id];
        } else {
          this.requirements[this.selectedRequirement].fightIds = this.requirements[this.selectedRequirement].fightIds.filter(sf => sf !== id);
        }
      }
    }
  }

  sendFightsSelected() {
    this.modal.approve({requirements: this.requirements});
  }

  ngOnInit(): void {
    this.bracketsInfo.selectCategory(this.modal.context.categoryId, this.modal.context.competitionId);
    this.addFightsGroup();
    this.selectedRequirement = Math.max(0, this.requirements.length - 1);
  }

  selectRequirement(k: number) {
    if (k >= 0 && k < this.requirements.length) {
      this.selectedRequirement = k;
    }
  }

  removeRequirement(k: number) {
    this.requirements.splice(k, 1);
    this.selectedRequirement = Math.max(k - 1, 0);
  }

  ngOnDestroy(): void {
    this.bracketsInfo.clearCategorySelection(this.modal.context.competitionId);
  }
}
