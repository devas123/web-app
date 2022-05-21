import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {CategoryDescriptor, CategoryState} from "@frontend-nx/protobuf";

@Component({
  selector: 'app-category-summary',
  templateUrl: './category-summary.component.html',
  styleUrls: ['./category-summary.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CategorySummaryComponent  {

  @Input()
  categoryState: CategoryState;

  @Input()
  competitionId: string;

  @Input()
  category: CategoryDescriptor;

  @Input()
  categoryStartTime: Date;

  @Output()
  categoryFightersSelected = new EventEmitter<{ categoryId: string, competitionId: string }>();

  @Output()
  categoryBracketsSelected = new EventEmitter<{ categoryId: string, competitionId: string }>();

  constructor() {
  }



  navigateToCategoryFighters(categoryId: string) {
    if (categoryId) {
      this.categoryFightersSelected.next({categoryId, competitionId: this.competitionId});
    }
  }

  navigateToCategoryBrackets(categoryId: string) {
    if (categoryId) {
      this.categoryBracketsSelected.next({categoryId, competitionId: this.competitionId});
    }
  }

}
