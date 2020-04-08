import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationGroupEditorComponent } from './registration-group-editor.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {DisplayCategoryPipe} from '../../../../pipes/display-category.pipe';

describe('RegistrationGroupEditorComponent', () => {
  let component: RegistrationGroupEditorComponent;
  let fixture: ComponentFixture<RegistrationGroupEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrationGroupEditorComponent, DisplayCategoryPipe ],
      imports: [DragDropModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationGroupEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
