import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {AppState} from '../../../../reducers';
import {select, Store} from '@ngrx/store';
import {
  eventManagerGetSelectedEventCategories,
  eventManagerGetSelectedEventCompetitors,
  eventManagerGetSelectedEventCompetitorsPageNumber,
  eventManagerGetSelectedEventCompetitorsPageSize,
  eventManagerGetSelectedEventCompetitorsTotal,
  eventManagerGetSelectedEventId,
  eventManagerGetSelectedEventName
} from '../../redux/event-manager-reducers';
import {Category, Competitor} from '../../../../commons/model/competition.model';
import {
  eventManagerCompetitionFightersPageChanged,
  eventManagerRemoveCompetitor
} from '../../redux/event-manager-actions';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-fighters-container',
  templateUrl: './fighters-editor-container.component.html',
  styleUrls: ['./fighters-editor-container.component.css']
})
export class FightersEditorContainerComponent implements OnInit {

  competitionName$: Observable<string>;
  competitionId$: Observable<string>;
  competitors$: Observable<Competitor[]>;
  totalCompetitors$: Observable<number>;
  pageSize$: Observable<number>;
  pageNumber$: Observable<number>;
  categories$: Observable<Category[]>;
  addFighterOpen = false;

  constructor(private store: Store<AppState>, private router: Router, private route: ActivatedRoute, private location: Location) {
    this.categories$ = this.store.pipe(select(eventManagerGetSelectedEventCategories));
    this.competitionName$ = this.store.pipe(select(eventManagerGetSelectedEventName));
    this.competitionId$ = this.store.pipe(select(eventManagerGetSelectedEventId));
    this.totalCompetitors$ = this.store.pipe(select(eventManagerGetSelectedEventCompetitorsTotal));
    this.pageSize$ = this.store.pipe(select(eventManagerGetSelectedEventCompetitorsPageSize));
    this.pageNumber$ = this.store.pipe(select(eventManagerGetSelectedEventCompetitorsPageNumber));
    this.competitors$ = this.store.pipe(select(eventManagerGetSelectedEventCompetitors));
  }

  deleteFighter(competitor: Competitor) {
    this.store.dispatch(eventManagerRemoveCompetitor(competitor));
  }

  changePage(info: any) {
    const {competitionId, pageNumber} = info;
    this.store.dispatch(eventManagerCompetitionFightersPageChanged(competitionId, pageNumber));
  }

  navigateToFighterProfilePage(fighter: Competitor) {
    this.router.navigate([btoa(fighter.email)], {relativeTo: this.route});
  }

  dispatchAddFighterAction(action: any) {
    this.store.dispatch(action);
    this.addFighterOpen = false;
  }

  ngOnInit() {
  }

  navigateBack() {
    this.location.back();
  }

}
