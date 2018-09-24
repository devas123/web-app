import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CategorySummaryContainerComponent} from './category-summary-container.component';

describe('CategorySummaryContainerComponent', () => {
  let component: CategorySummaryContainerComponent;
  let fixture: ComponentFixture<CategorySummaryContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CategorySummaryContainerComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategorySummaryContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
