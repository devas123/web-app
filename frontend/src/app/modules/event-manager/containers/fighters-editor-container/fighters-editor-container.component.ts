import {Component, OnInit} from '@angular/core';
import {combineLatest, Observable} from 'rxjs';
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
import {eventManagerCompetitionFightersPageChanged, eventManagerRemoveCompetitor} from '../../redux/event-manager-actions';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';
import {filter, map, startWith, take} from 'rxjs/operators';
import {ComponentCommonMetadataProvider, EventManagerRouterEntryComponent} from '../event-manager-container/common-classes';
import {MenuService} from '../../../../components/main-menu/menu.service';

@Component({
  selector: 'app-fighters-container',
  templateUrl: './fighters-editor-container.component.html',
  styleUrls: ['./fighters-editor-container.component.css']
})
export class FightersEditorContainerComponent extends EventManagerRouterEntryComponent implements OnInit {
  competitionName$: Observable<string>;
  competitionId$: Observable<string>;
  categoryId$: Observable<string>;
  competitors$: Observable<Competitor[]>;
  totalCompetitors$: Observable<number>;
  pageSize$: Observable<number>;
  pageNumber$: Observable<number>;
  categories$: Observable<Category[]>;
  addFighterOpen = false;

  constructor(store: Store<AppState>, private router: Router, private route: ActivatedRoute, private location: Location, menuService: MenuService) {
    super(store, <ComponentCommonMetadataProvider>{
      header: store.pipe(select(eventManagerGetSelectedEventName)).pipe(filter(name => !!name), take(1), map(name => ({
        header: 'Fighters',
        subheader: name
      }))),
      menu: [
        {
          name: 'Return',
          action: () => this.navigateBack()
        },
        {
          name: 'Add fighter',
          action: () => this.addFighterOpen = true
        }
      ]
    }, menuService);
    this.categoryId$ = this.route.queryParams.pipe(map(params => params['id'] as string, startWith('')));
    this.categories$ = combineLatest([this.store.pipe(select(eventManagerGetSelectedEventCategories)), this.categoryId$]).pipe(map(result => {
      const cats = result[0];
      const catId = result[1];
      if (catId && catId.length > 0 && cats) {
        return cats.filter(c => c.id === catId);
      } else if (cats) {
        return cats;
      } else {
        return [] as Category[];
      }
    }));
    this.competitionName$ = this.store.pipe(select(eventManagerGetSelectedEventName));
    this.competitionId$ = this.store.pipe(select(eventManagerGetSelectedEventId));
    this.totalCompetitors$ = this.store.pipe(select(eventManagerGetSelectedEventCompetitorsTotal));
    this.pageSize$ = this.store.pipe(select(eventManagerGetSelectedEventCompetitorsPageSize));
    this.pageNumber$ = this.store.pipe(select(eventManagerGetSelectedEventCompetitorsPageNumber));
    this.competitors$ = combineLatest(this.store.pipe(select(eventManagerGetSelectedEventCompetitors)), this.categoryId$).pipe(map(result => {
      const fighters = result[0];
      const catId = result[1];
      if (catId && catId.length > 0 && fighters) {
        return fighters.filter(f => f.categoryId === catId);
      } else if (fighters) {
        return fighters;
      } else {
        return [] as Competitor[];
      }
    }));
  }

  deleteFighter(competitor: Competitor) {
    this.store.dispatch(eventManagerRemoveCompetitor(competitor));
  }

  changePage(info: any) {
    const {competitionId, pageNumber, categoryId} = info;
    this.store.dispatch(eventManagerCompetitionFightersPageChanged(competitionId, categoryId, pageNumber));
  }

  navigateToFighterProfilePage(fighter: Competitor) {
    this.router.navigate([fighter.id], {relativeTo: this.route});
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
