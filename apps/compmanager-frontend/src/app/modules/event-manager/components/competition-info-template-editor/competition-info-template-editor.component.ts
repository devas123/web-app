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
  @Input()
  showEditor = true;

  private static compileMarkdown(value: string): string {
    return marked.parser(marked.lexer(value));
  }

  private static getPlaceHolder() {
    return (
      '# Title \n' +
      '## Title\n' +
      '### Title\n' +
      '#### Title\n\n' +

      '**bold**\n\n' +

      '*italic*\n\n' +

      'inline `code`\n\n' +

      '### code block\n' +
      '```\n' +
      `const foo = () => {
        return 1;
      }\n` +

      '```\n\n' +

      '### unorderd list\n' +
      '- item 1\n' +
      '* item 2\n\n' +

      '### orderd list\n\n' +
      '1. item a\n' +
      '2. item b'
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
