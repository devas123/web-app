import {Component} from '@angular/core';
import {Observable} from 'rxjs';
import {AppState, getSelectedEventProperties} from '../../../../reducers/global-reducers';
import {select, Store} from '@ngrx/store';
import {eventManagerGetSelectedEventCategories} from '../../../event-manager/redux/event-manager-reducers';
import {CategoryDescriptor, CompetitionProperties} from "@frontend-nx/protobuf";

@Component({
  selector: 'app-category-info-container',
  templateUrl: './category-info-container.component.html',
  styleUrls: ['./category-info-container.component.scss']
})
export class CategoryInfoContainerComponent  {

  properties$: Observable<CompetitionProperties>;

  categories$: Observable<CategoryDescriptor[]>;

  constructor(private store: Store<AppState>) {
    this.properties$ = store.pipe(select(getSelectedEventProperties));
    this.categories$ = store.pipe(select(eventManagerGetSelectedEventCategories));
  }
}
