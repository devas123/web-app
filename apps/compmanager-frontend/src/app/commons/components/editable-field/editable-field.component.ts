import {
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  Output, Renderer2,
  ViewChild
} from "@angular/core";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'compmanager-frontend-editable-field',
  template: `
    <!--input  hidden field-->
    <div class="input-content" *ngIf="_editMode">
      <ng-content select="[edit-section]">
      </ng-content>
      <div class="right floated content ">
        <i (click)="fireContentChanged()" class="check link green icon"></i>
        <i (click)="_editMode = false" class="times link green icon"></i>
      </div>
    </div>
    <!---------->

    <!--visible content-->
    <div class="row-content" *ngIf="!_editMode">
      <ng-content select="[display-section]"></ng-content>
      <div class="right floated content">
        <i #showInputButton class="edit link teal tiny  icon" (click)="fireEditModeEntered()"></i>
      </div>
    </div>
    <!---------->
  `,
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditableFieldComponent {
  @ViewChild('showInputButton', {read: ElementRef})
  showInputButton: ElementRef;

  @Input()
  control: FormControl

  @Input()
  value: any

  _editMode: boolean = false;

  @Output()
  contentChanged = new EventEmitter<any>();

  @Output()
  editModeEntered = new EventEmitter<any>();

  constructor(private renderer: Renderer2) {
  }

  fireContentChanged() {
    this.contentChanged.next();
    this._editMode = false;
  }

  fireEditModeEntered() {
    this.editModeEntered.next();
    this._editMode = true;
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    if (this.showInputButton) {
      this.renderer.removeClass(this.showInputButton.nativeElement, 'tiny');
    }
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    if (this.showInputButton) {
      this.renderer.addClass(this.showInputButton.nativeElement, 'tiny');
    }
  }
}
