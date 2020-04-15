import {Component, OnDestroy, OnInit} from '@angular/core';
import {
  AppState, dashboardGetSelectedPeriodMatSelectedFightFightResultOptions,
  dashboardGetSelectedPeriodSelectedMatFights,
  dashboardGetSelectedPeriodSelectedMatSelectedFight,
  getSelectedEventGetSelectedMat,
  getSelectedEventId,
  getSelectedEventSelectedPeriod,
  getSelectedEventSelectedPeriodId
} from '../../../../reducers/global-reducers';
import {ActivatedRoute, Router} from '@angular/router';
import {select, Store} from '@ngrx/store';
import {combineLatest, Observable, Subscription} from 'rxjs';
import {
  Category,
  Competitor,
  Fight,
  FightResultOption,
  HeaderDescription
} from '../../../../commons/model/competition.model';
import {IScoreboardFightResultSet} from '../../redux/dashboard-reducers';
import {filter, map, mergeMap, take, withLatestFrom} from 'rxjs/operators';
import {
  dashboardFightSelected,
  dashboardFightUnselected,
  dashboardSetFightResultCommand,
  refreshMatView
} from '../../redux/dashboard-actions';
import {
  eventManagerGetSelectedEventCategory,
  eventManagerGetSelectedEventCompetitors
} from '../../redux/event-manager-reducers';
import {
  ComponentCommonMetadataProvider,
  EventManagerRouterEntryComponent
} from '../event-manager-container/common-classes';
import {MenuService} from '../../../../components/main-menu/menu.service';
import {CommonBracketsInfoContainer} from '../../../../commons/classes/common-brackets-container.component';

@Component({
  templateUrl: './scoreboard-container.component.html',
  styleUrls: ['./scoreboard-container.component.scss']
})
export class ScoreboardContainerComponent extends EventManagerRouterEntryComponent implements OnInit, OnDestroy {

  subs = new Subscription();

  matFights$: Observable<Fight[]>;
  competitors$: Observable<Competitor[]>;
  selectedPeriodId$: Observable<String>;
  selectedFight$: Observable<Fight>;
  selectedFightFightResultOptions$: Observable<FightResultOption[]>;
  fightCategory$: Observable<Category>;

  urlProvidedFightId$: Observable<string>;

  constructor(store: Store<AppState>, private router: Router, private route: ActivatedRoute, private info: CommonBracketsInfoContainer, menuService: MenuService) {
    super(store, <ComponentCommonMetadataProvider>{
      header: combineLatest([store.pipe(select(getSelectedEventSelectedPeriod)),
        store.pipe(select(getSelectedEventGetSelectedMat))]).pipe(
        filter(([p, m]) => !!p && !!m && !!m),
        map(([per, mat]) => <HeaderDescription>{
          header: 'Mat view',
          subheader: `${per.name} / ${mat.name}`
        })),
      menu: [
        {
          name: 'Return',
          action: () => this.navigateBack()
        }
      ]
    }, menuService);
    this.urlProvidedFightId$ = this.route.queryParams.pipe(
      map(params => params['fightId'])
    );
    this.subs.add(this.urlProvidedFightId$.pipe(
      map(fightId => {
        if (fightId) {
          return dashboardFightSelected(fightId);
        } else {
          return dashboardFightUnselected;
        }
      })
    ).subscribe(this.store));

    this.matFights$ = this.store.pipe(
      select(dashboardGetSelectedPeriodSelectedMatFights)
    );
    this.selectedPeriodId$ = this.store.pipe(
      select(getSelectedEventSelectedPeriodId)
    );

    this.selectedFight$ = this.store.pipe(
      select(dashboardGetSelectedPeriodSelectedMatSelectedFight)
    );

    this.selectedFightFightResultOptions$ = this.store.pipe(
      select(dashboardGetSelectedPeriodMatSelectedFightFightResultOptions)
    );

    this.competitors$ = this.store.pipe(
      select(eventManagerGetSelectedEventCompetitors)
    );

    this.fightCategory$ = this.selectedFight$.pipe(
      filter(f => !!f),
      mergeMap(fight => this.store.pipe(
        select(eventManagerGetSelectedEventCategory, {id: fight.categoryId}))
      ),
      filter(cat => !!cat));
  }

  navigateBack() {
    this.store.pipe(select(getSelectedEventId), take(1)).subscribe((id) => {
      this.router.navigateByUrl(`/eventmanager/${id}/dashboard`).catch(console.error);
    });
  }


  selectFightForScoreboard(fightId: string) {
    if (fightId) {
      const queryParams = {fightId};
      this.router.navigate(['.'], {queryParams, relativeTo: this.route}).catch(console.error);
    } else {
      this.router.navigate(['.'], {relativeTo: this.route}).catch(console.error);
    }
  }


  ngOnInit() {
  }

  ngOnDestroy(): void {
    this.selectedPeriodId$.pipe(withLatestFrom(this.store.pipe(select(getSelectedEventId))), filter(([periodId, eventId]) => !!periodId && !!eventId),
      map(([periodId, eventId]) => refreshMatView(periodId, eventId)), take(1))
      .subscribe(this.store);
    this.subs.unsubscribe();
  }

  sendFightResult(fightResult: IScoreboardFightResultSet) {
    this.store.dispatch(dashboardSetFightResultCommand(fightResult));
  }
}
