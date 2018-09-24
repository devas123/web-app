import {combineLatest, from, Observable, Subscription} from 'rxjs';

import {filter, map, mergeMap} from 'rxjs/operators';
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
  eventManagerGetSelectedEventCategories,
  eventManagerGetSelectedEventId,
  eventManagerGetSelectedEventSelectedCategory,
  eventManagerGetSelectedEventSelectedCategoryId,
  eventManagerGetSelectedEventSelectedCategorySelectedCompetitor,
  eventManagerGetSelectedEventSelectedCompetitor
} from '../../redux/event-manager-reducers';
import {Location} from '@angular/common';
import {Category, Competitor} from '../../../../commons/model/competition.model';

@Component({
  selector: 'app-fighter-profile-container',
  templateUrl: './fighter-profile-container.component.html',
  styleUrls: ['./fighter-profile-container.component.css']
})
export class FighterProfileContainerComponent implements OnInit, OnDestroy {

  eventFighter$: Observable<Competitor>;
  categoryFighter$: Observable<Competitor>;
  category$: Observable<Category>;
  categories$: Observable<Category[]>;
  private subs = new Subscription();

// .map(params => atob(params['fighterId']))
  constructor(private store: Store<AppState>, private router: Router, private route: ActivatedRoute, private location: Location) {
    const a$ = combineLatest(
      route.params.pipe(map(params => atob(params['fighterId']))),
      this.store.pipe(select(eventManagerGetSelectedEventId)),
      this.store.pipe(select(eventManagerGetSelectedEventSelectedCategoryId)));
    this.subs.add(a$.pipe(
      filter(value => value[0] && value[1] && value[0] !== null && value[1] !== null),
      mergeMap(response => {
        return from([eventManagerLoadFighterCommand(response[1], response[2], response[0]), eventManagerFighterSelected(response[1], response[2], response[0])]);
      }))
      .subscribe(this.store));
    this.eventFighter$ = this.store.pipe(select(eventManagerGetSelectedEventSelectedCompetitor));
    this.categoryFighter$ = this.store.pipe(select(eventManagerGetSelectedEventSelectedCategorySelectedCompetitor));
    this.category$ = this.store.pipe(select(eventManagerGetSelectedEventSelectedCategory));
    this.categories$ = this.store.pipe(select(eventManagerGetSelectedEventCategories));
  }

  navigateBack() {
    this.location.back();
  }

  ngOnInit() {
  }

  sendChangeCategoryCommand(payload: { fighter: Competitor, newCategory: Category }) {
    this.store.dispatch(eventManagerChangeCompetitorCategoryCommand(payload.fighter, payload.newCategory));
  }

  sendChangeCompetitorCommand(payload: { fighter: Competitor }) {
    this.store.dispatch(eventManagerUpdateCompetitorCommand(payload.fighter));
  }

  ngOnDestroy() {
    const a$ = combineLatest(
      this.store.pipe(select(eventManagerGetSelectedEventId)),
      this.store.pipe(select(eventManagerGetSelectedEventSelectedCategoryId)));
    this.subs.add(a$
      .pipe(
        map(response => eventManagerFighterUnselected(response[0], response[1])))
      .subscribe(event => {
          this.store.dispatch(event);
          this.subs.unsubscribe();
        }, () => {
        },
        () => this.subs.unsubscribe()));
    this.subs.unsubscribe();
  }

}
