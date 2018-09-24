import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {FightersEditorContainerComponent} from './fighters-editor-container.component';

describe('FightersEditorContainerComponent', () => {
  let component: FightersEditorContainerComponent;
  let fixture: ComponentFixture<FightersEditorContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FightersEditorContainerComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FightersEditorContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
