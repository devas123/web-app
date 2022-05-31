import {ChangeDetectionStrategy, Component} from "@angular/core";

@Component({
  selector: 'compmanager-frontend-transparent-right-floated-container',
  template: `
    <div class="ui transparent right floated input">
      <ng-content></ng-content>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TransparentRightFloatedContainerComponent {
  constructor() {
  }
}
