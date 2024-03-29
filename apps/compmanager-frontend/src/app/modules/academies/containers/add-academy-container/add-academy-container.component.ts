import {Component} from '@angular/core';
import {
  CompetitionManagerModuleRouterEntryComponent,
  ComponentCommonMetadataProvider
} from "../../../../commons/directives/common-classes";
import {select, Store} from "@ngrx/store";
import {AppState, selectUserId} from "../../../../reducers/global-reducers";
import {MenuService} from "../../../../components/main-menu/menu.service";
import {Observable} from "rxjs";
import {FullAcademyInfo} from "@frontend-nx/protobuf";
import {addAcademy} from "../../redux/actions";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'compmanager-frontend-add-academy-container',
  template: `
    <compmanager-frontend-add-academy-component [userId]="userId$ | async"
                                                (academyAdded)="dispatchAcademyAddedEvent($event)"></compmanager-frontend-add-academy-component> `,
  styles: [],
})
export class AddAcademyContainerComponent extends CompetitionManagerModuleRouterEntryComponent {
  userId$: Observable<string>;

  constructor(
    store: Store<AppState>, menuService: MenuService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    super(store, <ComponentCommonMetadataProvider>{
      includeDefaultMenu: true,
      menu: [],
      header: {
        header: 'Add academy',
      }
    }, menuService);
    this.userId$ = this.store.pipe(
      select(selectUserId)
    )
  }

  dispatchAcademyAddedEvent(academy: FullAcademyInfo) {
    this.store.dispatch(addAcademy({
      academy,
      successCallback: () => this.router.navigate(['..'], {relativeTo: this.activatedRoute}).catch(console.error),
      errorCallback: console.error
    }))
  }
}
