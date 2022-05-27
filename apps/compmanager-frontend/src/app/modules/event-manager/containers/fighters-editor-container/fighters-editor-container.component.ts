import {Component, TemplateRef, ViewChild} from '@angular/core';
import {BehaviorSubject, Observable, of, Subscription} from 'rxjs';
import {AppState, getSelectedEventId} from '../../../../reducers/global-reducers';
import {select, Store} from '@ngrx/store';
import {
  eventManagerGetSelectedEventCategories,
  eventManagerGetSelectedEventCompetitors,
  eventManagerGetSelectedEventCompetitorsPageNumber,
  eventManagerGetSelectedEventCompetitorsPageSize,
  eventManagerGetSelectedEventCompetitorsTotal,
  eventManagerGetSelectedEventName,
  eventManagerGetSelectedEventSelectedCategory
} from '../../redux/event-manager-reducers';
import {eventManagerCompetitionFightersPageChanged, eventManagerRemoveCompetitor} from '../../redux/event-manager-actions';
import {ActivatedRoute, QueryParamsHandling, Router} from '@angular/router';
import {Location} from '@angular/common';
import {filter, map, take} from 'rxjs/operators';
import {ComponentCommonMetadataProvider, CompetitionManagerModuleRouterEntryComponent} from '../../../../commons/directives/common-classes';
import {MenuService} from '../../../../components/main-menu/menu.service';
import {AddFighterComponent} from '../../components/add-fighter/add-fighter.component';
import {CategoryDescriptor, Competitor} from "@frontend-nx/protobuf";

@Component({
  selector: 'app-fighters-container',
  templateUrl: './fighters-editor-container.component.html',
  styleUrls: ['./fighters-editor-container.component.css']
})
export class FightersEditorContainerComponent extends CompetitionManagerModuleRouterEntryComponent  {
  competitionName$: Observable<string>;
  competitionId$: Observable<string>;
  competitors$: Observable<Competitor[]>;
  totalCompetitors$: Observable<number>;
  pageSize$: Observable<number>;
  pageNumber$: Observable<number>;
  categories$: Observable<CategoryDescriptor[]>;
  category$: Observable<CategoryDescriptor>;
  addFighterOpen = false;
  @ViewChild('categorySelect', {static: true})
  categorySelect: TemplateRef<any>;
  subs = new Subscription();

  @ViewChild('fighterSearch', {static: true})
  fighterSearch: TemplateRef<any>;

  searchString$ = new BehaviorSubject<string>(null);


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
          showCondition: () => of(!this.addFighterOpen),
          action: () => this.addFighterOpen = true
        },
        {
          name: 'Close editor',
          showCondition: () => of(this.addFighterOpen),
          action: () => this.addFighterOpen = false
        },
        {
          name: 'Select category',
          itemDisplayAction: container => this.menuService.createView(container, this.categorySelect, {implicit$: this.categorySelect})
        },
        {
          name: 'Search',
          itemDisplayAction: container => this.menuService.createView(container, this.fighterSearch, {implicit$: this.fighterSearch})
        }
      ]
    }, menuService);
    this.competitionId$ = this.store.pipe(select(getSelectedEventId));
    this.category$ = this.store.pipe(select(eventManagerGetSelectedEventSelectedCategory));
    this.categories$ = this.store.pipe(select(eventManagerGetSelectedEventCategories));
    this.competitionName$ = this.store.pipe(select(eventManagerGetSelectedEventName));
    this.totalCompetitors$ = this.store.pipe(select(eventManagerGetSelectedEventCompetitorsTotal));
    this.pageSize$ = this.store.pipe(select(eventManagerGetSelectedEventCompetitorsPageSize));
    this.pageNumber$ = this.store.pipe(select(eventManagerGetSelectedEventCompetitorsPageNumber));
    this.competitors$ = this.store.pipe(select(eventManagerGetSelectedEventCompetitors));
    this.subs.add(this.searchString$.subscribe(str => this.setSearchString(str)));
  }

  optionsFilter = (options: CategoryDescriptor[], filterword: string) => options.filter(cat => cat.id && AddFighterComponent.displayCategory(cat).toLowerCase().includes(filterword.toLowerCase()));
  formatter = (option: CategoryDescriptor) => AddFighterComponent.displayCategory(option);


  deleteFighter(competitor: Competitor) {
    this.store.dispatch(eventManagerRemoveCompetitor(competitor));
  }

  changePage(info: any) {
    const {competitionId, pageNumber, categoryId} = info;
    this.store.dispatch(eventManagerCompetitionFightersPageChanged(competitionId, categoryId, pageNumber));
  }

  private addQueryParam(paramName: string, paramValue: string, queryParamsHandling?: QueryParamsHandling) {
    const queryParams = {};
    queryParams[paramName] = paramValue;
    this.router.navigate(['.'], {relativeTo: this.route, queryParams, queryParamsHandling: queryParamsHandling || ''}).catch(console.log);
  }

  navigateToFighterProfilePage(fighter: Competitor) {
    this.router.navigate([fighter.id], {relativeTo: this.route}).catch(console.log);
  }

  setCategoryId(category: CategoryDescriptor) {
    if (category) {
      this.addQueryParam('categoryId', category.id);
    } else {
      this.addQueryParam('categoryId', undefined);
    }
  }

  setSearchString(searchString) {
    this.addQueryParam('query', searchString, 'merge');
  }

  dispatchAddFighterAction(action: any) {
    this.store.dispatch(action);
    this.addFighterOpen = false;
  }

  navigateBack() {
    this.store.pipe(select(getSelectedEventId), filter(id => !!id), take(1)).subscribe(id => {
      this.router.navigateByUrl(`/eventmanager/${id}`).catch(console.log);
    });
  }

}
