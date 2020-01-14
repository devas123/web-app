import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetitionInfoTemplateEditorComponent } from './competition-info-template-editor.component';

describe('CompetitionInfoTemplateEditorComponent', () => {
  let component: CompetitionInfoTemplateEditorComponent;
  let fixture: ComponentFixture<CompetitionInfoTemplateEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompetitionInfoTemplateEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompetitionInfoTemplateEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
