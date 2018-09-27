import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {EventPropertiesEditorComponent} from './event-properties-editor.component';
import {ReactiveFormsModule} from '@angular/forms';
import {SuiModule} from 'ng2-semantic-ui';
import {RouterTestingModule} from '@angular/router/testing';

describe('EventPropertiesEditorComponent', () => {
  let component: EventPropertiesEditorComponent;
  let fixture: ComponentFixture<EventPropertiesEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EventPropertiesEditorComponent],
      imports: [ReactiveFormsModule, SuiModule, RouterTestingModule]
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
