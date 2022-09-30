import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {appRoutes} from './main.routes';

import {AppComponent} from './app-component/app.component';
import {MainMenuComponent} from './components/main-menu/main-menu.component';
import {RouterModule} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {InfoService} from './service/info.service';
import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';
import {Effects} from './effects/effects';
import {metaReducers, reducers} from './reducers/global-reducers';
import {HttpAuthService} from './modules/account/service/AuthService';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../environments/environment';
import {AccountService} from './modules/account/service/account.service';
// import {AvatarModule} from 'ngx-avatar';
import {SignUpGuard} from './modules/account/components/authorization/sign-up.guard';
import {AuthGuard} from './modules/account/auth.guard';
import {PagenotfoundComponent} from './components/pagenotfound/pagenotfound.component';
import {HomeComponent} from './components/home/home.component';
import {CompetitionManagerCommonsModule} from './commons/competition-manager-commons.module';
import {MenuService} from './components/main-menu/menu.service';
import {MiscEffects} from './effects/misc';
import {CommonBracketsInfoContainer} from './commons/classes/common-brackets-container.component';
import {CommonScheduleInfoContainerService} from './commons/classes/common-schedule-info-container.service';
import {SuiDropdownModule, SuiModule, SuiSidebarModule} from '@frontend-nx/ng2-semantic-ui';
import {DataProviderService} from "./service/data.provider.service";
import {SelectorsService} from "./service/selectors.service";
import {PictureUploadService} from "./service/picture.upload.service";

@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    PagenotfoundComponent,
    HomeComponent],
  imports: [
    CompetitionManagerCommonsModule,
    BrowserModule,
    BrowserAnimationsModule,
    SuiModule,
    SuiDropdownModule,
    SuiSidebarModule,
    // AvatarModule,
    RouterModule.forRoot(
      appRoutes
    ),
    HttpClientModule,
    StoreModule.forRoot(reducers, {metaReducers}),
    EffectsModule.forRoot([Effects, MiscEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production // Restrict extension to log-only mode
    })
  ],
  providers: [HttpClient,
    InfoService,
    PictureUploadService,
    DataProviderService,
    SelectorsService,
    MenuService,
    HttpAuthService,
    AccountService,
    SignUpGuard,
    AuthGuard,
    CommonBracketsInfoContainer,
    CommonScheduleInfoContainerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
