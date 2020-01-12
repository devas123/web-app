import {Component, OnDestroy, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {AppState, CompetitionProperties} from '../../../../reducers';
import {select, Store} from '@ngrx/store';
import {combineLatest, Observable, Subscription} from 'rxjs';
import {map, tap} from 'rxjs/operators';
import {ActivatedRoute, Router} from '@angular/router';
import {MenuService} from '../../../../components/main-menu/menu.service';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {Category, Fight} from '../../../../commons/model/competition.model';
import {
  eventManagerGetSelectedEvent,
  eventManagerGetSelectedEventCategories,
  eventManagerGetSelectedEventId,
  eventManagerGetSelectedEventSelectedCategory,
  eventManagerGetSelectedEventSelectedCategoryFights,
  eventManagerGetSelectedEventSelectedCategoryFightsAreLoading,
  eventManagerGetSelectedEventSelectedCategoryFightsEditorStateSelectedChangeFightsIds
} from '../../../event-manager/redux/event-manager-reducers';
import {eventManagerCategorySelected, eventManagerCategoryUnselected} from '../../../event-manager/redux/event-manager-actions';
import {AddFighterComponent} from '../../../event-manager/components/add-fighter/add-fighter.component';

@Component({
  selector: 'app-brackets-container',
  templateUrl: './brackets-container.component.html',
  styleUrls: ['./brackets-container.component.scss']
})
export class BracketsContainerComponent implements OnInit, OnDestroy {

  private competitionId: string;
  private subs = new Subscription();

  competition$: Observable<CompetitionProperties>;
  fights$: Observable<Fight[]>;
  fightsAreLoading$: Observable<boolean>;
  category$: Observable<Category>;
  categories$: Observable<Category[]>;
  selectedCategory: Category;
  bucketsize$: Observable<number>;
  changeFightsIds$: Observable<string[]>;

  @ViewChild('categorySelect', {static: true})
  categorySelect: TemplateRef<any>;

  constructor(private store: Store<AppState>, private route: ActivatedRoute, private router: Router, private observer: BreakpointObserver, menuService: MenuService) {
    const competitionId$ = this.store.pipe(select(eventManagerGetSelectedEventId));
    const categoryId$ = this.route.queryParams.pipe(map(params => params['categoryId']));
    this.subs.add(competitionId$.subscribe(id => this.competitionId = id));
    this.subs.add(combineLatest([competitionId$, categoryId$]).subscribe(([competitionId, categoryId]) => {
      if (competitionId && categoryId) {
        this.store.dispatch(eventManagerCategorySelected(competitionId, categoryId));
      }
    }));
    this.competition$ = store.pipe(select(eventManagerGetSelectedEvent));
    this.fights$ = store.pipe(select(eventManagerGetSelectedEventSelectedCategoryFights));
    this.fightsAreLoading$ = store.pipe(select(eventManagerGetSelectedEventSelectedCategoryFightsAreLoading));
    this.category$ = store.pipe(select(eventManagerGetSelectedEventSelectedCategory), tap(category => this.selectedCategory = category));
    this.bucketsize$ = observer.observe([Breakpoints.Handset, Breakpoints.Small]).pipe(
      map(b => b.matches ? 2 : 4)
    );
    this.changeFightsIds$ = store.pipe(select(eventManagerGetSelectedEventSelectedCategoryFightsEditorStateSelectedChangeFightsIds));
    this.categories$ = this.store.pipe(select(eventManagerGetSelectedEventCategories));
  }
  optionsFilter = (options: Category[], filterword: string) => options.filter(cat => cat.id && AddFighterComponent.displayCategory(cat).toLowerCase().includes(filterword.toLowerCase()));
  formatter = (option: Category, query?: string) => AddFighterComponent.displayCategory(option);
  setCategoryId(category: Category) {
    if (!this.selectedCategory || this.selectedCategory.id !== category.id) {
      const queryParams = {categoryId: category.id};
      this.selectedCategory = category;
      this.router.navigate(['eventmanager', this.competitionId, 'brackets'], {queryParams}).catch(error => console.error(error));
    }
  }
  ngOnInit() {
  }
  ngOnDestroy() {
    if (this.selectedCategory) {
      this.store.dispatch(eventManagerCategoryUnselected(this.competitionId));
    }
    this.subs.unsubscribe();
  }
}
