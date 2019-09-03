import {NgModule} from '@angular/core';
import {EffectsModule} from '@ngrx/effects';
import {RegistrationService} from './service/registration.service';
import {CompetitorsEffects, FightsEffects} from './effects';
import {RouterModule} from '@angular/router';
import {compRoutes} from './competition.routes';
import {SuiSidebarModule} from 'ng2-semantic';
import {CompetitionStateService} from './service/competition.state.service';
import {StateResolver} from './state.resolver';
import {ReactiveFormsModule} from '@angular/forms';
import {TemplateEffects} from './effects/template';
import {NgxMdModule} from 'ngx-md';
import {MiscEffects} from './effects/misc';
import {CompetitionInfoComponent} from './containers/competition-info/competition-info.component';
import {CompetitionMainInfoComponent} from './components/competition-main-info/competition-main-info.component';
import {CompetitionDescriptionComponent} from './components/competition-main-info/competition-description/competition-description.component';
import {CompetitionDivisionsComponent} from './components/competition-main-info/competition-divisions/competition-divisions.component';
import {CommonsModule} from '../../commons/commons.module';
import {CommonModule} from '@angular/common';

@NgModule({
  imports: [
    CommonsModule,
    CommonModule,
    EffectsModule.forFeature([CompetitorsEffects, MiscEffects, FightsEffects, TemplateEffects]),
    RouterModule.forChild(compRoutes),
    SuiSidebarModule,
    ReactiveFormsModule,
    NgxMdModule
  ],
  declarations: [CompetitionInfoComponent, CompetitionMainInfoComponent, CompetitionDescriptionComponent, CompetitionDivisionsComponent],
  providers: [RegistrationService, CompetitionStateService, StateResolver]
})
export class CompetitionModule {
}
