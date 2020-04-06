import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {Route, RouterModule} from '@angular/router';
import {TestComponent} from './test/test.component';
import {SuiPopupModule} from '@frontend-nx/ng2-semantic-ui';

const routes: Route[] = [
  {
    path: '',
    component: TestComponent
  }
];

@NgModule({
  declarations: [AppComponent, TestComponent],
  imports: [
    SuiPopupModule,
    BrowserModule,
    RouterModule.forRoot(routes, {initialNavigation: 'enabled'})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class SandboxAppModule {}
