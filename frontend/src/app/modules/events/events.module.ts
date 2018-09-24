import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EventCardComponent} from './components/event-card/event-card.component';
import {EventListComponent} from './components/event-list/event-list.component';
import {RouterModule, Routes} from '@angular/router';
import {EventCalendarComponent} from './components/event-calendar/event-calendar.component';
import {SuiTransitionModule} from 'ng2-semantic-ui';
import {CommonsModule} from '../../commons/commons.module';

export const routes: Routes =
  [
    {path: '', component: EventCalendarComponent},
    {
      path: ':id',
      loadChildren: '../competition/competition.module#CompetitionModule',
      data: {preload: false}
    }
  ];


@NgModule({
  imports: [
    CommonModule,
    CommonsModule,
    RouterModule.forChild(
      routes
    ),
    SuiTransitionModule
  ],
  declarations: [EventCardComponent, EventListComponent, EventCalendarComponent]
})
export class EventsModule {
}
