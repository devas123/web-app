import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output
} from '@angular/core';
import {CompetitionProperties} from '../../../../reducers/global-reducers';

@Component({
  selector: 'app-my-events-list',
  templateUrl: './my-events-list.component.html',
  styleUrls: ['./my-events-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MyEventsListComponent implements OnInit, AfterViewInit {

  @Input()
  events: CompetitionProperties[];

  @Output()
  editCategoriesPressed: EventEmitter<string> = new EventEmitter<string>();


  @Output()
  editEventPressed: EventEmitter<string> = new EventEmitter<string>();

  @Output()
  eventDeleted: EventEmitter<CompetitionProperties> = new EventEmitter<CompetitionProperties>();

  @Output()
  eventPublished: EventEmitter<CompetitionProperties> = new EventEmitter<CompetitionProperties>();

  @Output()
  eventUnpublished: EventEmitter<CompetitionProperties> = new EventEmitter<CompetitionProperties>();


  loaded = false;

  constructor(private cd: ChangeDetectorRef) {
    this.loaded = false;
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.loaded = true;
      this.cd.reattach();
      this.cd.markForCheck();
    });
  }

  ngOnInit() {
    this.cd.detach();
  }

  deleteEvent(event: CompetitionProperties) {
    this.eventDeleted.next(event);
  }

  publishEvent(event: CompetitionProperties) {
    this.eventPublished.next(event);
  }

  unpublishEvent(event: CompetitionProperties) {
    this.eventUnpublished.next(event);
  }


  editCategories(competitionId: string) {
    this.editCategoriesPressed.next(competitionId);
  }

  editEvent(eventId: string) {
    this.editEventPressed.next(eventId);
  }
}
