
import {map} from 'rxjs/operators';
import {AfterContentInit, ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {AppState, CompetitionProperties, selectAllCompetitions, selectCompetitionListState} from '../../../../reducers';
import {Observable} from 'rxjs';
import * as allActions from '../../../../actions/actions';






declare var $: any;

@Component({
  selector: 'event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EventListComponent implements OnInit, AfterContentInit {

  eventsList$: Observable<CompetitionProperties[]>;

  constructor(private store: Store<AppState>) {
    this.eventsList$ = this.store.pipe(select(selectAllCompetitions), map(data => data as CompetitionProperties[]));
  }

  ngOnInit() {
    this.store.dispatch(allActions.loadCompetitionsList);
  }

  ngAfterContentInit(): void {
  }
}
