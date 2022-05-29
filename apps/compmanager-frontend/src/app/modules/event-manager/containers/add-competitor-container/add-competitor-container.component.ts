import {Component} from '@angular/core';
import {
  BasicCompetitionInfoContainer,
  ComponentCommonMetadataProvider
} from "../../../../commons/directives/common-classes";
import {select, Store} from "@ngrx/store";
import {AppState} from "../../../../reducers/global-reducers";
import {MenuService} from "../../../../components/main-menu/menu.service";
import {eventManagerGetSelectedEventName} from "../../redux/event-manager-reducers";
import {filter, map, take} from "rxjs/operators";
import {Competitor} from "@frontend-nx/protobuf";
import {addCompetitor} from "../../redux/event-manager-actions";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'compmanager-frontend-add-competitor-container',
  template: `
    <app-add-fighter
      [competitionId]="competitionId$ | async"
      [categories]="categories$ | async"
      (fighterAdded)="dispatchAddFighterAction($event)"
      (closeClicked)="goBack()"></app-add-fighter> `,
  styles: [],
})
export class AddCompetitorContainerComponent extends BasicCompetitionInfoContainer {
  constructor(store: Store<AppState>, menuService: MenuService, private router: Router, private activatedRoute: ActivatedRoute) {
    super(
      store, <ComponentCommonMetadataProvider>{
        includeDefaultMenu: true,
        menu: [],
        header: store.pipe(select(eventManagerGetSelectedEventName)).pipe(filter(name => !!name), take(1), map(name => ({
          header: 'Add competitor',
          subheader: name
        })))
      }, menuService
    );
  }

  dispatchAddFighterAction({competitionId, competitor}: { competitionId: string, competitor: Competitor }) {
    this.store.dispatch(addCompetitor({
      competitionId,
      competitor,
      errorCallback: console.error,
      successCallback: () => this.router.navigate(['..'], {relativeTo: this.activatedRoute}).catch(console.error)
    }));
  }

  goBack() {
    this.menuService.goBack();
  }
}
