import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CategoryEditorComponent} from './category-editor.component';
import {SuiModule} from 'ng2-semantic'
import {RouterTestingModule} from '@angular/router/testing';

describe('CategoryEditorComponent', () => {
  let component: CategoryEditorComponent;
  let fixture: ComponentFixture<CategoryEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CategoryEditorComponent],
      imports: [SuiModule, RouterTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
