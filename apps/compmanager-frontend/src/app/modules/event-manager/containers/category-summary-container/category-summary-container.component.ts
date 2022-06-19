import {Component} from '@angular/core';
import {displayCategory, HeaderDescription} from '../../../../commons/model/competition.model';
import {Observable} from 'rxjs';
import {eventManagerGetSelectedEventSelectedCategoryStartTime} from '../../redux/event-manager-reducers';
import {AppState, getSelectedEventId} from '../../../../reducers/global-reducers';
import {select, Store} from '@ngrx/store';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';
import {
  CompetitionManagerModuleRouterEntryComponent,
  ComponentCommonMetadataProvider
} from '../../../../commons/directives/common-classes';
import {filter, map, take} from 'rxjs/operators';
import {MenuService} from '../../../../components/main-menu/menu.service';
import {CategoryState} from "@frontend-nx/protobuf";
import {DataProviderService} from "../../../../service/data.provider.service";

@Component({
  selector: 'app-category-summary-container',
  template: `
    <app-category-summary
      [category]="category$ | async"
      [categoryStartTime]="categoryStartTime$ | async"
      [competitionId]="competitionId$ | async"
      (categoryBracketsSelected)="navigateToCategoryBrackets($event)"
      (categoryFightersSelected)="navigateToCategoryFighters($event)">
    </app-category-summary>`,
  styleUrls: ['./category-summary-container.component.css']
})
export class CategorySummaryContainerComponent extends CompetitionManagerModuleRouterEntryComponent {

  category$: Observable<CategoryState>;
  competitionId$: Observable<string>;

  categoryStartTime$: Observable<Date>;

  constructor(store: Store<AppState>, private router: Router, private route: ActivatedRoute, private location: Location, menuService: MenuService, private dataProviderService: DataProviderService) {
    super(store, <ComponentCommonMetadataProvider>{
      menu: [
        {
          name: 'Return',
          action: () => this.goback()
        }
      ],
      header: dataProviderService.categoryInterest$.pipe(filter(cat => !!cat), take(1), map(cat => <HeaderDescription>{
        header: 'Category',
        subheader: displayCategory(cat?.category)
      }))
    }, menuService);
    this.category$ = dataProviderService.categoryInterest$;
    this.competitionId$ = store.pipe(select(getSelectedEventId));
    this.categoryStartTime$ = store.pipe(select(eventManagerGetSelectedEventSelectedCategoryStartTime));
  }

  goback() {
    const path = this.location.path(false);
    this.router.navigateByUrl(path.slice(0, path.lastIndexOf('/'))).catch(reason => console.error(`Navigation failed: ${reason}`));
  }

  navigateToCategoryFighters({categoryId, competitionId}) {
    this.router.navigate(['/eventmanager', competitionId, 'fighters'], {queryParams: {categoryId}}).catch(reason => console.error(`Navigation failed: ${reason}`));
  }

  navigateToCategoryBrackets({categoryId, competitionId}) {
    this.router.navigate(['/eventmanager', competitionId, 'brackets'], {queryParams: {categoryId}}).catch(reason => console.error(`Navigation failed: ${reason}`));
  }

}
