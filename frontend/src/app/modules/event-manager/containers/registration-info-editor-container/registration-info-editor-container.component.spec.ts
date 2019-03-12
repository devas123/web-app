import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationInfoEditorContainerComponent } from './registration-info-editor-container.component';

describe('RegistrationInfoEditorContainerComponent', () => {
  let component: RegistrationInfoEditorContainerComponent;
  let fixture: ComponentFixture<RegistrationInfoEditorContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrationInfoEditorContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationInfoEditorContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
