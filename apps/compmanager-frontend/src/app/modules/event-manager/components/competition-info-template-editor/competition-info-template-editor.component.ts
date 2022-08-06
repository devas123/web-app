import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {marked} from 'marked';


@Component({
  selector: 'app-competition-info-template-editor',
  templateUrl: './competition-info-template-editor.component.html',
  styleUrls: ['./competition-info-template-editor.component.scss']
})
export class CompetitionInfoTemplateEditorComponent implements OnInit {

  @Input() placeHolder: string = CompetitionInfoTemplateEditorComponent.getPlaceHolder();

  @Output() templateSaved = new EventEmitter<string>();

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

    if (!body) {
      this.compiledMarkdown = CompetitionInfoTemplateEditorComponent.compileMarkdown(this.placeHolder);
    } else {
      this.compiledMarkdown = CompetitionInfoTemplateEditorComponent.compileMarkdown(body);
    }
  }

  ngOnInit() {
    this.placeHolder = CompetitionInfoTemplateEditorComponent.getPlaceHolder();
    this.compiledMarkdown = CompetitionInfoTemplateEditorComponent.compileMarkdown(this.placeHolder);
  }
}
