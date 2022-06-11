import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {
  BracketType,
  Competitor,
  CompetitorMovedToGroup,
  FightDescription,
  StageDescriptor,
  StageStatus
} from "@frontend-nx/protobuf";

@Component({
  selector: 'app-fights-editor-container',
  template: `
      <div class="ui basic segment">
          <section>Set status</section>
          <div class="ui horizontal selection list">
              <div class="item" [ngClass]="{selected: status === _status}" *ngFor="let status of getStageStatuses()" (click)="setStatus(status)">{{ status }}</div>
          </div>
      </div>
      <app-groups-editor *ngIf="bracketType === 'BRACKET_TYPE_GROUP'"
                         [seedFights]="seedFights"
                         [competitors]="competitors"
                         [selectedStage]="_stage"
                         (closeClicked)="dipatchFightsSelectionClearedEvent()"
                         (changeSaved)="dispatchGroupChangeSavedEvent($event)"></app-groups-editor>
      <app-seed-editor *ngIf="bracketType !== 'BRACKET_TYPE_GROUP'"
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
  changeSaved = new EventEmitter<{ fights: FightDescription[], competitorMovedToGroups: CompetitorMovedToGroup[] }>();

  @Output()
  stageStatusChanged = new EventEmitter<{ stageId: string, status: StageStatus }>();

  @Input()
  bracketType: '' | BracketType;

  @Input()
  seedFights: FightDescription[];

  @Input()
  set stage(st: StageDescriptor) {
    this._stage = st;
    this._status = st?.stageStatus;
  }

  _stage: StageDescriptor;


  @Input()
  competitors: Competitor[];

  _status: StageStatus;


  dispatchChangeSavedEvent(change: FightDescription[]) {
    this.changeSaved.next({fights: change, competitorMovedToGroups: []});
  }

  dipatchFightsSelectionClearedEvent() {
    this.closeClicked.next();
  }

  dispatchGroupChangeSavedEvent(change: CompetitorMovedToGroup[]) {
    this.changeSaved.next({fights: [], competitorMovedToGroups: change});
  }

  getStageStatuses() {
    return Object.values(StageStatus).map(v => v as StageStatus);
  }

  setStatus(status: StageStatus) {
    this._status = status;
    this.stageStatusChanged.next({stageId: this._stage.id, status});
  }
}
