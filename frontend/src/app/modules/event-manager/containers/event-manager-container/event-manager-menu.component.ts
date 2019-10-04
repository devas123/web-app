import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {MenuItem} from '../../redux/event-manager-reducers';

@Component({
  selector: 'app-eventmanager-menu',
  template: `
      <div class="ui four wide column" *ngIf="displayMenu">
          <div class="ui segment">
              <div class="ui left vertical secondary menu">
                  <a *ngFor="let m of menu" class="item" [ngClass]="m.class" (click)="itemClicked.next(m)">
                      {{m.name}}
                  </a>
              </div>
          </div>
      </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EventManagerMenuComponent {
  @Input()
  menu: MenuItem[];

  @Input()
  displayMenu = false;

  @Output()
  itemClicked = new EventEmitter<MenuItem>();
}
