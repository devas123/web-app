import {Routes} from '@angular/router';
import {AcademySelectedResolver} from './academy-selected-resolver.service';
import {
  AcademiesRootContainerComponent
} from "./containers/academies-root-container/academies-root-container.component";
import {AcademyInfoContainerComponent} from "./containers/academy-info-container/academy-info-container.component";
import {AddAcademyContainerComponent} from "./containers/add-academy-container/add-academy-container.component";


export const academiesRoutes: Routes = [
  {path: '', component: AcademiesRootContainerComponent,
    children: [
      {
        path: ':id',
        component: AcademyInfoContainerComponent,
        resolve: {
          stateLoaded: AcademySelectedResolver
        },
      },
      {
        path: 'add',
        component: AddAcademyContainerComponent
      },
    ]
  },
];
