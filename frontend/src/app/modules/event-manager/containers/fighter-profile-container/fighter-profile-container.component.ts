import {combineLatest, from, Observable, Subscription} from 'rxjs';

import {filter, map, mergeMap, take} from 'rxjs/operators';
import {Component, OnDestroy, OnInit} from '@angular/core';
import {AppState} from '../../../../reducers';
import {select, Store} from '@ngrx/store';
import {ActivatedRoute, Router} from '@angular/router';

import {
  eventManagerChangeCompetitorCategoryCommand,
  eventManagerFighterSelected,
  eventManagerFighterUnselected,
  eventManagerLoadFighterCommand,
  eventManagerUpdateCompetitorCommand
} from '../../redux/event-manager-actions';
import {
  BreadCrumbItem,
  eventManagerGetSelectedEventCategories,
  eventManagerGetSelectedEventId,
  eventManagerGetSelectedEventSelectedCategory,
  eventManagerGetSelectedEventSelectedCategoryId,
  eventManagerGetSelectedEventSelectedCompetitor
} from '../../redux/event-manager-reducers';
import {Location} from '@angular/common';
import {Category, Competitor} from '../../../../commons/model/competition.model';
import {ComponentCommonMetadataProvider, EventManagerRouterEntryComponent} from '../event-manager-container/common-classes';
import {MenuService} from '../../../../components/main-menu/menu.service';

@Component({
  selector: 'app-fighter-profile-container',
  templateUrl: './fighter-profile-container.component.html',
  styleUrls: ['./fighter-profile-container.component.css']
})
export class FighterProfileContainerComponent extends EventManagerRouterEntryComponent implements OnInit, OnDestroy {

  eventFighter$: Observable<Competitor>;
  category$: Observable<Category>;
  categories$: Observable<Category[]>;
  private subs = new Subscription();

  constructor(store: Store<AppState>, private router: Router, private route: ActivatedRoute, private location: Location, menuService: MenuService) {
    super(store, <ComponentCommonMetadataProvider>{
      breadCrumbItem: store.pipe(
        select(eventManagerGetSelectedEventSelectedCompetitor),
        filter(f => !!f),
        map(f => <BreadCrumbItem>{
          name: f.firstName + ' ' + f.lastName,
          level: 3
        })),
      menu: []
    }, menuService);
    const a$ = combineLatest([
      route.params.pipe(map(params => params['fighterId'])),
      this.store.pipe(select(eventManagerGetSelectedEventId)),
      this.store.pipe(select(eventManagerGetSelectedEventSelectedCategoryId))]);
    this.subs.add(a$.pipe(
      filter(value => value[0] && value[1] && value[0] !== null && value[1] !== null),
      mergeMap(response => {
        return from([eventManagerLoadFighterCommand(response[1], response[2], response[0]), eventManagerFighterSelected(response[1], response[2], response[0])]);
      }))
      .subscribe(this.store));
    this.eventFighter$ = this.store.pipe(
      select(eventManagerGetSelectedEventSelectedCompetitor),
      filter(f => !!f)
    );
    this.category$ = this.store.pipe(select(eventManagerGetSelectedEventSelectedCategory));
    this.categories$ = this.store.pipe(select(eventManagerGetSelectedEventCategories));
  }

  navigateBack() {
    this.location.back();
  }

  ngOnInit() {
  }

  sendChangeCategoryCommand(payload: { fighter: Competitor, newCategory: string }) {
    this.store.dispatch(eventManagerChangeCompetitorCategoryCommand(payload.fighter, payload.newCategory));
  }

  sendChangeCompetitorCommand(payload: { fighter: Competitor }) {
    this.store.dispatch(eventManagerUpdateCompetitorCommand(payload.fighter));
  }

  ngOnDestroy() {
    this.store.pipe(
      select(eventManagerGetSelectedEventId),
      map(response => eventManagerFighterUnselected(response)),
      take(1))
      .subscribe(this.store);
    this.subs.unsubscribe();
    super.ngOnDestroy();
  }

}
