import {ChangeDetectionStrategy, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, ValidatorFn} from '@angular/forms';
import {ComponentModalConfig, ModalSize, SuiModal, SuiMultiSelect} from '@devas123/ng2-semantic';
import {InfoService} from '../../../../service/info.service';
import {ScheduleRequirement, ScheduleRequirementType} from '../../../../commons/model/competition.model';
import {MatDescription} from '../../../../reducers/global-reducers';

export interface IAddSchedulePauseContext {
  competitionId: string;
  periodId: string;
  periodStartTime: string;
  timeZone: string;
  mats: MatDescription[];
}

export interface IAddSchedulePauseResult {
  pauseRequirement: ScheduleRequirement;
  toMats: string[];
}

export class AddSchedulePauseModal extends ComponentModalConfig<IAddSchedulePauseContext, IAddSchedulePauseResult, void> {
  constructor(competitionId: string, periodId: string, periodStartTime: string, timeZone: string, mats, size = ModalSize.Small) {
    super(AddSchedulePauseFormComponent, {periodId, competitionId, timeZone, periodStartTime, mats});
    this.isClosable = true;
    this.transitionDuration = 200;
    this.size = size;
  }
}


@Component({
  selector: 'app-add-schedule-period-form',
  template: `
    <div class="header">Add pause</div>
    <div class="content">
      <div class="ui form" [formGroup]="form"
           [ngClass]="{error: (form.touched || form.dirty) && form.invalid}">
        <div class="ui error message" *ngIf="form?.errors?.invalidDates">Invalid start or end date.</div>
        <div class="ui error message" *ngIf="form?.errors?.startsBeforePeriod">Pause cannot start before the period starts.</div>
        <div class="field">
          <sui-checkbox (checkChange)="_all = $event">
            Add to all mats
          </sui-checkbox>
        </div>
        <sui-multi-select *ngIf="!_all"
                          [options]="modal.context.mats"
                          placeholder="Mat"
                          labelField="name"
                          [optionFormatter]="matOptionFormatter"
                          [isSearchable]="false"
                          [isDisabled]="false"
                          #multiSelect>
          <sui-select-option *ngFor="let option of multiSelect.filteredOptions"
                             [value]="option">
          </sui-select-option>
        </sui-multi-select>
        <div class="grouped fields margin-vertical">
          <label>Pause type</label>
          <div class="field">
            <input type="radio" name="entryType" [value]="'FIXED_PAUSE'" formControlName="entryType">Fixed
          </div>
          <div class="field">
            <input type="radio" name="entryType" [value]="'RELATIVE_PAUSE'" formControlName="entryType">Relative
          </div>
        </div>
        <div class="fields" *ngIf="entryType === 'FIXED_PAUSE'">
          <div class="field"
               [ngClass]="{error: startTime.invalid && (startTime.touched || startTime.dirty)}">
            <label>Start time</label>
            <div class="ui input">
              <input suiDatepicker
                     name="startTime"
                     placeholder="Start time"
                     formControlName="startTime"
                     [pickerMode]="'datetime'"
                     [pickerUseNativeOnMobile]="false"
                     autocomplete="off">
            </div>
          </div>
          <div class="field"
               [ngClass]="{error: endTime.invalid && (endTime.touched || endTime.dirty)}">
            <label>End time</label>
            <div class="ui input">
              <input suiDatepicker
                     name="endTime"
                     placeholder="End time"
                     formControlName="endTime"
                     [pickerMode]="'datetime'"
                     [pickerUseNativeOnMobile]="false"
                     autocomplete="off">
            </div>
          </div>
        </div>
        <div class="fields" *ngIf="entryType === 'RELATIVE_PAUSE'">
          <div class="three wide field"
               [ngClass]="{error: durationMunutes.invalid && (durationMunutes.touched || durationMunutes.dirty)}">
            <label>Duration</label>
            <div class="ui input">
              <input type="number" name="durationMinutes" placeholder="Minutes" formControlName="durationMinutes">
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="actions">
      <button class="ui red button" (click)="modal.deny(undefined)">Cancel</button>
      <button class="ui green button" [disabled]="form.invalid || !((select?.selectedOptions && select?.selectedOptions?.length > 0) || _all)" (click)="triggerAddPause()" autofocus>OK
      </button>
    </div>
  `,
  styleUrls: ['./schedule-editor.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddSchedulePauseFormComponent implements OnInit, OnDestroy {
  @ViewChild('multiSelect')
  select: SuiMultiSelect<MatDescription, MatDescription>;
  _all = false;
  pauseForm: FormGroup;
  private formValidator: ValidatorFn = control => {
    const entryType = control.get('entryType').value as ScheduleRequirementType;
    const startTime = control.get('startTime').value;
    const endTime = control.get('endTime').value;
    const durationMinutes = control.get('durationMinutes').value;
    switch (entryType) {
      case 'FIXED_PAUSE': {
        if (startTime && endTime) {
          const periodStartTime = InfoService.parseDate(this.modal.context.periodStartTime);
          const s = InfoService.parseDate(startTime);
          const e = InfoService.parseDate(endTime);
          if (s.getTime() >= e.getTime()) {
            return {'invalidDates': true};
          }
          if (s.getTime() < periodStartTime.getTime()) {
            return {'startsBeforePeriod': true};
          }
          return null;
        }
        return {'invalidDates': true};
      }
      case 'RELATIVE_PAUSE': {
        if (durationMinutes) {
          return null;
        }
        return {'invalidDuration': true};
      }
    }
  };
  matOptionFormatter = (mat: MatDescription) => mat.name;


  get form() {
    return this.pauseForm;
  }

  get entryType() {
    return this.form.get('entryType').value;
  }

  get matId() {
    return this.form.get('matId').value;
  }

  triggerAddPause() {
    if (this.form && (!this.select || (this.select.selectedOptions && this.select.selectedOptions.length > 0) || this._all)) {
      const toMats = this._all ? this.modal.context.mats : this.select.selectedOptions;
      switch (this.entryType) {
        case 'RELATIVE_PAUSE': {
          const pauseReq = this.pauseForm.value as ScheduleRequirement;
          pauseReq.entryType = this.entryType;
          this.modal.approve({pauseRequirement: pauseReq, toMats: toMats.map(m => m.id)});
          break;
        }
        case 'FIXED_PAUSE': {
          const pauseReq = {} as ScheduleRequirement;
          pauseReq.startTime = InfoService.formatDate(this.startTime.value, this.modal.context.timeZone);
          pauseReq.endTime = InfoService.formatDate(this.endTime.value, this.modal.context.timeZone);
          pauseReq.entryType = this.entryType;
          this.modal.approve({pauseRequirement: pauseReq, toMats: toMats.map(m => m.id)});
          break;
        }
      }
      this.form.reset();
    }
  }


  constructor(private fb: FormBuilder, public modal: SuiModal<IAddSchedulePauseContext, IAddSchedulePauseResult, void>) {
  }

  ngOnInit() {
    this.pauseForm = this.fb.group({
      durationMinutes: [''],
      startTime: [''],
      endTime: [''],
      matId: [''],
      entryType: ['FIXED_PAUSE']
    }, {validators: [this.formValidator]});
  }

  ngOnDestroy(): void {
  }

  get durationMunutes() {
    return this.form.get('durationMinutes');
  }

  get startTime() {
    return this.form.get('startTime');
  }

  get endTime() {
    return this.form.get('endTime');
  }
}
