import {Directive, ElementRef, Input, OnChanges, Renderer2, SimpleChanges} from '@angular/core';
import {HeaderDescription} from '../../redux/event-manager-reducers';

@Directive({
  selector: '[app-dynamic-header]',
})
export class DynamicHeaderDirective implements OnChanges {

  @Input()
  hederDescription: HeaderDescription;

  constructor(private ref: ElementRef, private renderer: Renderer2) {
  }

  private addHeaderTag(tag: string, t: string, root: any) {
    const h2 = this.renderer.createElement(tag);
    this.renderer.addClass(h2, 'ui');
    this.renderer.addClass(h2, 'header');
    const text = this.renderer.createText(t);
    this.renderer.appendChild(h2, text);
    this.renderer.appendChild(root, h2);
  }

  ngOnChanges(changes: SimpleChanges) {
    const el = this.ref.nativeElement;
    if (this.hederDescription) {
      const {headerHtml, subheader, header} = this.hederDescription;
      if (headerHtml) {
        this.renderer.setProperty(el, 'innerHTML', headerHtml);
      } else {
        if (header || subheader) {
          this.renderer.selectRootElement(el);
        }
        if (header) {
          this.addHeaderTag('h2', header, el);
        }
        if (subheader) {
          this.addHeaderTag('h4', subheader, el);
        }
      }
    } else {
      this.renderer.selectRootElement(el);
    }
  }
}
