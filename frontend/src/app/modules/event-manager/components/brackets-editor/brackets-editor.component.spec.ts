import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {BracketsEditorComponent} from './brackets-editor.component';
import {BracketMatchComponent} from './bracket-match/bracket-match.component';
import {GetNamePipe} from '../../../../pipes/get-name.pipe';
import {TruncatePipe} from '../../../../pipes/truncate.pipe';

describe('BracketsEditorComponent', () => {
  let component: BracketsEditorComponent;
  let fixture: ComponentFixture<BracketsEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BracketsEditorComponent, BracketMatchComponent, GetNamePipe, TruncatePipe],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BracketsEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
