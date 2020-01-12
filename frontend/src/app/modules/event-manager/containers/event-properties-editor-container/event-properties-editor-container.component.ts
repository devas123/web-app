import {Component, OnDestroy, OnInit} from '@angular/core';
import {AppState, CompetitionProperties} from '../../../../reducers';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {eventManagerGetSelectedEvent, eventManagerGetSelectedEventName} from '../../redux/event-manager-reducers';
import {eventManagerHeaderClear, updateCompetitionProperties} from '../../redux/event-manager-actions';
import {ComponentCommonMetadataProvider, EventManagerRouterEntryComponent} from '../event-manager-container/common-classes';
import {filter, map} from 'rxjs/operators';
import {Location} from '@angular/common';
import {ActivatedRoute, Router} from '@angular/router';
import {MenuService} from '../../../../components/main-menu/menu.service';
import {HeaderDescription} from '../../../../commons/model/competition.model';

@Component({
  selector: 'app-event-properties-editor-container',
  template: '<app-event-properties-editor (propertiesUpdated)="updateProperties($event)" [properties]="competitionProperties$ | async"></app-event-properties-editor>'
})
export class EventPropertiesEditorContainerComponent extends EventManagerRouterEntryComponent implements OnInit, OnDestroy {

  competitionProperties$: Observable<CompetitionProperties>;


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
          name: 'Registration Info',
          action: () => this.navigate('reg_info/')
        }
      ]
    }, menuService);
    this.competitionProperties$ = store.pipe(select(eventManagerGetSelectedEvent));
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    this.store.dispatch(eventManagerHeaderClear);
    this.menuService.clear();
  }

  updateProperties(properties: CompetitionProperties) {
    this.store.dispatch(updateCompetitionProperties(properties));
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
