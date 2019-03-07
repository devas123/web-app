import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {FightersEditorComponent} from './fighters-editor.component';
import {SuiModule} from 'ng2-semantic-ui'
import {ZonedDatePipe} from '../../../../pipes/zoned-date-pipe';


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
