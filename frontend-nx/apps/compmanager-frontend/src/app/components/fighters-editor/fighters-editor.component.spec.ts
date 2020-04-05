import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {FightersEditorComponent} from './fighters-editor.component';
import {SuiModule} from '@devas123/ng2-semantic';
import {ZonedDatePipe} from '../../pipes/zoned-date-pipe';


describe('FightersEditorComponent', () => {
  let component: FightersEditorComponent;
  let fixture: ComponentFixture<FightersEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FightersEditorComponent, ZonedDatePipe],
      imports: [SuiModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FightersEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
