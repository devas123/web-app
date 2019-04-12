import {NgModule} from '@angular/core';
import {MyEventsComponent} from './containers/my-events/my-events.component';
import {RouterModule, Routes} from '@angular/router';
import {CreateEventComponent} from './components/create-event/create-event.component';
import {CategoryEditorContainerComponent} from './containers/category-editor-container/category-editor-container.component';
import {EventManagerContainerComponent} from './containers/event-manager-container/event-manager-container.component';
import {CreateCategoryComponent} from './components/create-category/create-category.component';
import {EventPropertiesEditorContainerComponent} from './containers/event-properties-editor-container/event-properties-editor-container.component';
import {EventContainerComponent} from './containers/event-container/event-container.component';
import {FightersEditorContainerComponent} from './containers/fighters-editor-container/fighters-editor-container.component';
import {CategoryContainerComponent} from './containers/category-container/category-container.component';
import {CategorySummaryContainerComponent} from './containers/category-summary-container/category-summary-container.component';
import {BracketsEditorContainerComponent} from './containers/brackets-editor-container/brackets-editor-container.component';
import {ScheduleEditorContainerComponent} from './containers/schedule-editor-container/schedule-editor-container.component';
import {FighterProfileContainerComponent} from './containers/fighter-profile-container/fighter-profile-container.component';
import {FightersContainerComponent} from './containers/fighters-container/fighters-container.component';
import {AuthGuard} from '../account/auth.guard';
import {DashboardContainerComponent} from './containers/dashboard-container/dashboard-container.component';
import {MatsOverviewContainerComponent} from './containers/mats-overview-container/mats-overview-container.component';
import {MatManagementContainerComponent} from './containers/mat-management-container/mat-management-container.component';
import {ScoreboardContainerComponent} from './containers/scoreboard-container/scoreboard-container.component';
import {PeriodsManagementContainerComponent} from './containers/periods-management-container/periods-management-container.component';
import {MatDetailsContainerComponent} from './containers/mat-details-container/mat-details-container.component';
import {PeriodManagementContainerComponent} from './containers/period-management-container/period-management-container.component';
import {RegistrationInfoEditorContainerComponent} from './containers/registration-info-editor-container/registration-info-editor-container.component';

export const eventManagerRoutes: Routes = [
  {
    path: '',
    component: EventManagerContainerComponent,
    children: [
      {
        path: '',
        component: MyEventsComponent
      },
      {
        path: 'create',
        component: CreateEventComponent
      },
      {
        path: ':competitionId',
        component: EventContainerComponent,
        children: [
          {
            path: '',
            component: EventPropertiesEditorContainerComponent
          },
          {
            path: 'reg_info',
            component: RegistrationInfoEditorContainerComponent
          },
          {
            path: 'brackets',
            component: BracketsEditorContainerComponent
          },
          {
            path: 'schedule',
            component: ScheduleEditorContainerComponent
          },
          {
            path: 'fighters',
            component: FightersContainerComponent,
            children: [
              {
                path: '',
                component: FightersEditorContainerComponent,
              },
              {
                path: ':fighterId',
                component: FighterProfileContainerComponent
              }
            ]
          },
          {
            path: 'categories',
            component: CategoryEditorContainerComponent
          },
          {
            path: 'categories/create',
            component: CreateCategoryComponent
          },
          {
            path: 'categories/:id',
            component: CategoryContainerComponent,
            children: [
              {
                path: '',
                component: CategorySummaryContainerComponent
              }
            ]
          },
          {
            path: 'dashboard',
            component: DashboardContainerComponent,
            canActivate: [AuthGuard],
            canLoad: [AuthGuard],
            canActivateChild: [AuthGuard],
            children: [
              {
                path: '',
                component: PeriodsManagementContainerComponent
              },
              {
                path: ':periodId',
                component: PeriodManagementContainerComponent,
                children: [
                  {
                    path: '',
                    component: MatsOverviewContainerComponent
                  },
                  {
                    path: ':matId',
                    component: MatManagementContainerComponent,
                    children: [
                      {
                        path: '',
                        component: MatDetailsContainerComponent,
                      },
                      {
                        path: 'scoreboard',
                        component: ScoreboardContainerComponent
                      },
                      {
                        path: 'scoreboard/:fightId',
                        component: ScoreboardContainerComponent
                      }
                    ]
                  }
                ]

              }
            ]
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(eventManagerRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class EventManagerRouterModule {
}
