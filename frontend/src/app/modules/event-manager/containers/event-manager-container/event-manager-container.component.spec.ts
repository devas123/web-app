import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {EventManagerContainerComponent} from './event-manager-container.component';

describe('EventManagerContainerComponent', () => {
  let component: EventManagerContainerComponent;
  let fixture: ComponentFixture<EventManagerContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EventManagerContainerComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventManagerContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
