import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  OnInit,
  ViewChild
} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ComponentModalConfig, ModalSize, SuiModal} from '@frontend-nx/ng2-semantic-ui';
import {InfoService} from '../../../../service/info.service';
import produce from 'immer';
import {generateUuid} from '../../../account/utils';
import {MatDescription, MatState, Period} from "@frontend-nx/protobuf";

export interface IAddSchedulePeriodContext {
  competitionId: string;
  timeZone: string;
}

export interface IAddSchedulePeriodResult {
  properties: Period;
  mats: MatState[];
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
               [ngClass]="{error: name.invalid && (name.touched || name.dirty)}">
            <label>Period name</label>
            <div class="ui input">
              <input type="text" name="name" placeholder="Period name" formControlName="name">
            </div>
          </div>
          <div class="field">
            <label>Start time</label>
            <div class="ui input">
              <input #startDate
                     (pickerSelectedDateChange)="updateStartTime($event)"
                     suiDatepicker
                     name="startTime"
                     placeholder="Start time"
                     [pickerMode]="'datetime'"
                     [pickerUseNativeOnMobile]="false"
                     autocomplete="off">
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="content" [formGroup]="matDescriptionsForm">
      <div class="ui button" (click)="addMat()">Add area</div>
      <div class="ui divider"></div>
      <div class="ui three stackable cards mat-container" formArrayName="mats">
        <div class="ui card" *ngFor="let matCtrl of matDescriptionsArray.controls; index as i">
          <div class="content" [formGroupName]="i">
            <a class="right floated">
              <i class="close icon" (click)="removeMat(i)"></i>
            </a>
            <div class="header">Mat {{i + 1}}</div>
            <div class="ui divider"></div>
            <div class="ui form">
              <div class="ui field">
                <input type="text" formControlName="name" placeholder="Input mat name"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="actions">
      <button class="ui red button" (click)="modal.deny(undefined)">Cancel</button>
      <button class="ui green button" [disabled]="periodForm.invalid || matDescriptionsForm.invalid"
              (click)="triggerAddSchedulePeriod()" autofocus>OK
      </button>
    </div>
  `,
  styleUrls: ['./schedule-editor-container.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddSchedulePeriodFormComponent implements OnInit {

  periodForm: FormGroup;

  @ViewChild("startDate", {static: false})
  private _startDate: ElementRef;

  matDescriptionsForm: FormGroup;

  get mats() {
    return this.matDescriptionsForm.get('mats') as FormGroup;
  }

  get matDescriptionsArray() {
    return this.matDescriptionsForm.get('mats') as FormArray;
  }

  triggerAddSchedulePeriod() {
    if (this.name.value) {
      const properties = {
        id: this.modal.context.competitionId + generateUuid(),
        name: this.name.value,
        startTime: this.startTime.value,
        timeBetweenFights: this.timeBetweenFights.value,
        riskPercent: this.riskPercent.value,
        categories: [] as string[],
        scheduleEntries: [],
        scheduleRequirements: [],
        isActive: false,
        mats: []
      } as Period;
      const mats = produce(this.mats.value as MatDescription[], draft => {
        draft.forEach((m, ind) => {
          m.name = m.name || `Mat ${ind + 1}`;
          m.periodId = properties.id;
          m.id = m.periodId + generateUuid();
        });
      });
      this.periodForm.reset();
      this.modal.approve({
        properties,
        mats: mats.map(m => (<MatState>{matDescription: m, numberOfFights: 0, topFiveFights: []}))
      });
    }
  }


  constructor(private fb: FormBuilder, public modal: SuiModal<IAddSchedulePeriodContext, IAddSchedulePeriodResult, void>) {
  }

  ngOnInit() {
    this.periodForm = this.fb.group({
      name: ['', [Validators.required]],
      startTime: ['', [Validators.required]],
      timeBetweenFights: [1, [Validators.required, Validators.min(0), Validators.max(99)]],
      riskPercent: [10, [Validators.min(0), Validators.max(300)]],
      id: [''],
      endTime: [''],
      isActive: [''],
      duration: ['']
    });

    this.periodForm.statusChanges.subscribe(console.log)
    this.periodForm.valueChanges.subscribe(console.log)

    this.matDescriptionsForm = this.fb.group({
      mats: this.fb.array([this.createMatDescrControl()])
    });
  }

  get timeBetweenFights() {
    return this.periodForm.get('timeBetweenFights');
  }

  get riskPercent() {
    return this.periodForm.get('riskPercent');
  }

  get name() {
    return this.periodForm.get('name');
  }

  get startTime() {
    return this.periodForm.get('startTime')
  }

  private createMatDescrControl() {
    return this.fb.group({
      id: [''],
      name: ['']
    });
  }

  removeMat(i: number) {
    this.matDescriptionsArray.removeAt(i);
  }

  addMat() {
    this.matDescriptionsArray.push(this.createMatDescrControl());
  }


  updateStartTime(date: Date) {
    this.periodForm.patchValue({"startTime": date}, {emitEvent: true})
  }
}
