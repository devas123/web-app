import {ChangeDetectionStrategy, Component} from "@angular/core";

@Component({
  selector: 'compmanager-frontend-common-card',
  template: `
    <div class="ui basic segment customline">
      <ng-content></ng-content>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CommonCardComponent {
}
