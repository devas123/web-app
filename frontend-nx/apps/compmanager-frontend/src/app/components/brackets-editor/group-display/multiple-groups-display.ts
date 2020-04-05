import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {BracketsType, Competitor, Fight} from '../../../commons/model/competition.model';
import {Dictionary} from '@ngrx/entity';
import {CommonFightsEditorComponent} from '../common-fights-editor.component';


@Component({
  selector: `app-multiple-groups-display`,
  template: `
    <div class="group_container" *ngFor="let id of getGroupIds(); index as i">
      <app-group-display [fights]="_fightsByGroups[id]" [bracketsType]="bracketsType"
                         [stageType]="stageType"
                         [editMode]="editMode"
                         [changeFightsIds]="changeFightsIds"
                         [competitors]="competitors"
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

  @Input()
  competitors: Competitor[] = [];


  _fightsByGroups: Dictionary<Fight[]> = {} as Dictionary<Fight[]>;
  _groupIds = new Set<string>();

  getGroupIds() {
    return Array.from(this._groupIds).sort((a, b) => a.localeCompare(b));
  }

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
