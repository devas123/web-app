import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CompetitionMainInfoComponent} from './competition-main-info.component';

describe('CompetitionMainInfoComponent', () => {
  let component: CompetitionMainInfoComponent;
  let fixture: ComponentFixture<CompetitionMainInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompetitionMainInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompetitionMainInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
