import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {BracketsType, CategoryBracketsStage, Competitor, Fight} from '../../../../commons/model/competition.model';

@Component({
  selector: `app-fights-editor-container`,
  template: `
    <app-groups-editor *ngIf="bracketType === 'GROUP'"
                       [seedFights]="seedFights"
                       [competitors]="competitors"
                       [selectedStage]="stage"
                       (closeClicked)="dipatchFightsSelectionClearedEvent()"
                       (changeSaved)="dispatchChangeSavedEvent($event)"></app-groups-editor>
    <app-fights-editor *ngIf="bracketType !== 'GROUP'"
                       [seedFights]="seedFights"
                       [competitors]="competitors"
                       (changeSaved)="dispatchChangeSavedEvent($event)"
                       (closeClicked)="dipatchFightsSelectionClearedEvent()"></app-fights-editor>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FightsEditorContainerComponent {

  @Output()
  closeClicked = new EventEmitter<void>();

  @Output()
  changeSaved = new EventEmitter<Fight[]>();

  @Input()
  bracketType: '' | BracketsType;

  @Input()
  seedFights: Fight[];

  @Input()
  stage: CategoryBracketsStage;

  @Input()
  competitors: Competitor[];

  dispatchChangeSavedEvent(change: Fight[]) {
    this.changeSaved.next(change);
  }

  dipatchFightsSelectionClearedEvent() {
    this.closeClicked.next();
  }
}
