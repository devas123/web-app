import {Component, Input} from '@angular/core';
import {CompetitionProperties} from "@frontend-nx/protobuf";

@Component({
  selector: 'cf-competition-description',
  templateUrl: './competition-description.component.html',
  styleUrls: ['./competition-description.component.css']
})
export class CompetitionDescriptionComponent  {

  @Input()
  properties: CompetitionProperties;

  @Input()
  competitionInfoCompiled: string;

  constructor() { }



}
