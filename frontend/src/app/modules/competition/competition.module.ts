import {NgModule} from '@angular/core';
import {EffectsModule} from '@ngrx/effects';
import {RegistrationService} from './service/registration.service';
import {CompetitorsEffects, FightsEffects} from './redux/effects';
import {RouterModule} from '@angular/router';
import {compRoutes} from './competition.routes';
import {SuiDimmerModule, SuiSelectModule, SuiSidebarModule, SuiTransitionModule} from '@devas123/ng2-semantic';
import {CompetitionStateService} from './service/competition.state.service';
import {StateResolver} from './state.resolver';
import {ReactiveFormsModule} from '@angular/forms';
import {NgxMdModule} from 'ngx-md';
import {CompetitionMainInfoComponent} from './components/competition-main-info/competition-main-info.component';
import {CompetitionDescriptionComponent} from './components/competition-main-info/competition-description/competition-description.component';

import {CommonsModule} from '../../commons/commons.module';
import {CommonModule} from '@angular/common';
import {BracketsContainerComponent} from './containers/brackets-container/brackets-container.component';
import {StoreModule} from '@ngrx/store';
import {competitionListReducer, featureKey} from './redux/reducers';
import {EventCardComponent} from './components/event-card/event-card.component';
import {EventListComponent} from './components/event-list/event-list.component';
import {EventCalendarComponent} from './components/event-calendar/event-calendar.component';
import {FightersDisplayContainerComponent} from './containers/fighters-display-container/fighters-display-container.component';
import {ScheduleContainerComponent} from './containers/schedule-container/schedule-container.component';
import {CategoryInfoContainerComponent} from './containers/category-info-container/category-info-container.component';

@NgModule({
  imports: [
    CommonsModule,
    CommonModule,
    StoreModule.forFeature(featureKey, competitionListReducer),
    EffectsModule.forFeature([CompetitorsEffects, FightsEffects]),
    RouterModule.forChild(compRoutes),
    SuiSidebarModule,
    ReactiveFormsModule,
    SuiTransitionModule,
    NgxMdModule,
    SuiSelectModule,
    SuiDimmerModule
  ],
  declarations: [
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
