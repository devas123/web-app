import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {FighterProfileComponent} from './fighter-profile.component';

describe('FighterProfileComponent', () => {
  let component: FighterProfileComponent;
  let fixture: ComponentFixture<FighterProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FighterProfileComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FighterProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
