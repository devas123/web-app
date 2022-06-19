import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'cf-restriction-header',
  template: `
    <div class="restriction-item header">
      <span>{{name}}</span>
      <div class="filler"></div>
      <compmanager-frontend-link-icon class="right-floated-close" (click)="columnRemoved.next()" *ngIf="canSelect"
                                      [iconClass]="'getIconClass'"></compmanager-frontend-link-icon>
      <compmanager-frontend-link-icon class="right-floated-close" (click)="columnRemoved.next()"
                                      [iconClass]="'ui close'"></compmanager-frontend-link-icon>
    </div>
  `,
  styleUrls: ['category-constructor.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RestrictionHeaderComponent {

  @Input()
  name: string;

  @Input()
  canSelect: boolean;

  @Input()
  allSelected: boolean;

  @Output()
  columnRemoved = new EventEmitter<void>();

  getIconClass() {
    return this.allSelected ? 'minus' : 'check';
  }
}
