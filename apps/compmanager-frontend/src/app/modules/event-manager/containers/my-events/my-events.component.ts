import {Component} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {AppState, selectAllCompetitions} from '../../../../reducers/global-reducers';
import {Observable} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';
import {deleteCompetition, publishCompetition, unpublishCompetition} from '../../../../actions/actions';
import {ComponentCommonMetadataProvider, CompetitionManagerModuleRouterEntryComponent} from '../../../../commons/directives/common-classes';
import {MenuService} from '../../../../components/main-menu/menu.service';
import {CompetitionProperties, ManagedCompetition} from "@frontend-nx/protobuf";

@Component({
  selector: 'app-my-events',
  templateUrl: './my-events.component.html',
  styleUrls: ['./my-events.component.css']
})
export class MyEventsComponent extends CompetitionManagerModuleRouterEntryComponent  {

  events$: Observable<ManagedCompetition[]>;

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
    this.events$ = store.pipe(select(selectAllCompetitions));
  }

  sendDeleteCommand(props: ManagedCompetition) {
    this.store.dispatch(deleteCompetition(props));
  }

  sendPublishCommand(props: ManagedCompetition) {
    this.store.dispatch(publishCompetition(props.id));
  }

  sendUnpublishCommand(props: ManagedCompetition) {
    this.store.dispatch(unpublishCompetition(props.id));
  }


  navigateToCategoriesEditor(competitionId: string) {
    this.router.navigate([competitionId, 'categories'], {relativeTo: this.route});
  }

  navigateToEventPropsEditor(competitionId: string) {
    this.router.navigate([competitionId], {relativeTo: this.route});
  }
}
