import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subscription} from 'rxjs';
import {AppState} from '../../../../reducers';
import {select, Store} from '@ngrx/store';
import {
  eventManagerGetSelectedEventSelectedCategory,
  eventManagerGetSelectedEventSelectedCategoryCompetitors
} from '../../redux/event-manager-reducers';
import {AddFighterComponent} from '../../components/add-fighter/add-fighter.component';
import {Category, Competitor} from '../../../../commons/model/competition.model';
import {
  eventManagerCategoryFightersPageChanged,
  eventManagerCreateFakeCompetitorsCommand,
  eventManagerRemoveCompetitor
} from '../../redux/event-manager-actions';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  templateUrl: './category-fighters-editor-container.component.html',
  styleUrls: ['./category-fighters-editor-container.component.css']
})
export class CategoryFightersEditorContainerComponent implements OnInit, OnDestroy {

  category$: Observable<Category>;

  fighters$: Observable<Competitor[]>;

  addFighterOpen = false;

  private category: Category;
  private readonly categorySubscription: Subscription;

  constructor(private store: Store<AppState>, private router: Router, private route: ActivatedRoute) {
    this.category$ = this.store.pipe(select(eventManagerGetSelectedEventSelectedCategory));
    this.fighters$ = this.store.pipe(select(eventManagerGetSelectedEventSelectedCategoryCompetitors));
    this.categorySubscription = this.category$.subscribe(category => this.category = category);
  }

  getName = (category: Category) => AddFighterComponent.displayCategory(category);

  dispatchAddFighterAction(action: any) {
    this.store.dispatch(action);
    this.addFighterOpen = false;
  }

  sendDeleteFighterCommand(competitor: Competitor) {
    this.store.dispatch(eventManagerRemoveCompetitor(competitor));
  }

  navigateToFighterProfilePage(fighter: Competitor) {
    this.router.navigate([btoa(fighter.email)], {relativeTo: this.route});
  }

  generateRandomFighters() {
    if (this.category) {
      this.store.dispatch(eventManagerCreateFakeCompetitorsCommand(this.category.competitionId, this.category.categoryId, 30, 20));
    }
  }

  changePage(info: { pageNumber: number, competitionId: string }) {
    this.store.dispatch(eventManagerCategoryFightersPageChanged(info.competitionId, info.pageNumber));
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    if (this.categorySubscription) {
      this.categorySubscription.unsubscribe();
    }
  }

}
