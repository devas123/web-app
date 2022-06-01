import {Directive, OnDestroy} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {AppState, getSelectedEventId} from '../../reducers/global-reducers';
import {Observable} from 'rxjs';
import {
  eventManagerGetSelectedEventCategories,
  eventManagerGetSelectedEventName,
  eventManagerGetSelectedEventTimeZone
} from '../../modules/event-manager/redux/event-manager-reducers';
import {eventManagerHeaderClear, eventManagerHeaderSet} from '../../modules/event-manager/redux/event-manager-actions';
import {filter, take} from 'rxjs/operators';
import {HeaderDescription, MenuItem} from '../model/competition.model';
import {MenuService} from '../../components/main-menu/menu.service';
import {CategoryState} from "@frontend-nx/protobuf";

@Directive({})
export abstract class CompetitionManagerModuleRouterEntryComponent implements OnDestroy {

  protected constructor(protected store: Store<AppState>, protected metadataProvider: ComponentCommonMetadataProvider, protected menuService: MenuService) {
    setTimeout(() => this.init(metadataProvider));
  }

  static processSyncOrAsync<A>(item: SyncOrAsync<A>, action: (i: A) => any) {
    if (item) {
      if (item instanceof Observable) {
        item.pipe(filter(i => !!i), take(1)).subscribe(action, console.log);
      } else if (item instanceof Promise) {
        item.then(next => action(next)).catch(console.log);
      } else {
        action(item);
      }
    }
  }

  private init(metadataProvider: ComponentCommonMetadataProvider) {
    CompetitionManagerModuleRouterEntryComponent.processSyncOrAsync(metadataProvider.menu, i => this.menuService.menu = metadataProvider.includeDefaultMenu ? [...this.menuService.defaultMenu, ...i] : i);
    CompetitionManagerModuleRouterEntryComponent.processSyncOrAsync(metadataProvider.header, i => this.store.dispatch(eventManagerHeaderSet(i)));
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
  includeDefaultMenu?: boolean;
}

export abstract class BasicCompetitionInfoContainer extends CompetitionManagerModuleRouterEntryComponent {
  competitionName$: Observable<string>;
  competitionId$: Observable<string>;
  categories$: Observable<CategoryState[]>;
  timeZone$: Observable<string>;

  protected constructor(store: Store<AppState>, metadataProvider: ComponentCommonMetadataProvider, menuService: MenuService) {
    super(store, metadataProvider, menuService);
    this.competitionName$ = store.pipe(select(eventManagerGetSelectedEventName));
    this.competitionId$ = store.pipe(select(getSelectedEventId));
    this.timeZone$ = store.pipe(select(eventManagerGetSelectedEventTimeZone));
    this.categories$ = store.pipe(select(eventManagerGetSelectedEventCategories));
  }
}
