import {
  AfterContentChecked,
  AfterViewChecked,
  AfterViewInit,
  ChangeDetectionStrategy, ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
  ViewChildren
} from '@angular/core';
import {Category, RangeRestriction, ValueRestriction} from '../../commons/model/competition.model';
import {CompetitionProperties} from '../../reducers/global-reducers';
import {eventManagerCreateFakeCompetitorsCommand} from '../../modules/event-manager/redux/event-manager-actions';
import {AddFighterComponent} from '../../modules/event-manager/components/add-fighter/add-fighter.component';
import {ModalSize, ModalTemplate, SuiModalService, TemplateModalConfig} from "ng2-semantic";
import {CreateCategoryModal} from "./add-category-modal.component";
import {FormControl, FormGroup} from "@angular/forms";
import {from, Observable, of} from "rxjs";
import {
  delay,
  map,
} from "rxjs/operators";


@Component({
  selector: 'app-category-editor',
  templateUrl: './category-editor.component.html',
  styleUrls: ['./category-editor.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CategoryEditorComponent implements OnInit, AfterViewInit, AfterViewChecked, AfterContentChecked {

  @Input()
  editMode = true;

  @Input()
  detailedView = true;

  @Output()
  createCustomCategoryClicked = new EventEmitter<string>();
  @Output()
  addDefaultCategories = new EventEmitter<{ competitionId: string, category: Category }[]>();
  @Output()
  generateRandomFightersEvent: EventEmitter<any> = new EventEmitter<any>();

  @Input()
  competition: CompetitionProperties;

  categories$: Observable<(Category & { selected?: boolean })[]>;

  searchStr$: EventEmitter<string>;

  @Output()
  deleteCategoryEvent: EventEmitter<{ competitionId: string, category: Category }> = new EventEmitter<{ competitionId: string, category: Category }>();

  @Output()
  registrationStatusToggled = new EventEmitter<{ categoryId: string, newStatus: boolean }>();
  @Output()
  categoryEditorClicked = new EventEmitter<string>();

  @Output()
  categoryHeaderClicked = new EventEmitter<string>();

  editorControlForm: FormGroup;

  constructor(public modalService: SuiModalService, private ref: ChangeDetectorRef) {
  }


  openAddModal() {
    let category = <Category>{
      restrictions: [{...new ValueRestriction(),name: "Gender", value: "Male"}, {...new ValueRestriction(),
        name: "Belt",
        value: "White"
      },
        {...new RangeRestriction(),name: 'Age', minValue: "18", maxValue: "60", unit: 'age'},
        {...new RangeRestriction(),name: 'Weight', minValue: '50', maxValue: '100', unit: 'kg'}]
    };
    this.modalService.open(new CreateCategoryModal(category))
  }


  @Input()
  set categories(value: Observable<Category[]>) {
    this.categories$ = value.pipe(
      map(x =>
        x.map(val => {
          return {...val, selected: false}
        })),
    );
  }

  ngAfterViewChecked() {
    this.ref.detectChanges();

  }

  ngAfterViewInit(): void {
    this.ref.detectChanges();
  }

  ngAfterContentChecked(): void {
    this.ref.detectChanges();
  }

  searchStr: string;

  displayCategory = AddFighterComponent.displayCategory;

  searchFilter = (options: Category[], filter: string) => {
    const filterParts = filter.split(/\W/);
    filterParts.forEach((value) => {
    });
    return null;
  }

  ngOnInit() {
    this.searchStr$ = new EventEmitter<string>();
    this.categories$ = this.categories$.pipe(delay(0));
  }

  generateRandomFighters(category: Category) {
    if (category) {
      this.generateRandomFightersEvent.next(eventManagerCreateFakeCompetitorsCommand(this.competition.id, category.id, 10, 20));
    }
  }


  deleteCategory(category: Category) {
    this.deleteCategoryEvent.next({competitionId: this.competition.id, category});
  }

  getCategoryId(category: Category) {
    return category.id;
  }

  toggleRegistrationOpen(category: Category) {
    this.registrationStatusToggled.next({categoryId: category.id, newStatus: !category.registrationOpen});
  }

  handleCategoryEditorClicked(categoryId: string) {
    this.categoryEditorClicked.next(categoryId);
  }

  handleCategoryHeaderClicked(categoryId: string) {
    this.categoryHeaderClicked.next(categoryId);
  }


}
