import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {RegistrationPeriod} from '../../../../reducers';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ComponentModalConfig, ModalSize, SuiModal} from 'ng2-semantic';
import {InfoService} from '../../../../service/info.service';

export interface IAddPeriodContext {
  competitionId: string;
  timeZone: string;
}

export interface IAddPeriodResult {
  competitionId: string;
  period: RegistrationPeriod;
}

export class AddPeriodModal extends ComponentModalConfig<IAddPeriodContext, IAddPeriodResult, void> {
  constructor(competitionId: string, timeZone: string, size = ModalSize.Small) {
    super(AddPeriodFormComponent, {timeZone, competitionId});

    this.isClosable = true;
    this.transitionDuration = 200;
    this.size = size;
  }
}


@Component({
  selector: 'app-add-period-form',
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
                         formControlName="start"
                         [pickerFirstDayOfWeek]="1">
              </label>
              <label>
                  Period end:
                  <input class="ui input" suiDatepicker
                         formControlName="end"
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
export class AddPeriodFormComponent implements OnInit {

  periodForm: FormGroup;

  triggerAddPeriod() {
    const period = {} as RegistrationPeriod;
    period.end = InfoService.formatDate(this.periodStart.value, this.modal.context.timeZone);
    period.start = InfoService.formatDate(this.periodEnd.value, this.modal.context.timeZone);
    period.name = this.periodName.value;
    period.competitionId = this.modal.context.competitionId;
    period.id = '';
    this.periodForm.reset();
    this.modal.approve({competitionId: this.modal.context.competitionId, period});
  }


  constructor(private fb: FormBuilder, public modal: SuiModal<IAddPeriodContext, IAddPeriodResult, void>) {
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
    return this.periodForm.get('start');
  }

  get periodEnd() {
    return this.periodForm.get('end');
  }
}
