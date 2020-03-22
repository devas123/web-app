import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {StageDisplayComponent} from './stage-display.component';
import {BracketComponent} from '../brackets-editor/bracket/bracket.component';
import {BracketPartComponent} from '../brackets-editor/bracket/bracket-part.component';
import {SuiCheckboxModule, SuiPopupModule} from '@devas123/ng2-semantic';
import {BracketRoundComponent} from '../brackets-editor/bracketround/bracketround.component';
import {GetNamePipe} from '../../pipes/get-name.pipe';
import {GetAcademyPipe} from '../../pipes/get-academy.pipe';

describe('StageDisplayComponent', () => {
  let component: StageDisplayComponent;
  let fixture: ComponentFixture<StageDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StageDisplayComponent, BracketComponent, BracketPartComponent, BracketRoundComponent, GetNamePipe, GetAcademyPipe ],
      imports: [SuiCheckboxModule, SuiPopupModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StageDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
