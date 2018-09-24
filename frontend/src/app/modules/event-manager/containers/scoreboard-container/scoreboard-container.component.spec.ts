import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoreboardContainerComponent } from './scoreboard-container.component';

describe('ScoreboardContainerComponent', () => {
  let component: ScoreboardContainerComponent;
  let fixture: ComponentFixture<ScoreboardContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScoreboardContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoreboardContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
