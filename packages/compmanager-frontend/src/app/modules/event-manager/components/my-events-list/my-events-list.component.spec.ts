import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MyEventsListComponent} from './my-events-list.component';
import {RouterTestingModule} from '@angular/router/testing';

describe('MyEventsListComponent', () => {
  let component: MyEventsListComponent;
  let fixture: ComponentFixture<MyEventsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MyEventsListComponent],
      imports: [ RouterTestingModule ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyEventsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
