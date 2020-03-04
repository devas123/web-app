import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {BracketsType, Fight} from '../../../commons/model/competition.model';
import {Dictionary} from '@ngrx/entity';
import {CommonFightsEditorComponent} from '../common-fights-editor.component';


@Component({
  selector: `app-multiple-groups-display`,
  template: `
    <div class="group_container" *ngFor="let id of _groupIds; index as i">
      <app-group-display [fights]="_fightsByGroups[id]" [bracketsType]="bracketsType"
                         [stageType]="stageType"
                         [editMode]="editMode"
                         [changeFightsIds]="changeFightsIds"
                         [groupName]="'Group ' + (i + 1)"
                         (fightSelected)="fightSelected.next($event)"></app-group-display>
    </div>`,
  styles: [`
    .group_container {
      padding: 1em;
    }`],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MultipleGroupsDisplayComponent extends CommonFightsEditorComponent {

  @Input()
  bracketsType: BracketsType;


  _fightsByGroups: Dictionary<Fight[]> = {} as Dictionary<Fight[]>;
  _groupIds = new Set<string>();

  @Input()
  set fights(value: Fight[]) {
    this._fightsByGroups = {} as Dictionary<Fight[]>;
    this._groupIds = new Set<string>();
    if (value) {
      value.forEach(f => {
        if (f.groupId) {
          this._groupIds.add(f.groupId);
          if (this._fightsByGroups[f.groupId]) {
            this._fightsByGroups[f.groupId].push(f);
          } else {
            this._fightsByGroups[f.groupId] = [f];
          }
        }
      });
    }
  }
}
