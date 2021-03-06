import {map} from 'rxjs/operators';
import {Component, OnDestroy, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {Subscription} from 'rxjs';
import {AppState} from '../../../../reducers/global-reducers';
import {ActivatedRoute} from '@angular/router';
import {competitionSelected, eventManagerCompetitionUnselected} from '../../redux/event-manager-actions';
import {
  ComponentCommonMetadataProvider,
  EventManagerRouterEntryComponent
} from '../event-manager-container/common-classes';
import {MenuService} from '../../../../components/main-menu/menu.service';


@Component({
  selector: 'app-event-container',
  template: `
      <router-outlet></router-outlet>`,
  styleUrls: ['./event-container.component.css']
})
export class EventContainerComponent extends EventManagerRouterEntryComponent implements OnInit, OnDestroy {
  private readonly compIdSubscription: Subscription;

  constructor(store: Store<AppState>, private route: ActivatedRoute, menuService: MenuService) {
    super(store, <ComponentCommonMetadataProvider>{}, menuService);
    this.compIdSubscription = this.route.params.pipe(map(params => params['competitionId']), map(compId => competitionSelected(compId))).subscribe(this.store);
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    if (this.compIdSubscription) {
      this.compIdSubscription.unsubscribe();
    }
    this.menuService.clear();
    this.store.dispatch(eventManagerCompetitionUnselected);
    super.ngOnDestroy();
  }
}
