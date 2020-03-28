import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Category, CategoryBracketsStage, Competitor, Fight} from '../../commons/model/competition.model';
import {Dictionary} from '@ngrx/entity';

@Component({
  selector: 'app-stage-display',
  templateUrl: './stage-display.component.html',
  styleUrls: ['./stage-display.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StageDisplayComponent implements OnInit {
  @Input()
  category: Category;
  @Input()
  set stages(stages: CategoryBracketsStage[]) {
    this._stages = stages;
    setTimeout(() => {
      if (stages && stages.length > 0 && !this.selectedStage) {
        this.selectStage(stages.sort((a, b) => a.stageOrder - b.stageOrder)[0].id);
      }
    });
  }
  _stages: CategoryBracketsStage[];
  @Input()
  selectedStage: CategoryBracketsStage;
  @Input()
  fightsAreLoading: boolean;
  @Output()
  stageSelected = new EventEmitter<string>();
  @Output()
  fightSelected = new EventEmitter<string>();
  @Input()
  fights: Fight[];
  @Input()
  bucketSize: number;
  @Input()
  editMode: boolean;
  @Input()
  changeFightIds: Dictionary<string[]> = {};
  @Input()
  competitors: Competitor[] = [];

  constructor() {
  }

  ngOnInit() {
  }

  selectStage(id: string) {
    this.stageSelected.next(id);
  }

  selectFight(fightId: string) {
    this.fightSelected.next(fightId);
  }
}
