import {Component, OnDestroy} from '@angular/core';
import {
  CompetitionManagerModuleRouterEntryComponent,
  ComponentCommonMetadataProvider
} from '../../../../commons/directives/common-classes';
import {select, Store} from '@ngrx/store';
import {eventManagerGetSelectedEventName} from '../../redux/event-manager-reducers';
import {filter, map} from 'rxjs/operators';
import {HeaderDescription} from '../../../../commons/model/competition.model';
import {AppState, getSelectedEventId} from '../../../../reducers/global-reducers';
import {MenuService} from '../../../../components/main-menu/menu.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Observable} from "rxjs";
import {
  eventManagerCompetitionImageLoaded,
  eventManagerCompetitionImageRemoved,
  eventManagerSaveCompetitionInfo
} from "../../redux/event-manager-actions";
import {
  ISaveCompetitionInfoTemplatePayload
} from "../../components/competition-info-template-editor/competition-info-template-editor.component";
import {InfoService} from "../../../../service/info.service";


@Component({
  selector: 'app-competition-info-editor-container',
  templateUrl: './competition-info-editor-container.component.html',
  styleUrls: ['./competition-info-editor-container.component.scss']
})
export class CompetitionInfoEditorContainerComponent extends CompetitionManagerModuleRouterEntryComponent implements OnDestroy {

  template$: Observable<string>;
  image$: Observable<string>;
  competitionId$: Observable<string>;

  constructor(store: Store<AppState>, menuService: MenuService, private router: Router, private route: ActivatedRoute) {
    super(store, <ComponentCommonMetadataProvider>{
      header: store.pipe(select(eventManagerGetSelectedEventName), filter(name => !!name),
        map(name => (<HeaderDescription>{
          header: 'Info editor',
          subheader: name
        }))),
      menu: [
        {
          name: 'Return',
          action: () => this.goBack()
        },
        {
          name: 'Toggle preview',
          action: () => this.showTemplatePreview = !this.showTemplatePreview,
        }
      ]
    }, menuService);
    this.template$ = menuService.dataProviderService.competitionInfoInterest$
    this.image$ = menuService.dataProviderService.competitionImageInterest$
    this.competitionId$ = this.store.pipe(select(getSelectedEventId));
  }

  showTemplatePreview = true;

  goBack() {
    this.router.navigate(['..'], {relativeTo: this.route}).catch(console.error);
  }

  saveTemplate(template: ISaveCompetitionInfoTemplatePayload) {
    this.store.dispatch(eventManagerSaveCompetitionInfo({
      infoTemplate: template.template,
      competitionId: template.competitionId
    }));
  }

  updateCompetitionImage(imageBytes: ArrayBuffer) {
    const imageBase64Promise = InfoService.encodeUint8ArrayAsBase64(new Uint8Array(imageBytes));
    imageBase64Promise.then(imageBase64 => this.store.dispatch(eventManagerCompetitionImageLoaded({image: imageBase64 as string})));
  }
  removeCompetitionImage() {
    this.store.dispatch(eventManagerCompetitionImageRemoved())
  }
}
