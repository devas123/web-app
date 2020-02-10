import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {appRoutes} from './main.routes';

import {AppComponent} from './app-component/app.component';
import {MainMenuComponent} from './components/main-menu/main-menu.component';
import {RouterModule} from '@angular/router';
import {AccountModule} from './modules/account/account.module';
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
import {NgxMdModule} from 'ngx-md';
import {AccountService} from './modules/account/service/account.service';
import {AccountEffects} from './modules/account/flux/effects';
import {AvatarModule} from 'ngx-avatar';
import {SignUpGuard} from './modules/account/components/authorization/sign-up.guard';
import {AuthGuard} from './modules/account/auth.guard';
import {PagenotfoundComponent} from './components/pagenotfound/pagenotfound.component';
import {HomeComponent} from './components/home/home.component';
import {CommonsModule} from './commons/commons.module';
import {HotkeyModule} from 'angular2-hotkeys';
import {SuiDropdownModule, SuiModule, SuiSidebarModule} from 'ng2-semantic';
import {MenuService} from './components/main-menu/menu.service';
import {MiscEffects} from './effects/misc';
import {CreateCategoryComponent} from './commons/components/create-category/create-category.component';

@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    PagenotfoundComponent,
    HomeComponent],
  imports: [
    CommonsModule,
    NgxMdModule.forRoot(),
    BrowserModule,
    BrowserAnimationsModule,
    SuiModule,
    SuiDropdownModule,
    SuiSidebarModule,
    AccountModule,
    AvatarModule,
    RouterModule.forRoot(
      appRoutes
    ),
    HttpClientModule,
    StoreModule.forRoot(reducers, {metaReducers}),
    EffectsModule.forRoot([Effects, AccountEffects, MiscEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production // Restrict extension to log-only mode
    }),
    HotkeyModule.forRoot()
  ],
  providers: [HttpClient,
    InfoService,
    MenuService,
    HttpAuthService,
    AccountService,
    SignUpGuard,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
