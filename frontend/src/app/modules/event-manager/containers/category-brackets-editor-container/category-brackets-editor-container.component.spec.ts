import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CategoryBracketsEditorContainerComponent} from './category-brackets-editor-container.component';

describe('CategoryBracketsEditorContainerComponent', () => {
  let component: CategoryBracketsEditorContainerComponent;
  let fixture: ComponentFixture<CategoryBracketsEditorContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CategoryBracketsEditorContainerComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryBracketsEditorContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
