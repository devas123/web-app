import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {MenuItem} from '../../redux/event-manager-reducers';

@Component({
  selector: 'app-eventmanager-menu',
  template: `
      <div class="ui four wide column menublock" *ngIf="displayMenu">
          <div class="ui basic segment" id="menucontainer">
              <div class="ui left vertical secondary menu">
                  <a *ngFor="let m of menu" id="itemcontainer" class="item" [ngClass]="m.class" (click)="itemClicked.next(m)">
                      {{m.name}}
                  </a>
              </div>
          </div>
      </div>
  `,
  styles: [`
      .menublock {
          background-color: rgba(43, 62, 64, 0.98);
      }`,
      `.ui.left.secondary.vertical.menu a.item {
          border-radius: 0 !important;
      }`,
      `.ui.left.secondary.vertical.menu .item:last-child {
          border-bottom: 0;
      }
    `],
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
