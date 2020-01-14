import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {RegistrationGroup} from '../../../../reducers/global-reducers';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ComponentModalConfig, ModalSize, SuiModal} from 'ng2-semantic';

export class AddGroupModal extends ComponentModalConfig<IAddGroupContext, IAddGroupResult, void> {
  constructor(periodId: string, competitionId: string, existingGroups: RegistrationGroup[], size = ModalSize.Small) {
    super(AddGroupFormComponent, {periodId, competitionId, existingGroups});

    this.isClosable = true;
    this.transitionDuration = 200;
    this.size = size;
  }
}

export interface IAddGroupContext {
  competitionId: string;
  periodId: string;
  existingGroups: RegistrationGroup[];
}

export interface IAddGroupResult {
  createNew: boolean;
  competitionId: string;
  registrationInfoId: string;
  periodId: string;
  groups: RegistrationGroup[];
}

@Component({
  selector: 'app-add-group-form',
  template: `
    <div class="header">Add registration group</div>
    <div class="content">
      <sui-multi-select
        (selectedOptionsChange)="setGroupsToAdd($event)"
        [isSearchable]="true"
        [isDisabled]="false"
        [options]="modal.context.existingGroups"
        [optionFormatter]="formatter"
        [maxSelected]="10"
        placeholder="Select existing groups"
        icon="list"
        #select>
        <div class="ui icon search input">
          <i class="search icon"></i>
          <input suiSelectSearch type="text" placeholder="Search options...">
        </div>
        <div class="divider"></div>
        <div class="header">
          <i class="list icon"></i>
          Options
        </div>
        <div class="scrolling menu">
          <sui-select-option *ngFor="let o of select.filteredOptions" [value]="o"></sui-select-option>
        </div>
      </sui-multi-select>
      <form class="ui form" [formGroup]="groupForm" *ngIf="!groupsToAdd || groupsToAdd.length === 0">
        <label>
          Entry name:
          <input class="ui input" type="text" formControlName="displayName">
        </label>
        <label>
          Registration Fee:
          <input class="ui input" type="number" formControlName="registrationFee">
        </label>
        <sui-checkbox formControlName="defaultGroup">
          default?
        </sui-checkbox>
      </form>
    </div>
    <div class="actions">
      <button class="ui red button" (click)="modal.deny(undefined)">Cancel</button>
      <button class="ui green button" (click)="addGroup()" autofocus>OK</button>
    </div>`,
  styleUrls: ['./registration-info-editor.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddGroupFormComponent implements OnInit {

  groupForm: FormGroup;

  groupsToAdd: RegistrationGroup[] = [];
  formatter = (group: RegistrationGroup) => group.displayName + (group.defaultGroup ? ' (Default)' : '');

  addGroup() {
    const group = this.groupForm.value as RegistrationGroup;
    let groups = [];
    let createNew = false;
    if (this.groupsToAdd && this.groupsToAdd.length > 0) {
      groups = this.groupsToAdd;
    } else if (group.displayName && group.registrationFee) {
      group.id = '';
      group.registrationInfoId = this.modal.context.competitionId;
      groups = [group];
      createNew = true;
    }
    if (groups && groups.length > 0) {
      this.modal.approve({
        competitionId: this.modal.context.competitionId,
        registrationInfoId: this.modal.context.competitionId,
        periodId: this.modal.context.periodId,
        groups,
        createNew
      });
    } else {
      this.modal.deny(undefined);
    }
    this.groupForm.reset();
  }


  constructor(private fb: FormBuilder, public modal: SuiModal<IAddGroupContext, IAddGroupResult, void>) {
  }

  ngOnInit() {
    this.groupForm = this.fb.group({
      displayName: [''],
      registrationFee: [''],
      defaultGroup: [false]
    });
  }

  setGroupsToAdd($event: RegistrationGroup[]) {
    this.groupsToAdd = $event;
  }
}
