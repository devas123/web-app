import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {
  categoryFilter,
  defaultRestrictionFormatter
} from '../../commons/model/competition.model';
import {eventManagerCreateFakeCompetitorsCommand} from '../../modules/event-manager/redux/event-manager-actions';
import {AddFighterComponent} from '../../modules/event-manager/components/add-fighter/add-fighter.component';
import {CategoryDescriptor, CompetitionProperties} from "@frontend-nx/protobuf";


@Component({
  selector: 'app-category-editor',
  templateUrl: './category-editor.component.html',
  styleUrls: ['./category-editor.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CategoryEditorComponent  {

  @Input()
  editMode = true;

  @Input()
  detailedView = true;

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

  constructor() {
  }


  get defaultCategories() {
    if (!this._defaultCategories) {
      this._defaultCategories = [];
    }
    return this._defaultCategories;
  }

  @Input()
  set defaultCategories(value: CategoryDescriptor[]) {
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
  set categories(value: CategoryDescriptor[]) {
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

  _allDefaultCategories: CategoryDescriptor[];
  filteredCategories: CategoryDescriptor[];

  searchStr: string;

  @Output()
  createCustomCategoryClicked = new EventEmitter<string>();
  @Output()
  addDefaultCategories = new EventEmitter<{ competitionId: string, category: CategoryDescriptor }[]>();
  @Output()
  generateRandomFightersEvent: EventEmitter<any> = new EventEmitter<any>();

  @Input()
  competition: CompetitionProperties;

  _defaultCategories: CategoryDescriptor[];

  _categories: CategoryDescriptor[];

  @Output()
  deleteCategoryEvent: EventEmitter<{ competitionId: string, category: CategoryDescriptor }> = new EventEmitter<{ competitionId: string, category: CategoryDescriptor }>();

  @Output()
  registrationStatusToggled = new EventEmitter<{ categoryId: string, newStatus: boolean }>();
  @Output()
  categoryEditorClicked = new EventEmitter<string>();

  @Output()
  categoryHeaderClicked = new EventEmitter<string>();
  displayCategory = AddFighterComponent.displayCategory;
  displayRestriction = defaultRestrictionFormatter(true);

  searchFilter = (options: CategoryDescriptor[], filter: string) => {
    let filteredOptions = [...options];
    const filterParts = filter.split(/\W/);

    filterParts.forEach((value) => {
      filteredOptions = filteredOptions.filter(categoryFilter(value));
    });

    return filteredOptions;
  };

  generateRandomFighters(category: CategoryDescriptor) {
    if (category) {
      this.generateRandomFightersEvent.next(eventManagerCreateFakeCompetitorsCommand(this.competition.id, category.id, 10, 20));
    }
  }


  deleteCategory(category: CategoryDescriptor) {
    this.deleteCategoryEvent.next({competitionId: this.competition.id, category});
  }

  getCategoryId(category: CategoryDescriptor) {
    return category.id;
  }

  toggleRegistrationOpen(category: CategoryDescriptor) {
    this.registrationStatusToggled.next({categoryId: category.id, newStatus: !category.registrationOpen});
  }

  handleCategoryEditorClicked(categoryId: string) {
    this.categoryEditorClicked.next(categoryId);
  }

  handleCategoryHeaderClicked(categoryId: string) {
    this.categoryHeaderClicked.next(categoryId);
  }
}
