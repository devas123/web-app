import {ChangeDetectionStrategy, Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, ValidatorFn, Validators} from '@angular/forms';
import {ComponentModalConfig, ModalSize, SuiModal, SuiMultiSelect} from '@frontend-nx/ng2-semantic-ui';
import {InfoService} from '../../../../service/info.service';
import {MatState, ScheduleRequirement, ScheduleRequirementType} from "@frontend-nx/protobuf";

export interface IAddSchedulePauseContext {
  competitionId: string;
  periodId: string;
  periodStartTime: Date;
  timeZone: string;
  mats: MatState[];
}

export interface IAddSchedulePauseResult {
  pauseRequirement: ScheduleRequirement;
  toMats: string[];
}

export class AddSchedulePauseModal extends ComponentModalConfig<IAddSchedulePauseContext, IAddSchedulePauseResult, void> {
  constructor(competitionId: string, periodId: string, periodStartTime: Date, timeZone: string, mats, size = ModalSize.Small) {
    super(AddSchedulePauseFormComponent, {periodId, competitionId, timeZone, periodStartTime, mats});
    this.isClosable = true;
    this.transitionDuration = 200;
    this.size = size;
  }
}


@Component({
  selector: 'app-add-pause-form',
  template: `
    <div class="header">Add pause</div>
    <div class="content">
      <div class="ui form" [formGroup]="form"
           [ngClass]="{error: (form.touched || form.dirty) && form.invalid}">
        <div class="ui error message" *ngIf="form?.errors?.invalidDates">Invalid start or end date.</div>
        <div class="ui error message" *ngIf="form?.errors?.startsBeforePeriod">Pause cannot start before the period
          starts.
        </div>
        <div class="field">
          <sui-checkbox (checkChange)="setMats(modal.context.mats)">
            Add to all mats
          </sui-checkbox>
        </div>
        <sui-multi-select [options]="modal.context.mats"
                          placeholder="Area"
                          labelField="name"
                          (selectedOptionsChange)="setMats($event)"
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
            <input type="radio" name="entryType" [value]="'SCHEDULE_REQUIREMENT_TYPE_FIXED_PAUSE'"
                   [formControl]="entryTypeControl()">Fixed
          </div>
          <div class="field">
            <input type="radio" name="entryType" [value]="'SCHEDULE_REQUIREMENT_TYPE_RELATIVE_PAUSE'"
                   [formControl]="entryTypeControl()">Relative
          </div>
        </div>
        <div class="fields" *ngIf="entryType === 'SCHEDULE_REQUIREMENT_TYPE_FIXED_PAUSE'">
          <compmanager-frontend-form-generic-field
            [control]="startTime"
          >
            <label>Start time</label>
            <input input suiDatepicker
                   name="startTime"
                   placeholder="Start time"
                   [pickerMode]="'time'"
                   [pickerInitialDate]="modal.context.periodStartTime"
                   [pickerUseNativeOnMobile]="false"
                   (pickerSelectedDateChange)="setStartTime($event)"
                   autocomplete="off">
          </compmanager-frontend-form-generic-field>
          <compmanager-frontend-form-generic-field
            [control]="endTime"
          >
            <label>End time</label>
            <input input suiDatepicker
                   name="endTime"
                   placeholder="End time"
                   [pickerMode]="'time'"
                   [pickerInitialDate]="modal.context.periodStartTime"
                   [pickerUseNativeOnMobile]="false"
                   (pickerSelectedDateChange)="setEndTime($event)"
                   autocomplete="off">
          </compmanager-frontend-form-generic-field>
        </div>
        <compmanager-frontend-form-generic-field
          *ngIf="entryType === 'SCHEDULE_REQUIREMENT_TYPE_RELATIVE_PAUSE'"
          [control]="durationMinutes"
        >
          <label>Duration</label>
          <input input type="number" name="durationMinutes" placeholder="Minutes" [formControl]="durationMinutes">
        </compmanager-frontend-form-generic-field>
      </div>
    </div>
    <div class="actions">
      <compmanager-frontend-button
        [name]="'Cancel'"
        (click)="modal.deny(undefined)"
      ></compmanager-frontend-button>
      <compmanager-frontend-submit-button
        [name]="'OK'"
        [disabled]="unableToSubmit()"
        (click)="triggerAddPause()" autofocus>
        >
      </compmanager-frontend-submit-button>
    </div>
  `,
  styleUrls: ['./schedule-editor.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddSchedulePauseFormComponent implements OnInit {
  @ViewChild('multiSelect')
  matsSelect: SuiMultiSelect<MatState, MatState>;
  pauseForm: FormGroup;

  unableToSubmit() {
    return this.form.invalid || this.mats.length === 0
  }

  private formValidator: ValidatorFn = control => {
    const entryType = control.get('entryType').value as ScheduleRequirementType;
    const startTime = control.get('startTime').value;
    const endTime = control.get('endTime').value;
    const durationMinutes = control.get('durationMinutes').value;
    switch (entryType) {
      case 'SCHEDULE_REQUIREMENT_TYPE_FIXED_PAUSE': {
        if (startTime && endTime) {
          const periodStartTime = this.modal.context.periodStartTime;
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
      case 'SCHEDULE_REQUIREMENT_TYPE_RELATIVE_PAUSE': {
        if (durationMinutes) {
          return null;
        }
        return {'invalidDuration': true};
      }
    }
  };
  matOptionFormatter = (mat: MatState) => mat?.matDescription?.name;


  get form() {
    return this.pauseForm;
  }

  entryTypeControl() {
    return this.form.get('entryType') as FormControl;
  }

  matsControl() {
    return this.form.get('mats') as FormControl;
  }

  get entryType() {
    return this.entryTypeControl().value;
  }

  get mats() {
    return this.matsControl().value;
  }

  triggerAddPause() {
    if (!this.unableToSubmit()) {
      const toMats = this.mats;
      switch (this.entryType) {
        case 'SCHEDULE_REQUIREMENT_TYPE_RELATIVE_PAUSE': {
          const pauseReq = this.pauseForm.value as ScheduleRequirement;
          pauseReq.entryType = this.entryType;
          pauseReq.durationSeconds = this.durationMinutes.value * 60
          this.modal.approve({pauseRequirement: pauseReq, toMats: toMats.map(m => m.id)});
          break;
        }
        case 'SCHEDULE_REQUIREMENT_TYPE_FIXED_PAUSE': {
          const pauseReq = {} as ScheduleRequirement;
          pauseReq.startTime = this.startTime.value
          pauseReq.endTime = this.endTime.value
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
      durationMinutes: [undefined],
      startTime: [this.modal.context.periodStartTime],
      endTime: [this.modal.context.periodStartTime],
      mats: [[], [Validators.required]],
      entryType: ['SCHEDULE_REQUIREMENT_TYPE_FIXED_PAUSE', [Validators.required]]
    }, {validators: [this.formValidator]});
  }


  get durationMinutes() {
    return this.form.get('durationMinutes') as FormControl;
  }

  get startTime() {
    return this.form.get('startTime') as FormControl;
  }

  get endTime() {
    return this.form.get('endTime') as FormControl;
  }

  setStartTime(startTime: Date) {
    this.form.patchValue(
      {
        startTime
      }
    )
  }

  setEndTime(endTime: Date) {
    this.form.patchValue(
      {
        endTime
      }
    )
  }

  setMats(mats: MatState[]) {
    this.form.patchValue(
      {
        mats
      }
    )
    this.matsSelect.selectedOptions = mats;

  }
}
