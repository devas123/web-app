import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CompetitionProperties, RegistrationInfo} from "@frontend-nx/protobuf";

@Component({
  selector: 'app-event-properties-editor',
  templateUrl: './event-properties-editor.component.html',
  styleUrls: ['./event-properties-editor.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EventPropertiesEditorComponent implements OnChanges {

  form: FormGroup;

  @Input()
  properties: CompetitionProperties;

  @Input()
  registrationInfo: RegistrationInfo;

  @Output()
  propertiesUpdated: EventEmitter<CompetitionProperties> = new EventEmitter<CompetitionProperties>();

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  get competitionId() {
    return this.form.get('competitionId');
  }

  get competitionName() {
    return this.form.get('competitionName');
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

  get registrationOpen() {
    return this.form.get('registrationOpen');
  }

  createForm() {
    this.form = this.fb.group({
      competitionId: ['', [Validators.required]],
      competitionName: ['', [Validators.required]],
      startDate: [''],
      endDate: [''],
      timeZone: [''],
      schedulePublished: [false, [Validators.required]],
      bracketsPublished: [false, [Validators.required]],
      status: ['', [Validators.required]],
      registrationOpen: [false, [Validators.required]]
    });
  }

  updateForm() {
    console.log("Updating form ", this.properties, this.form)
    if (this.properties) {
      this.form.patchValue({
        competitionId: this.properties.id,
        competitionName: this.properties.competitionName,
        // registrationFee: this.properties.registrationFee,
        startDate: this.properties.startDate,
        timeZone: this.properties.timeZone || 'UNKNOWN',
        schedulePublished: this.properties.schedulePublished || false,
        bracketsPublished: this.properties.bracketsPublished || false,
        status: this.properties.status || 'UNKNOWN',
        endDate: this.properties.endDate,
        registrationOpen: (this.registrationInfo && this.registrationInfo.registrationOpen) || false,
      });
    }
  }

  ngOnChanges() {
    this.updateForm();
  }

  navigateToDashboard() {
    // window.location.href = this.location.path(false) + '/dashboard';
  }

  submitForm() {
    const sd = this.startDate;
    const ed = this.endDate;
    const properties = {
      ...this.properties,
      competitionName: this.competitionName.value,
      startDate: sd,
      endDate: ed,
      registrationOpen: this.registrationOpen.value,
    } as CompetitionProperties;
    this.propertiesUpdated.next(properties);
  }
}
