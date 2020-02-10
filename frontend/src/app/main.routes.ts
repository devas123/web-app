import {Routes} from '@angular/router';
import {AuthorizationComponent} from './modules/account/components/authorization/authorization.component';
import {SignUpGuard} from './modules/account/components/authorization/sign-up.guard';
import {PagenotfoundComponent} from './components/pagenotfound/pagenotfound.component';
import {HomeComponent} from './components/home/home.component';
import {AuthGuard} from './modules/account/auth.guard';

// @ts-ignore
export const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {
    path: 'events',
    loadChildren: () => import('./modules/competition/competition.module').then(mod => mod.CompetitionModule)
  },
  {
    path: 'login',
    component: AuthorizationComponent,
    canActivate: [SignUpGuard]
  },
  {
    path: 'eventmanager',
    loadChildren: () => import('./modules/event-manager/event-manager.module').then(mod => mod.EventManagerModule),
    canActivate: [AuthGuard],
    canLoad: [AuthGuard],
    canActivateChild: [AuthGuard]
  },
  {
    path: '**',
    component: PagenotfoundComponent
  }
];
