import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {objectValues} from "../../../account/utils";
import {
  CategoryDescriptor,
  CategoryState,
  RegistrationGroup,
  RegistrationInfo,
  RegistrationPeriod
} from "@frontend-nx/protobuf";
import produce from "immer";

@Component({
  selector: 'app-registration-info-editor',
  templateUrl: './registration-info-editor.component.html',
  styleUrls: ['./registration-info-editor.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegistrationInfoEditorComponent {

  ngStyle = {'grid-template-columns': 'repeat(2, 1fr)'};

  @Input()
  set colunmsNumber(value: number) {
    if (value) {
      this.ngStyle = {'grid-template-columns': `repeat(${value}, 1fr)`};
    }
  }

  @Input()
  categories: CategoryState[];

  @Input()
  competitionId: string;

  @Input()
  timeZone: string;

  @Input()
  registrationInfo: RegistrationInfo;

  @Output()
  addPeriod = new EventEmitter<{ competitionId: string, period: RegistrationPeriod }>();

  @Output()
  addGroupModal = new EventEmitter<{ competitionId: string, periodId: string, periodRegistrationGroups: string[], registrationInfo: RegistrationInfo }>();

  @Output()
  registrationInfoUpdated = new EventEmitter<RegistrationInfo>();


  @Output()
  selectGroup = new EventEmitter<string>();

  constructor() {
  }

  get assignedCategoryIds(): string[] {
    return (this.registrationInfo && this.registrationInfo.registrationGroups
      && objectValues(this.registrationInfo.registrationGroups).reduce((previousValue: string[], currentValue: RegistrationGroup) => [...previousValue, ...(currentValue.categories || [])], [])) || [];
  }

  get unassignedCategoies(): CategoryState[] {
    return this.categories && this.categories.filter(cat => !this.assignedCategoryIds || this.assignedCategoryIds.indexOf(cat.id) < 0);
  }


  getRegistrationGroupsForPeriod(period: RegistrationPeriod, info: RegistrationInfo): RegistrationGroup[] {
    if (period && info && period.registrationGroupIds && info.registrationGroups) {
      return period.registrationGroupIds.map(id => info.registrationGroups[id]).filter(gr => !!gr);
    } else {
      return [];
    }
  }

  getRegistrationPeriods() {
    return objectValues(this.registrationInfo?.registrationPeriods);
  }

  deleteGroupEvent(groupId: string, periodId: string) {
    const updatedRegInfo = produce(this.registrationInfo, draft => {
      const per = draft.registrationPeriods[periodId]
      per.registrationGroupIds = per.registrationGroupIds.filter(id => id !== groupId);
      let shouldDeleteGroup = Object.values(draft.registrationPeriods).filter(p => p.id != periodId)
        .every(p => !p.registrationGroupIds.includes(groupId));
      if (shouldDeleteGroup) {
        delete draft.registrationGroups[groupId];
      }
    })
    this.registrationInfoUpdated.next(updatedRegInfo);
  }

  deletePeriodEvent(periodId: string) {
    const period = this.registrationInfo.registrationPeriods[periodId];
    delete this.registrationInfo.registrationPeriods[periodId];
    const registrationGroupsOfRemovedPeriod = period.registrationGroupIds;
    const usedGroups = new Set<string>();
    for (let p of Object.values(this.registrationInfo.registrationPeriods)) {
      p.registrationGroupIds.forEach(usedGroups.add);
    }
    registrationGroupsOfRemovedPeriod.filter(g => !usedGroups.has(g))
      .forEach(g => {
        delete this.registrationInfo.registrationGroups[g];
      });
    this.registrationInfoUpdated.next(this.registrationInfo);
  }

  openGroupModal(periodId: string, registrationGroupIds: string[]) {
    if (periodId && this.competitionId) {
      this.addGroupModal.next({
        competitionId: this.competitionId,
        periodId,
        periodRegistrationGroups: (registrationGroupIds || []),
        registrationInfo: this.registrationInfo
      });
    }
  }

  moveUnassignedCategoriesToDefault() {
    if (this.unassignedCategoies) {
      const defaultGroup = objectValues(this.registrationInfo.registrationGroups).find(gr => gr.defaultGroup);
      if (defaultGroup) {
        const categories = defaultGroup.categories || [];
        const updatedDefaultGroup = {
          ...defaultGroup,
          categories: [...categories, ...this.unassignedCategoies.map(cat => cat.id).filter(id => !categories.includes(id))]
        };
        const newRegistrationGroups = {...this.registrationInfo.registrationGroups};
        newRegistrationGroups[updatedDefaultGroup.id] = updatedDefaultGroup;
        const regInfo = {
          ...this.registrationInfo,
          registrationGroups: newRegistrationGroups
        }
        this.registrationInfoUpdated.next(regInfo);
      }
    }
  }
}
