import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {BracketMatchComponent} from './bracket-match.component';
import {GetNamePipe} from '../../../../../pipes/get-name.pipe';
import {TruncatePipe} from '../../../../../pipes/truncate.pipe';

describe('BracketMatchComponent', () => {
  let component: BracketMatchComponent;
  let fixture: ComponentFixture<BracketMatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BracketMatchComponent, GetNamePipe, TruncatePipe],
      imports: []
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BracketMatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
