import {Routes} from '@angular/router';
import {PagenotfoundComponent} from './components/pagenotfound/pagenotfound.component';
import {HomeComponent} from './components/home/home.component';
import {AuthGuard} from './modules/authorization/auth.guard';
import {SignUpGuard} from "./modules/authorization/sign-up.guard";

// @ts-ignore
export const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {
    path: 'academies',
    loadChildren: () => import('./modules/academies/academies.module').then(mod => mod.AcademiesModule)
  },
  {
    path: 'events',
    loadChildren: () => import('./modules/competition/competition.module').then(mod => mod.CompetitionModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./modules/authorization/authorization.module').then(mod => mod.AuthorizationModule),
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
    path: 'user/:id',
    loadChildren: () => import('./modules/account/account.module').then(mod => mod.AccountModule),
    canActivate: [AuthGuard],
    canLoad: [AuthGuard],
    canActivateChild: [AuthGuard]
  },
  {
    path: '**',
    component: PagenotfoundComponent
  }];
