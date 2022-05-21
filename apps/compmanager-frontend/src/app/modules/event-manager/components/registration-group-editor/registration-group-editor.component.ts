import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {
  Category,
  displayCategory as dc,
  RegistrationGroup,
  RegistrationInfo
} from '../../../../commons/model/competition.model';
import {CdkDragDrop} from '@angular/cdk/drag-drop';
import produce from 'immer';
import {objectValues} from "../../../account/utils";

@Component({
  selector: 'app-registration-group-editor',
  templateUrl: './registration-group-editor.component.html',
  styleUrls: ['./registration-group-editor.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegistrationGroupEditorComponent  {

  get group(): RegistrationGroup {
    if (this.groupId !== false && this.registrationInfo) {
      return this.registrationInfo.registrationGroups && this.registrationInfo.registrationGroups[this.groupId as string];
    }
  }

  get groupCategories(): Category[] {
    if (this.group && this.categories) {
      const groupCatIds = this.group.categories || [];
      return this.categories.filter(cat => groupCatIds.indexOf(cat.id) >= 0);
    }
    return [];
  }

  get assignedCategoryIds(): string[] {
    return (this.registrationInfo && this.registrationInfo.registrationGroups
      && objectValues(this.registrationInfo.registrationGroups).reduce((previousValue: string[], currentValue: RegistrationGroup) => [...previousValue, ...(currentValue.categories || [])], [])) || [];
  }

  get unassignedCategoies(): Category[] {
    return this.categories && this.categories.filter(cat => !this.assignedCategoryIds || this.assignedCategoryIds.indexOf(cat.id) < 0);
  }

  constructor() {

  }

  static displayCategory = dc;
  @Input()
  groupId: string | boolean;

  @Input()
  registrationInfo: RegistrationInfo;

  @Input()
  categories: Category[];

  @Output()
  registrationInfoUpdated = new EventEmitter<RegistrationInfo>();
  changed = false;

  moveCategoryToGroup(cdkDragDrop: CdkDragDrop<Category[]>) {
    if (cdkDragDrop.previousContainer !== cdkDragDrop.container) {
      this.registrationInfo = produce(this.registrationInfo, draft => {
        const currentGroup = draft.registrationGroups[this.groupId as string];
        if (!currentGroup.categories) {
          currentGroup.categories = [];
        }
        if (currentGroup.categories.indexOf(cdkDragDrop.item.data.id) < 0) {
          currentGroup.categories.push(cdkDragDrop.item.data.id);
        }
      });
      this.changed = true;
    }
  }

  moveCategoryOutOfGroup(cdkDragDrop: CdkDragDrop<Category[]>) {
    if (cdkDragDrop.previousContainer !== cdkDragDrop.container) {
      this.registrationInfo = produce(this.registrationInfo, draft => {
        const currentGroup = draft.registrationGroups[this.groupId as string];
        if (!currentGroup.categories) {
          currentGroup.categories = [];
        }
        currentGroup.categories = currentGroup.categories.filter(cat => cat !== cdkDragDrop.item.data);
      });
      this.changed = true;
    }
  }

  saveChanges() {
    if (this.changed) {
      this.registrationInfoUpdated.next(this.registrationInfo);
      this.changed = false;
    }
  }
}
