import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {
  BracketsType,
  CategoryBracketsStage,
  Competitor,
  CompetitorGroupChange,
  Fight
} from '../../../../commons/model/competition.model';

@Component({
  selector: `app-fights-editor-container`,
  template: `
      <app-groups-editor *ngIf="bracketType === 'GROUP'"
                         [seedFights]="seedFights"
                         [competitors]="competitors"
                         [selectedStage]="stage"
                         (closeClicked)="dipatchFightsSelectionClearedEvent()"
                         (changeSaved)="dispatchGroupChangeSavedEvent($event)"></app-groups-editor>
      <app-seed-editor *ngIf="bracketType !== 'GROUP'"
                       [seedFights]="seedFights"
                       [competitors]="competitors"
                       (changeSaved)="dispatchChangeSavedEvent($event)"
                       (closeClicked)="dipatchFightsSelectionClearedEvent()"></app-seed-editor>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FightsEditorContainerComponent {

  @Output()
  closeClicked = new EventEmitter<void>();

  @Output()
  changeSaved = new EventEmitter<{fights: Fight[], competitorGroupChanges: CompetitorGroupChange[]}>();

  @Input()
  bracketType: '' | BracketsType;

  @Input()
  seedFights: Fight[];

  @Input()
  stage: CategoryBracketsStage;

  @Input()
  competitors: Competitor[];

  dispatchChangeSavedEvent(change: Fight[]) {
    this.changeSaved.next({fights: change, competitorGroupChanges: []});
  }

  dipatchFightsSelectionClearedEvent() {
    this.closeClicked.next();
  }
  dispatchGroupChangeSavedEvent(change: CompetitorGroupChange[]) {
    this.changeSaved.next({fights: [], competitorGroupChanges: change});
  }
}
