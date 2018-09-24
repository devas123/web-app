import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {EventPropertiesEditorContainerComponent} from './event-properties-editor-container.component';

describe('EventPropertiesEditorContainerComponent', () => {
  let component: EventPropertiesEditorContainerComponent;
  let fixture: ComponentFixture<EventPropertiesEditorContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EventPropertiesEditorContainerComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventPropertiesEditorContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
