import {Component, OnDestroy} from '@angular/core';
import {
  AppState,
  dashboardGetSelectedPeriodMatSelectedFightFightResultOptions,
  dashboardGetSelectedPeriodSelectedFight,
  dashboardGetSelectedPeriodSelectedMatFights,
  getSelectedEventGetSelectedMat,
  getSelectedEventId,
  getSelectedEventSelectedPeriod,
  getSelectedEventSelectedPeriodId
} from '../../../../reducers/global-reducers';
import {ActivatedRoute, Router} from '@angular/router';
import {select, Store} from '@ngrx/store';
import {combineLatest, Observable, Subscription} from 'rxjs';
import {
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
  eventManagerGetCategoryIdForFightId,
  eventManagerGetSelectedEventCategory,
  eventManagerGetSelectedEventCompetitors
} from '../../redux/event-manager-reducers';
import {
  ComponentCommonMetadataProvider,
  CompetitionManagerModuleRouterEntryComponent
} from '../../../../commons/directives/common-classes';
import {MenuService} from '../../../../components/main-menu/menu.service';
import {CommonBracketsInfoContainer} from '../../../../commons/classes/common-brackets-container.component';
import {CategoryDescriptor, Competitor, FightDescription, FightResultOption} from "@frontend-nx/protobuf";

@Component({
  templateUrl: './scoreboard-container.component.html',
  styleUrls: ['./scoreboard-container.component.scss']
})
export class ScoreboardContainerComponent extends CompetitionManagerModuleRouterEntryComponent implements OnDestroy {

  subs = new Subscription();

  matFights$: Observable<FightDescription[]>;
  competitors$: Observable<Competitor[]>;
  selectedPeriodId$: Observable<String>;
  selectedFight$: Observable<FightDescription>;
  selectedFightFightResultOptions$: Observable<FightResultOption[]>;
  fightCategory$: Observable<CategoryDescriptor>;
  urlProvidedFightId$: Observable<string>;

  constructor(store: Store<AppState>, private router: Router, private route: ActivatedRoute, public info: CommonBracketsInfoContainer, menuService: MenuService) {
    super(store, <ComponentCommonMetadataProvider>{
      header: combineLatest([store.pipe(select(getSelectedEventSelectedPeriod)),
        store.pipe(select(getSelectedEventGetSelectedMat))]).pipe(
        filter(([p, m]) => !!p && !!m && !!m),
        map(([per, mat]) => <HeaderDescription>{
          header: 'Area view',
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
      mergeMap(fightId => this.store.pipe(
        select(eventManagerGetCategoryIdForFightId({id: fightId})),
        map(categoryId => {
            if (fightId && categoryId) {
              return dashboardFightSelected(fightId, categoryId);
            } else {
              return dashboardFightUnselected;
            }
          }
        )))
    ).subscribe(this.store));

    this.matFights$ = this.store.pipe(
      select(dashboardGetSelectedPeriodSelectedMatFights)
    );
    this.selectedPeriodId$ = this.store.pipe(
      select(getSelectedEventSelectedPeriodId)
    );

    this.selectedFight$ = this.store.pipe(
      select(dashboardGetSelectedPeriodSelectedFight)
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
        select(eventManagerGetSelectedEventCategory({id: fight.categoryId})))
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
      this.router.navigate([], {
        queryParams,
        relativeTo: this.route
      }).catch(console.error);
    } else {
      this.router.navigate([], {relativeTo: this.route, queryParams: {}}).catch(console.error);
    }
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
