import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {BracketsEditorComponent} from './brackets-editor.component';

describe('BracketsEditorComponent', () => {
  let component: BracketsEditorComponent;
  let fixture: ComponentFixture<BracketsEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BracketsEditorComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BracketsEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
