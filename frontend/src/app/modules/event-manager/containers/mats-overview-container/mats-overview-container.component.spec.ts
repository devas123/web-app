import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatsOverviewContainerComponent } from './mats-overview-container.component';

describe('MatsOverviewContainerComponent', () => {
  let component: MatsOverviewContainerComponent;
  let fixture: ComponentFixture<MatsOverviewContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatsOverviewContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatsOverviewContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
