import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output, TemplateRef, ViewChild} from '@angular/core';
import {AddFighterComponent} from '../../../event-manager/components/add-fighter/add-fighter.component';
import {CategoryState, FightDescription} from "@frontend-nx/protobuf";

@Component({
  selector: 'cf-brackets-selectors',
  template: `
    <div class="ui basic segment">
      <sui-select class="selection"
                  [placeholder]="(category && formatter(category).substring(0, 18) + '...') || 'Select Category'"
                  (selectedOptionChange)="setCategoryId($event)"
                  [options]="categories"
                  [isSearchable]="true"
                  [isDisabled]="false"
                  [optionsFilter]="optionsFilter"
                  [optionFormatter]="formatter"
                  #select>
        <sui-select-option *ngFor="let option of select.filteredOptions"
                           [value]="option">
        </sui-select-option>
      </sui-select>
    </div>
    <div class="ui container" *ngIf="category === null && fightsAreLoading === false">
      <h4 class="ui header">Select category</h4>
    </div>
    <div class="ui container" *ngIf="fights === null && fightsAreLoading === false">
      <h4 class="ui header">No brackets for this category.</h4>
    </div>
  `,
  styleUrls: ['./brackets-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BracketsSelectorsComponent {


  @Input()
  category: CategoryState

  @Input()
  categories: CategoryState[]

  @Input()
  fightsAreLoading: boolean

  @Input()
  fights: FightDescription[]

  @Output()
  categorySelected = new EventEmitter<CategoryState>()

  @ViewChild('categorySelect', {static: true})
  categorySelect: TemplateRef<any>;

  constructor() {
  }

  optionsFilter = (options: CategoryState[], filterword: string) => options.filter(cat => cat.id && AddFighterComponent.displayCategory(cat.category).toLowerCase().includes(filterword.toLowerCase()));
  formatter = (option: CategoryState) => AddFighterComponent.displayCategory(option.category);

  setCategoryId(category: CategoryState) {
    this.categorySelected.next(category)
  }
}
