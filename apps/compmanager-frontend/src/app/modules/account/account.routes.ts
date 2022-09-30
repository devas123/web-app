import {Routes} from '@angular/router';
import {AccountRootComponent} from './components/account-root/account-root.component';
import {AccountInfoContainerComponent} from "./containers/account-info.container.component";

export const accountRoutes: Routes = [
  {
    path: '',
    component: AccountRootComponent,
    children: [
      {
        path: '',
        component: AccountInfoContainerComponent
      }
    ]
  },
];
