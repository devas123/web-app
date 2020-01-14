import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetitionInfoContactsEditorComponent } from './competition-info-contacts-editor.component';

describe('CompetitionInfoContactsEditorComponent', () => {
  let component: CompetitionInfoContactsEditorComponent;
  let fixture: ComponentFixture<CompetitionInfoContactsEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompetitionInfoContactsEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompetitionInfoContactsEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
