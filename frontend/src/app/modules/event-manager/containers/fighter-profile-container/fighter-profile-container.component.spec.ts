import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {FighterProfileContainerComponent} from './fighter-profile-container.component';

describe('FighterProfileContainerComponent', () => {
  let component: FighterProfileContainerComponent;
  let fixture: ComponentFixture<FighterProfileContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FighterProfileContainerComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FighterProfileContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
