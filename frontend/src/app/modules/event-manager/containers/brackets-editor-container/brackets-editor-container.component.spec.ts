import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {BracketsEditorContainerComponent} from './brackets-editor-container.component';

describe('BracketsEditorContainerComponent', () => {
  let component: BracketsEditorContainerComponent;
  let fixture: ComponentFixture<BracketsEditorContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BracketsEditorContainerComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BracketsEditorContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
