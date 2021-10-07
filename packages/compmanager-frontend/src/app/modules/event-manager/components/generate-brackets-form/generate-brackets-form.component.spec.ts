import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateBracketsFormComponent } from './generate-brackets-form.component';
import {SuiCheckboxModule, SuiSelectModule} from '@frontend-nx/ng2-semantic-ui';
import {ReactiveFormsModule} from '@angular/forms';

describe('GenerateBracketsFormComponent', () => {
  let component: GenerateBracketsFormComponent;
  let fixture: ComponentFixture<GenerateBracketsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenerateBracketsFormComponent ],
      imports: [SuiSelectModule, SuiCheckboxModule, ReactiveFormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerateBracketsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
