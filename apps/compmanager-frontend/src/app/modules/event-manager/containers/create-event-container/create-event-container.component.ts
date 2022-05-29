import {ChangeDetectionStrategy, Component} from '@angular/core';
import {
  CompetitionManagerModuleRouterEntryComponent,
  ComponentCommonMetadataProvider
} from "../../../../commons/directives/common-classes";
import {select, Store} from "@ngrx/store";
import {AppState, selectUser} from "../../../../reducers/global-reducers";
import {MenuService} from "../../../../components/main-menu/menu.service";
import {ActivatedRoute, Router} from "@angular/router";
import {CompetitionProperties, RegistrationInfo} from "@frontend-nx/protobuf";
import {createCompetition} from "../../../../actions/actions";
import {getTimeZones, TimeZone} from "@vvo/tzdb";
import {Observable} from "rxjs";
import {Account} from "../../../account/model/Account";

@Component({
  template: `
    <compmanager-frontend-create-event
      [timeZones]="timeZones"
      [user]="user$ | async"
      (createCompetition)="dispatchCreateCompetitionCommand($event)"
    ></compmanager-frontend-create-event>`,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateEventContainerComponent extends CompetitionManagerModuleRouterEntryComponent {
  user$: Observable<Account>;
  timeZones: TimeZone[];

  constructor(store: Store<AppState>, menuService: MenuService, private router: Router, private route: ActivatedRoute) {
    super(store, <ComponentCommonMetadataProvider>{
      menu: [
        {
          name: 'Return',
          action: () => this.goBack()
        }
      ],
      header: {
        header: 'Create event'
      }
    }, menuService);
    this.user$ = this.store.pipe(
      select(selectUser)
    )
    this.timeZones = getTimeZones();
  }

  private goBack() {
    this.router.navigate(['..'], {relativeTo: this.route}).catch(console.error);
  }

  dispatchCreateCompetitionCommand($event: { competitionProperties: CompetitionProperties; regInfo: RegistrationInfo }) {
    this.store.dispatch(createCompetition({
      properties: $event.competitionProperties,
      regInfo: $event.regInfo,
      successCallback: _ => {
        console.log("callback");
        this.goBack();
      }
    }));
  }
}
