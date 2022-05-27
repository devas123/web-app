import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {ManagedCompetition} from "@frontend-nx/protobuf";

@Component({
  selector: 'app-my-events-list',
  templateUrl: './my-events-list.component.html',
  styleUrls: ['./my-events-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MyEventsListComponent {

  @Input()
  events: ManagedCompetition[];

  @Output()
  editCategoriesPressed: EventEmitter<string> = new EventEmitter<string>();


  @Output()
  editEventPressed: EventEmitter<string> = new EventEmitter<string>();

  @Output()
  eventDeleted: EventEmitter<ManagedCompetition> = new EventEmitter<ManagedCompetition>();

  @Output()
  eventPublished: EventEmitter<ManagedCompetition> = new EventEmitter<ManagedCompetition>();

  @Output()
  eventUnpublished: EventEmitter<ManagedCompetition> = new EventEmitter<ManagedCompetition>();

  deleteEvent(event: ManagedCompetition) {
    this.eventDeleted.next(event);
  }

  publishEvent(event: ManagedCompetition) {
    this.eventPublished.next(event);
  }

  unpublishEvent(event: ManagedCompetition) {
    this.eventUnpublished.next(event);
  }


  editCategories(competitionId: string) {
    this.editCategoriesPressed.next(competitionId);
  }

  editEvent(eventId: string) {
    this.editEventPressed.next(eventId);
  }
}
