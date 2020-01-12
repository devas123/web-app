import {Component} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {AppState} from '../../../../reducers/global-reducers';
import {Observable} from 'rxjs';
import {
  eventManagerGetSelectedEventSelectedCategoryFightsEditorStateIds,
  eventManagerGetSelectedEventSelectedCategoryFightsEditorStateSelectedChange,
  eventManagerGetSelectedEventSelectedCategoryFightsEditorStateSelectedChangeFights
} from '../../redux/event-manager-reducers';
import {Fight, FightsEditorChange} from '../../../../commons/model/competition.model';
import {eventManagerFightsEditorChangeAdded, eventManagerFightsForChangeUnselected} from '../../redux/event-manager-actions';

@Component({
  selector: `app-fights-editor-container`,
  template: `
      <app-fights-editor [changeFights]="changeFights$ | async" [change]="change$ | async" [changeIds]="changeIds$ | async"
                         (changeSaved)="dispatchChangeSavedEvent($event)"
      (fightSelectionCleared)="dipatchFightsSelectionClearedEvent()"></app-fights-editor>`,
})
export class FightsEditorContainerComponent {
  changeFights$: Observable<Fight[]>;
  change$: Observable<FightsEditorChange>;
  changeIds$: Observable<string[] | number[]>;

  constructor(private store: Store<AppState>) {
    this.change$ = store.pipe(select(eventManagerGetSelectedEventSelectedCategoryFightsEditorStateSelectedChange));
    this.changeIds$ = store.pipe(select(eventManagerGetSelectedEventSelectedCategoryFightsEditorStateIds));
    this.changeFights$ = store.pipe(select(eventManagerGetSelectedEventSelectedCategoryFightsEditorStateSelectedChangeFights));
  }

  dispatchChangeSavedEvent(change: FightsEditorChange) {
    this.store.dispatch(eventManagerFightsEditorChangeAdded({change}));
  }

  dipatchFightsSelectionClearedEvent() {
    this.store.dispatch(eventManagerFightsForChangeUnselected());
  }
}
