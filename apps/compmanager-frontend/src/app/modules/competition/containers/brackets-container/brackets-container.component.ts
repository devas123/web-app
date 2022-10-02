import {Component, OnDestroy, TemplateRef, ViewChild} from '@angular/core';
import {AppState, getSelectedEventId} from '../../../../reducers/global-reducers';
import {select, Store} from '@ngrx/store';
import {Observable, of, Subscription} from 'rxjs';
import {map, take, withLatestFrom} from 'rxjs/operators';
import {eventManagerCategorySelected, eventManagerCategoryUnselected} from '../../../event-manager/redux/event-manager-actions';
import {AddFighterComponent} from '../../../event-manager/components/add-fighter/add-fighter.component';
import {CommonBracketsInfoContainer} from '../../../../commons/classes/common-brackets-container.component';
import {CategoryDescriptor, CategoryState} from "@frontend-nx/protobuf";

@Component({
  selector: 'app-brackets-container',
  templateUrl: './brackets-container.component.html',
  styleUrls: ['./brackets-container.component.scss']
})
export class BracketsContainerComponent implements  OnDestroy {

  private subs = new Subscription();

  @ViewChild('categorySelect', {static: true})
  categorySelect: TemplateRef<any>;
  bucketSize$: Observable<number>;

  constructor(private store: Store<AppState>,
              public bracketsInfo: CommonBracketsInfoContainer) {
    this.bucketSize$ = bracketsInfo.bucketsize$.pipe(map(val => val ? 2 : 6));
  }

  optionsFilter = (options: CategoryState[], filterword: string) => options.filter(cat => cat.id && AddFighterComponent.displayCategory(cat.category).toLowerCase().includes(filterword.toLowerCase()));
  formatter = (option: CategoryState) => AddFighterComponent.displayCategory(option.category);

  setCategoryId(category: CategoryState) {
    of(category.id).pipe(withLatestFrom(this.store.pipe(select(getSelectedEventId))), map(([categoryId, competitionId]) => eventManagerCategorySelected(competitionId, categoryId))).subscribe(this.store);
  }

  ngOnDestroy() {
    this.store.pipe(select(getSelectedEventId), map(id => eventManagerCategoryUnselected(id)), take(1)).subscribe(this.store);
    this.subs.unsubscribe();
  }

  selectStage(id: string) {
    this.bracketsInfo.selectStageById(id);
  }
}
