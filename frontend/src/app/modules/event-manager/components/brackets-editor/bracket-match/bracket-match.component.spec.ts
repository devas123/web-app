import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {BracketMatchComponent} from './bracket-match.component';

describe('BracketMatchComponent', () => {
  let component: BracketMatchComponent;
  let fixture: ComponentFixture<BracketMatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BracketMatchComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BracketMatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
