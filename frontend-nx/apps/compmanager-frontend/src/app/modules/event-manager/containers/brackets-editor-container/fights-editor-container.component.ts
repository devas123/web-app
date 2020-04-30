import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {
  BracketsType,
  CategoryBracketsStage,
  Competitor,
  CompetitorGroupChange,
  Fight,
  StageStatus,
  stageStatusValues
} from '../../../../commons/model/competition.model';

@Component({
  selector: `app-fights-editor-container`,
  template: `
      <div class="ui basic segment">
          <section>Set status</section>
          <div class="ui horizontal selection list">
              <div class="item" [ngClass]="{selected: status === _status}" *ngFor="let status of getStageStatuses()" (click)="setStatus(status)">{{ status }}</div>
          </div>
      </div>
      <app-groups-editor *ngIf="bracketType === 'GROUP'"
                         [seedFights]="seedFights"
                         [competitors]="competitors"
                         [selectedStage]="_stage"
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
  changeSaved = new EventEmitter<{ fights: Fight[], competitorGroupChanges: CompetitorGroupChange[] }>();

  @Output()
  stageStatusChanged = new EventEmitter<{ stageId: string, status: StageStatus }>();

  @Input()
  bracketType: '' | BracketsType;

  @Input()
  seedFights: Fight[];

  @Input()
  set stage(st: CategoryBracketsStage) {
    this._stage = st;
    this._status = st?.stageStatus;
  }

  _stage: CategoryBracketsStage;


  @Input()
  competitors: Competitor[];

  _status: StageStatus;


  dispatchChangeSavedEvent(change: Fight[]) {
    this.changeSaved.next({fights: change, competitorGroupChanges: []});
  }

  dipatchFightsSelectionClearedEvent() {
    this.closeClicked.next();
  }

  dispatchGroupChangeSavedEvent(change: CompetitorGroupChange[]) {
    this.changeSaved.next({fights: [], competitorGroupChanges: change});
  }

  getStageStatuses() {
    return stageStatusValues;
  }

  setStatus(status: StageStatus) {
    this._status = status;
    this.stageStatusChanged.next({stageId: this._stage.id, status});
  }
}
