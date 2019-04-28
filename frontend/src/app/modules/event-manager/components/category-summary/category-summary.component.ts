import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Category, CategoryState} from '../../../../commons/model/competition.model';

@Component({
  selector: 'app-category-summary',
  templateUrl: './category-summary.component.html',
  styleUrls: ['./category-summary.component.css']
})
export class CategorySummaryComponent implements OnInit {

  @Input()
  categoryState: CategoryState;

  @Input()
  competitionId: string;

  @Input()
  category: Category;

  @Input()
  categoryStartTime: Date;

  @Output()
  gobackClicked = new EventEmitter<any>();

  @Output()
  categoryFightersSelected = new EventEmitter<{ categoryId: string, competitionId: string }>();

  @Output()
  categoryBracketsSelected = new EventEmitter<{ categoryId: string, competitionId: string }>();

  constructor() {
  }

  ngOnInit() {
  }

  goback() {
    this.gobackClicked.next('');
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
