import {NgModule} from '@angular/core';

import {AuthorizationComponent} from './components/authorization/authorization.component';
import {SignInComponent} from './components/authorization/sign-in/sign-in.component';
import {SignUpComponent} from './components/authorization/sign-up/sign-up.component';
import {HttpClientModule} from '@angular/common/http';
import {SuiModalModule, SuiTransitionModule} from '@frontend-nx/ng2-semantic-ui';
import {AccountInfoComponent} from './components/account-info/account-info.component';
import {RouterModule} from '@angular/router';
import {accountRoutes} from './account.routes';
import {BrowserModule} from '@angular/platform-browser';
import {AccountRootComponent} from './components/account-root/account-root.component';
import {CompetitionManagerCommonsModule} from '../../commons/competition-manager-commons.module';
import {AccountInfoContainerComponent} from "./containers/account-info.container.component";
import {ReactiveFormsModule} from "@angular/forms";

// import {AvatarModule} from 'ngx-avatar';


@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    SuiTransitionModule,
    RouterModule.forChild(accountRoutes),
    // AvatarModule,
    SuiModalModule,
    CompetitionManagerCommonsModule,
    ReactiveFormsModule
  ],
  declarations: [
    SignInComponent,
    SignUpComponent,
    AccountRootComponent,
    AuthorizationComponent,
    AccountInfoComponent,
    AccountInfoContainerComponent
  ],
  providers: []
})
export class AccountModule {
}
