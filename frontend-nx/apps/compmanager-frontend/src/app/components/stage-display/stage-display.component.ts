import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Category, CategoryBracketsStage, Competitor, Fight} from '../../commons/model/competition.model';
import {Dictionary} from '@ngrx/entity';
import * as _ from 'lodash';

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
    if (!_.isEmpty(stages)) {
      this._stages = _.sortBy(stages, 'stageOrder');
    } else {
      this._stages = [];
    }
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
  @Output()
  unseededCompetitorsClicked = new EventEmitter();
  @Input()
  showResults: boolean;

  get unseededCompetitors() {
    return this.competitors.filter(c => !this.fights.find(f => !!f.scores.find(s => s.competitorId === c.id)));
  }

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
