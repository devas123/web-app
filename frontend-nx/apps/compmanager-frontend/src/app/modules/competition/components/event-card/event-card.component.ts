import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {CompetitionProperties} from '../../../../reducers/global-reducers';
import {Transition, TransitionController, TransitionDirection} from '@devas123/ng2-semantic';
import {Router} from '@angular/router';

@Component({
  selector: 'event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EventCardComponent implements OnInit {

  @Input()
  eventInfo: CompetitionProperties;

  public transitionController;

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.transitionController = new TransitionController();
    this.animate('scale');
  }

  public animate(transitionName: string = 'scale', transitionDirection = TransitionDirection.In) {
    this.transitionController.animate(
      new Transition(transitionName, 500, transitionDirection));
  }

  navigateToEvent() {
    this.router.navigate(['/events', this.eventInfo.id]);
  }

}
