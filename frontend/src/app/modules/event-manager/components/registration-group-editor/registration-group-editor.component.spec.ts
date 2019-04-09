import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationGroupEditorComponent } from './registration-group-editor.component';

describe('RegistrationGroupEditorComponent', () => {
  let component: RegistrationGroupEditorComponent;
  let fixture: ComponentFixture<RegistrationGroupEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrationGroupEditorComponent ]
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
