import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatManagementContainerComponent } from './mat-management-container.component';

describe('MatManagementContainerComponent', () => {
  let component: MatManagementContainerComponent;
  let fixture: ComponentFixture<MatManagementContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatManagementContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatManagementContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
