import {AfterViewInit, ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {Transition, TransitionController, TransitionDirection} from '@frontend-nx/ng2-semantic-ui';
import {Router} from '@angular/router';
import {CompetitionProperties, ManagedCompetition} from "@frontend-nx/protobuf";

@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EventCardComponent implements AfterViewInit {

  @Input()
  eventInfo: ManagedCompetition;

  public transitionController;

  constructor(private router: Router) {
    this.transitionController = new TransitionController(false);
  }


  public animate(transitionName: string = 'scale', transitionDirection = TransitionDirection.In) {
    this.transitionController.animate(
      new Transition(transitionName, 500, transitionDirection));
  }

  navigateToEvent() {
    this.router.navigate(['/events', this.eventInfo?.id]);
  }

  ngAfterViewInit(): void {
    this.animate('scale');
  }
}
