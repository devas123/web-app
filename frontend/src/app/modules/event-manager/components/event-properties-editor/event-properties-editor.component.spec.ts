import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {EventPropertiesEditorComponent} from './event-properties-editor.component';

describe('EventPropertiesEditorComponent', () => {
  let component: EventPropertiesEditorComponent;
  let fixture: ComponentFixture<EventPropertiesEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EventPropertiesEditorComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventPropertiesEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
