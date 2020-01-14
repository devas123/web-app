import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetitionInfoEditorContainerComponent } from './competition-info-editor-container.component';

describe('CompetitionInfoEditorContainerComponent', () => {
  let component: CompetitionInfoEditorContainerComponent;
  let fixture: ComponentFixture<CompetitionInfoEditorContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompetitionInfoEditorContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompetitionInfoEditorContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
