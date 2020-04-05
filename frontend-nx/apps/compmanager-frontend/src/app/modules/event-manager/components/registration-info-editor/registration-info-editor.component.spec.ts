import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationInfoEditorComponent } from './registration-info-editor.component';
import {ZonedDatePipe} from '../../../../pipes/zoned-date-pipe';
import {ReactiveFormsModule} from '@angular/forms';
import {SuiDatepickerModule, SuiModalModule} from '@devas123/ng2-semantic';

describe('RegistrationInfoEditorComponent', () => {
  let component: RegistrationInfoEditorComponent;
  let fixture: ComponentFixture<RegistrationInfoEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrationInfoEditorComponent, ZonedDatePipe ],
      imports: [ReactiveFormsModule, SuiDatepickerModule, SuiModalModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationInfoEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
