import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {FightersContainerComponent} from './fighters-container.component';

describe('FightersContainerComponent', () => {
  let component: FightersContainerComponent;
  let fixture: ComponentFixture<FightersContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FightersContainerComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FightersContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
