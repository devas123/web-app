import {
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  OnInit,
  Output,
  Renderer2
} from '@angular/core';

@Directive({
  selector: '[appOption]',
})
export class OptionComponent implements OnInit {
  @Input()
  set value(v: string) {
    this._value = v;
    if (this._text) {
      this.renderer2.removeChild(this.element, this._text, true);
    }
    const text = this.renderer2.createText(v);
    this._text = text;
    this.renderer2.appendChild(this.element, text);
  }

  _text: any;

  _value: string;

  @Output()
  optionSelected: EventEmitter<string> = new EventEmitter<string>();

  constructor(private host: ElementRef, private renderer2: Renderer2) {
  }

  @HostListener('click', ['$event'])
  public onClick(): void {
    setTimeout(() => this.optionSelected.emit(this._value));
  }

  ngOnInit() {
    this.renderer2.setAttribute(this.element, 'style', 'cursor: pointer;');
  }

  get element() {
    return this.host.nativeElement;
  }
}
