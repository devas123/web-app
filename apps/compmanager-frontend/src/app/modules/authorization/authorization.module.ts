import {NgModule} from '@angular/core';
import {CompetitionManagerCommonsModule} from "../../commons/competition-manager-commons.module";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {authorizationRoutes} from "./authorization.routes";
import {ReactiveFormsModule} from "@angular/forms";
import {SignUpComponent} from "./components/authorization/sign-up/sign-up.component-new";
import {SignInComponent} from "./components/authorization/sign-in/sign-in.component";
import {AuthorizationContainerComponent} from "./containers/authorization/authorization.container.component";

@NgModule({
  imports: [
    CompetitionManagerCommonsModule,
    CommonModule,
    RouterModule.forChild(authorizationRoutes),
    ReactiveFormsModule,
  ],
  declarations: [AuthorizationContainerComponent, SignUpComponent, SignInComponent]
})
export class AuthorizationModule {
}
