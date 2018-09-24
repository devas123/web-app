import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CompetitionInfoComponent} from './competition-info.component';

describe('CompetitionInfoComponent', () => {
  let component: CompetitionInfoComponent;
  let fixture: ComponentFixture<CompetitionInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompetitionInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompetitionInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
