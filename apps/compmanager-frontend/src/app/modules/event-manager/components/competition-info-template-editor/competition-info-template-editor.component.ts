import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {marked} from 'marked';


export interface ISaveCompetitionInfoTemplatePayload {
  competitionId: string,
  template: string
}

@Component({
  selector: 'app-competition-info-template-editor',
  templateUrl: './competition-info-template-editor.component.html',
  styleUrls: ['./competition-info-template-editor.component.scss']
})
export class CompetitionInfoTemplateEditorComponent implements OnInit {

  @Input() placeHolder: string = CompetitionInfoTemplateEditorComponent.getPlaceHolder();

  @Output() templateSaved = new EventEmitter<ISaveCompetitionInfoTemplatePayload>();

  @Input()
  set template(value: string) {
    this.setTemplate(value);
  }

  template_: string;

  @Input()
  competitionId: string;

  compiledMarkdown: string;

  @Input()
  showPreview: boolean;

  private static compileMarkdown(value: string): string {
    return marked.parser(marked.lexer(value));
  }

  private static getPlaceHolder() {
    return (
      '# Add competition info here \n' +
      'This editor supports [markdown](https://www.markdownguide.org)\n'
    );
  }

  onValueChange(e) {
    const body = e.target.value;
    this.setTemplate(body);
  }

  setTemplate(val: any) {
    if (!val) {
      this.template_ = this.placeHolder;
    } else {
      this.template_ = val;
    }
    this.compiledMarkdown = CompetitionInfoTemplateEditorComponent.compileMarkdown(this.template_);
  }

  ngOnInit() {
    this.placeHolder = CompetitionInfoTemplateEditorComponent.getPlaceHolder();
  }

  saveTemplate() {
    this.templateSaved.next({template: this.template_, competitionId: this.competitionId});
  }
}
