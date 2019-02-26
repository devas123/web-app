import {Component, OnDestroy, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {AppState, CompetitionProperties} from '../../../../reducers';
import {Observable} from 'rxjs';
import {eventManagerGetMyEventsProperties} from '../../redux/event-manager-reducers';
import {ActivatedRoute, Router} from '@angular/router';
import {deleteCompetition, publishCompetition, unpublishCompetition} from '../../../../actions/actions';

@Component({
  selector: 'app-my-events',
  templateUrl: './my-events.component.html',
  styleUrls: ['./my-events.component.css']
})
export class MyEventsComponent implements OnInit, OnDestroy {

  events$: Observable<CompetitionProperties[]>;


  constructor(private store: Store<AppState>, private router: Router, private route: ActivatedRoute) {
    this.events$ = store.pipe(select(eventManagerGetMyEventsProperties));
  }

  ngOnInit() {
  }

  ngOnDestroy() {
  }

  navigateCreateCompetition(): void {
    this.router.navigate(['create'], {relativeTo: this.route});
  }

  sendDeleteCommand(props: CompetitionProperties) {
    this.store.dispatch(deleteCompetition(props));
  }

  sendPublishCommand(props: CompetitionProperties) {
    this.store.dispatch(publishCompetition(props.id));
  }

  sendUnpublishCommand(props: CompetitionProperties) {
    this.store.dispatch(unpublishCompetition(props.id));
  }


  navigateToCategoriesEditor(competitionId: string) {
    this.router.navigate([competitionId, 'categories'], {relativeTo: this.route});
  }

  navigateToEventPropsEditor(competitionId: string) {
    this.router.navigate([competitionId], {relativeTo: this.route});
  }
}
