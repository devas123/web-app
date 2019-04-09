import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {RegistrationGroup, RegistrationInfo, RegistrationPeriod} from '../../../../reducers';
import {FormArray, FormBuilder, FormGroup} from '@angular/forms';
import {IContext} from '../schedule-editor/schedule-editor.component';
import {ModalTemplate, SuiModalService, TemplateModalConfig} from 'ng2-semantic-ui';
import {InfoService} from '../../../../service/info.service';

@Component({
  selector: 'app-registration-info-editor',
  templateUrl: './registration-info-editor.component.html',
  styleUrls: ['./registration-info-editor.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegistrationInfoEditorComponent implements OnInit {

  @ViewChild('modalTemplate')
  public modalTemplate: ModalTemplate<IContext, string, string>;

  @ViewChild('addPeriodTemplate')
  public addPeriodTemplate: ModalTemplate<IContext, string, string>;

  @Input()
  competitionId: string;

  @Input()
  timeZone: string;

  @Input()
  registrationInfo: RegistrationInfo;

  @Output()
  addPeriod = new EventEmitter<{ competitionId: string, period: RegistrationPeriod }>();

  @Output()
  addGroup = new EventEmitter<{ competitionId: string, periodId: string, group: RegistrationGroup }>();

  @Output()
  deletePeriod = new EventEmitter<{ competitionId: string, periodId: string }>();

  @Output()
  deleteGroup = new EventEmitter<{ competitionId: string, periodId: string, groupId: string}>();

  @Output()
  selectGroup = new EventEmitter<string>();

  groupForm: FormGroup;

  periodForm: FormGroup;

  get registrationGroups() {
    return this.groupForm.get('registrationGroups') as FormArray;
  }


  constructor(private fb: FormBuilder, private modalService: SuiModalService) {
  }

  ngOnInit() {
    this.groupForm = this.fb.group({
      displayName: [''],
      registrationFee: ['']
    });

    this.periodForm = this.fb.group({
      name: [''],
      start: [''],
      end: ['']
    });
  }

  get periodName() {
    return this.periodForm.get('id');
  }

  get periodStart() {
    return this.periodForm.get('start');
  }

  get periodEnd() {
    return this.periodForm.get('end');
  }

  deleteGroupEvent(groupId: string, periodId: string) {
    this.deleteGroup.next({competitionId: this.competitionId, periodId, groupId});
  }

  deletePeriodEvent(periodId: string) {
    this.deletePeriod.next({competitionId: this.competitionId, periodId});
  }

  public openModal(dynamicContent: string = 'group', periodId?: string) {
    const template = dynamicContent === 'period' ? this.addPeriodTemplate : this.modalTemplate;
    const config = new TemplateModalConfig<IContext, string, string>(template);
    config.closeResult = 'closed!';
    config.context = {data: dynamicContent};

    this.modalService
      .open(config)
      .onApprove(result => {
        if (dynamicContent === 'period') {
          const period = {} as RegistrationPeriod;
          period.end = InfoService.formatDate(this.periodStart.value, this.timeZone);
          period.start = InfoService.formatDate(this.periodEnd.value, this.timeZone);
          period.name = this.periodName.value;
          period.competitionId = this.competitionId;
          period.id = '';
          this.addPeriod.next({competitionId: this.competitionId, period});
          this.periodForm.reset();
        } else {
          const group = this.groupForm.value as RegistrationGroup;
          group.registrationPeriodId = periodId;
          group.id = `${periodId}-group-${btoa(group.displayName)}`;
          this.addGroup.next({competitionId: this.competitionId, periodId: periodId, group});
          this.groupForm.reset();
        }
      })
      .onDeny(result => { /* deny callback */
      });
  }

}
