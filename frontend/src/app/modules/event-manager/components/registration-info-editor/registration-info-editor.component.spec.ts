import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationInfoEditorComponent } from './registration-info-editor.component';

describe('RegistrationInfoEditorComponent', () => {
  let component: RegistrationInfoEditorComponent;
  let fixture: ComponentFixture<RegistrationInfoEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrationInfoEditorComponent ]
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
