import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademyCardComponent } from './academy-card.component';

describe('AcademyCardComponent', () => {
  let component: AcademyCardComponent;
  let fixture: ComponentFixture<AcademyCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AcademyCardComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcademyCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
