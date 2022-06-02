import {NgModule} from '@angular/core';
import {EffectsModule} from '@ngrx/effects';
import {RegistrationService} from './service/registration.service';
import {CompetitorsEffects} from './redux/effects';
import {RouterModule} from '@angular/router';
import {compRoutes} from './competition.routes';
import {SuiDimmerModule, SuiSelectModule, SuiSidebarModule, SuiTransitionModule} from '@frontend-nx/ng2-semantic-ui';
import {CompetitionStateService} from './service/competition.state.service';
import {StateResolver} from './state.resolver';
import {ReactiveFormsModule} from '@angular/forms';
import {CompetitionMainInfoComponent} from './components/competition-main-info/competition-main-info.component';
import {
  CompetitionDescriptionComponent
} from './components/competition-main-info/competition-description/competition-description.component';

import {CompetitionManagerCommonsModule} from '../../commons/competition-manager-commons.module';
import {CommonModule} from '@angular/common';
import {BracketsContainerComponent} from './containers/brackets-container/brackets-container.component';
import {EventCardComponent} from './components/event-card/event-card.component';
import {EventListComponent} from './components/event-list/event-list.component';
import {EventCalendarComponent} from './components/event-calendar/event-calendar.component';
import {
  FightersDisplayContainerComponent
} from './containers/fighters-display-container/fighters-display-container.component';
import {ScheduleContainerComponent} from './containers/schedule-container/schedule-container.component';
import {CategoryInfoContainerComponent} from './containers/category-info-container/category-info-container.component';
import {
  CompetitionMainInfoDisplayComponent
} from "./components/competition-main-info/competition-main-info-display.component";

@NgModule({
  imports: [
    CompetitionManagerCommonsModule,
    CommonModule,
    EffectsModule.forFeature([CompetitorsEffects]),
    RouterModule.forChild(compRoutes),
    SuiSidebarModule,
    ReactiveFormsModule,
    SuiTransitionModule,
    SuiSelectModule,
    SuiDimmerModule
  ],
  declarations: [
    CompetitionMainInfoDisplayComponent,
    CompetitionMainInfoComponent,
    CompetitionDescriptionComponent,
    BracketsContainerComponent,
    EventCardComponent, EventListComponent, EventCalendarComponent,
    FightersDisplayContainerComponent,
    ScheduleContainerComponent,
    CategoryInfoContainerComponent],
  providers: [RegistrationService, CompetitionStateService, StateResolver]
})
export class CompetitionModule {
}
