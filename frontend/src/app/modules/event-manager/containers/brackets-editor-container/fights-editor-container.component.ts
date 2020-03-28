import {Component} from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from '../../../../reducers/global-reducers';
import {FightsEditorChange} from '../../../../commons/model/competition.model';
import {eventManagerFightsEditorChangeAdded, eventManagerFightsForChangeUnselected} from '../../redux/event-manager-actions';
import {CommonBracketsInfoContainer} from '../../../../commons/classes/common-brackets-container.component';

@Component({
  selector: `app-fights-editor-container`,
  template: `
    <app-fights-editor [changeFights]="bracketsInfo.changeFights$ | async" [change]="bracketsInfo.change$ | async" [changeIds]="bracketsInfo.changeIds$ | async"
                       [competitors]="bracketsInfo.competitors$ | async"
                       (changeSaved)="dispatchChangeSavedEvent($event)"
                       (fightSelectionCleared)="dipatchFightsSelectionClearedEvent()"></app-fights-editor>`
})
export class FightsEditorContainerComponent {
  constructor(private store: Store<AppState>, private bracketsInfo: CommonBracketsInfoContainer) {
  }

  dispatchChangeSavedEvent(change: FightsEditorChange) {
    this.store.dispatch(eventManagerFightsEditorChangeAdded({change}));
  }

  dipatchFightsSelectionClearedEvent() {
    this.store.dispatch(eventManagerFightsForChangeUnselected());
  }
}
