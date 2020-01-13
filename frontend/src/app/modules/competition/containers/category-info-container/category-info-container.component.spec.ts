import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryInfoContainerComponent } from './category-info-container.component';

describe('CategoryInfoContainerComponent', () => {
  let component: CategoryInfoContainerComponent;
  let fixture: ComponentFixture<CategoryInfoContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryInfoContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryInfoContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
