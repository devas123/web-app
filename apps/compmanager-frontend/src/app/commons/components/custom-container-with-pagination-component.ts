import {Component} from '@angular/core';

@Component({
  selector: 'compmanager-frontend-common-container-with-pagination',
  template: `
    <div class="ui customcontainer">
      <ng-content></ng-content>
      <div class="ui basic segment customline pagination_line">
        <ng-content select="compmanager-frontend-common-pagination"></ng-content>
      </div>
    </div>
  `
})
export class CommonContainerWithPaginationComponent {
}
