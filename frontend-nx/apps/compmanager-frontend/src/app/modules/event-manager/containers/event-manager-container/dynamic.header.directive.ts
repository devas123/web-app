import {Directive, ElementRef, Input, OnChanges, Renderer2, SimpleChanges} from '@angular/core';
import {HeaderDescription} from '../../../../commons/model/competition.model';

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

  private addDescriptionTag(t: string, root: any) {
    const div = this.renderer.createElement('div');
    this.renderer.addClass(div, 'ui');
    this.renderer.addClass(div, 'description');
    const text = this.renderer.createText(t);
    this.renderer.appendChild(div, text);
    this.renderer.appendChild(root, div);
  }


  ngOnChanges(changes: SimpleChanges) {
    const el = this.ref.nativeElement;
    if (this.hederDescription) {
      const {headerHtml, subheader, header} = this.hederDescription;
      this.renderer.setStyle(el, 'display', 'grid');
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
          this.addDescriptionTag(subheader, el);
        }
      }
    } else {
      this.renderer.selectRootElement(el);
    }
  }
}
