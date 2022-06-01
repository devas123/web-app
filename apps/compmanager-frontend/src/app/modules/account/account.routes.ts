import {Routes} from '@angular/router';
import {AccountInfoComponent} from './components/account-info/account-info.component';
import {AccountRootComponent} from './components/account-root/account-root.component';
import {AuthGuard} from './auth.guard';
import {AccountInfoContainerComponent} from "./containers/account-info.container.component";

export const accountRoutes: Routes = [
  {
    path: 'user/:id',
    component: AccountRootComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    canLoad: [AuthGuard],
    children: [
      {
        path: '',
        component: AccountInfoContainerComponent
      }
    ]
  },
];
