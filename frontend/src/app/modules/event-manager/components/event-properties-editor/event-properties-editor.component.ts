import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, Output} from '@angular/core';
import {CompetitionProperties} from '../../../../reducers';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Location} from '@angular/common';
import {Router} from '@angular/router';
import {InfoService} from '../../../../service/info.service';

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
    if (this.properties) {
      this.form.patchValue({
        competitionId: this.properties.id,
        competitionName: this.properties.competitionName,
        // registrationFee: this.properties.registrationFee,
        startDate: InfoService.parseDate(this.properties.startDate),
        timeZone: this.properties.timeZone || 'UNKNOWN',
        schedulePublished: this.properties.schedulePublished || false,
        bracketsPublished: this.properties.bracketsPublished || false,
        status: this.properties.status || 'UNKNOWN',
        endDate: InfoService.parseDate(this.properties.endDate),
        registrationOpen: (this.properties.registrationInfo && this.properties.registrationInfo.registrationOpen) || false,
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
      startDate: sd.toISOString(),
      endDate: ed.toISOString(),
      registrationOpen: this.registrationOpen.value,
    } as CompetitionProperties;
    this.propertiesUpdated.next(properties);
  }
}
