import {Component, OnDestroy, OnInit} from '@angular/core';
import {AppState} from '../../../../reducers';
import {select, Store} from '@ngrx/store';
import {ActivatedRoute} from '@angular/router';
import {eventManagerCategorySelected, eventManagerCategoryUnselected} from '../../redux/event-manager-actions';
import {eventManagerGetSelectedEventId} from '../../redux/event-manager-reducers';
import {Subscription, combineLatest} from 'rxjs';
import {filter, map} from 'rxjs/operators';

@Component({
  selector: 'app-category-container',
  template: '<router-outlet></router-outlet>',
  styleUrls: ['./category-container.component.css']
})
export class CategoryContainerComponent implements OnInit, OnDestroy {

  private competitionId;
  private subs = new Subscription();

  constructor(private store: Store<AppState>, private route: ActivatedRoute) {
    const a$ = combineLatest(
      this.route.params.pipe(filter(params => params['id'] && params['id'] != null), map(params => params['id'])),
      this.store.pipe(select(eventManagerGetSelectedEventId), filter(id => id != null)));
    this.subs.add(a$.pipe(
      map((result: string[]) => {
        this.competitionId = result[1];
        return eventManagerCategorySelected(result[1], result[0]);
      })
    ).subscribe(this.store));
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    if (this.competitionId) {
      this.store.dispatch(eventManagerCategoryUnselected(this.competitionId));
    }
    this.subs.unsubscribe();
  }

}
