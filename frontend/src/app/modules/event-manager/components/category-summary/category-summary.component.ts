import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CategoryState} from '../../../../commons/model/competition.model';
import {Category, Fight} from '../../../../commons/model/competition.model';
import {obsoleteFight} from '../../redux/reducers';

@Component({
  selector: 'app-category-summary',
  templateUrl: './category-summary.component.html',
  styleUrls: ['./category-summary.component.css']
})
export class CategorySummaryComponent implements OnInit {

  @Input()
  categoryState: CategoryState;

  @Input()
  fights: Fight[];

  @Input()
  competitorsSize: number;

  @Input()
  competitionId: string;

  @Input()
  category: Category;

  @Input()
  categoryStartTime: Date;

  @Output()
  gobackClicked = new EventEmitter<any>();

  @Output()
  categoryFightersSelected = new EventEmitter<{categoryId: string, competitionId: string}>();

  constructor() {
  }

  ngOnInit() {
  }

  goback() {
    this.gobackClicked.next('');
  }

  getFightsCount() {
    if (this.fights && this.competitorsSize) {
      return this.fights.filter(f => !obsoleteFight(f, this.competitorsSize === 3)).length;
    } else {
      return 0;
    }
  }

  navigateToCategoryFighters(categoryId: string) {
    if (categoryId) {
      this.categoryFightersSelected.next({categoryId, competitionId: this.competitionId});
    }
  }

}
