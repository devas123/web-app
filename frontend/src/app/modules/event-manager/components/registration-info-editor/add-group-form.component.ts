import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {RegistrationGroup} from '../../../../reducers';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ComponentModalConfig, ModalSize, SuiModal} from 'ng2-semantic';

export class AddGroupModal extends ComponentModalConfig<IAddGroupContext, IAddGroupResult, void> {
  constructor(periodId: string, competitionId: string, size = ModalSize.Small) {
    super(AddGroupFormComponent, {periodId, competitionId});

    this.isClosable = true;
    this.transitionDuration = 200;
    this.size = size;
  }
}

export interface IAddGroupContext {
  competitionId: string;
  periodId: string;
}

export interface IAddGroupResult {
  competitionId: string;
  periodId: string;
  group: RegistrationGroup;
}

@Component({
  selector: 'app-add-group-form',
  template: `
      <div class="header">Add registration group</div>
      <div class="content">
          <form class="ui form" [formGroup]="groupForm">
              <label>
                  Entry name:
                  <input class="ui input" type="text" formControlName="displayName">
              </label>
              <label>
                  Registration Fee:
                  <input class="ui input" type="number" formControlName="registrationFee">
              </label>
          </form>
      </div>
      <div class="actions">
          <button class="ui red button" (click)="modal.deny(undefined)">Cancel</button>
          <button class="ui green button" (click)="triggerAddPeriod()" autofocus>OK</button>
      </div>`,
  styleUrls: ['./registration-info-editor.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddGroupFormComponent implements OnInit {

  groupForm: FormGroup;

  triggerAddPeriod() {
    const group = this.groupForm.value as RegistrationGroup;
    group.id = '';
    this.modal.approve({competitionId: this.modal.context.competitionId, periodId: this.modal.context.periodId, group});
    this.groupForm.reset();
  }


  constructor(private fb: FormBuilder, private modal: SuiModal<IAddGroupContext, IAddGroupResult, void>) {
  }

  ngOnInit() {
    this.groupForm = this.fb.group({
      displayName: [''],
      registrationFee: ['']
    });
  }
}
