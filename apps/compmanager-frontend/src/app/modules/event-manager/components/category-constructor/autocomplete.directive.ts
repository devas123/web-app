import {fromEvent, race, Subject, Subscription} from 'rxjs';
import {
  AfterViewInit,
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  Output,
  TemplateRef,
  ViewContainerRef
} from '@angular/core';
import {ConnectionPositionPair, Overlay, OverlayRef} from '@angular/cdk/overlay';
import {TemplatePortal} from '@angular/cdk/portal';
import {debounceTime, filter, takeUntil} from 'rxjs/operators';

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
export class AppAutocompleteDirective implements  AfterViewInit {

  @Input()
  appAutocomplete: TemplateRef<any>;

  @Input()
  origin: HTMLElement;

  @Output()
  inputValueChange = new EventEmitter<string>();

  private scrollEvents = new Subject<void>();

  private overlayRef: OverlayRef;

  private subs;

  constructor(
    private host: ElementRef<HTMLInputElement>,
    private vcr: ViewContainerRef,
    private overlay: Overlay
  ) {
  }

  handleScroll = () => {
    this.scrollEvents.next();
  };

  ngAfterViewInit() {
    fromEvent(this.host.nativeElement, 'focus')
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
        width: this.host.nativeElement.offsetWidth,
        maxHeight: 40 * 3,
        backdropClass: '',
        scrollStrategy: this.overlay.scrollStrategies.reposition(),
        positionStrategy: this.getOverlayPosition()
      });
      this.subs = new Subscription();
      const template = new TemplatePortal(this.appAutocomplete, this.vcr);
      this.overlayRef.attach(template);
      race([overlayClickOutside(this.overlayRef, this.host.nativeElement)])
        .subscribe(() => this.close());
      window.addEventListener('scroll', this.handleScroll, true);
      this.subs.add(this.scrollEvents.pipe(
        debounceTime(10)
      ).subscribe(() => {
        this.overlayRef?.updatePosition();
      }));
    }
  }

  @HostListener('input', ['$event'])
  public onValueChage(e: any): void {
    setTimeout(() => this.inputValueChange.emit(e.target.value));
  }

  @HostListener('window:resize')
  public onResize() {
    this.overlayRef?.updatePosition();
  }

  close() {
    if (this.overlayRef) {
      this.overlayRef.detach();
      this.overlayRef.dispose();
      this.overlayRef = null;
      this.subs.unsubscribe();
      window.removeEventListener('scroll', this.handleScroll, true);
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
      .withFlexibleDimensions(true)
      .withPush(false)
      .withLockedPosition(false);
  }
}
