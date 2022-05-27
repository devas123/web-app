import {combineLatest, from, Observable, Subscription} from 'rxjs';

import {filter, map, mergeMap, take} from 'rxjs/operators';
import {Component, OnDestroy} from '@angular/core';
import {AppState, getSelectedEventId} from '../../../../reducers/global-reducers';
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
  eventManagerGetSelectedEventCategories,
  eventManagerGetSelectedEventName,
  eventManagerGetSelectedEventSelectedCategory,
  eventManagerGetSelectedEventSelectedCategoryId,
  eventManagerGetSelectedEventSelectedCompetitor,
} from '../../redux/event-manager-reducers';
import {Location} from '@angular/common';
import {HeaderDescription} from '../../../../commons/model/competition.model';
import {ComponentCommonMetadataProvider, CompetitionManagerModuleRouterEntryComponent} from '../../../../commons/directives/common-classes';
import {MenuService} from '../../../../components/main-menu/menu.service';
import {CategoryDescriptor, Competitor} from "@frontend-nx/protobuf";

@Component({
  selector: 'app-fighter-profile-container',
  templateUrl: './fighter-profile-container.component.html',
  styleUrls: ['./fighter-profile-container.component.css']
})
export class FighterProfileContainerComponent extends CompetitionManagerModuleRouterEntryComponent implements  OnDestroy {

  eventFighter$: Observable<Competitor>;
  category$: Observable<CategoryDescriptor>;
  categories$: Observable<CategoryDescriptor[]>;
  private subs = new Subscription();

  constructor(store: Store<AppState>, private router: Router, private route: ActivatedRoute, private location: Location, menuService: MenuService) {
    super(store, <ComponentCommonMetadataProvider>{
      menu: [
        {
          name: 'Return',
          action: () => this.navigateBack()
        },
        {
          name: 'User profile',
          action: () => {},
          showCondition: () => this.eventFighter$.pipe(map(f => !!f.userId))
        }
      ],
      header: store.pipe(select(eventManagerGetSelectedEventName), filter(name => !!name), take(1), map(name => <HeaderDescription>{
        header: 'Fighter Profile',
        subheader: name
      })),
    }, menuService);
    const a$ = combineLatest([
      route.params.pipe(map(params => params['fighterId'])),
      this.store.pipe(select(getSelectedEventId)),
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

  sendChangeCategoryCommand(payload: { fighter: Competitor, newCategories: string[] }) {
    const {fighter, newCategories} = payload;
    this.store.dispatch(eventManagerChangeCompetitorCategoryCommand(fighter, newCategories, fighter.categories));
  }

  sendChangeCompetitorCommand(payload: { fighter: Competitor }) {
    const {fighter} = payload;
    fighter.categories.forEach(cat => this.store.dispatch(eventManagerUpdateCompetitorCommand(payload.fighter, cat)));
  }

  ngOnDestroy() {
    this.store.pipe(
      select(getSelectedEventId),
      map(response => eventManagerFighterUnselected(response)),
      take(1))
      .subscribe(this.store);
    this.subs.unsubscribe();
    super.ngOnDestroy();
  }

}
