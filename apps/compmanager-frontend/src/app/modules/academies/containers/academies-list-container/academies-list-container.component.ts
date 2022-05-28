import {Component} from '@angular/core';
import {
  CompetitionManagerModuleRouterEntryComponent,
  ComponentCommonMetadataProvider
} from "../../../../commons/directives/common-classes";
import {select, Store} from "@ngrx/store";
import {AppState} from "../../../../reducers/global-reducers";
import {MenuService} from "../../../../components/main-menu/menu.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Observable} from "rxjs";
import {FullAcademyInfo, PageInfo} from "@frontend-nx/protobuf";
import {getAllAcademies, selectAcademiesPageInfo} from "../../redux/selectors";
import {loadAcademies, removeAcademy} from "../../redux/actions";

@Component({
  selector: 'compmanager-frontend-academies-list-container',
  template: `
    <compmanager-frontend-academies-list-component
      (deleteAcademy)="sendDeleteAcademyCommand($event)"
      (academySelected)="selectAcademy($event)"
      (selectPage)="changePage($event)"
      [pageInfo]="pageInfo$ | async"

      [academies]="academies$ | async"></compmanager-frontend-academies-list-component>
  `,
  styles: [],
})
export class AcademiesListContainerComponent extends CompetitionManagerModuleRouterEntryComponent {
  academies$: Observable<FullAcademyInfo[]>;
  pageInfo$: Observable<PageInfo>;

  constructor(store: Store<AppState>, menuService: MenuService, private router: Router, private route: ActivatedRoute) {
    super(store,
      <ComponentCommonMetadataProvider>{
        includeDefaultMenu: true,
        menu: [
          {
            name: 'Add academy',
            action: () => router.navigate(['add'], {relativeTo: route})
          }
        ],
        header: {
          header: 'Academy list',
        }
      }, menuService);
    this.store.dispatch(loadAcademies({pageInfo: <PageInfo>{page: 0}}))
    this.academies$ = this.store.pipe(
      select(getAllAcademies)
    );
    this.pageInfo$ = this.store.pipe(
      select(selectAcademiesPageInfo)
    );
  }

  sendDeleteAcademyCommand(academyId: string) {
    this.store.dispatch(removeAcademy({academyId}));
  }

  changePage(pageInfo: PageInfo) {
    this.store.dispatch(loadAcademies({pageInfo}))
  }

  selectAcademy(id: string) {
    this.router.navigate([id], {relativeTo: this.route}).catch(console.error);
  }
}
