import {Component, OnDestroy, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {AppState, getSelectedEventId} from '../../../../reducers/global-reducers';
import {select, Store} from '@ngrx/store';
import {of, Subscription} from 'rxjs';
import {map, take, withLatestFrom} from 'rxjs/operators';
import {ActivatedRoute, Router} from '@angular/router';
import {BreakpointObserver} from '@angular/cdk/layout';
import {Category} from '../../../../commons/model/competition.model';
import {
  eventManagerCategoryBracketsStageSelected,
  eventManagerCategorySelected,
  eventManagerCategoryUnselected
} from '../../../event-manager/redux/event-manager-actions';
import {AddFighterComponent} from '../../../event-manager/components/add-fighter/add-fighter.component';
import {CommonBracketsContainer} from '../../../../commons/classes/common-brackets-container.component';

@Component({
  selector: 'app-brackets-container',
  templateUrl: './brackets-container.component.html',
  styleUrls: ['./brackets-container.component.scss']
})
export class BracketsContainerComponent implements OnInit, OnDestroy {

  private subs = new Subscription();

  private bracketsInfo: CommonBracketsContainer;


  @ViewChild('categorySelect', {static: true})
  categorySelect: TemplateRef<any>;

  constructor(private store: Store<AppState>, private route: ActivatedRoute, private router: Router,
              private observer: BreakpointObserver) {
    this.bracketsInfo = new CommonBracketsContainer(store, observer, 6, 2);
  }

  optionsFilter = (options: Category[], filterword: string) => options.filter(cat => cat.id && AddFighterComponent.displayCategory(cat).toLowerCase().includes(filterword.toLowerCase()));
  formatter = (option: Category, query?: string) => AddFighterComponent.displayCategory(option);

  setCategoryId(category: Category) {
    of(category.id).pipe(withLatestFrom(this.store.pipe(select(getSelectedEventId))), map(([categoryId, competitionId]) => eventManagerCategorySelected(competitionId, categoryId))).subscribe(this.store);
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.store.pipe(select(getSelectedEventId), map(id => eventManagerCategoryUnselected(id)), take(1)).subscribe(this.store);
    this.subs.unsubscribe();
  }

  selectStage(id: string) {
    this.bracketsInfo.competition$.pipe(take(1), map(competition => eventManagerCategoryBracketsStageSelected({
      competitionId: competition.id,
      selectedStageId: id
    }))).subscribe(this.store);
  }
}
