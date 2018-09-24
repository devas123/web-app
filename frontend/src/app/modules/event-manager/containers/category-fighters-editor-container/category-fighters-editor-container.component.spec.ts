import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CategoryFightersEditorContainerComponent} from './category-fighters-editor-container.component';

describe('CategoryFightersEditorContainerComponent', () => {
  let component: CategoryFightersEditorContainerComponent;
  let fixture: ComponentFixture<CategoryFightersEditorContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CategoryFightersEditorContainerComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryFightersEditorContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
