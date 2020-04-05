import {Component, ContentChild, EventEmitter, Input, Output, TemplateRef} from '@angular/core';

type  Formatter<T> = (t: T, index: number) => string;
type  Validator<T> = (value: T, index: number, values: T[]) => boolean;

@Component({
  template: `
    <div [ngClass]="_ngClass">
      <ng-container *ngIf="template">
        <ng-template ngFor let-opt [ngForOf]="values" [ngForTemplate]="template" let-i="index">
        </ng-template>
      </ng-container>
      <ng-container *ngIf="!template">
        <div class="ui icon label"
             *ngFor="let opt of values; index as k" [ngClass]="{red: validator && !validator(opt, k, values)}">{{formatter(opt, k)}}
          <i class="delete icon" (click)="itemRemoved.next({item: opt, index: k})"></i>
        </div>
      </ng-container>
    </div>
  `,
  styleUrls: [`tag-list.component.scss`],
  selector: 'app-tag-list'
})
export class TagListComponent<T> {

  @Input()
  set vertical(value: boolean) {
    if (value) {
      this._ngClass = 'vertical padded';
    } else {
      this._ngClass = 'ui labels padded';
    }
  }

  _ngClass = 'ui labels padded';

  @ContentChild(TemplateRef)
  template: TemplateRef<any>;

  @Input()
  values: T[];

  @Input()
  formatter: Formatter<T>;

  @Output()
  itemRemoved = new EventEmitter<{ item: T, index: number }>();

  @Input()
  validator: Validator<T>;
}
