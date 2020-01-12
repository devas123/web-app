import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ComponentModalConfig, ModalSize, SuiModal} from 'ng2-semantic';
import {InfoService} from '../../../../service/info.service';
import {Category, PeriodProperties} from '../../../../commons/model/competition.model';

export interface IAddSchedulePeriodContext {
  competitionId: string;
  timeZone: string;
}

export interface IAddSchedulePeriodResult {
  properties: PeriodProperties;
}

export class AddSchedulePeriodModal extends ComponentModalConfig<IAddSchedulePeriodContext, IAddSchedulePeriodResult, void> {
  constructor(competitionId: string, timeZone: string, size = ModalSize.Normal) {
    super(AddSchedulePeriodFormComponent, {timeZone, competitionId});
    this.isClosable = true;
    this.transitionDuration = 200;
    this.size = size;
  }
}


@Component({
  selector: 'app-add-schedule-period-form',
  template: `
      <div class="header">Add Schedule Period</div>
      <div class="content">
          <div class="ui form" [formGroup]="periodForm"
               [ngClass]="{error: (periodForm.touched || periodForm.dirty) && periodForm.invalid}">
              <div class="fields">
                  <div class="three wide field"
                       [ngClass]="{error: numberOfMats.invalid && (numberOfMats.touched || numberOfMats.dirty)}">
                      <label>Number of mats</label>
                      <div class="ui input">
                          <input type="number" name="numberOfMats" placeholder="Number of mats" formControlName="numberOfMats">
                      </div>
                  </div>
                  <div class="three wide field"
                       [ngClass]="{error: timeBetweenFights.invalid && (timeBetweenFights.touched || timeBetweenFights.dirty)}">
                      <label>Time between fights</label>
                      <div class="ui input">
                          <input type="number" name="timeBetweenFights" placeholder="Minutes"
                                 formControlName="timeBetweenFights">
                      </div>
                  </div>
                  <div class="three wide field"
                       [ngClass]="{error: riskPercent.invalid && (riskPercent.touched || riskPercent.dirty)}">
                      <label>Risk percent</label>
                      <div class="ui input">
                          <input type="number" name="riskPercent" placeholder="Risk percent" formControlName="riskPercent">
                      </div>
                  </div>
                  <div class="field"
                       [ngClass]="{error: periodName.invalid && (periodName.touched || periodName.dirty)}">
                      <label>Period name</label>
                      <div class="ui input">
                          <input type="text" name="periodName" placeholder="Period name" formControlName="periodName">
                      </div>
                  </div>
                  <div class="field">
                      <label>Start time</label>
                      <div class="ui input">
                          <input suiDatepicker
                                 name="periodStartTime"
                                 placeholder="Start time"
                                 formControlName="periodStartTime"
                                 [pickerMode]="'datetime'"
                                 [pickerUseNativeOnMobile]="false"
                                 autocomplete="off">
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <div class="actions">
          <button class="ui red button" (click)="modal.deny(undefined)">Cancel</button>
          <button class="ui green button" [disabled]="periodForm.invalid" (click)="triggerAddSchedulePeriod()" autofocus>OK
          </button>
      </div>
  `,
  styleUrls: ['./schedule-editor-container.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddSchedulePeriodFormComponent implements OnInit {

  periodForm: FormGroup;

  triggerAddSchedulePeriod() {
    if (this.periodName.value) {
      const properties = {
        id: btoa(this.periodName.value),
        name: this.periodName.value,
        startTime: InfoService.formatDate(this.periodStartTime.value, this.modal.context.timeZone),
        numberOfMats: this.numberOfMats.value,
        timeBetweenFights: this.timeBetweenFights.value,
        riskPercent: this.riskPercent.value,
        categories: [] as Category[]
      } as PeriodProperties;
      this.periodForm.reset();
      this.modal.approve({properties});
    }
  }


  constructor(private fb: FormBuilder, public modal: SuiModal<IAddSchedulePeriodContext, IAddSchedulePeriodResult, void>) {
  }

  ngOnInit() {
    this.periodForm = this.fb.group({
      periodName: ['', [Validators.required]],
      periodStartTime: ['', [Validators.required]],
      numberOfMats: [1, [Validators.required, Validators.min(0), Validators.max(99)]],
      timeBetweenFights: [1, [Validators.required, Validators.min(0), Validators.max(99)]],
      riskPercent: [0.1, [Validators.min(0), Validators.max(1)]]
    });
  }

  get numberOfMats() {
    return this.periodForm.get('numberOfMats');
  }

  get timeBetweenFights() {
    return this.periodForm.get('timeBetweenFights');
  }

  get riskPercent() {
    return this.periodForm.get('riskPercent');
  }

  get periodName() {
    return this.periodForm.get('periodName');
  }

  get periodStartTime() {
    return this.periodForm.get('periodStartTime');
  }

}
