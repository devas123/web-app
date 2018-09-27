import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ScheduleEditorComponent} from './schedule-editor.component';
import {ReactiveFormsModule} from '@angular/forms';
import {SuiModule} from 'ng2-semantic-ui'
import {NgDragDropModule} from '../../../dragdrop/ng-drag-drop.module';
import {ScheduleDisplayComponent} from './schedule-display.component';
import {RouterTestingModule} from '@angular/router/testing';


describe('ScheduleEditorComponent', () => {
  let component: ScheduleEditorComponent;
  let fixture: ComponentFixture<ScheduleEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ScheduleEditorComponent, ScheduleDisplayComponent],
      imports: [ReactiveFormsModule, SuiModule, NgDragDropModule.forRoot(), RouterTestingModule]
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
