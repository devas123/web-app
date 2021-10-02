import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {CategoryBracketsStage, Competitor, CompetitorResult} from '../../commons/model/competition.model';
import * as _ from 'lodash';

@Component({
  selector: 'app-stage-result-display',
  templateUrl: 'stage-result-display.component.html',
  styleUrls: ['stage-result-display.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StageResultDisplayComponent {
  @Input()
  stage: CategoryBracketsStage;

  @Input()
  competitors: Competitor[];

  getCompetitor(id: string) {
    return this.competitors.find(c => c.id === id);
  }

  getGroupIds() {
    return this.stage?.groupDescriptors;
  }

  getStageResults(): CompetitorResult[] {
    return _.sortBy(this.stage?.stageResultDescriptor?.competitorResults, o => o.place);
  }

  getGroupResults(id: string): CompetitorResult[] {
    return _.sortBy(this.stage?.stageResultDescriptor?.competitorResults?.filter(r => r.groupId === id), o => o.place);
  }
}
