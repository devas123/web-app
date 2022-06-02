import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from "@angular/core";
import {AbstractControl, FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'compmanager-frontend-group-descriptor-form',
  template: `
    <div class="ui fields"
         [formGroup]="_group">
      <div class="ui field">
        <input class="ui input" type="text" [placeholder]="1 + groupNumber + ' name (optional)'"
               [formControl]="name"/>
      </div>
      <div class="ui field">
        <input class="ui input" type="number"
               [placeholder]="1 + groupNumber + ' size'"
               [formControl]="size"/>
      </div>
      <div class="ui field">
        <button class="ui icon button" (click)="groupDescriptorRemoved.next(groupNumber)"><i class="trash icon"></i>
        </button>
      </div>
    </div>`,
  styleUrls: ['generate-brackets-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GroupDescriptorFormComponent {
  @Input()
  set group(value: AbstractControl) {
    this._group = value as FormGroup;
  };

  _group: FormGroup;

  @Input()
  groupNumber: number;

  @Output()
  groupDescriptorRemoved = new EventEmitter<number>();

  get name() {
    return this._group.get('name') as FormControl;
  }

  get size() {
    return this._group.get('size') as FormControl;
  }
}
