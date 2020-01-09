import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Competitor, Fight} from '../../../../commons/model/competition.model';
import {Mat} from '../../redux/dashboard-reducers';
import {CdkDragDrop} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-mat-display',
  template: `
    <button class="tiny ui compact right floated button" (click)="detailsViewSelected.next(mat)">Mat view</button>
    <div class="header">{{title}}</div>
    <div class="ui middle aligned list" cdkDropList [cdkDropListData]="mat?.topFiveFights"
         (cdkDropListDropped)="drop($event, mat?.matDescription?.id)">
      <a class="item draggable" *ngFor="let fight of mat?.topFiveFights" cdkDrag [cdkDragData]="fight">
        <div class="content">
          <app-fight-display [fight]="fight"
                             (competitorClicked)="competitorClicked.next($event)"></app-fight-display>
        </div>
      </a>
    </div>
    <div class="meta">{{mat?.numberOfFights + ' fights'}}</div>
  `,
  styleUrls: ['mats-overview-component.component.scss']
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

  @Output()
  fightMatChanged = new EventEmitter<any>();

  constructor() {
  }

  ngOnInit() {
  }

  drop(event: CdkDragDrop<Fight[], any>, matId: string) {
    const fight = event.item.data as Fight;
    const newOrderOnMat = event.container.data[event.currentIndex].numberOnMat;
    this.fightMatChanged.next({
      currentMatId: fight.matId,
      currentOrderOnMat: fight.numberOnMat,
      fightId: fight.id,
      newMatId: matId,
      newOrderOnMat,
    });
  }
}
