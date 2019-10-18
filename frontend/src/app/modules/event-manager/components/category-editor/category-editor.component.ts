import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Category, CategoryState} from '../../../../commons/model/competition.model';
import {CompetitionProperties} from '../../../../reducers';
import {eventManagerCreateFakeCompetitorsCommand} from '../../redux/event-manager-actions';


@Component({
  selector: 'app-category-editor',
  templateUrl: './category-editor.component.html',
  styleUrls: ['./category-editor.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CategoryEditorComponent implements OnInit {

  _allDefaultCategories: Category[];
  filteredCategories: Category[];

  searchStr: string;

  @Output()
  createCustomCategoryClicked = new EventEmitter<string>();
  @Output()
  addDefaultCategories = new EventEmitter<{ competitionId: string, category: Category }[]>();
  @Output()
  generateRandomFightersEvent: EventEmitter<any> = new EventEmitter<any>();

  @Input()
  selectedCategoryState: CategoryState;

  @Input()
  competition: CompetitionProperties;

  @Input()
  set searchString(value: string) {
    if (value) {
      const searchStr = value;
      this.filteredCategories = this.searchFilter(this._categories, searchStr);
      this.searchStr = searchStr;
    } else {
      this.filteredCategories = this._categories;
      this.searchStr = null;
    }
  }

  _defaultCategories: Category[];

  _categories: Category[];

  @Output()
  deleteCategoryEvent: EventEmitter<{ competitionId: string, category: Category }> = new EventEmitter<{ competitionId: string, category: Category }>();
  searchFilter = (options: Category[], filter: string) => {
    let filteredOptions = [...options];
    const filterParts = filter.split(/\W/);
    const hasAny = (str: string, searchStr) => str && str.startsWith(searchStr);

    filterParts.forEach((value) => {
      filteredOptions = filteredOptions.filter(cat => {
        return cat.id
          && (hasAny(cat.weight.id, value) || hasAny(cat.ageDivision.id, value) || hasAny(cat.beltType, value) || hasAny(cat.gender, value));
      });
    });

    return filteredOptions;
  };

  constructor() {
  }


  get defaultCategories() {
    if (!this._defaultCategories) {
      this._defaultCategories = [];
    }
    return this._defaultCategories;
  }

  @Input()
  set defaultCategories(value: Category[]) {
    if (value && value.length > 0) {
      if (this._categories && this._categories.length > 0) {
        const ids = this._categories.map(c => c.id);
        this._allDefaultCategories = value.filter(cat => {
          return ids.indexOf(cat.id) < 0;
        });
      } else {
        this._allDefaultCategories = value;
      }
    } else {
      this._allDefaultCategories = [];
    }
    this._defaultCategories = this._allDefaultCategories.slice(0, 50);
  }

  get categories() {
    return this._categories;
  }

  @Input()
  set categories(value: Category[]) {
    if (value && value.length > 0) {
      this._categories = value;
      if (this._defaultCategories && this._defaultCategories.length > 0) {
        const ids = this._categories.map(c => c.id);
        this._defaultCategories = this._defaultCategories.filter(cat => {
          return ids.indexOf(cat.id) < 0;
        });
      }
    } else {
      this._categories = [];
    }
    if (this.searchStr && this.searchStr.length > 0) {
      this.filteredCategories = this.searchFilter(this._categories, this.searchStr);
    } else {
      this.filteredCategories = this._categories;
    }
  }

  ngOnInit() {
  }

  generateRandomFighters(category: Category) {
    if (category) {
      this.generateRandomFightersEvent.next(eventManagerCreateFakeCompetitorsCommand(this.competition.id, category.id, 30, 20));
    }
  }


  deleteCategory(category: Category) {
    this.deleteCategoryEvent.next({competitionId: this.competition.id, category});
  }

  getCategoryId(category: Category) {
    return category.id;
  }

  // navigateBack() {
  //   this.location.back();
  // }
}
