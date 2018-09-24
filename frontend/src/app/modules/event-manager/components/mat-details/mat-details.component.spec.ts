import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatDetailsComponent } from './mat-details.component';

describe('MatDetailsComponent', () => {
  let component: MatDetailsComponent;
  let fixture: ComponentFixture<MatDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
