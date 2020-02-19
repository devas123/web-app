import {OnDestroy} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {AppState, getSelectedEventId} from '../../../../reducers/global-reducers';
import {Observable} from 'rxjs';
import {
 selectedEvent
} from '../../redux/event-manager-reducers';
import {eventManagerHeaderClear, eventManagerHeaderSet} from '../../redux/event-manager-actions';
import {filter, take, tap} from 'rxjs/operators';
import {Category, HeaderDescription, MenuItem} from '../../../../commons/model/competition.model';
import {MenuService} from '../../../../components/main-menu/menu.service';

export abstract class EventManagerRouterEntryComponent implements OnDestroy {

  protected constructor(protected store: Store<AppState>, protected metadataProvider: ComponentCommonMetadataProvider, protected menuService: MenuService) {
    setTimeout(() => this.init(metadataProvider));
  }

  static processSyncOrAsync<A>(item: SyncOrAsync<A>, action: (i: A) => any) {
    if (item) {
      if (item instanceof Observable) {4
        item.pipe(filter(i => !!i), take(1)).subscribe(next => action(next), error => console.log(error));
      } else if (item instanceof Promise) {
        item.then(next => action(next)).catch(error => console.log(error));
      } else {
        action(item);
      }
    }
  }

  private init(metadataProvider: ComponentCommonMetadataProvider) {
    EventManagerRouterEntryComponent.processSyncOrAsync(metadataProvider.menu, i => this.menuService.menu = i);
    EventManagerRouterEntryComponent.processSyncOrAsync(metadataProvider.header, i => this.store.dispatch(eventManagerHeaderSet(i)));
  }

  ngOnDestroy(): void {
    this.menuService.clear();
    this.store.dispatch(eventManagerHeaderClear);
  }

}

type SyncOrAsync<A> = A | Observable<A> | Promise<A>;


export interface ComponentCommonMetadataProvider {
  header?: SyncOrAsync<HeaderDescription>;
  menu?: SyncOrAsync<MenuItem[]>;
}

export abstract class BasicCompetitionInfoContainer extends EventManagerRouterEntryComponent {
  competitionName$: Observable<string>;
  competitionId$: Observable<string>;
  categories$: Observable<Category[]>;
  timeZone$: Observable<string>;

  protected constructor(store: Store<AppState>, metadataProvider: ComponentCommonMetadataProvider, menuService: MenuService) {
    super(store, metadataProvider, menuService);
    this.competitionName$ = store.pipe(select(selectedEvent.name()));
    this.competitionId$ = store.pipe(select(getSelectedEventId));
    this.timeZone$ = store.pipe(select(selectedEvent.timeZone()));
    this.categories$ = store.pipe(select(selectedEvent.categoriesCollection.allCategories())).pipe(tap(x => console.log(x)));
  }
}
