
import {map} from 'rxjs/operators';
import {Component, OnDestroy, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {Observable, Subscription} from 'rxjs';
import {AppState, CompetitionProperties} from '../../../../reducers';
import {ActivatedRoute} from '@angular/router';
import {eventManagerGetSelectedEvent} from '../../redux/event-manager-reducers';
import {eventManagerCompetitionUnselected, eventManagerSelectCompetition} from '../../redux/event-manager-actions';

@Component({
  selector: 'app-event-container',
  template: '<router-outlet></router-outlet>',
  styleUrls: ['./event-container.component.css']
})
export class EventContainerComponent implements OnInit, OnDestroy {
  private competitionProperties$: Observable<CompetitionProperties>;
  private readonly compIdSubscription: Subscription;

  constructor(private store: Store<AppState>, private route: ActivatedRoute) {
    this.compIdSubscription = this.route.params.pipe(map(params => params['competitionId']), map(compId => eventManagerSelectCompetition(compId)), ).subscribe(this.store);
    this.competitionProperties$ = store.pipe(select(eventManagerGetSelectedEvent));
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    if (this.compIdSubscription) {
      this.compIdSubscription.unsubscribe();
    }
    this.store.dispatch(eventManagerCompetitionUnselected);
  }
}
