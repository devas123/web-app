import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeriodsManagementComponent } from './periods-management.component';

describe('PeriodsManagementComponent', () => {
  let component: PeriodsManagementComponent;
  let fixture: ComponentFixture<PeriodsManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeriodsManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeriodsManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
