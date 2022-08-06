import {Component, OnDestroy} from '@angular/core';
import {
  CompetitionManagerModuleRouterEntryComponent,
  ComponentCommonMetadataProvider
} from '../../../../commons/directives/common-classes';
import {select, Store} from '@ngrx/store';
import {eventManagerGetSelectedEventName} from '../../redux/event-manager-reducers';
import {filter, map} from 'rxjs/operators';
import {HeaderDescription} from '../../../../commons/model/competition.model';
import {AppState} from '../../../../reducers/global-reducers';
import {MenuService} from '../../../../components/main-menu/menu.service';
import {ActivatedRoute, Router} from '@angular/router';
import {of} from 'rxjs';

type TabOption = 'template' | 'contacts';

@Component({
  selector: 'app-competition-info-editor-container',
  templateUrl: './competition-info-editor-container.component.html',
  styleUrls: ['./competition-info-editor-container.component.scss']
})
export class CompetitionInfoEditorContainerComponent extends CompetitionManagerModuleRouterEntryComponent implements OnDestroy {

  constructor(store: Store<AppState>, menuService: MenuService, private router: Router, private route: ActivatedRoute) {
    super(store, <ComponentCommonMetadataProvider>{
      header: store.pipe(select(eventManagerGetSelectedEventName), filter(name => !!name),
        map(name => (<HeaderDescription>{
          header: 'Info editor',
          subheader: name
        }))),
      menu: [
        {
          name: 'Edit info template',
          action: () => this.selectedTab = 'template',
          showCondition: () => of(this.selectedTab === 'contacts')
        },
        {
          name: 'Edit contacts',
          action: () => this.selectedTab = 'contacts',
          showCondition: () => of(this.selectedTab === 'template')
        },
        {
          name: 'Toggle preview',
          action: () => this.showTemplatePreview = !this.showTemplatePreview,
          showCondition: () => of(this.selectedTab === 'template')
        },
        {
          name: 'Return',
          action: () => this.goBack()
        }
      ]
    }, menuService);
  }

  selectedTab: TabOption = 'template';
  showTemplatePreview = true;

  goBack() {
    this.router.navigate(['..'], {relativeTo: this.route}).catch(console.error);
  }

}
