import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {EventCardComponent} from './event-card.component';
import {SuiTransitionModule} from '@frontend-nx/ng2-semantic-ui';
import {RouterTestingModule} from '@angular/router/testing';

describe('EventCardComponent', () => {
  let component: EventCardComponent;
  let fixture: ComponentFixture<EventCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventCardComponent ],
      imports: [SuiTransitionModule, RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
