import {Component, OnDestroy, OnInit} from '@angular/core';
import {AppState} from '../../../../reducers';
import {ActivatedRoute, Router} from '@angular/router';
import {select, Store} from '@ngrx/store';
import {Observable, Subscription} from 'rxjs';
import {Fight} from '../../../../commons/model/competition.model';
import {dashboardGetSelectedPeriodSelectedMatFights, dashboardGetSelectedPeriodSelectedMatSelectedFight} from '../../redux/dashboard-reducers';
import {map} from 'rxjs/operators';
import {dashboardFightSelected, dashboardFightUnselected} from '../../redux/dashboard-actions';

@Component({
  templateUrl: './scoreboard-container.component.html',
  styleUrls: ['./scoreboard-container.component.css']
})
export class ScoreboardContainerComponent implements OnInit, OnDestroy {

  subs = new Subscription();

  matFights$: Observable<Fight[]>;

  selectedFight$: Observable<Fight>;

  urlProvidedFightId$: Observable<string>;

  constructor(private store: Store<AppState>, private router: Router, private route: ActivatedRoute) {
    this.urlProvidedFightId$ = this.route.params.pipe(
      map(params => params['fightId'])
    );
    this.subs.add(this.urlProvidedFightId$.pipe(
      map(fightId => {
        if (fightId) {
          return dashboardFightSelected(fightId);
        }  else {
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
  }

  selectFightForScoreboard(fightId: string) {
    this.router.navigate([fightId], {relativeTo: this.route});
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

}
