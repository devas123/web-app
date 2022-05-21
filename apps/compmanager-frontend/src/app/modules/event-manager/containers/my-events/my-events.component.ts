import {Component} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {AppState} from '../../../../reducers/global-reducers';
import {Observable} from 'rxjs';
import {eventManagerGetMyEventsProperties} from '../../redux/event-manager-reducers';
import {ActivatedRoute, Router} from '@angular/router';
import {deleteCompetition, publishCompetition, unpublishCompetition} from '../../../../actions/actions';
import {ComponentCommonMetadataProvider, EventManagerRouterEntryComponent} from '../event-manager-container/common-classes';
import {MenuService} from '../../../../components/main-menu/menu.service';
import {CompetitionProperties} from "../../../../commons/model/competition.model";

@Component({
  selector: 'app-my-events',
  templateUrl: './my-events.component.html',
  styleUrls: ['./my-events.component.css']
})
export class MyEventsComponent extends EventManagerRouterEntryComponent  {

  events$: Observable<CompetitionProperties[]>;

  constructor(store: Store<AppState>, private router: Router, private route: ActivatedRoute, menuService: MenuService) {
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
    }, menuService);
    this.events$ = store.pipe(select(eventManagerGetMyEventsProperties));
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
