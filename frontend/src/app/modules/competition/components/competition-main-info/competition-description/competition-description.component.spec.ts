import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CompetitionDescriptionComponent} from './competition-description.component';

describe('CompetitionDescriptionComponent', () => {
  let component: CompetitionDescriptionComponent;
  let fixture: ComponentFixture<CompetitionDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompetitionDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompetitionDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
