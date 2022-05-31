import {ChangeDetectionStrategy, Component} from "@angular/core";

@Component({
  selector: 'compmanager-frontend-left-floated-container',
  template: `
    <div class="left floated content">
      <ng-content></ng-content>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LeftFloatedContainerComponent {
  constructor() {
  }
}
