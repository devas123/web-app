import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AuthorizationComponent} from './components/authorization/authorization.component';
import {SignInComponent} from './components/authorization/sign-in/sign-in.component';
import {SignUpComponent} from './components/authorization/sign-up/sign-up.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SuiModalModule, SuiTransitionModule} from '@frontend-nx/ng2-semantic-ui';
import {AccountInfoComponent} from './components/account-info/account-info.component';
import {RouterModule} from '@angular/router';
import {accountRoutes} from './account.routes';
import {BrowserModule} from '@angular/platform-browser';
import {AccountRootComponent} from './components/account-root/account-root.component';
import {CommonsModule} from '../../commons/commons.module';
// import {AvatarModule} from 'ngx-avatar';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    SuiTransitionModule,
    RouterModule.forChild(accountRoutes),
    // AvatarModule,
    SuiModalModule,
    CommonsModule
  ],
  declarations: [
    SignInComponent,
    SignUpComponent,
    AccountRootComponent,
    AuthorizationComponent,
    AccountInfoComponent
  ],
  providers: []
})
export class AccountModule {
}
