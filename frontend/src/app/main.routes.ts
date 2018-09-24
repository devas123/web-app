import {Routes} from '@angular/router';
import {AuthorizationComponent} from './modules/account/components/authorization/authorization.component';
import {SignUpGuard} from './modules/account/components/authorization/sign-up.guard';
import {PagenotfoundComponent} from './components/pagenotfound/pagenotfound.component';
import {HomeComponent} from './components/home/home.component';

export const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {
    path: 'events',
    loadChildren: './modules/events/events.module#EventsModule',
    data: {preload: false}
  },
  {
    path: 'login',
    component: AuthorizationComponent,
    canActivate: [SignUpGuard]
  },
  {
    path: '**',
    component: PagenotfoundComponent
  }];
