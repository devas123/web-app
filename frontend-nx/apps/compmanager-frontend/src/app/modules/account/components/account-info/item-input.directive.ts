import {Directive, ElementRef, EventEmitter, HostListener, OnChanges, OnInit, Output, Renderer2} from '@angular/core';

@Directive({
  selector: '[itemInput]',
  exportAs: 'itemInp',
})
export class ItemInputDirective implements OnInit, OnChanges {


  public inputVisible = false;
  public elRef: ElementRef;

  @Output()
  public contentEdited = new EventEmitter<any>();


  ngOnChanges(): void {
  }

  ngOnInit(): void {
    this.el.nativeElement.querySelector('.input-content').style.display = 'none';
    const self = this;
    this.el.nativeElement.querySelector('.input-content').querySelector('.hide-input-btn').addEventListener('click', function (event) {
      self.el.nativeElement.querySelector('.row-content ').style.display = 'block';
      self.el.nativeElement.querySelector('.input-content').style.display = 'none';
      self.contentEdited.next(event);
    });

    this.el.nativeElement.querySelector('.row-content').querySelector('.show-input-btn').addEventListener('click', function (event) {
      self.el.nativeElement.querySelector('.row-content ').style.display = 'none';
      self.el.nativeElement.querySelector('.input-content').style.display = 'block';
      self.el.nativeElement.querySelector('.input-content').querySelector('input').focus();
    });
  }

  constructor(public el: ElementRef, private renderer: Renderer2) {
    this.elRef = el;
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    this.renderer.removeClass(this.el.nativeElement.querySelector('.row-content').querySelector('.show-input-btn'), 'tiny');
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.renderer.addClass(this.el.nativeElement.querySelector('.row-content').querySelector('.show-input-btn'), 'tiny');
  }


  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

}
