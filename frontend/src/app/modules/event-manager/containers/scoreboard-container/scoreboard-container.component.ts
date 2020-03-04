import {Component, OnDestroy, OnInit} from '@angular/core';
import {AppState, getSelectedEventId} from '../../../../reducers/global-reducers';
import {ActivatedRoute, Router} from '@angular/router';
import {select, Store} from '@ngrx/store';
import {combineLatest, Observable, Subscription} from 'rxjs';
import {Category, Fight, HeaderDescription} from '../../../../commons/model/competition.model';
import {
  dashboardGetSelectedPeriod,
  dashboardGetSelectedPeriodId,
  dashboardGetSelectedPeriodSelectedMat,
  dashboardGetSelectedPeriodSelectedMatFights,
  dashboardGetSelectedPeriodSelectedMatSelectedFight,
  IScoreboardFightResultSet
} from '../../redux/dashboard-reducers';
import {filter, map, mergeMap, take, tap, withLatestFrom} from 'rxjs/operators';
import {
  dashboardFightSelected,
  dashboardFightUnselected,
  dashboardSetFightResultCommand
} from '../../redux/dashboard-actions';
import {eventManagerGetSelectedEventCategory} from '../../redux/event-manager-reducers';
import {
  ComponentCommonMetadataProvider,
  EventManagerRouterEntryComponent
} from '../event-manager-container/common-classes';
import {MenuService} from '../../../../components/main-menu/menu.service';

@Component({
  templateUrl: './scoreboard-container.component.html',
  styleUrls: ['./scoreboard-container.component.scss']
})
export class ScoreboardContainerComponent extends EventManagerRouterEntryComponent implements OnInit, OnDestroy {

  subs = new Subscription();

  matFights$: Observable<Fight[]>;

  selectedFight$: Observable<Fight>;
  fightCategory$: Observable<Category>;

  urlProvidedFightId$: Observable<string>;

  constructor(store: Store<AppState>, private router: Router, private route: ActivatedRoute, menuService: MenuService) {
    super(store, <ComponentCommonMetadataProvider>{
      header: combineLatest([store.pipe(select(dashboardGetSelectedPeriod)), store.pipe(select(dashboardGetSelectedPeriodSelectedMat))]).pipe(tap(console.log),
        filter(([p, m]) => !!p && !!m && !!m.matDescription),
        map(([per, mat]) => <HeaderDescription>{
          header: 'Mat view',
          subheader: `${per.name} / ${mat.matDescription.name}`
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

    this.selectedFight$ = this.store.pipe(
      select(dashboardGetSelectedPeriodSelectedMatSelectedFight)
    );

    this.fightCategory$ = this.selectedFight$.pipe(
      filter(f => !!f),
      mergeMap(fight => this.store.pipe(
        select(eventManagerGetSelectedEventCategory, {id: fight.category.id}))
      ),
      tap(cat => console.log(cat)));
  }

  navigateBack() {
    this.store.pipe(select(getSelectedEventId), withLatestFrom(this.store.pipe(select(dashboardGetSelectedPeriodId))), take(1)).subscribe(([id, period]) => {
      this.router.navigateByUrl(`/eventmanager/${id}/dashboard/${period}`).catch(console.error);
    });
  }


  selectFightForScoreboard(fightId: string) {
    if (fightId) {
      const queryParams = {fightId};
      this.router.navigate(['.'], {queryParams, relativeTo: this.route}).catch(error => console.log(error));
    } else {
      this.router.navigate(['.'], {relativeTo: this.route}).catch(error => console.log(error));
    }
  }


  ngOnInit() {
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  sendFightResult(fightResult: IScoreboardFightResultSet) {
    this.store.dispatch(dashboardSetFightResultCommand(fightResult));
  }
}
