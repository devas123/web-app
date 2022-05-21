import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {defaultRestrictionFormatter} from '../../../../commons/model/competition.model';
import {CategoryRestriction} from "@frontend-nx/protobuf";

export type TypeInTree = 'fully-connected' | 'partially-connected' | 'not-connected';

@Component({
  selector: 'app-restriction-item',
  template: `
    <div class="restriction-item selectable" [class]="typeInTree" [ngClass]="{'in-path': inPath}">
      <span (click)="restrictionClicked.next()">{{defaultRestrictionFmt(restriction)}}</span>
      <div (click)="restrictionClicked.next()" class="filler"></div>
      <a class="right-floated-close" *ngIf="canSelect" (click)="restrictionSelected.next()">
        <i *ngIf="typeInTree !== 'not-connected'" class="ui minus icon"></i>
        <i *ngIf="typeInTree === 'not-connected'" class="ui plus icon"></i>
      </a>
      <a class="right-floated-close" (click)="restrictionDeleted.next()"><i class="ui close icon"></i></a>
    </div>
  `,
  styleUrls: ['category-constructor.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RestrictionItem {

  defaultRestrictionFmt = defaultRestrictionFormatter(false);

  @Input()
  public inPath = false;

  @Input()
  public typeInTree: TypeInTree = 'not-connected';

  @Input()
  public canSelect = true;

  @Input()
  restriction: CategoryRestriction;

  @Input()
  id: number;

  @Output()
  restrictionSelected = new EventEmitter();

  @Output()
  restrictionClicked = new EventEmitter();

  @Output()
  restrictionDeleted = new EventEmitter();
}
