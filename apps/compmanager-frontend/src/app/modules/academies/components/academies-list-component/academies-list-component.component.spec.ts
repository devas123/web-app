import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademiesListComponentComponent } from './academies-list-component.component';

describe('AcademiesListComponentComponent', () => {
  let component: AcademiesListComponentComponent;
  let fixture: ComponentFixture<AcademiesListComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AcademiesListComponentComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcademiesListComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
