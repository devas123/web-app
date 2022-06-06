import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ComponentModalConfig, ModalSize, SuiModal} from '@frontend-nx/ng2-semantic-ui';
import {RegistrationGroup} from "@frontend-nx/protobuf";

export class AddGroupModal extends ComponentModalConfig<IAddRegistrationGroupContext, IAddRegistrationGroupResult, void> {
  constructor(context: IAddRegistrationGroupContext, size = ModalSize.Small) {
    super(AddGroupFormComponent, context);

    this.isClosable = true;
    this.transitionDuration = 200;
    this.size = size;
  }
}

export interface IAddRegistrationGroupContext {
  competitionId: string;
  periodId: string;
  existingGroups: RegistrationGroup[];
  haveDefaultGroup: boolean;
}

export interface IAddRegistrationGroupResult {
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
        <div formGroupName="registrationFee">
          <label>
            Registration Fee Amount:
            <input class="ui input" type="number" formControlName="amount">
          </label>
          <label>
            Registration Fee Currency:
            <input class="ui input" type="text" formControlName="currency">
          </label>
        </div>
        <ng-container *ngIf="!modal.context?.haveDefaultGroup">
          <sui-checkbox formControlName="defaultGroup">
            default?
          </sui-checkbox>
        </ng-container>
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
    group.registrationFee.remainder = 0;
    let groups = [];
    let createNew = false;
    if (this.groupsToAdd && this.groupsToAdd.length > 0) {
      groups = this.groupsToAdd;
    } else if (group.displayName && group.registrationFee) {
      group.id = '';
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


  constructor(private fb: FormBuilder, public modal: SuiModal<IAddRegistrationGroupContext, IAddRegistrationGroupResult, void>) {
  }

  ngOnInit() {
    this.groupForm = this.fb.group({
      displayName: ['', [Validators.required]],
      registrationFee: this.fb.group({
        currency: ['', [Validators.required]],
        amount: ['', [Validators.required]],
        remainder: ['']
      }),
      defaultGroup: [false]
    });
  }

  setGroupsToAdd($event: RegistrationGroup[]) {
    this.groupsToAdd = $event;
  }
}
