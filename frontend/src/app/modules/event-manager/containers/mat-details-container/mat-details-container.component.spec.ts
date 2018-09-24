import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatDetailsContainerComponent } from './mat-details-container.component';

describe('MatDetailsContainerComponent', () => {
  let component: MatDetailsContainerComponent;
  let fixture: ComponentFixture<MatDetailsContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatDetailsContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatDetailsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
