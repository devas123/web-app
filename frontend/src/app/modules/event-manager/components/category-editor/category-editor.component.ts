import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {Category, CategoryState} from '../../../../commons/model/competition.model';
import {CompetitionProperties} from '../../../../reducers';
import {AddFighterComponent} from '../add-fighter/add-fighter.component';
import {SuiMultiSelect} from 'ng2-semantic-ui/dist/modules/select/components/multi-select';
import {IContext} from '../schedule-editor/schedule-editor.component';
import {ModalTemplate, SuiModalService, TemplateModalConfig} from 'ng2-semantic-ui';
import {eventManagerCreateFakeCompetitorsCommand} from '../../redux/event-manager-actions';


@Component({
  selector: 'app-category-editor',
  templateUrl: './category-editor.component.html',
  styleUrls: ['./category-editor.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CategoryEditorComponent implements OnInit {

  _allDefaultCategories: Category[];
  filteredCategories: Category[];
  searchStr;
  @Output()
  createCustomCategoryClicked = new EventEmitter<string>();
  @Output()
  addDefaultCategories = new EventEmitter<Category[]>();
  @Output()
  generateRandomFightersEvent: EventEmitter<any> = new EventEmitter<any>();
  @ViewChild('select')
  select: SuiMultiSelect<any, any>;

  @Input()
  selectedCategoryState: CategoryState;

  @Input()
  competition: CompetitionProperties;
  @ViewChild('modalTemplate')
  public modalTemplate: ModalTemplate<IContext, string, string>;
  categoriesToAdd: Category[];

  _defaultCategories: Category[];

  _categories: Category[];

  @Output()
  deleteCategoryEvent: EventEmitter<Category> = new EventEmitter<Category>();
  searchFilter = (options: Category[], filter: string) => {
    let filteredOptions = [...options];
    const filterParts = filter.split(/\W/);
    const hasAny = (str: string, searchStr) => str && str.startsWith(searchStr);

    filterParts.forEach((value) => {
      filteredOptions = filteredOptions.filter(cat => {
        return cat.categoryId
          && (hasAny(cat.weight.id, value) || hasAny(cat.ageDivision.name, value) || hasAny(cat.beltType, value) || hasAny(cat.gender, value));
      });
    });

    return filteredOptions;
  }
  optionsFilter = (options: Category[], filter: string) => this.searchFilter(this._allDefaultCategories, filter).filter(cat => {
    return this.categories.map(c => c.categoryId).indexOf(cat.categoryId) < 0;
  }).slice(0, 10)
  formatter = (option: Category, query?: string) => AddFighterComponent.displayCategory(option);

  constructor(public modalService: SuiModalService) {
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
        const ids = this._categories.map(c => c.categoryId);
        this._allDefaultCategories = value.filter(cat => {
          return ids.indexOf(cat.categoryId) < 0;
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
        const ids = this._categories.map(c => c.categoryId);
        this._defaultCategories = this._defaultCategories.filter(cat => {
          return ids.indexOf(cat.categoryId) < 0;
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

  searchStringChanged(event: any) {
    if (event && event.target && event.target.value) {
      const searchStr = event.target.value;
      this.filteredCategories = this.searchFilter(this._categories, searchStr);
      this.searchStr = searchStr;
    } else {
      this.filteredCategories = this._categories;
      this.searchStr = null;
    }
  }

  ngOnInit() {
  }

  generateRandomFighters(category: Category) {
    if (category) {
      this.generateRandomFightersEvent.next(eventManagerCreateFakeCompetitorsCommand(category.competitionId, category.categoryId, 30, 20));
    }
  }

  addCategory(competitionId: string) {
    this.createCustomCategoryClicked.next(competitionId);
  }

  addSelectedCategories() {
    if (this.categoriesToAdd && this.categoriesToAdd.length > 0) {
      this.addDefaultCategories.next(this.categoriesToAdd);
      if (this.select) {
        const addedCategories = [...this.categoriesToAdd];
        addedCategories.forEach(cat => this.select.deselectOption(cat));
      }
      this.categoriesToAdd = [];
    }
  }

  public openModal(dynamicContent: string = 'Period properties') {
    const config = new TemplateModalConfig<IContext, string, string>(this.modalTemplate);


    config.closeResult = 'closed!';
    config.context = {data: dynamicContent};

    this.modalService
      .open(config)
      .onApprove(() => {
        this.addSelectedCategories();
      });
  }


  deleteCategory(category: Category) {
    this.deleteCategoryEvent.next(category);
  }

  getCategoryId(category: Category) {
    return btoa(category.categoryId);
  }

  setCategoriesToAdd(categories: Category[]) {
    this.categoriesToAdd = categories;
  }


  // navigateBack() {
  //   this.location.back();
  // }
}
