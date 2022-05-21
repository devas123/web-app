import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {AppState} from '../../../../reducers/global-reducers';
import {select, Store} from '@ngrx/store';
import {selectAllCompetitions} from '../../redux/reducers';
import {map} from 'rxjs/operators';
import * as allActions from '../../../../actions/actions';
import {CompetitionProperties} from "@frontend-nx/protobuf";

@Component({
  selector: 'app-event-calendar',
  templateUrl: './event-calendar.component.html',
  styleUrls: ['./event-calendar.component.css']
})
export class EventCalendarComponent implements OnInit {
  eventsList$: Observable<CompetitionProperties[]>;
  constructor(private store: Store<AppState>) {
    this.eventsList$ = this.store.pipe(select(selectAllCompetitions), map(data => data as CompetitionProperties[]));
  }


  ngOnInit() {
    this.store.dispatch(allActions.loadCompetitionsList);
  }

}
