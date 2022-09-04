import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {
  CompetitionProperties,
  CompetitionStatus,
  PromoCode,
  RegistrationGroup,
  RegistrationInfo,
  RegistrationPeriod
} from "@frontend-nx/protobuf";
import {TimeZone} from "@vvo/tzdb";
import {compmanagerTimeZoneFilter, compmanagerTimeZoneFormatter} from "../../../../reducers/compmanager-utils";
import {Account} from "../../../../../../../../libs/protobuf/src/lib/account";


@Component({
  selector: 'compmanager-frontend-create-event',
  templateUrl: './create-event.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateEventComponent {
  form: FormGroup;

  @Output()
  createCompetition = new EventEmitter<{ competitionProperties: CompetitionProperties, regInfo: RegistrationInfo }>();

  @Input()
  user: Account

  @Input()
  timeZones: TimeZone[];

  timeZoneFormatter = compmanagerTimeZoneFormatter;
  timeZoneFilter = compmanagerTimeZoneFilter;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }


  get competitionName() {
    return this.form.get('competitionName') as FormControl;
  }

  get startDate() {
    return this.form.get('startDate') as FormControl;
  }

  setStartDate(value: Date) {
    this.form.patchValue({startDate: value});
  }

  get timeZone() {
    return this.form.get('timeZone') as FormControl;
  }

  setTimeZone(value: TimeZone) {
    this.form.patchValue({timeZone: value});
  }

  get registrationOpen() {
    return this.form.get('registrationOpen') as FormControl;
  }

  createForm() {
    this.form = this.fb.group({
      competitionName: ['', [Validators.required]],
      startDate: [undefined, [Validators.required]],
      timeZone: [undefined, [Validators.required]],
      registrationOpen: [false]
    });
  }

  displayErrorList() {
    return this.form.invalid && this.form.touched && this.form.dirty
  }


  submitForm() {
    const props = <CompetitionProperties>{};
    const regInfo = <RegistrationInfo>{};
    regInfo.registrationOpen = this.registrationOpen.value || false;
    regInfo.id = '';
    regInfo.registrationGroups = <{ [key: string]: RegistrationGroup }>{};
    regInfo.registrationPeriods = <{ [key: string]: RegistrationPeriod }>{};
    props.creatorId = Number(this.user.userId).toString();
    props.competitionName = this.competitionName.value;
    props.id = '';
    props.schedulePublished = false;
    props.bracketsPublished = false;
    props.emailNotificationsEnabled = false;
    props.staffIds = <string[]>[];
    props.promoCodes = <PromoCode[]>[];
    props.timeZone = this.timeZone.value?.name || 'UTC';
    props.status = CompetitionStatus.COMPETITION_STATUS_CREATED;
    props.creationTimestamp = new Date();
    props.startDate = this.startDate.value
    this.createCompetition.next({competitionProperties: props, regInfo})
  }
}
