import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {Dictionary} from '@ngrx/entity';
import * as _ from 'lodash';
import {CategoryDescriptor, CategoryState, Competitor, FightDescription, StageDescriptor} from "@frontend-nx/protobuf";

@Component({
  selector: 'app-stage-display',
  templateUrl: './stage-display.component.html',
  styleUrls: ['./stage-display.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StageDisplayComponent  {
  @Input()
  category: CategoryState;

  @Input()
  set stages(stages: StageDescriptor[]) {
    if (!_.isEmpty(stages)) {
      this._stages = _.sortBy(stages, 'stageOrder');
    } else {
      this._stages = [];
    }
  }

  _stages: StageDescriptor[];
  @Input()
  selectedStage: StageDescriptor;
  @Input()
  fightsAreLoading: boolean;
  @Output()
  stageSelected = new EventEmitter<string>();
  @Output()
  fightSelected = new EventEmitter<string>();
  @Input()
  fights: FightDescription[];
  @Input()
  bucketSize: number;
  @Input()
  editMode: boolean;
  @Input()
  changeFightIds: Dictionary<string[]> = {};
  @Input()
  competitors: Competitor[] = [];
  @Output()
  unseededCompetitorsClicked = new EventEmitter();
  @Input()
  showResults: boolean;

  get unseededCompetitors() {
    return this.competitors.filter(c => !this.fights?.find(f => !!f.scores?.find(s => s.competitorId === c.id)));
  }

  constructor() {
  }

  selectStage(id: string) {
    this.stageSelected.next(id);
  }

  selectFight(fightId: string) {
    this.fightSelected.next(fightId);
  }
}
