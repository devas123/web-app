import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {CompetitionProperties} from '../../../../reducers';
import {ComponentModalConfig, ModalSize, SuiModal} from 'ng2-semantic';
import {Category} from '../../../../commons/model/competition.model';
import {AddFighterComponent} from '../add-fighter/add-fighter.component';
import {Observable} from 'rxjs';
import {filter, map, take, tap, toArray} from 'rxjs/operators';

export interface ISelecetDefaultCategoriesContext {
  defaultCategories: Observable<Category[]>;
  competition: CompetitionProperties;
}

export interface ISelectCategoriesResult {
  categoriesToAdd: Category[];
}

export class SelectCategoriesModal extends ComponentModalConfig<ISelecetDefaultCategoriesContext, ISelectCategoriesResult, void> {
  constructor(defaultCategories: Observable<Category[]>, competition: CompetitionProperties, size = ModalSize.Small) {
    super(SelectCategoriesModalComponent, {defaultCategories, competition});

    this.isClosable = true;
    this.transitionDuration = 200;
    this.size = size;
  }
}

@Component({
  selector: 'app-select-category-form',
  template: `
      <div class="header">Select categories to add...</div>
      <div class="content">
          <sui-multi-select
                  (selectedOptionsChange)="setCategoriesToAdd($event)"
                  [isSearchable]="true"
                  [isDisabled]="false"
                  [optionsLookup]="optionsLookup"
                  [optionFormatter]="formatter"
                  [maxSelected]="10"
                  placeholder="Select categories to add"
                  icon="list"
                  #select>
              <div class="ui icon search input">
                  <i class="search icon"></i>
                  <input suiSelectSearch type="text" placeholder="Search options...">
              </div>
              <div class="divider"></div>
              <div class="header">
                  <i class="list icon"></i>
                  Options
              </div>
              <div class="scrolling menu">
                  <sui-select-option *ngFor="let o of select.filteredOptions" [value]="o"></sui-select-option>
              </div>
          </sui-multi-select>
      </div>
      <div class="actions">
          <button class="ui red button" (click)="modal.deny(undefined)">Cancel</button>
          <button class="ui green button" [disabled]="!(!!categoriesToAdd && !!modal?.context?.competition)" (click)="approve()" autofocus>Add selected
          </button>
      </div>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SelectCategoriesModalComponent implements OnInit {

  private categoriesToAdd: Category[];

  setCategoriesToAdd(categories: Category[]) {
    this.categoriesToAdd = categories;
  }

  optionsLookup = async (query: string, initial?: Category[]) => {
    const hasAny = (str: string, searchStr) => str && str.startsWith(searchStr);
    return await this.modal.context.defaultCategories.pipe(
      take(1),
      map(c => c.filter(cat => {
        const filterParts = query.split(/\W/);
        return filterParts.map((value) => cat.id && (hasAny(cat.weight.id, value) || hasAny(cat.ageDivision.id, value) || hasAny(cat.beltType, value) || hasAny(cat.gender, value)))
          .reduce((previousValue, currentValue) => previousValue || currentValue);
      }))).toPromise();
  };

  formatter = (option: Category) => AddFighterComponent.displayCategory(option);

  approve() {
    this.modal.approve({categoriesToAdd: this.categoriesToAdd});
  }


  constructor(private modal: SuiModal<ISelecetDefaultCategoriesContext, ISelectCategoriesResult, void>) {
  }

  ngOnInit() {
  }
}
