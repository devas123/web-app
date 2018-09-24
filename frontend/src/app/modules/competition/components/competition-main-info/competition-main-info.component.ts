import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CompetitionProperties} from "../../../../reducers";
import {Category,} from "../../../../commons/model/competition.model";

@Component({
  selector: 'competition-main-info',
  templateUrl: './competition-main-info.component.html',
  styleUrls: ['./competition-main-info.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CompetitionMainInfoComponent implements OnInit {

  menu: { name: string, active?: boolean }[] = [{
    name: "Description",
    active: true
  }, {name: "Categories"}, {name: "Prizes"}];

  @Input()
  competitionId: string;

  @Input()
  properties: CompetitionProperties;

  @Input()
  categories: Category[];

  @Output()
  competitionStart = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit() {
  }


  public changeActiveMenuItem(menuItem) {
    this.menu.find(item => item.active).active = false;
    menuItem.active = true;
  }

  startEvent() {
    console.log("start event");
    this.competitionStart.next(this.competitionId)
  }
}
