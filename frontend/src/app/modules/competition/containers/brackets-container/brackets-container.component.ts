import {Component, OnDestroy, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {AppState, CompetitionState, getSelectedEventId, getSelectedEventState} from '../../../../reducers/global-reducers';
import {select, Store} from '@ngrx/store';
import {Observable, of, Subscription} from 'rxjs';
import {filter, map, take, tap, withLatestFrom} from 'rxjs/operators';
import {ActivatedRoute, Router} from '@angular/router';
import {MenuService} from '../../../../components/main-menu/menu.service';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {Category, Fight} from '../../../../commons/model/competition.model';
import {
  eventManagerGetSelectedEventCategories,
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

  competition$: Observable<CompetitionState>;
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
    this.competition$ = store.pipe(select(getSelectedEventState), filter(st => !!st));
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
      this.selectedCategory = category;
      of(category.id).pipe(withLatestFrom(this.store.pipe(select(getSelectedEventId))), map(([categoryId, competitionId]) => eventManagerCategorySelected(competitionId, categoryId))).subscribe(this.store);
    }
  }
  ngOnInit() {
  }
  ngOnDestroy() {
    if (this.selectedCategory) {
      this.store.pipe(select(getSelectedEventId), map(id => eventManagerCategoryUnselected(id)), take(1)).subscribe(this.store);
    }
    this.subs.unsubscribe();
  }
}
