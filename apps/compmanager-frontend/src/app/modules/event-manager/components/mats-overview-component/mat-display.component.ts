import {ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, Output} from '@angular/core';
import {dragEndEvent, dragStartEvent,} from '../../../../commons/model/competition.model';
import {CdkDragDrop} from '@angular/cdk/drag-drop';
import {CategoryState, Competitor, FightDescription, MatDescription, MatState} from "@frontend-nx/protobuf";
import {Dictionary} from "@ngrx/entity";
import * as _ from 'lodash'

@Component({
  selector: 'app-mat-display',
  template: `
    <button class="tiny ui compact right floated button" (click)="detailsViewSelected.next(mat?.matDescription)">Area
      view
    </button>
    <div class="header">{{title}}</div>
    <div class="ui middle aligned list" cdkDropList [cdkDropListData]="_fightsByMat[mat.matDescription.id]"
         (cdkDropListDropped)="drop($event, mat.matDescription?.id)">
      <a class="item draggable" *ngFor="let fight of _fightsByMat[mat.matDescription.id]" cdkDrag (cdkDragStarted)="dragStart()"
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

  _fightsByMat: Dictionary<FightDescription[]>

  @Input()
  title: string;

  @Input()
  mat: MatState;

  @Input()
  categories: CategoryState[];

  @Input()
  set fights(value: FightDescription[]) {
    this._fightsByMat = _.groupBy(value, f => f.mat.id)
  }


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
      const newOrderOnMat = Boolean(event.container.data) ? (event.container.data[event.currentIndex]?.numberOnMat ?? event.container.data.length) : 0;
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
