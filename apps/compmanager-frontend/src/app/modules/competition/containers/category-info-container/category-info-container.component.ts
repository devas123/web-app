import {Component} from '@angular/core';
import {Observable} from 'rxjs';
import {AppState, getSelectedEventProperties} from '../../../../reducers/global-reducers';
import {select, Store} from '@ngrx/store';
import {CategoryState, CompetitionProperties} from "@frontend-nx/protobuf";
import {DataProviderService} from "../../../../service/data.provider.service";

@Component({
  selector: 'app-category-info-container',
  templateUrl: './category-info-container.component.html',
  styleUrls: ['./category-info-container.component.scss']
})
export class CategoryInfoContainerComponent  {
  properties$: Observable<CompetitionProperties>;

  categories$: Observable<CategoryState[]>;

  constructor(private store: Store<AppState>, dataProviderService: DataProviderService) {
    this.properties$ = store.pipe(select(getSelectedEventProperties));
    this.categories$ = dataProviderService.categoriesInterest$;
  }
}
