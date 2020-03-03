import {Component, EventEmitter, Input, Output} from '@angular/core';
import {StageType} from '../../commons/model/competition.model';

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
  changeFightsIds: string[];

  @Output()
  fightSelected = new EventEmitter<string>();


  addFightToCurrentChange(fight: string) {
    if (this.editMode && fight) {
      this.fightSelected.next(fight);
    }
  }
}
