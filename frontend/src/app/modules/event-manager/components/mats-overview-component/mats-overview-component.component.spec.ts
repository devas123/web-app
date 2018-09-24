import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatsOverviewComponentComponent } from './mats-overview-component.component';

describe('MatsOverviewComponentComponent', () => {
  let component: MatsOverviewComponentComponent;
  let fixture: ComponentFixture<MatsOverviewComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatsOverviewComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatsOverviewComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
