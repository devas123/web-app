import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  AcademiesRootContainerComponent
} from './containers/academies-root-container/academies-root-container.component';
import {AddAcademyContainerComponent} from './containers/add-academy-container/add-academy-container.component';
import {
  AcademiesListContainerComponent
} from './containers/academies-list-container/academies-list-container.component';
import {AcademyInfoContainerComponent} from './containers/academy-info-container/academy-info-container.component';
import {AcademyInfoComponentComponent} from './components/academy-info-component/academy-info-component.component';
import {
  AcademiesListComponentComponent
} from './components/academies-list-component/academies-list-component.component';
import {AddAcademyComponentComponent} from './components/add-academy-component/add-academy-component.component';
import {StoreModule} from "@ngrx/store";
import {academiesFeatureKey} from "./redux/state";
import {academyListReducer} from "./redux/reducers";
import {RouterModule} from "@angular/router";
import {academiesRoutes} from "./academies.routes";
import {AcademySelectedResolver} from "./academy-selected-resolver.service";

@NgModule({

  declarations: [
    AcademiesRootContainerComponent,
    AddAcademyContainerComponent,
    AcademiesListContainerComponent,
    AcademyInfoContainerComponent,
    AcademyInfoComponentComponent,
    AcademiesListComponentComponent,
    AddAcademyComponentComponent,
  ],
  imports: [CommonModule,
    StoreModule.forFeature(academiesFeatureKey, academyListReducer),
    RouterModule.forChild(academiesRoutes),
  ],
  providers: [AcademySelectedResolver]
})
export class AcademiesModule {}
