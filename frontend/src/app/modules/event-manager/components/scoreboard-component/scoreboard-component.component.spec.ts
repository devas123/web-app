import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ScoreboardComponentComponent} from './scoreboard-component.component';
import {GetNamePipe} from '../../../../pipes/get-name.pipe';
import {TruncatePipe} from '../../../../pipes/truncate.pipe';
import {HotkeyModule} from 'angular2-hotkeys';
import {NumberControlsComponent} from './number-controls.component';
import {TimerControlsComponent} from './timer-controls.component';
import {TimerComponent} from './timer-component';

describe('ScoreboardComponentComponent', () => {
  let component: ScoreboardComponentComponent;
  let fixture: ComponentFixture<ScoreboardComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ScoreboardComponentComponent, GetNamePipe, TruncatePipe, NumberControlsComponent, TimerControlsComponent, TimerComponent],
      imports: [HotkeyModule.forRoot()]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoreboardComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
