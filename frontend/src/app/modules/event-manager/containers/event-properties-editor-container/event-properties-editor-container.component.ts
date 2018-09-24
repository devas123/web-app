import {Component, OnDestroy, OnInit} from '@angular/core';
import {AppState, CompetitionProperties} from '../../../../reducers';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {eventManagerGetSelectedEvent} from '../../redux/event-manager-reducers';
import {updateCompetitionProperties} from '../../redux/event-manager-actions';

@Component({
  selector: 'app-event-properties-editor-container',
  template: '<app-event-properties-editor (propertiesUpdated)="updateProperties($event)" [properties]="competitionProperties$ | async"></app-event-properties-editor>'
})
export class EventPropertiesEditorContainerComponent implements OnInit, OnDestroy {

  competitionProperties$: Observable<CompetitionProperties>;


  constructor(private store: Store<AppState>) {
    this.competitionProperties$ = store.pipe(select(eventManagerGetSelectedEvent));
  }

  ngOnInit() {
  }

  ngOnDestroy() {
  }

  updateProperties(properties: CompetitionProperties) {
    this.store.dispatch(updateCompetitionProperties(properties));
  }

}
