import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ComponentModalConfig, ModalSize, SuiModal} from '@frontend-nx/ng2-semantic-ui';
import {InfoService} from '../../../../service/info.service';
import {RegistrationPeriod} from "../../../../commons/model/competition.model";

export interface IAddRegistrationPeriodContext {
  competitionId: string;
  timeZone: string;
}

export interface IAddRegistrationPeriodResult {
  competitionId: string;
  period: RegistrationPeriod;
}

export class AddPeriodModal extends ComponentModalConfig<IAddRegistrationPeriodContext, IAddRegistrationPeriodResult, void> {
  constructor(competitionId: string, timeZone: string, size = ModalSize.Small) {
    super(AddRegistrationPeriodFormComponent, {timeZone, competitionId});

    this.isClosable = true;
    this.transitionDuration = 200;
    this.size = size;
  }
}


@Component({
  selector: 'app-add-registration-period-form',
  template: `

      <div class="header">Add registration period</div>
      <div class="content">
          <form class="ui form" [formGroup]="periodForm">
              <label>
                  Period name:
                  <input class="ui input" type="text" formControlName="name">
              </label>
              <label>
                  Period start:
                  <input class="ui input" suiDatepicker
                         name="start"
                         (pickerSelectedDateChange)="periodStart = $event"
                         [pickerFirstDayOfWeek]="1">
              </label>
              <label>
                  Period end:
                  <input class="ui input" suiDatepicker
                         name="end"
                         (pickerSelectedDateChange)="periodEnd = $event"
                         [pickerFirstDayOfWeek]="1">
              </label>
          </form>
      </div>
      <div class="actions">
          <button class="ui red button" (click)="modal.deny(undefined)">Cancel</button>
          <button class="ui green button" (click)="triggerAddPeriod()" autofocus>OK</button>
      </div>
  `,
  styleUrls: ['./registration-info-editor.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddRegistrationPeriodFormComponent implements OnInit {

  periodForm: FormGroup;

  triggerAddPeriod() {
    const period = {} as RegistrationPeriod;
    period.end = InfoService.formatDate(this.periodStart, this.modal.context.timeZone);
    period.start = InfoService.formatDate(this.periodEnd, this.modal.context.timeZone);
    period.name = this.periodName.value;
    period.competitionId = this.modal.context.competitionId;
    period.id = '';
    this.periodForm.reset();
    this.modal.approve({competitionId: this.modal.context.competitionId, period});
  }


  constructor(private fb: FormBuilder, public modal: SuiModal<IAddRegistrationPeriodContext, IAddRegistrationPeriodResult, void>) {
  }

  ngOnInit() {
    this.periodForm = this.fb.group({
      name: [''],
      start: [''],
      end: ['']
    });
  }

  get periodName() {
    return this.periodForm.get('name');
  }

  get periodStart() {
    return this.periodForm.get('start').value;
  }
  set periodStart(value: Date) {
    this.periodForm.patchValue({
      'start': value
    });
  }



  get periodEnd() {
    return this.periodForm.get('end').value;
  }

  set periodEnd(value: Date) {
    this.periodForm.patchValue({
      'end': value
    });
  }

}
