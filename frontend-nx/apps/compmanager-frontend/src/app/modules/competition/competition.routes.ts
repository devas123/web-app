import {Routes} from '@angular/router';
import {StateResolver} from './state.resolver';
import {EventCalendarComponent} from './components/event-calendar/event-calendar.component';
import {BracketsContainerComponent} from './containers/brackets-container/brackets-container.component';
import {FightersContainerComponent} from '../../components/fighters-container/fighters-container.component';
import {FightersDisplayContainerComponent} from './containers/fighters-display-container/fighters-display-container.component';
import {CompetitionMainInfoComponent} from './components/competition-main-info/competition-main-info.component';
import {ScheduleContainerComponent} from './containers/schedule-container/schedule-container.component';
import {CompetitionDescriptionComponent} from './components/competition-main-info/competition-description/competition-description.component';
import {CategoryInfoContainerComponent} from './containers/category-info-container/category-info-container.component';


export const compRoutes: Routes = [
  {path: '', component: EventCalendarComponent},
  {
    path: ':id',
    component: CompetitionMainInfoComponent,
    resolve: {
      stateLoaded: StateResolver
    },
    children: [
      {
        path: 'info',
        component: CompetitionDescriptionComponent
      },
      {
        path: 'categories',
        component: CategoryInfoContainerComponent
      },
      {
        path: 'brackets',
        component: BracketsContainerComponent
      },
      {
        path: 'schedule',
        component: ScheduleContainerComponent
      },
      {
        path: 'participants',
        component: FightersContainerComponent,
        children: [
          {
            path: '',
            component: FightersDisplayContainerComponent
          }
        ]
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'info'
      }
    ]
  }
];
