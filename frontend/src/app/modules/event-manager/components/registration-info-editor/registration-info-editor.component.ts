import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {RegistrationInfo, RegistrationPeriod} from '../../../../reducers';

@Component({
  selector: 'app-registration-info-editor',
  templateUrl: './registration-info-editor.component.html',
  styleUrls: ['./registration-info-editor.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegistrationInfoEditorComponent implements OnInit {

  private ngStyle = {'grid-template-columns': 'repeat(2, 50%)'};

  @Input()
  set colunmsNumber(value: number) {
    if (value) {
      this.ngStyle = {'grid-template-columns': `repeat(${value}, ${100 / value}%)`};
    }
  }

  @Input()
  competitionId: string;

  @Input()
  timeZone: string;

  @Input()
  registrationInfo: RegistrationInfo;

  @Output()
  addPeriod = new EventEmitter<{ competitionId: string, period: RegistrationPeriod }>();

  @Output()
  addGroupModal = new EventEmitter<{ competitionId: string, periodId: string }>();

  @Output()
  deletePeriod = new EventEmitter<{ competitionId: string, periodId: string }>();

  @Output()
  deleteGroup = new EventEmitter<{ competitionId: string, periodId: string, groupId: string }>();

  @Output()
  selectGroup = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit() {
  }

  deleteGroupEvent(groupId: string, periodId: string) {
    this.deleteGroup.next({competitionId: this.competitionId, periodId, groupId});
  }

  deletePeriodEvent(periodId: string) {
    this.deletePeriod.next({competitionId: this.competitionId, periodId});
  }

  openGroupModal(periodId: string) {
    if (periodId && this.competitionId) {
      this.addGroupModal.next({competitionId: this.competitionId, periodId});
    }
  }

}
