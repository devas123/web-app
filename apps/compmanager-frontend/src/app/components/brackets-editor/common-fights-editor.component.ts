import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Dictionary} from '@ngrx/entity';
import {StageType} from "@frontend-nx/protobuf";

@Component({
  selector: 'app-common-fights-editor',
  template: 'Component'
})
export class CommonFightsEditorComponent {
  @Input()
  stageType: StageType;

  @Input()
  editMode = false;

  @Input()
  set changeFightsIds(value: Dictionary<string[]>) {
    this._changeFightsIds = value || {};
  }

  get changeFightsIds() {
    return this._changeFightsIds;
  }


  _changeFightsIds: Dictionary<string[]>;

  @Output()
  fightSelected = new EventEmitter<string>();


  addFightToCurrentChange(fight: string) {
    if (this.editMode && fight) {
      this.fightSelected.next(fight);
    }
  }
}
