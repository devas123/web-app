import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CategoryState} from '../../../../commons/model/competition.model';
import {Category, Competitor, Fight} from '../../../../commons/model/competition.model';
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
  competitors: Competitor[];

  @Input()
  category: Category;

  @Input()
  categoryStartTime: Date;

  @Output()
  gobackClicked = new EventEmitter<any>();

  constructor() {
  }

  ngOnInit() {
  }

  goback() {
    this.gobackClicked.next('');
  }

  getFightsCount() {
    if (this.fights && this.competitors) {
      return this.fights.filter(f => !obsoleteFight(f, this.competitors.length === 3)).length;
    } else {
      return 0;
    }
  }

}
