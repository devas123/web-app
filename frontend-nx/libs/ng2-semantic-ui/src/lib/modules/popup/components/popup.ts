import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  HostBinding,
  HostListener,
  NgZone,
  Renderer2,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import {IDynamicClasses, PositioningPlacement, PositioningService} from '../../../misc/util/internal';
import {IPopup} from '../classes/popup-controller';
import {TemplatePopupConfig} from '../classes/popup-template-controller';

@Component({
  selector: 'sui-popup',
  template: `
    <div class="ui popup"
         [ngClass]="dynamicClasses"
         [attr.direction]="direction"
         #container>

      <ng-container *ngIf="!config.template && (!!config.header || !!config.text)">
        <div class="header" *ngIf="config.header">{{ config.header }}</div>
        <div class="content">{{ config.text }}</div>
      </ng-container>
      <div #templateSibling></div>

      <sui-popup-arrow *ngIf="!config.isBasic"
                       [placement]="currentPlacement"
                       [inverted]="config.isInverted"></sui-popup-arrow>
    </div>
  `,
  styles: [`
    .ui.popup {
      /* Autofit popup to the contents. */
      right: auto;
      margin: unset !important;
      display: none;
    }

    .ui.popup[data-show] {
      display: block;
    }

    .ui.animating.popup {
      /* When the popup is animating, it may not initially be in the correct position.
         This fires a mouse event, causing the anchor's mouseleave to fire - making the popup flicker.
         Setting pointer-events to none while animating fixes this bug. */
      pointer-events: none;
    }

    .ui.popup::before {
      /* Hide the Semantic UI CSS arrow. */
      display: none;
    }`],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SuiPopup implements IPopup {
  // Config settings for this popup.
  public config: TemplatePopupConfig<any>;

  public positioningService: PositioningService;
  private _anchor: ElementRef;

  // Keeps track of whether the popup is open internally.
  private _isOpen: boolean;
  // `setTimeout` timer pointer for cancelling popup close.
  public closingTimeout: number;

  // Fires when the popup opens (and the animation is completed).
  public onOpen: EventEmitter<void>;
  // Fires when the popup closes (and the animation is completed).
  public onClose: EventEmitter<void>;

  public get isOpen(): boolean {
    return this._isOpen;
  }

  public get currentPlacement(): PositioningPlacement {
    if (this.positioningService && this.positioningService.actualPlacement !== PositioningPlacement.Auto) {
      return this.positioningService.actualPlacement;
    }
    return this.config.placement;
  }

  // `ElementRef` for the positioning subject.
  @ViewChild('container', {read: ViewContainerRef, static: true})
  private _container: ViewContainerRef;

  public set anchor(anchor: ElementRef) {
    this._anchor = anchor;
    if (this._container && this._anchor) {
      this.positioningService = new PositioningService(
        this._anchor,
        this._container.element,
        this.config.placement,
        this.zone,
        '.dynamic.arrow'
      );
      this.positioningService.hasArrow = !this.config.isBasic;
      this.render.setAttribute(this._container.element.nativeElement, 'data-show', '');
    }
  }


  // Returns the direction (`top`, `left`, `right`, `bottom`) of the current placement.
  public get direction(): string | undefined {
    // We need to set direction attribute before popper init to allow correct positioning
    return this.config.placement.split(' ').shift();
  }

  // Returns the alignment (`top`, `left`, `right`, `bottom`) of the current placement.
  public get alignment(): string | undefined {
    return this.config.placement.split(' ').pop();
  }

  public get dynamicClasses(): IDynamicClasses {
    const classes: IDynamicClasses = {};
    if (this.direction) {
      classes[this.direction] = true;
    }
    if (this.alignment) {
      classes[this.alignment] = true;
    }
    if (this.config.isInverted) {
      classes.inverted = true;
    }
    if (this.config.isBasic) {
      classes.basic = true;
    }
    if (this.config.isFlowing) {
      classes.flowing = true;
    }
    if (this.config.size) {
      classes[this.config.size] = true;
    }
    if (this.config.width) {
      classes[this.config.width] = true;
    }
    return classes;
  }

  // `ViewContainerRef` for the element the template gets injected as a sibling of.
  @ViewChild('templateSibling', {read: ViewContainerRef, static: true})
  public templateSibling: ViewContainerRef;

  @HostBinding('attr.tabindex')
  public readonly tabindex: number;

  constructor(public elementRef: ElementRef, private cd: ChangeDetectorRef, private render: Renderer2, private zone: NgZone) {

    this._isOpen = false;

    this.onOpen = new EventEmitter<void>();
    this.onClose = new EventEmitter<void>();

    this.tabindex = 0;
  }


  public open(): void {
    // Only attempt to open if currently closed.
    if (!this.isOpen) {
      // Cancel the closing timer.
      clearTimeout(this.closingTimeout);
      // Finally, set the popup to be open.
      this._isOpen = true;
      this.onOpen.emit();
    }
  }

  public toggle(): void {
    if (!this.isOpen) {
      return this.open();
    }

    return this.close();
  }

  public close(): void {
    // Only attempt to close if currently open.
    if (this.isOpen) {
      // Cancel the closing timer.
      clearTimeout(this.closingTimeout);
      // Start the closing timer, that fires the `onClose` event after the transition duration number of milliseconds.
      this.closingTimeout = window.setTimeout(() => {
        this.render.removeAttribute(this._container.element.nativeElement, 'data-show', '');
        this.onClose.emit();
        this.cd.markForCheck();
      }, this.config.transitionDuration);
      // Finally, set the popup to be closed.
      this._isOpen = false;
    }
  }

  @HostListener('click', ['$event'])
  public onClick(event: MouseEvent): void {
    // Makes sense here, as the popup shouldn't be attached to any DOM element.
    event.stopPropagation();
  }
}
