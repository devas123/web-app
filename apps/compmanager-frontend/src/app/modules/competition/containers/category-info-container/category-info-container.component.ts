import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {AppState, getSelectedEventProperties} from '../../../../reducers/global-reducers';
import {Category, CompetitionProperties} from '../../../../commons/model/competition.model';
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
    this.properties$ = store.pipe(select(getSelectedEventProperties));
    this.categories$ = store.pipe(select(eventManagerGetSelectedEventCategories));
  }


  ngOnInit() {
  }

}
