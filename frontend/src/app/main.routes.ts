import {Routes} from '@angular/router';
import {AuthorizationComponent} from './modules/account/components/authorization/authorization.component';
import {SignUpGuard} from './modules/account/components/authorization/sign-up.guard';
import {PagenotfoundComponent} from './components/pagenotfound/pagenotfound.component';
import {HomeComponent} from './components/home/home.component';
import {AuthGuard} from './modules/account/auth.guard';

export const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {
    path: 'events',
    loadChildren: './modules/events/events.module#EventsModule'
  },
  {
    path: 'login',
    component: AuthorizationComponent,
    canActivate: [SignUpGuard]
  },
  {
    path: 'eventmanager',
    loadChildren: './modules/event-manager/event-manager.module#EventManagerModule',
    canActivate: [AuthGuard],
    canLoad: [AuthGuard],
    canActivateChild: [AuthGuard]
  },
  {
    path: '**',
    component: PagenotfoundComponent
  }];
