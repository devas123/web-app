import {NgModule} from '@angular/core';
import {EffectsModule} from '@ngrx/effects';
import {RegistrationService} from './service/registration.service';
import {CompetitorsEffects, FightsEffects} from './redux/effects';
import {RouterModule} from '@angular/router';
import {compRoutes} from './competition.routes';
import {SuiDimmerModule, SuiSelectModule, SuiSidebarModule, SuiTransitionModule} from 'ng2-semantic';
import {CompetitionStateService} from './service/competition.state.service';
import {StateResolver} from './state.resolver';
import {ReactiveFormsModule} from '@angular/forms';
import {TemplateEffects} from './redux/effects/template';
import {NgxMdModule} from 'ngx-md';
import {MiscEffects} from './redux/effects/misc';
import {CompetitionInfoComponent} from './containers/competition-info/competition-info.component';
import {CompetitionMainInfoComponent} from './components/competition-main-info/competition-main-info.component';
import {CompetitionDescriptionComponent} from './components/competition-main-info/competition-description/competition-description.component';
import {CompetitionDivisionsComponent} from './components/competition-main-info/competition-divisions/competition-divisions.component';
import {CommonsModule} from '../../commons/commons.module';
import {CommonModule} from '@angular/common';
import {BracketsContainerComponent} from './containers/brackets-container/brackets-container.component';
import {StoreModule} from '@ngrx/store';
import {competitionListReducer, featureKey} from './redux/reducers';
import {EventCardComponent} from './components/event-card/event-card.component';
import {EventListComponent} from './components/event-list/event-list.component';
import {EventCalendarComponent} from './components/event-calendar/event-calendar.component';

@NgModule({
    imports: [
        CommonsModule,
        CommonModule,
        StoreModule.forFeature(featureKey, competitionListReducer),
        EffectsModule.forFeature([CompetitorsEffects, MiscEffects, FightsEffects, TemplateEffects]),
        RouterModule.forChild(compRoutes),
        SuiSidebarModule,
        ReactiveFormsModule,
        SuiTransitionModule,
        NgxMdModule,
        SuiSelectModule,
        SuiDimmerModule
    ],
    declarations: [CompetitionInfoComponent,
        CompetitionMainInfoComponent,
        CompetitionDescriptionComponent,
        CompetitionDivisionsComponent,
        BracketsContainerComponent,
        EventCardComponent, EventListComponent, EventCalendarComponent],
    providers: [RegistrationService, CompetitionStateService, StateResolver]
})
export class CompetitionModule {
}
