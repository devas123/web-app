import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CompetitionDivisionsComponent} from './competition-divisions.component';

describe('CompetitionDivisionsComponent', () => {
  let component: CompetitionDivisionsComponent;
  let fixture: ComponentFixture<CompetitionDivisionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompetitionDivisionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompetitionDivisionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
