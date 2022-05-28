import {Component} from '@angular/core';
import {
  CompetitionManagerModuleRouterEntryComponent,
  ComponentCommonMetadataProvider
} from "../../../../commons/directives/common-classes";
import {select, Store} from "@ngrx/store";
import {AppState} from "../../../../reducers/global-reducers";
import {MenuService} from "../../../../components/main-menu/menu.service";
import {map} from "rxjs/operators";
import {Observable} from "rxjs";
import {FullAcademyInfo} from "@frontend-nx/protobuf";
import {getSelectedAcademy} from "../../redux/selectors";

@Component({
  selector: 'compmanager-frontend-academy-info-container',
  template: `
    <compmanager-frontend-academy-info-component
      [academy]="academy$ | async"></compmanager-frontend-academy-info-component> `,
  styles: [],
})
export class AcademyInfoContainerComponent extends CompetitionManagerModuleRouterEntryComponent {
  academy$: Observable<FullAcademyInfo>;

  constructor(
    store: Store<AppState>, menuService: MenuService
  ) {
    super(store,
      <ComponentCommonMetadataProvider>{
        includeDefaultMenu: true,
        menu: [],
        header: store.pipe(
          select(getSelectedAcademy),
          map(academy => {
            return {
              header: 'Academy info',
              subheader: academy?.name
            }
          })
        )
      }, menuService)
    this.academy$ = store.pipe(select(getSelectedAcademy));
  }
}

