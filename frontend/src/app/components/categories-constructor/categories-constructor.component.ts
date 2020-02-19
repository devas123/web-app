import {Component, OnInit, ViewChild} from '@angular/core';
import {
  ComponentCommonMetadataProvider,
  EventManagerRouterEntryComponent
} from "../../modules/event-manager/containers/event-manager-container/common-classes";
import {select, Store} from "@ngrx/store";
import {AppState} from "../../reducers/global-reducers";
import {ActivatedRoute, Router} from "@angular/router";
import {Location} from "@angular/common";
import {MenuService} from "../main-menu/menu.service";
import {FormBuilder, FormGroup} from "@angular/forms";
import {ModalTemplate, SuiModalService, TemplateModalConfig} from "ng2-semantic";

export interface IContext {
  data:string;
}

@Component({
  selector: 'app-categories-constructor',
  templateUrl: './categories-constructor.component.html',
  styleUrls: ['./categories-constructor.component.scss']
})
export class CategoriesConstructorComponent extends EventManagerRouterEntryComponent implements OnInit {

  form: FormGroup;

  @ViewChild('modalTemplate',null)
  public modalTemplate:ModalTemplate<IContext, string, string>


  constructor(private fb: FormBuilder, store: Store<AppState>, private router: Router, private route: ActivatedRoute, private location: Location, menuService: MenuService,private modalService:SuiModalService) {
    super(store, <ComponentCommonMetadataProvider>{
      menu: [
        {
          name: 'Return',
          action: () => this.goback()
        }
      ],
    }, menuService);
  }

  ngOnInit() {
    this.form=this.fb.group({});

  }



  goback() {
    const path = this.location.path(false);
    this.router.navigateByUrl(path.slice(0, path.lastIndexOf('/'))).catch(reason => console.error(`Navigation failed: ${reason}`));
  }
}
