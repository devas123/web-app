import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, Output} from '@angular/core';
import {CompetitionProperties} from '../../../../reducers';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Location} from '@angular/common';
import {Router} from '@angular/router';

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

  @Output()
  propertiesUpdated: EventEmitter<CompetitionProperties> = new EventEmitter<CompetitionProperties>();

  constructor(private fb: FormBuilder, private location: Location, private router: Router) {
    this.createForm();
  }

  get competitionId() {
    return this.form.get('competitionId');
  }

  get competitionName() {
    return this.form.get('competitionName');
  }

  get registrationFee() {
    return this.form.get('registrationFee');
  }

  get startDate() {
    return this.form.get('startDate');
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
    return this.form.get('endDate');
  }

  get registrationOpen() {
    return this.form.get('registrationOpen');
  }


  createForm() {
    this.form = this.fb.group({
      competitionId: ['', [Validators.required]],
      competitionName: ['', [Validators.required]],
      registrationFee: ['', [Validators.required]],
      startDate: [''],
      schedulePublished: [false, [Validators.required]],
      bracketsPublished: [false, [Validators.required]],
      status: ['', [Validators.required]],
      endDate: [''],
      registrationOpen: [false, [Validators.required]]
    });
  }

  updateForm() {
    if (this.properties) {
      this.form.setValue({
        competitionId: this.properties.competitionId,
        competitionName: this.properties.competitionName,
        registrationFee: this.properties.registrationFee,
        startDate: new Date(this.properties.startDate),
        schedulePublished: this.properties.schedulePublished,
        bracketsPublished: this.properties.bracketsPublished,
        status: this.properties.status,
        endDate: new Date(this.properties.endDate),
        registrationOpen: this.properties.registrationOpen,
      });
    }
  }

  ngOnChanges() {
    this.updateForm();
  }

  navigateBack() {
    const path = this.location.path(false);
    this.router.navigateByUrl(path.slice(0, path.lastIndexOf('/')));
  }

  navigateToDashboard() {
    // window.location.href = this.location.path(false) + '/dashboard';
  }

  submitForm() {
    const sd = new Date(this.startDate.value);
    const ed = new Date(this.endDate.value);
    const properties = {
      ...this.properties,
      competitionName: this.competitionName.value,
      registrationFee: this.registrationFee.value,
      startDate: +sd,
      endDate: +ed,
      registrationOpen: this.registrationOpen.value,

    };
    this.propertiesUpdated.next(properties);
  }
}
