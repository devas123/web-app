import {Component} from '@angular/core';
import {map} from "rxjs/operators";
import {MenuService} from "../../../../components/main-menu/menu.service";
import {Observable} from "rxjs";

@Component({
  selector: 'compmanager-frontend-academies-root-container',
  template: `
    <div class="event_manager_container">
      <div class="menu_row">
        <div appFlexCol [shrink]="shrinkMainContent$ | async" class="maincontent">
          <router-outlet></router-outlet>
        </div>
      </div>
    </div>
  `,
  styles: [],
})
export class AcademiesRootContainerComponent {
  displayAsSidebar$: Observable<boolean>;
  shrinkMainContent$: Observable<boolean>;

  constructor(menuService: MenuService) {
    this.displayAsSidebar$ = menuService.displaySidebar$;
    this.shrinkMainContent$ = this.displayAsSidebar$.pipe(
      map((button) => !button)
    );
  }
}
