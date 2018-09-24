import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ScheduleEditorContainerComponent} from './schedule-editor-container.component';

describe('ScheduleEditorContainerComponent', () => {
  let component: ScheduleEditorContainerComponent;
  let fixture: ComponentFixture<ScheduleEditorContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ScheduleEditorContainerComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleEditorContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
