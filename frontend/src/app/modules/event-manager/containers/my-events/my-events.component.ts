import {Component, OnDestroy, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {AppState, CompetitionProperties} from '../../../../reducers';
import {Observable} from 'rxjs';
import {BreadCrumbItem, eventManagerGetMyEventsProperties} from '../../redux/event-manager-reducers';
import {ActivatedRoute, Router} from '@angular/router';
import {deleteCompetition, publishCompetition, unpublishCompetition} from '../../../../actions/actions';
import {ComponentCommonMetadataProvider, EventManagerRouterEntryComponent} from '../event-manager-container/common-classes';

@Component({
  selector: 'app-my-events',
  templateUrl: './my-events.component.html',
  styleUrls: ['./my-events.component.css']
})
export class MyEventsComponent extends EventManagerRouterEntryComponent implements OnInit, OnDestroy {

  events$: Observable<CompetitionProperties[]>;

  constructor(store: Store<AppState>, private router: Router, private route: ActivatedRoute) {
    super(store, <ComponentCommonMetadataProvider>{
      menu: [
        {
          name: 'New event',
          action: () => router.navigate(['create'], {relativeTo: route})
        }
      ],
      header: {
        header: 'Event list'
      }
    });
    this.events$ = store.pipe(select(eventManagerGetMyEventsProperties));
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
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
