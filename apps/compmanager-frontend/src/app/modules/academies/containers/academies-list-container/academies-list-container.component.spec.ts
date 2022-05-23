import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademiesListContainerComponent } from './academies-list-container.component';

describe('AcademiesListContainerComponent', () => {
  let component: AcademiesListContainerComponent;
  let fixture: ComponentFixture<AcademiesListContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AcademiesListContainerComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcademiesListContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
