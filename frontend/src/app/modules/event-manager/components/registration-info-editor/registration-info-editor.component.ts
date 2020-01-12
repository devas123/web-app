import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {RegistrationGroup, RegistrationInfo, RegistrationPeriod} from '../../../../reducers/global-reducers';
import {Category} from '../../../../commons/model/competition.model';
import produce from 'immer';

@Component({
  selector: 'app-registration-info-editor',
  templateUrl: './registration-info-editor.component.html',
  styleUrls: ['./registration-info-editor.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegistrationInfoEditorComponent implements OnInit {

  ngStyle = {'grid-template-columns': 'repeat(2, 50%)'};

  @Input()
  set colunmsNumber(value: number) {
    if (value) {
      this.ngStyle = {'grid-template-columns': `repeat(${value}, ${100 / value}%)`};
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

  ngOnInit() {
  }

  get assignedCategoryIds(): string[] {
    return (this.registrationInfo && this.registrationInfo.registrationGroups
      && this.registrationInfo.registrationGroups.reduce((previousValue: string[], currentValue: RegistrationGroup) => [...previousValue, ...(currentValue.categories || [])], [])) || [];
  }

  get unassignedCategoies(): Category[] {
    return this.categories && this.categories.filter(cat => !this.assignedCategoryIds || this.assignedCategoryIds.indexOf(cat.id) < 0);
  }


  getRegistrationGroupsForPeriod(period: RegistrationPeriod, info: RegistrationInfo) {
    if (period && info) {
      return period.registrationGroupIds.map(id => info.registrationGroups.find(gr => gr.id === id)).filter(gr => !!gr);
    } else {
      return [];
    }
  }

  deleteGroupEvent(groupId: string, periodId: string) {
    this.deleteGroup.next({competitionId: this.competitionId, periodId, groupId});
  }

  deletePeriodEvent(periodId: string) {
    this.deletePeriod.next({competitionId: this.competitionId, periodId});
  }

  openGroupModal(periodId: string, registrationGroupIds: string[]) {
    if (periodId && this.competitionId) {
      this.addGroupModal.next({competitionId: this.competitionId, periodId, periodRegistrationGroups: (registrationGroupIds || [])});
    }
  }

  moveUnassignedCategoriesToDefault() {
    if (this.unassignedCategoies) {
      const regInfo = produce(this.registrationInfo, draft => {
        const defaultGroup = draft.registrationGroups.find(gr => gr.defaultGroup);
        if (defaultGroup) {
          defaultGroup.categories = this.unassignedCategoies.map(cat => cat.id);
        }
      });
      this.registrationInfoUpdated.next(regInfo);
    }
  }
}
