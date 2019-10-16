import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {MenuItem} from '../../redux/event-manager-reducers';

@Component({
  selector: 'app-eventmanager-menu',
  template: `
      <div class="ui four wide column menublock" *ngIf="displayMenu">
          <div class="ui basic segment" id="menucontainer">
              <div class="ui left vertical secondary menu">
                  <a *ngFor="let m of menu" class="item" [ngClass]="m.class" (click)="itemClicked.next(m)">
                      {{m.name}}
                  </a>
              </div>
          </div>
      </div>
  `,
  styles: [`
      .menublock {
          background-color: #2b3035;
          margin-left: 14px;
          border-radius: 3px;
      }`,
      `.ui.left.secondary.vertical.menu a.item {
          border-radius: 3px !important;
          background-color: #3c5d6e;
      }`,
      `.ui.left.secondary.vertical.menu a.item:hover {
          background-color: #121719;
      }`,
  ],
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
