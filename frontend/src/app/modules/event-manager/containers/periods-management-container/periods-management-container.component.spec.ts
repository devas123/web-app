import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeriodsManagementContainerComponent } from './periods-management-container.component';

describe('PeriodsManagementContainerComponent', () => {
  let component: PeriodsManagementContainerComponent;
  let fixture: ComponentFixture<PeriodsManagementContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeriodsManagementContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeriodsManagementContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
