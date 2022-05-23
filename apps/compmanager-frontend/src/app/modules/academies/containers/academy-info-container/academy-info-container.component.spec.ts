import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademyInfoContainerComponent } from './academy-info-container.component';

describe('AcademyInfoContainerComponent', () => {
  let component: AcademyInfoContainerComponent;
  let fixture: ComponentFixture<AcademyInfoContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AcademyInfoContainerComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcademyInfoContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
