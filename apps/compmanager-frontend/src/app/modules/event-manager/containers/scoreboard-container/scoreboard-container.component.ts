import {Component} from '@angular/core';
import {
  AppState,
  dashboardGetSelectedPeriodMatSelectedFightFightResultOptions,
  getSelectedEventGetSelectedMat,
  getSelectedEventId,
  getSelectedEventSelectedPeriod,
  getSelectedEventSelectedPeriodId
} from '../../../../reducers/global-reducers';
import {ActivatedRoute, Router} from '@angular/router';
import {select, Store} from '@ngrx/store';
import {combineLatest, Observable, Subscription} from 'rxjs';
import {HeaderDescription} from '../../../../commons/model/competition.model';
import {IScoreboardFightResultSet} from '../../redux/dashboard-reducers';
import {filter, map, mergeMap, take} from 'rxjs/operators';
import {
  dashboardClaimFights,
  dashboardFightSelected,
  dashboardFightUnselected,
  dashboardSetFightResultCommand
} from '../../redux/dashboard-actions';
import {
  eventManagerGetCategoryIdForFightId,
  eventManagerGetSelectedEventCategory
} from '../../redux/event-manager-reducers';
import {
  CompetitionManagerModuleRouterEntryComponent,
  ComponentCommonMetadataProvider
} from '../../../../commons/directives/common-classes';
import {MenuService} from '../../../../components/main-menu/menu.service';
import {CommonBracketsInfoContainer} from '../../../../commons/classes/common-brackets-container.component';
import {CategoryState, Competitor, FightDescription, FightResultOption} from "@frontend-nx/protobuf";

@Component({
  templateUrl: './scoreboard-container.component.html',
  styleUrls: ['./scoreboard-container.component.scss']
})
export class ScoreboardContainerComponent extends CompetitionManagerModuleRouterEntryComponent {

  subs = new Subscription();

  matFights$: Observable<FightDescription[]>;
  competitors$: Observable<Competitor[]>;
  selectedPeriodId$: Observable<String>;
  selectedFight$: Observable<FightDescription>;
  selectedFightFightResultOptions$: Observable<FightResultOption[]>;
  fightCategory$: Observable<CategoryState>;
  urlProvidedFightId$: Observable<string>;

  constructor(store: Store<AppState>, private router: Router, private route: ActivatedRoute, public info: CommonBracketsInfoContainer, menuService: MenuService) {
    super(store, <ComponentCommonMetadataProvider>{
      header: combineLatest([store.pipe(select(getSelectedEventSelectedPeriod)),
        store.pipe(select(getSelectedEventGetSelectedMat))]).pipe(
        filter(([p, m]) => !!p && !!m && !!m),
        map(([per, mat]) => <HeaderDescription>{
          header: 'Area view',
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
      mergeMap(fightId => this.store.pipe(
        select(eventManagerGetCategoryIdForFightId({id: fightId})),
        map(categoryId => {
            if (fightId && categoryId) {
              return dashboardFightSelected(fightId, categoryId);
            } else {
              return dashboardFightUnselected();
            }
          }
        )))
    ).subscribe(this.store));

    this.matFights$ = this.menuService.dataProviderService.fightsInterest$;

    this.selectedPeriodId$ = this.store.pipe(
      select(getSelectedEventSelectedPeriodId)
    );

    this.selectedFight$ = this.menuService.dataProviderService.selectedFightInterest$

    this.selectedFightFightResultOptions$ = this.store.pipe(
      select(dashboardGetSelectedPeriodMatSelectedFightFightResultOptions)
    );

    this.competitors$ = this.menuService.dataProviderService.fighters$;

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

  sendFightResult(fightResult: IScoreboardFightResultSet) {
    this.store.dispatch(dashboardSetFightResultCommand({
      ...fightResult,
      successCallback: () => {
        this.store.dispatch(dashboardClaimFights({
          matId: fightResult.matId,
          periodId: fightResult.periodId
        }));
        this.store.dispatch(dashboardFightUnselected());
      }
    }));
  }
}
