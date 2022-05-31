import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {CompetitionProperties, CompetitionStatus, RegistrationInfo} from "@frontend-nx/protobuf";
import {TimeZone} from "@vvo/tzdb";
import {compmanagerTimeZoneFilter, compmanagerTimeZoneFormatter} from "../../../../reducers/compmanager-utils";

@Component({
  selector: 'app-event-properties-editor',
  templateUrl: './event-properties-editor.component.html',
  styleUrls: ['./event-properties-editor.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EventPropertiesEditorComponent implements OnChanges, OnInit {

  form: FormGroup;

  @Input()
  statusOptions: CompetitionStatus[];

  @Input()
  timeZones: TimeZone[];

  @Input()
  properties: CompetitionProperties;

  @Input()
  registrationInfo: RegistrationInfo;

  @Output()
  propertiesUpdated: EventEmitter<CompetitionProperties> = new EventEmitter<CompetitionProperties>();

  timeZoneFormatter = compmanagerTimeZoneFormatter;
  timeZoneFilter = compmanagerTimeZoneFilter;


  constructor(private fb: FormBuilder) {
  }

  get competitionId() {
    return this.form.get('competitionId');
  }

  get competitionName() {
    return this.form.get('competitionName') as FormControl;
  }

  set startDate(value: Date) {
    this.form.patchValue({
      'startDate': value
    })
  }

  set endDate(value: Date) {
    this.form.patchValue({
      'endDate': value
    })
  }

  get startDate() {
    return this.form.get('startDate').value;
  }

  get schedulePublished() {
    return this.form.get('schedulePublished');
  }

  get bracketsPublished() {
    return this.form.get('bracketsPublished');
  }

  get status() {
    return this.form.get('status');
  }

  get endDate() {
    return this.form.get('endDate').value;
  }

  get timeZone() {
    return this.form.get('timeZone');
  }

  createForm() {
    this.form = this.fb.group({
      competitionId: [this.properties.id, [Validators.required]],
      competitionName: [this.properties.competitionName, [Validators.required]],
      startDate: [this.properties.startDate],
      endDate: [this.properties.endDate],
      timeZone: [<TimeZone>{name: this.properties.timeZone || 'UTC'}],
      schedulePublished: [this.properties.schedulePublished, [Validators.required]],
      bracketsPublished: [this.properties.bracketsPublished, [Validators.required]],
      status: [this.properties.status, [Validators.required]],
    });
  }

  updateForm() {
    if (this.properties && this.form) {
      console.log("Updating form ", this.properties, this.form)
      this.form.patchValue({
        competitionId: this.properties.id,
        competitionName: this.properties.competitionName,
        // registrationFee: this.properties.registrationFee,
        startDate: this.properties.startDate,
        timeZone:  <TimeZone>{name: this.properties.timeZone || 'UTC'},
        schedulePublished: this.properties.schedulePublished || false,
        bracketsPublished: this.properties.bracketsPublished || false,
        status: this.properties.status || "COMPETITION_STATUS_UNKNOWN",
        endDate: this.properties.endDate,
      });
    }
  }

  ngOnChanges() {
    this.updateForm();
  }

  ngOnInit() {
    this.createForm();
  }

  submitForm() {
    const sd = this.startDate;
    const ed = this.endDate;
    const properties = {
      ...this.properties,
      competitionName: this.competitionName.value,
      startDate: sd,
      endDate: ed,
      status: this.status.value,
      timeZone: this.timeZone.value?.name
    } as CompetitionProperties;
    this.propertiesUpdated.next(properties);
  }

  setStatus(status: CompetitionStatus) {
    this.form.patchValue({
      status
    });
  }

  setTimeZone(timeZone: TimeZone) {
    this.form.patchValue({
      timeZone
    });
  }

}
