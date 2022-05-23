import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAcademyComponentComponent } from './add-academy-component.component';

describe('AddAcademyComponentComponent', () => {
  let component: AddAcademyComponentComponent;
  let fixture: ComponentFixture<AddAcademyComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddAcademyComponentComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAcademyComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
