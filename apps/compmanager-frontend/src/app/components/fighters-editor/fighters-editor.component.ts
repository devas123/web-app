import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {CategoryState, Competitor} from "@frontend-nx/protobuf";

@Component({
  selector: 'app-fighters-editor',
  templateUrl: './fighters-editor.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FightersEditorComponent {

  @Output()
  fighterClicked = new EventEmitter<Competitor>();

  private _pageNumber = 1;

  get pageNumber() {
    return this._pageNumber;
  }

  @Input()
  categories: CategoryState[];

  @Input()
  competitionId: string;

  @Input()
  category: CategoryState;

  @Input()
  fighters: Competitor[];

  @Input()
  collectionSize: number;

  @Input()
  set pageNumber(value: number) {
    if (value && value > 0) {
      this._pageNumber = value;
    }
  }

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

  constructor() {
  }

  deleteFighter(fighter: Competitor) {
    this.fighterDeleted.next(fighter);
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
