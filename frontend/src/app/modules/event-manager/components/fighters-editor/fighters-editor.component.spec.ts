import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {FightersEditorComponent} from './fighters-editor.component';

describe('FightersEditorComponent', () => {
  let component: FightersEditorComponent;
  let fixture: ComponentFixture<FightersEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FightersEditorComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FightersEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
