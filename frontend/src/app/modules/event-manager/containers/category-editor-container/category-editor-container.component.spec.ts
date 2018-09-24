import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CategoryEditorContainerComponent} from './category-editor-container.component';

describe('CategoryEditorContainerComponent', () => {
  let component: CategoryEditorContainerComponent;
  let fixture: ComponentFixture<CategoryEditorContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CategoryEditorContainerComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryEditorContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
