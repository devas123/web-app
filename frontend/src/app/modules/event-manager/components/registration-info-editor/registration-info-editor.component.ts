import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {RegistrationGroup, RegistrationInfo, RegistrationPeriod} from '../../../../reducers';
import {FormArray, FormBuilder, FormGroup} from '@angular/forms';
import {IContext} from '../schedule-editor/schedule-editor.component';
import {ModalTemplate, SuiModalService, TemplateModalConfig} from 'ng2-semantic-ui';

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
  registrationInfo: RegistrationInfo;

  @Output()
  addPeriod = new EventEmitter<{competitionId: string, period: RegistrationPeriod}>();

  @Output()
  addGroup = new EventEmitter<{ competitionId: string, periodId: string, group: RegistrationGroup }>();

  groupForm: FormGroup;

  periodForm: FormGroup;

  get registrationGroups() {
    return this.groupForm.get("registrationGroups") as FormArray
  }


  constructor(private fb: FormBuilder, private modalService: SuiModalService) {
  }

  ngOnInit() {
    this.groupForm = this.fb.group({
      displayName: [''],
      registrationFee: ['']
    });

    this.periodForm = this.fb.group({
      id: [''],
      start: [''],
      end: ['']
    });
  }

  public openModal(dynamicContent: string = 'group') {
    const template = dynamicContent === 'period' ? this.addPeriodTemplate : this.modalTemplate;
    const config = new TemplateModalConfig<IContext, string, string>(template);
    config.closeResult = "closed!";
    config.context = {data: dynamicContent};

    this.modalService
      .open(config)
      .onApprove(result => { /* approve callback */
      })
      .onDeny(result => { /* deny callback */
      });
  }

}
