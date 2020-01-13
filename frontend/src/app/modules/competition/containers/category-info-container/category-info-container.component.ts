import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {AppState, CompetitionProperties, getSelectedEventState} from '../../../../reducers/global-reducers';
import {Category} from '../../../../commons/model/competition.model';
import {select, Store} from '@ngrx/store';
import {eventManagerGetSelectedEventCategories} from '../../../event-manager/redux/event-manager-reducers';

@Component({
  selector: 'app-category-info-container',
  templateUrl: './category-info-container.component.html',
  styleUrls: ['./category-info-container.component.scss']
})
export class CategoryInfoContainerComponent implements OnInit {

  properties$: Observable<CompetitionProperties>;

  categories$: Observable<Category[]>;

  constructor(private store: Store<AppState>) {
    this.properties$ = store.pipe(select(getSelectedEventState));
    this.categories$ = store.pipe(select(eventManagerGetSelectedEventCategories));
  }


  ngOnInit() {
  }

}
