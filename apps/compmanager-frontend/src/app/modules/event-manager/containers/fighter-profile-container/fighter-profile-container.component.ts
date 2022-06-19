import {combineLatest, Observable, of, Subscription} from 'rxjs';

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
  eventManagerGetSelectedEventSelectedCompetitor,
} from '../../redux/event-manager-reducers';
import {Location} from '@angular/common';
import {HeaderDescription} from '../../../../commons/model/competition.model';
import {
  CompetitionManagerModuleRouterEntryComponent,
  ComponentCommonMetadataProvider
} from '../../../../commons/directives/common-classes';
import {MenuService} from '../../../../components/main-menu/menu.service';
import {CategoryState, Competitor} from "@frontend-nx/protobuf";
import {DataProviderService} from "../../../../service/data.provider.service";

@Component({
  selector: 'app-fighter-profile-container',
  templateUrl: './fighter-profile-container.component.html'
})
export class FighterProfileContainerComponent extends CompetitionManagerModuleRouterEntryComponent implements OnDestroy {

  eventFighter$: Observable<Competitor>;
  category$: Observable<CategoryState>;
  categories$: Observable<CategoryState[]>;
  private subs = new Subscription();

  constructor(store: Store<AppState>, private router: Router, private route: ActivatedRoute, private location: Location, menuService: MenuService, private dataProviderService: DataProviderService) {
    super(store, <ComponentCommonMetadataProvider>{
      menu: [
        {
          name: 'Return',
          action: () => this.navigateBack()
        },
        {
          name: 'User profile',
          action: () => {
          },
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
      this.store.pipe(select(getSelectedEventId))]);
    this.subs.add(a$.pipe(
      filter(value => value[0] && value[1] && value[0] !== null && value[1] !== null),
      mergeMap(response => {
        return of(eventManagerLoadFighterCommand(response[1], response[0]));
      }))
      .subscribe(this.store));
    this.eventFighter$ = this.store.pipe(
      select(eventManagerGetSelectedEventSelectedCompetitor),
      filter(f => !!f)
    );
    this.category$ = dataProviderService.categoryInterest$;
    this.categories$ = this.store.pipe(select(eventManagerGetSelectedEventCategories));
    this.subs.add(route.params.pipe(
        map(params => params['fighterId']),
        map(fighterId => eventManagerFighterSelected(fighterId))
      ).subscribe(this.store)
    );
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
    this.store.dispatch(eventManagerUpdateCompetitorCommand({competitionId: fighter.competitionId, competitor: fighter}))
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
