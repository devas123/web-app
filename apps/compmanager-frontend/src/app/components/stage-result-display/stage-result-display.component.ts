import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import * as _ from 'lodash';
import {Competitor, CompetitorStageResult, StageDescriptor} from "@frontend-nx/protobuf";

@Component({
  selector: 'app-stage-result-display',
  templateUrl: 'stage-result-display.component.html',
  styleUrls: ['stage-result-display.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StageResultDisplayComponent {
  @Input()
  stage: StageDescriptor;

  @Input()
  competitors: Competitor[];

  getCompetitor(id: string) {
    return this.competitors.find(c => c.id === id);
  }

  getGroupIds() {
    return this.stage?.groupDescriptors;
  }

  getStageResults(): CompetitorStageResult[] {
    return _.sortBy(this.stage?.stageResultDescriptor?.competitorResults, o => o.place);
  }

  getGroupResults(id: string): CompetitorStageResult[] {
    return _.sortBy(this.stage?.stageResultDescriptor?.competitorResults?.filter(r => r.groupId === id), o => o.place);
  }
}
