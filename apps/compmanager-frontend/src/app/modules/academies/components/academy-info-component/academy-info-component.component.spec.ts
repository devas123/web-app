import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademyInfoComponentComponent } from './academy-info-component.component';

describe('AcademyInfoComponentComponent', () => {
  let component: AcademyInfoComponentComponent;
  let fixture: ComponentFixture<AcademyInfoComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AcademyInfoComponentComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcademyInfoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
