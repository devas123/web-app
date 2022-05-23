import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAcademyContainerComponent } from './add-academy-container.component';

describe('AddAcademyContainerComponent', () => {
  let component: AddAcademyContainerComponent;
  let fixture: ComponentFixture<AddAcademyContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddAcademyContainerComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAcademyContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
