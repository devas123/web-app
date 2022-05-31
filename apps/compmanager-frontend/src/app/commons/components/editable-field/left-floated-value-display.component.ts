import {ChangeDetectionStrategy, Component, Input} from "@angular/core";

@Component({
  selector: 'compmanager-frontend-left-floated-display',
  template: `
    <compmanager-frontend-left-floated-container>
      <div class="description">{{name}}</div>
      <div class="header">{{value}}</div>
    </compmanager-frontend-left-floated-container>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LeftFloatedValueDisplayComponent {
  @Input()
  value: any

  @Input()
  name: string

  constructor() {
  }
}
