import {Routes} from '@angular/router';
import {StateResolver} from './state.resolver';
import {CompetitionInfoComponent} from './containers/competition-info/competition-info.component';


export const compRoutes: Routes = [
  {
    path: '',
    component: CompetitionInfoComponent,
    resolve: {
      stateLoaded: StateResolver
    },
    children: [
      {
        path: 'about',
        pathMatch: 'full',
        redirectTo: ''
      }
      // {
      //   path: 'scoreboard',
      //   component: ScoreboardComponent,
      // },
      // {
      //   path: 'absolute',
      //   component: AbsoluteComponent,
      // },
      // {
      //   path: 'brackets',
      //   loadChildren: './brackets-manager/brackets.manager.module#BracketsManagerModule',
      //   canLoad: [AuthGuard],
      //   canActivate: [AuthGuard]
      // },
      // {
      //   path: 'dashboard',
      //   loadChildren: './dashboard/dashboard.module#DashboardModule',
      //   data: {preload: false},
      //   canLoad: [AuthGuard, StartedGuard],
      //   canActivate: [AuthGuard, StartedGuard]
      // }
    ]
  }
];
