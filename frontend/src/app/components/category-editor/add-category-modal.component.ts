import {ChangeDetectionStrategy, Component, OnInit, ViewChild} from '@angular/core';
import {ComponentModalConfig, ModalSize, SuiModal} from "ng2-semantic";
import {Category, RangeRestriction, ValueRestriction} from "../../commons/model/competition.model";
import {CreateCategoryComponent} from "../../modules/event-manager/components/create-category/create-category.component";

interface ICreateCategoryModalContext {
  category: Category;
}


export class CreateCategoryModal extends ComponentModalConfig<ICreateCategoryModalContext, string, string> {
  constructor(category: Category,size = ModalSize.Small) {
    super(AddCategoryModalComponent, {category});
    this.isClosable = false;
    this.transitionDuration = 200;
    this.size = size;
  }
}

@Component({
  selector: 'app-add-category-modal',
  template: `
      <div class="header">Create category</div>
      <div class="content">
          <app-create-category [category]="modal.context.category" [createMode]="true"></app-create-category>
      </div>
      <div class="actions">
          <button class="ui red button" (click)="modal.deny('')">Cancel</button>
          <button class="ui green button" [disabled]="(childComponent._form.touched || childComponent._form.dirty) && childComponent._form.invalid" (click)="test()" autofocus>OK</button>
      </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddCategoryModalComponent implements OnInit {

  @ViewChild(CreateCategoryComponent,null)
  private childComponent: CreateCategoryComponent;

  constructor(public modal: SuiModal<ICreateCategoryModalContext, string, string>) {
  }

  test(){
    this.childComponent.submitForm();
    this.modal.approve('');
  }


  ngOnInit() {
  }

}
