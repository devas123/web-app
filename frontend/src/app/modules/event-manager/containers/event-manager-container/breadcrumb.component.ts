import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {BreadCrumbItem} from '../../redux/event-manager-reducers';

@Component({
  selector: 'app-breadcrumb',
  template: `
      <div class="ui tiny breadcrumb">
          <ng-container *ngFor="let b of breadcrumb; index as i">
              <a class="section"
                 (click)="itemClicked.next(b)">{{b.name | truncate}}</a>
              <div *ngIf="!b.last" class="divider"> /</div>
          </ng-container>
      </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BreadcrumbComponent {
  @Input()
  breadcrumb: BreadCrumbItem[];

  @Output()
  itemClicked = new EventEmitter<BreadCrumbItem>();
}
