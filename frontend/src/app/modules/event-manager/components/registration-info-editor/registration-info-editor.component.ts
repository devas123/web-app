import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {RegistrationGroup, RegistrationInfo, RegistrationPeriod} from '../../../../reducers';
import {FormBuilder} from '@angular/forms';
import {SuiModalService} from 'ng2-semantic';
import {AddGroupModal, IAddGroupResult} from './add-group-form.component';
import {AddPeriodModal, IAddPeriodResult} from './add-period-form.component';

@Component({
  selector: 'app-registration-info-editor',
  templateUrl: './registration-info-editor.component.html',
  styleUrls: ['./registration-info-editor.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegistrationInfoEditorComponent implements OnInit {

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
  deleteGroup = new EventEmitter<{ competitionId: string, periodId: string, groupId: string }>();

  @Output()
  selectGroup = new EventEmitter<string>();


  constructor(private fb: FormBuilder, private modalService: SuiModalService) {
  }

  ngOnInit() {
  }

  deleteGroupEvent(groupId: string, periodId: string) {
    this.deleteGroup.next({competitionId: this.competitionId, periodId, groupId});
  }

  deletePeriodEvent(periodId: string) {
    this.deletePeriod.next({competitionId: this.competitionId, periodId});
  }

  public openGroupModal(periodId: string) {
    this.modalService.open(new AddGroupModal(periodId, this.competitionId))
      .onApprove((result: IAddGroupResult) => this.addGroup.next(result))
      .onDeny(_ => { /* deny callback */
      });
  }

  public openAddPeriodModal() {
    this.modalService.open(new AddPeriodModal(this.competitionId, this.timeZone))
      .onApprove((result: IAddPeriodResult) => this.addPeriod.next(result))
      .onDeny(_ => { /* deny callback */
      });
  }

}
