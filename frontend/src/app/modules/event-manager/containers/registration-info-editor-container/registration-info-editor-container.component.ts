import {Component, OnInit} from '@angular/core';
import {AppState, RegistrationGroup, RegistrationInfo, RegistrationPeriod} from '../../../../reducers';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {
  eventManagerGetSelectedEventId,
  eventManagerGetSelectedEventRegistrationInfo
} from '../../redux/event-manager-reducers';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-registration-info-editor-container',
  templateUrl: './registration-info-editor-container.component.html',
  styleUrls: ['./registration-info-editor-container.component.css']
})
export class RegistrationInfoEditorContainerComponent implements OnInit {

  registrationInfo$: Observable<RegistrationInfo>;
  competitionId$: Observable<string>;

  constructor(private store: Store<AppState>, private router: Router, private route: ActivatedRoute) {
    this.registrationInfo$ = store.select(eventManagerGetSelectedEventRegistrationInfo);
    this.competitionId$ = store.select(eventManagerGetSelectedEventId);
  }

  addRegistrationInfoGroup(data: { competitionId: string, periodId: string, group: RegistrationGroup }) {

  }

  addRegistrationInfoPeriod(data: {competitionId: string, period: RegistrationPeriod}) {

  }

  goBack() {

  }

  ngOnInit() {
  }

}
