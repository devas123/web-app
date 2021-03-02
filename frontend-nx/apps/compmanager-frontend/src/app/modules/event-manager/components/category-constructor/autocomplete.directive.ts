import {fromEvent, race} from 'rxjs';
import {
  AfterViewInit,
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  OnInit,
  Output,
  TemplateRef,
  ViewContainerRef
} from '@angular/core';
import {ConnectionPositionPair, Overlay, OverlayRef} from '@angular/cdk/overlay';
import {TemplatePortal} from '@angular/cdk/portal';
import {filter, takeUntil} from 'rxjs/operators';

export function overlayClickOutside(overlayRef: OverlayRef, origin: HTMLElement) {
  return fromEvent<MouseEvent>(document, 'mousedown')
    .pipe(
      filter(event => {
        const clickTarget = event.target as HTMLElement;
        const notOrigin = clickTarget !== origin;
        const notOverlay = !!overlayRef && (overlayRef.overlayElement.contains(clickTarget) === false);
        return notOrigin && notOverlay;
      }),
      takeUntil(overlayRef.detachments())
    );
}

@Directive({
  selector: '[appAutocomplete]',
  exportAs: 'appAutoComplete'
})
export class AppAutocompleteDirective implements OnInit, AfterViewInit {

  @Input()
  appAutocomplete: TemplateRef<any>;

  @Output()
  inputValueChange = new EventEmitter<string>();

  private overlayRef: OverlayRef;

  constructor(
    private host: ElementRef<HTMLInputElement>,
    private vcr: ViewContainerRef,
    private overlay: Overlay,
  ) {
  }

  get origin() {
    return this.host.nativeElement;
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    fromEvent(this.origin, 'focus')
      .pipe(
        filter(() => !this.overlayRef)
      )
      .subscribe(() => {
        this.openDropdown();
      });
  }

  openDropdown() {
    if (!this.overlayRef) {
      this.overlayRef = this.overlay.create({
        width: this.origin.offsetWidth,
        maxHeight: 40 * 3,
        backdropClass: '',
        scrollStrategy: this.overlay.scrollStrategies.reposition(),
        positionStrategy: this.getOverlayPosition()
      });

      const template = new TemplatePortal(this.appAutocomplete, this.vcr);
      this.overlayRef.attach(template);
      race([overlayClickOutside(this.overlayRef, this.origin)])
        .subscribe(() => this.close());
    }
  }

  @HostListener('input', ['$event'])
  public onValueChage(e: any): void {
    setTimeout(() => this.inputValueChange.emit(e.target.value));
  }

  close() {
    if (this.overlayRef) {
      this.overlayRef.detach();
      this.overlayRef.dispose();
      this.overlayRef = null;
    }
  }

  private getOverlayPosition() {
    const positions = [
      new ConnectionPositionPair(
        {originX: 'start', originY: 'bottom'},
        {overlayX: 'start', overlayY: 'top'}
      )
    ];

    return this.overlay
      .position()
      .flexibleConnectedTo(this.origin)
      .withPositions(positions)
      .withFlexibleDimensions(false)
      .withPush(false);
  }
}
