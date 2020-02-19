import {Component, OnDestroy, OnInit} from '@angular/core';
import {
  ComponentCommonMetadataProvider,
  EventManagerRouterEntryComponent
} from '../event-manager-container/common-classes';
import {select, Store} from '@ngrx/store';
import {filter, map} from 'rxjs/operators';
import {HeaderDescription} from '../../../../commons/model/competition.model';
import {AppState} from '../../../../reducers/global-reducers';
import {MenuService} from '../../../../components/main-menu/menu.service';
import {ActivatedRoute, Router} from '@angular/router';
import {of} from 'rxjs';
import {selectedEvent} from "../../redux/event-manager-reducers";

type TabOption = 'template' | 'contacts';

@Component({
  selector: 'app-competition-info-editor-container',
  templateUrl: './competition-info-editor-container.component.html',
  styleUrls: ['./competition-info-editor-container.component.scss']
})
export class CompetitionInfoEditorContainerComponent extends EventManagerRouterEntryComponent implements OnInit, OnDestroy {

  constructor(store: Store<AppState>, menuService: MenuService, private router: Router, private route: ActivatedRoute) {
    super(store, <ComponentCommonMetadataProvider>{
      header: store.pipe(select(selectedEvent.name()), filter(name => !!name),
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
          name: 'Toggle editor',
          action: () => this.showTemplateEditor = !this.showTemplateEditor,
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
  showTemplateEditor = true;
  ngOnInit() {
  }

  goBack() {
    this.router.navigate(['..'], {relativeTo: this.route}).catch(console.error);
  }

}
