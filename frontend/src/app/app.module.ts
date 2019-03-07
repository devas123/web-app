import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {appRoutes} from './main.routes';

import {AppComponent} from './app-component/app.component';
import {MainMenuComponent} from './components/main-menu/main-menu.component';
import {SuiDropdownModule, SuiModule} from 'ng2-semantic-ui';
import {RouterModule} from '@angular/router';
import {AccountModule} from './modules/account/account.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {InfoService} from './service/info.service';
import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';
import {Effects} from './effects/effects';
import {metaReducers, reducers} from './reducers';
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
import {NgDragDropModule} from './modules/dragdrop/ng-drag-drop.module';
import {HotkeyModule} from 'angular2-hotkeys';


@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    PagenotfoundComponent,
    HomeComponent
  ],
  imports: [
    NgDragDropModule.forRoot(),
    CommonsModule,
    NgxMdModule.forRoot(),
    BrowserModule,
    BrowserAnimationsModule,
    SuiModule,
    SuiDropdownModule,
    AccountModule,
    AvatarModule,
    RouterModule.forRoot(
      appRoutes
    ),
    HttpClientModule,
    StoreModule.forRoot(reducers, {metaReducers}),
    EffectsModule.forRoot([Effects, AccountEffects]),
    // StoreRouterConnectingModule.forRoot({
    //   stateKey: 'router',
    // }),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production // Restrict extension to log-only mode
    }),
    HotkeyModule.forRoot()
  ],
  providers: [HttpClient,
    InfoService,
    HttpAuthService,
    AccountService,
    SignUpGuard,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
