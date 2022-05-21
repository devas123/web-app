import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {AddFighterComponent} from '../../modules/event-manager/components/add-fighter/add-fighter.component';
import {SuiPagination} from '@frontend-nx/ng2-semantic-ui';
import {CategoryDescriptor, Competitor} from "@frontend-nx/protobuf";

@Component({
  selector: 'app-fighters-editor',
  templateUrl: './fighters-editor.component.html',
  styleUrls: ['./fighters-editor.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FightersEditorComponent  {

  @Output()
  fighterClicked = new EventEmitter<Competitor>();

  private _pageNumber = 1;

  get pageNumber() {
    return this._pageNumber;
  }

  @Input()
  categories: CategoryDescriptor[];

  @Input()
  competitionId: string;

  @Input()
  category: CategoryDescriptor;

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
