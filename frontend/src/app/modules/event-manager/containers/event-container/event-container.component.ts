import {map} from 'rxjs/operators';
import {Component, OnDestroy, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {Observable, Subscription} from 'rxjs';
import {AppState, CompetitionProperties} from '../../../../reducers';
import {ActivatedRoute} from '@angular/router';
import {eventManagerGetSelectedEvent} from '../../redux/event-manager-reducers';
import {eventManagerCompetitionUnselected, eventManagerSelectCompetition} from '../../redux/event-manager-actions';
import {ComponentCommonMetadataProvider, EventManagerRouterEntryComponent} from '../event-manager-container/common-classes';
import {MenuService} from '../../../../components/main-menu/menu.service';


@Component({
  selector: 'app-event-container',
  template: `
      <router-outlet></router-outlet>`,
  styleUrls: ['./event-container.component.css']
})
export class EventContainerComponent extends EventManagerRouterEntryComponent implements OnInit, OnDestroy {
  private competitionProperties$: Observable<CompetitionProperties>;
  private readonly compIdSubscription: Subscription;

  constructor(store: Store<AppState>, private route: ActivatedRoute, menuService: MenuService) {
    super(store, <ComponentCommonMetadataProvider>{}, menuService);
    this.compIdSubscription = this.route.params.pipe(map(params => params['competitionId']), map(compId => eventManagerSelectCompetition(compId))).subscribe(this.store);
    this.competitionProperties$ = store.pipe(select(eventManagerGetSelectedEvent));
  }



  ngOnInit() {
  }

  ngOnDestroy() {
    if (this.compIdSubscription) {
      this.compIdSubscription.unsubscribe();
    }
    this.store.dispatch(eventManagerCompetitionUnselected);
    super.ngOnDestroy();
  }
}
