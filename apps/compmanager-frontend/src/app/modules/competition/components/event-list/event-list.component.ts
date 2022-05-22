import { ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {CompetitionProperties, ManagedCompetition} from "@frontend-nx/protobuf";


@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EventListComponent  {

  @Input()
  events: ManagedCompetition[];
}
