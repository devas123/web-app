import {Component, Input, OnInit} from '@angular/core';
import {Category} from "../../../../../commons/model/competition.model";

@Component({
  selector: '[competition-divisions]',
  templateUrl: './competition-divisions.component.html',
  styleUrls: ['./competition-divisions.component.css']
})
export class CompetitionDivisionsComponent implements OnInit {

  @Input()
  categories: Category[];

  constructor() { }

  ngOnInit() {
  }

}
