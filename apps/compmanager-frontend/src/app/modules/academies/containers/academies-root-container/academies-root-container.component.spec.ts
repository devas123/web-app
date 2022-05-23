import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademiesRootContainerComponent } from './academies-root-container.component';

describe('AcademiesRootContainerComponent', () => {
  let component: AcademiesRootContainerComponent;
  let fixture: ComponentFixture<AcademiesRootContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AcademiesRootContainerComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcademiesRootContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
