import {Component, OnDestroy} from '@angular/core';
import {AppState, getSelectedEventProperties,} from '../../../../reducers/global-reducers';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {
  eventManagerGetSelectedEventName,
  eventManagerGetSelectedEventRegistrationInfo
} from '../../redux/event-manager-reducers';
import {eventManagerHeaderClear, updateCompetitionProperties} from '../../redux/event-manager-actions';
import {
  CompetitionManagerModuleRouterEntryComponent,
  ComponentCommonMetadataProvider
} from '../../../../commons/directives/common-classes';
import {filter, map} from 'rxjs/operators';
import {Location} from '@angular/common';
import {ActivatedRoute, Router} from '@angular/router';
import {MenuService} from '../../../../components/main-menu/menu.service';
import {HeaderDescription} from '../../../../commons/model/competition.model';
import {CompetitionProperties, CompetitionStatus, RegistrationInfo} from "@frontend-nx/protobuf";
import {availableTimeZones} from "../../../../reducers/compmanager-utils";

@Component({
  template: `<app-event-properties-editor (propertiesUpdated)="updateProperties($event)"
                                          [registrationInfo]="registrationInfo$ | async"
                                          [statusOptions]="statusOptions"
                                          [timeZones]="timeZones"
                                          [properties]="competitionProperties$ | async"></app-event-properties-editor>`
})
export class EventPropertiesEditorContainerComponent extends CompetitionManagerModuleRouterEntryComponent implements  OnDestroy {

  competitionProperties$: Observable<CompetitionProperties>;
  registrationInfo$: Observable<RegistrationInfo>;
  statusOptions = Object.values(CompetitionStatus);
  timeZones = availableTimeZones();



  constructor(store: Store<AppState>, private location: Location, private router: Router, private route: ActivatedRoute, menuService: MenuService) {
    super(store, <ComponentCommonMetadataProvider>{
      header: store.pipe(select(eventManagerGetSelectedEventName), filter(name => !!name),
        map(name => (<HeaderDescription>{
          header: 'Overview',
          subheader: name
        }))),
      menu: [
        {
          name: 'Return',
          action: () => this.navigateBack()
        },
        {
          name: 'Categories',
          action: () => this.navigate('categories/')
        },
        {
          name: 'Fighters',
          action: () => this.navigate('fighters/')
        },
        {
          name: 'Brackets',
          action: () => this.navigate('brackets/')
        },
        {
          name: 'Schedule',
          action: () => this.navigate('schedule/')
        },
        {
          name: 'Dashboard',
          action: () => this.navigate('dashboard/')
        },
        {
          name: 'Registration info',
          action: () => this.navigate('reg_info/')
        },
        {
          name: 'Competition info',
          action: () => this.navigate('about')
        }
      ]
    }, menuService);
    this.competitionProperties$ = store.pipe(select(getSelectedEventProperties));
    this.registrationInfo$ = store.pipe(select(eventManagerGetSelectedEventRegistrationInfo));
  }

  ngOnDestroy(): void {
    this.store.dispatch(eventManagerHeaderClear);
    this.menuService.clear();
  }

  updateProperties(properties: CompetitionProperties) {
    this.store.dispatch(updateCompetitionProperties({competitionProperties: properties, competitionId: properties.id }));
  }

  navigateBack() {
    const path = this.location.path(false);
    const url = path.slice(0, path.lastIndexOf('/'));
    this.router.navigateByUrl(url).catch(err => console.log(`Error while navigating to ${url}: ${err}`));
  }

  navigate(url: string) {
    this.router.navigate([url], {relativeTo: this.route}).catch(err => console.log(`Error while navigating to ${url}: ${err}`));
  }

}
