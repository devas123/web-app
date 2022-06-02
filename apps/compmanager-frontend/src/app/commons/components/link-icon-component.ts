import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from "@angular/core";

@Component({
  selector: 'compmanager-frontend-link-icon',
  template: `
    <i [class]="_class" (click)="onClick($event)"></i>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LinkIconComponent {
  private suffix = " link icon";

  @Input()
  set iconClass(value: string) {
    this._class = value + this.suffix;
  }

  _class: string
  @Output()
  click = new EventEmitter();

  onClick(event: Event) {
    event.stopPropagation();
    this.click.next();
  }
}
