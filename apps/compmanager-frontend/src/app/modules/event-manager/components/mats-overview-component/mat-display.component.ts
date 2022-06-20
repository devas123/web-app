import {ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, Output} from '@angular/core';
import {dragEndEvent, dragStartEvent,} from '../../../../commons/model/competition.model';
import {CdkDragDrop} from '@angular/cdk/drag-drop';
import {CategoryState, Competitor, FightDescription, MatDescription, MatState} from "@frontend-nx/protobuf";

@Component({
  selector: 'app-mat-display',
  template: `
    <button class="tiny ui compact right floated button" (click)="detailsViewSelected.next(mat?.matDescription)">Area
      view
    </button>
    <div class="header">{{title}}</div>
    <div class="ui middle aligned list" cdkDropList [cdkDropListData]="mat.topFiveFights"
         (cdkDropListDropped)="drop($event, mat.matDescription?.id)">
      <a class="item draggable" *ngFor="let fight of mat.topFiveFights" cdkDrag (cdkDragStarted)="dragStart()"
         (cdkDragEnded)="dragEnd()" [cdkDragData]="fight">
        <div class="content">
          <app-fight-display [fight]="fight"
                             [categories]="categories"
                             [competitors]="competitors"
                             (competitorClicked)="competitorClicked.next($event)"></app-fight-display>
        </div>
      </a>
    </div>
    <div class="meta">{{mat.numberOfFights}} fights</div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['mats-overview-component.component.scss']
})
export class MatDisplayComponent {

  @Input()
  title: string;

  @Input()
  mat: MatState;

  @Input()
  categories: CategoryState[];


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

  dragStart() {
    this.el.nativeElement.dispatchEvent(dragStartEvent());
  }

  dragEnd() {
    this.el.nativeElement.dispatchEvent(dragEndEvent());
  }

  drop(event: CdkDragDrop<FightDescription[], any>, matId: string) {
    const fight = event.item.data as FightDescription;
    if (fight && !(fight.mat?.id === matId && event.previousIndex === event.currentIndex)) {
      const newOrderOnMat = event.container.data[event.currentIndex]?.numberOnMat ?? event.container.data.length;
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
