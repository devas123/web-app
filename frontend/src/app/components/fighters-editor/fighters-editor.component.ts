import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {Category} from '../../commons/model/competition.model';
import {AddFighterComponent} from '../../modules/event-manager/components/add-fighter/add-fighter.component';
import {Competitor} from '../../commons/model/competition.model';
import {SuiPagination} from 'ng2-semantic';

@Component({
  selector: 'app-fighters-editor',
  templateUrl: './fighters-editor.component.html',
  styleUrls: ['./fighters-editor.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FightersEditorComponent implements OnInit {

  @Output()
  fighterClicked = new EventEmitter<Competitor>();

  private _pageNumber = 1;

  get pageNumber() {
    return this._pageNumber;
  }

  @Input()
  categories: Category[];

  @Input()
  competitionId: string;

  @Input()
  category: Category;

  @Input()
  fighters: Competitor[];

  @Input()
  collectionSize: number;

  @Input()
  total: number;

  @Input()
  set pageNumber(value: number) {
    if (value && value > 0) {
      this._pageNumber = value;
      if (this._pagination) {
        this._pagination.setPage(value);
      }
    }
  }

  _pagination: SuiPagination;

  @Input()
  pageSize: number;

  @Output()
  pageChanged = new EventEmitter<{ pageNumber: number, competitionId: string, categoryId: string }>();

  @Output()
  fighterDeleted = new EventEmitter<Competitor>();

  @Input()
  editMode = true;

  @Input()
  showPersonalData = true;

  @Input()
  showRegistrationStatus = true;


  @ViewChild('pagination')
  set pagination(value: SuiPagination) {
    if (value) {
      this._pagination = value;
      this._pagination.setPage(this.pageNumber);
    }
  }

  constructor() {
  }

  ngOnInit() {
  }

  deleteFighter(fighter: Competitor) {
    this.fighterDeleted.next(fighter);
  }

  getCategoryName(categoryId: string): string {
    if (this.categories) {
      const cat = this.categories.find(c => c.id === categoryId);
      if (cat) {
        return AddFighterComponent.displayCategory(cat);
      }
    }
    return categoryId;
  }

  selectPage(pageNumber: number) {
    if (this._pageNumber !== pageNumber) {
      const categoryId = (this.category && this.category.id) || undefined;
      this.pageChanged.next({pageNumber, competitionId: this.competitionId, categoryId});
    }
  }

  gotoFighterProfile(fighter: Competitor) {
    this.fighterClicked.next(fighter);
  }
}
