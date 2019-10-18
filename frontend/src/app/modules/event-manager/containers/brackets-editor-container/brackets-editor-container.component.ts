import {Component, OnDestroy, OnInit} from '@angular/core';
import {AppState, CompetitionProperties} from '../../../../reducers';
import {select, Store} from '@ngrx/store';
import {combineLatest, Observable, Subscription} from 'rxjs';
import {
  BreadCrumbItem,
  eventManagerGetSelectedEvent,
  eventManagerGetSelectedEventCategories,
  eventManagerGetSelectedEventId, eventManagerGetSelectedEventName,
  eventManagerGetSelectedEventSelectedCategory,
  eventManagerGetSelectedEventSelectedCategoryFights, HeaderDescription
} from '../../redux/event-manager-reducers';
import {Category, Fight} from '../../../../commons/model/competition.model';
import {AddFighterComponent} from '../../components/add-fighter/add-fighter.component';
import {
  eventManagerCategorySelected,
  eventManagerCategoryUnselected,
  eventManagerDropAllBracketsCommand,
  eventManagerDropCategoryBracketsCommand,
  eventManagerGenerateBrackets,
  eventManagerMoveFighter
} from '../../redux/event-manager-actions';
import {filter, map, tap} from 'rxjs/operators';
import {ActivatedRoute, Router} from '@angular/router';
import {ComponentCommonMetadataProvider, EventManagerRouterEntryComponent} from '../event-manager-container/common-classes';
import {MenuService} from '../../../../components/main-menu/menu.service';

@Component({
  selector: 'app-brackets-editor-container',
  templateUrl: './brackets-editor-container.component.html',
  styleUrls: ['./brackets-editor-container.component.css']
})
export class BracketsEditorContainerComponent extends EventManagerRouterEntryComponent implements OnInit, OnDestroy {


  constructor(store: Store<AppState>, private route: ActivatedRoute, private router: Router, menuService: MenuService) {
    super(store, <ComponentCommonMetadataProvider>{
      breadCrumbItem: <BreadCrumbItem>{
        name: 'Brackets',
        level: 2
      },
      header: store.pipe(
        select(eventManagerGetSelectedEventName),
        filter(name => !!name),
        map(name => <HeaderDescription>{
          header: 'Brackets',
          subheader: name
        })
      ),
      menu: []
    }, menuService);
    const competitionId$ = this.store.pipe(select(eventManagerGetSelectedEventId));
    const categoryId$ = this.route.queryParams.pipe(map(params => params['categoryId']));
    this.subs.add(competitionId$.subscribe(id => this.competitionId = id));
    this.subs.add(combineLatest(competitionId$, categoryId$).subscribe(([competitionId, categoryId]) => {
      if (competitionId && categoryId) {
        this.store.dispatch(eventManagerCategorySelected(competitionId, categoryId));
      }
    }));
    this.competition$ = store.pipe(select(eventManagerGetSelectedEvent));
    this.categories$ = store.pipe(select(eventManagerGetSelectedEventCategories));
    this.fights$ = store.pipe(select(eventManagerGetSelectedEventSelectedCategoryFights));
    this.category$ = store.pipe(select(eventManagerGetSelectedEventSelectedCategory), tap(category => this.selectedCategory = category));
  }

  private competitionId: string;
  private subs = new Subscription();

  competition$: Observable<CompetitionProperties>;
  categories$: Observable<Category[]>;
  fights$: Observable<Fight[]>;
  category$: Observable<Category>;
  selectedCategory: Category;

  optionsFilter = (options: Category[], filter: string) => options.filter(cat => cat.id && AddFighterComponent.displayCategory(cat).toLowerCase().includes(filter.toLowerCase()));
  formatter = (option: Category, query?: string) => AddFighterComponent.displayCategory(option);

  sendCompetitorMovedAction(payload: any) {
    this.store.dispatch(eventManagerMoveFighter(payload.competitionId, payload.id, payload));
  }

  setCategoryId(category: Category) {
    if (!this.selectedCategory || this.selectedCategory.id !== category.id) {
      const queryParams = {categoryId: category.id};
      this.selectedCategory = category;
      this.router.navigate(['eventmanager', this.competitionId, 'brackets'], {queryParams}).catch(error => console.error(error));
    }
  }

  dropSelectedBrackets() {
    if (this.selectedCategory) {
      this.store.dispatch(eventManagerDropCategoryBracketsCommand(this.competitionId, this.selectedCategory.id));
    }
  }

  dropAllBrackets() {
    if (this.competitionId) {
      this.store.dispatch(eventManagerDropAllBracketsCommand(this.competitionId));
    }
  }

  ngOnInit() {
  }

  generateBrackets() {
    if (this.selectedCategory) {
      this.store.dispatch(eventManagerGenerateBrackets(this.competitionId, this.selectedCategory.id));
    }
  }

  ngOnDestroy() {
    if (this.selectedCategory) {
      this.store.dispatch(eventManagerCategoryUnselected(this.competitionId));
    }
    this.subs.unsubscribe();
    super.ngOnDestroy();
  }
}
