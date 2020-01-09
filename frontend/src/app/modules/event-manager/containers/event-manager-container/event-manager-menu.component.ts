import {AfterViewInit, ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewChild, ViewContainerRef} from '@angular/core';
import {MenuItem} from '../../redux/event-manager-reducers';

@Component({
  selector: 'app-eventmanager-menu',
  template: `
      <div class="ui four wide column menublock" *ngIf="displayMenu">
          <div class="ui basic segment" id="menucontainer">
              <div class="ui left vertical secondary menu">
                  <ng-container *ngFor="let m of menu">
                      <a *ngIf="(!m.showCondition) || (m.showCondition() | async)" class="item" [ngClass]="m.class" (click)="itemClicked.next(m)">
                          {{m.name}}
                      </a>
                  </ng-container>
                  <div #container></div>
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
          background-color: #2b3e40;
      }`,
  ]
})
export class EventManagerMenuComponent {
  @ViewChild('container', {static: false, read: ViewContainerRef})
  container: ViewContainerRef;

  @Input()
  set menu(value: MenuItem[]) {
    if (value) {
      const _displayActions = value.filter(mi => !!mi.itemDisplayAction);
      _displayActions.forEach(mi => setTimeout(() => mi.itemDisplayAction(this.container)));
      this._menu = value.filter(mi => !mi.itemDisplayAction);
    } else {
      this._menu = [];
    }
  }

  get menu() {
    return this._menu;
  }

  private _menu: MenuItem[];

  @Input()
  displayMenu = false;

  @Output()
  itemClicked = new EventEmitter<MenuItem>();
}
