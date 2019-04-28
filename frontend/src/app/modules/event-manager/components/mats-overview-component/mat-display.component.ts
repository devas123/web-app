import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Competitor} from '../../../../commons/model/competition.model';
import {Mat} from '../../redux/dashboard-reducers';

@Component({
  selector: 'app-mat-display',
  template: `
    <button class="tiny ui compact right floated button" (click)="detailsViewSelected.next(mat)">Mat view</button>
    <div class="header">{{title}}</div>
    <div class="ui middle aligned divided list">
      <a class="item" *ngFor="let fight of mat?.topFiveFights">
        <i class="circular users icon"></i>
        <div class="content">
          <app-fight-display [fight]="fight"
                             (competitorClicked)="competitorClicked.next($event)"></app-fight-display>
        </div>
      </a>
    </div>
    <div class="meta">{{mat?.numberOfFights + ' fights'}}</div>
  `
})
export class MatDisplayComponent implements OnInit {

  @Input()
  title: string;

  @Input()
  mat: Mat;

  @Output()
  detailsViewSelected = new EventEmitter<Mat>();

  @Output()
  competitorClicked = new EventEmitter<Competitor>();

  constructor() {
  }

  ngOnInit() {
  }

}
