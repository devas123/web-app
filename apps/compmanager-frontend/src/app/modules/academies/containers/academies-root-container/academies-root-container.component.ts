import {Component} from '@angular/core';
import {map} from "rxjs/operators";
import {MenuService} from "../../../../components/main-menu/menu.service";
import {Observable} from "rxjs";
import {
  CompetitionManagerModuleRouterEntryComponent,
  ComponentCommonMetadataProvider
} from "../../../../commons/directives/common-classes";
import {select, Store} from "@ngrx/store";
import {AppState, eventManagerGetHeaderDescription} from "../../../../reducers/global-reducers";
import {HeaderDescription, MenuItem} from "../../../../commons/model/competition.model";

@Component({
  selector: 'compmanager-frontend-academies-root-container',
  template: `
    <div class="event_manager_container">
      <div class="event_manager_header" app-dynamic-header [hederDescription]="header$ | async"></div>
      <div class="menu_row">
        <app-eventmanager-menu *ngIf="(shrinkMainContent$ | async) !== true" [menu]="menu$ | async" (itemClicked)="$event.action()" [displayMenu]="shrinkMainContent$ | async"></app-eventmanager-menu>
        <div appFlexCol [shrink]="shrinkMainContent$ | async" class="maincontent">
          <router-outlet></router-outlet>
        </div>
      </div>
    </div>
  `,
  styles: [],
})
export class AcademiesRootContainerComponent  extends CompetitionManagerModuleRouterEntryComponent  {
  displayAsSidebar$: Observable<boolean>;
  shrinkMainContent$: Observable<boolean>;
  header$: Observable<HeaderDescription>;
  menu$: Observable<MenuItem[]>;

  constructor(store: Store<AppState>, menuService: MenuService) {
    super(store, <ComponentCommonMetadataProvider>{
      menu: []
    },menuService);
    this.header$ = this.store.pipe(select(eventManagerGetHeaderDescription));
    this.displayAsSidebar$ = menuService.displaySidebar$;
    this.shrinkMainContent$ = this.displayAsSidebar$.pipe(
      map((button) => !button)
    );
    this.menu$ = menuService.menu$;
  }
}
