import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatManagementComponent } from './mat-management.component';

describe('MatManagementComponent', () => {
  let component: MatManagementComponent;
  let fixture: ComponentFixture<MatManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
