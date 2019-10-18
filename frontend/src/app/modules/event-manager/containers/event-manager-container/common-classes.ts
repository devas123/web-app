import {OnDestroy} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {AppState} from '../../../../reducers';
import {Observable} from 'rxjs';
import {
  BreadCrumbItem,
  eventManagerGetSelectedEventCategories,
  eventManagerGetSelectedEventId,
  eventManagerGetSelectedEventName,
  eventManagerGetSelectedEventTimeZone,
  HeaderDescription,
  MenuItem
} from '../../redux/event-manager-reducers';
import {eventManagerBreadcrumbPop, eventManagerBreadcrumbPush, eventManagerHeaderClear, eventManagerHeaderSet} from '../../redux/event-manager-actions';
import {filter, take} from 'rxjs/operators';
import {Category} from '../../../../commons/model/competition.model';
import {MenuService} from '../../../../components/main-menu/menu.service';

export abstract class EventManagerRouterEntryComponent implements OnDestroy {

  protected constructor(protected store: Store<AppState>, protected metadataProvider: ComponentCommonMetadataProvider, protected menuService: MenuService) {
    setTimeout(() => this.init(metadataProvider));
  }

  static pushBreadcrumbItem(store: Store<AppState>, item: BreadCrumbItem) {
    store.dispatch(eventManagerBreadcrumbPush(item));
  }

  static processSyncOrAsync<A>(item: SyncOrAsync<A>, action: (i: A) => any) {
    if (item) {
      if (item instanceof Observable) {
        item.pipe(filter(i => !!i), take(1)).subscribe(next => action(next), error => console.log(error));
      } else if (item instanceof Promise) {
        item.then(next => action(next)).catch(error => console.log(error));
      } else {
        action(item);
      }
    }
  }

  private init(metadataProvider: ComponentCommonMetadataProvider) {
    EventManagerRouterEntryComponent.processSyncOrAsync(metadataProvider.breadCrumbItem, i => EventManagerRouterEntryComponent.pushBreadcrumbItem(this.store, i));
    EventManagerRouterEntryComponent.processSyncOrAsync(metadataProvider.menu, i => this.menuService.menu = i);
    EventManagerRouterEntryComponent.processSyncOrAsync(metadataProvider.header, i => this.store.dispatch(eventManagerHeaderSet(i)));
  }

  ngOnDestroy(): void {
    this.store.dispatch(eventManagerBreadcrumbPop(1));
    this.menuService.clear();
    this.store.dispatch(eventManagerHeaderClear);
  }

}

type SyncOrAsync<A> = A | Observable<A> | Promise<A>;


export interface ComponentCommonMetadataProvider {
  header?: SyncOrAsync<HeaderDescription>;
  breadCrumbItem?: SyncOrAsync<BreadCrumbItem>;
  menu?: SyncOrAsync<MenuItem[]>;
}

export abstract class BasicCompetitionInfoContainer extends EventManagerRouterEntryComponent {
  protected competitionName$: Observable<string>;
  protected competitionId$: Observable<string>;
  protected categories$: Observable<Category[]>;
  protected timeZone$: Observable<string>;

  protected constructor(store: Store<AppState>, metadataProvider: ComponentCommonMetadataProvider, menuService: MenuService) {
    super(store, metadataProvider, menuService);
    this.competitionName$ = store.pipe(select(eventManagerGetSelectedEventName));
    this.competitionId$ = store.pipe(select(eventManagerGetSelectedEventId));
    this.timeZone$ = store.pipe(select(eventManagerGetSelectedEventTimeZone));
    this.categories$ = store.pipe(select(eventManagerGetSelectedEventCategories));
  }
}

export interface MenuManager {
  handleMenuItemClicked: (item: MenuItem) => any;

  getMenu(): MenuItem[];
}
