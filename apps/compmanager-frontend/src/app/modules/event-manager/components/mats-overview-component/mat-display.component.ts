import {ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {
  Category,
  Competitor,
  dragEndEvent,
  dragStartEvent,
  Fight,
  MatDescription
} from '../../../../commons/model/competition.model';
import {CdkDragDrop} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-mat-display',
  template: `
    <button class="tiny ui compact right floated button" (click)="detailsViewSelected.next(mat)">Area view</button>
    <div class="header">{{title}}</div>
    <div class="ui middle aligned list" cdkDropList [cdkDropListData]="matFights"
         (cdkDropListDropped)="drop($event, mat?.id)">
      <a class="item draggable" *ngFor="let fight of matFights" cdkDrag (cdkDragStarted)="dragStart()"
          (cdkDragEnded)="dragEnd()" [cdkDragData]="fight">
        <div class="content">
          <app-fight-display [fight]="fight"
                             [categories]="categories"
                             [competitors]="competitors"
                             (competitorClicked)="competitorClicked.next($event)"></app-fight-display>
        </div>
      </a>
    </div>
    <div class="meta">{{(mat?.numberOfFights || 0) + ' fights'}}</div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['mats-overview-component.component.scss']
})
export class MatDisplayComponent implements OnInit {

  @Input()
  title: string;

  @Input()
  mat: MatDescription;

  @Input()
  categories: Category[];

  @Input()
  matFights: Fight[];

  @Input()
  competitors: Competitor[];

  @Output()
  detailsViewSelected = new EventEmitter<MatDescription>();

  @Output()
  competitorClicked = new EventEmitter<Competitor>();

  @Output()
  fightMatChanged = new EventEmitter<any>();

  constructor(private el: ElementRef) {
  }

  ngOnInit() {
  }

  dragStart() {
    this.el.nativeElement.dispatchEvent(dragStartEvent());
  }

  dragEnd() {
    this.el.nativeElement.dispatchEvent(dragEndEvent());
  }

  drop(event: CdkDragDrop<Fight[], any>, matId: string) {
    const fight = event.item.data as Fight;
    if (fight && !(fight.mat?.id === matId && event.previousIndex === event.currentIndex)) {
      const newOrderOnMat = event.container.data[event.currentIndex].numberOnMat;
      this.fightMatChanged.next({
        categoryId: fight.categoryId,
        currentMatId: fight.mat.id,
        currentOrderOnMat: fight.numberOnMat,
        fightId: fight.id,
        newMatId: matId,
        newOrderOnMat,
      });
    }
  }
}
