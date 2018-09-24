import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeriodManagementContainerComponent } from './period-management-container.component';

describe('PeriodManagementContainerComponent', () => {
  let component: PeriodManagementContainerComponent;
  let fixture: ComponentFixture<PeriodManagementContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeriodManagementContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeriodManagementContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
