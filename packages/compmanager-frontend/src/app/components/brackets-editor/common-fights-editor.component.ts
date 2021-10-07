import {Component, EventEmitter, Input, Output} from '@angular/core';
import {StageType} from '../../commons/model/competition.model';
import {Dictionary} from '@ngrx/entity';

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
