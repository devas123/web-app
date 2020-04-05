import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ScheduleEditorComponent} from './schedule-editor.component';
import {ReactiveFormsModule} from '@angular/forms';
import {SuiModule} from '@devas123/ng2-semantic';
import {ScheduleDisplayComponent} from '../../../../components/schedule-display/schedule-display.component';
import {RouterTestingModule} from '@angular/router/testing';
import {ZonedDatePipe} from '../../../../pipes/zoned-date-pipe';
import {DragDropModule} from '@angular/cdk/drag-drop';


describe('ScheduleEditorComponent', () => {
  let component: ScheduleEditorComponent;
  let fixture: ComponentFixture<ScheduleEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ScheduleEditorComponent, ScheduleDisplayComponent, ZonedDatePipe],
      imports: [ReactiveFormsModule, SuiModule, RouterTestingModule, DragDropModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
