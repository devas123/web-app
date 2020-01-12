import {Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {
  AppState,
  CompetitionProperties, getSelectedEventId
} from '../../../../reducers/global-reducers';
import {Observable} from 'rxjs';
import {Category} from '../../../../commons/model/competition.model';
import {startCompetition} from '../../redux/actions/misc';
import {getSelectedCompetitionCategories, getSelectedEventProperties} from '../../redux/reducers';

@Component({
  selector: 'app-competition-info',
  templateUrl: './competition-info.component.html',
  styleUrls: ['./competition-info.component.css']
})
export class CompetitionInfoComponent implements OnInit {


  public primaryMenu: { name: string, active?: boolean }[] = [
    {
      name: 'Info',
      active: true
    }, {name: 'Participants'}, {name: 'Brackets'}, {name: 'Schedule'}];

  competitionId$: Observable<string>;
  competitionProperties$: Observable<CompetitionProperties>;
  categories$: Observable<Category[]>;

  constructor(private store: Store<AppState>) {
    this.competitionId$ = store.pipe(select(getSelectedEventId));
    this.competitionProperties$ = store.pipe(select(getSelectedEventProperties));
    this.categories$ = store.pipe(select(getSelectedCompetitionCategories));
  }

  ngOnInit() {
  }


  public changeActiveMenuItem(menuItem) {
    this.primaryMenu.find(item => item.active).active = false;
    menuItem.active = true;

  }

  startCompetition($event: string) {
    this.store.dispatch(startCompetition($event));
  }
}
