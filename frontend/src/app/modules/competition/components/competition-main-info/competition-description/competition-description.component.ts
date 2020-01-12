import {Component, Input, OnInit} from '@angular/core';
import {CompetitionProperties} from '../../../../../reducers/global-reducers';

@Component({
  selector: '[competition-description]',
  templateUrl: './competition-description.component.html',
  styleUrls: ['./competition-description.component.css']
})
export class CompetitionDescriptionComponent implements OnInit {

  @Input()
  properties: CompetitionProperties;

  constructor() { }

  ngOnInit() {
  }

}
