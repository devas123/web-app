import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {RegistrationGroup, RegistrationInfo, RegistrationPeriod} from '../../../../reducers/global-reducers';
import {Category} from '../../../../commons/model/competition.model';
import {objectValues} from "../../../account/utils";

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
  categories: Category[];

  @Input()
  competitionId: string;

  @Input()
  timeZone: string;

  @Input()
  registrationInfo: RegistrationInfo;

  @Output()
  addPeriod = new EventEmitter<{ competitionId: string, period: RegistrationPeriod }>();

  @Output()
  addGroupModal = new EventEmitter<{ competitionId: string, periodId: string, periodRegistrationGroups: string[] }>();

  @Output()
  deletePeriod = new EventEmitter<{ competitionId: string, periodId: string }>();

  @Output()
  registrationInfoUpdated = new EventEmitter<RegistrationInfo>();

  @Output()
  deleteGroup = new EventEmitter<{ competitionId: string, periodId: string, groupId: string }>();

  @Output()
  selectGroup = new EventEmitter<string>();

  constructor() {
  }

  get assignedCategoryIds(): string[] {
    return (this.registrationInfo && this.registrationInfo.registrationGroups
      && objectValues(this.registrationInfo.registrationGroups).reduce((previousValue: string[], currentValue: RegistrationGroup) => [...previousValue, ...(currentValue.categories || [])], [])) || [];
  }

  get unassignedCategoies(): Category[] {
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
    this.deleteGroup.next({competitionId: this.competitionId, periodId, groupId});
  }

  deletePeriodEvent(periodId: string) {
    this.deletePeriod.next({competitionId: this.competitionId, periodId});
  }

  openGroupModal(periodId: string, registrationGroupIds: string[]) {
    if (periodId && this.competitionId) {
      this.addGroupModal.next({
        competitionId: this.competitionId,
        periodId,
        periodRegistrationGroups: (registrationGroupIds || [])
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
