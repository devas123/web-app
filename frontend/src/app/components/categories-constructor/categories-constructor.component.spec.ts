import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesConstructorComponent } from './categories-constructor.component';

describe('CategoriesConstructorComponent', () => {
  let component: CategoriesConstructorComponent;
  let fixture: ComponentFixture<CategoriesConstructorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoriesConstructorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriesConstructorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
