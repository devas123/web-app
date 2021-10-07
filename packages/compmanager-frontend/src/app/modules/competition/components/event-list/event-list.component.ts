import {AfterContentInit, ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {CompetitionProperties} from '../../../../reducers/global-reducers';


@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EventListComponent implements OnInit, AfterContentInit {

  @Input()
  events: CompetitionProperties[];

  ngOnInit() {
  }

  ngAfterContentInit(): void {
  }
}
