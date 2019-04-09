import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {FighterProfileComponent} from './fighter-profile.component';
import {ReactiveFormsModule} from '@angular/forms';
import {SuiDatepickerModule, SuiSelectModule} from 'ng2-semantic-ui'
import {ZonedDatePipe} from '../../../../pipes/zoned-date-pipe';

describe('FighterProfileComponent', () => {
  let component: FighterProfileComponent;
  let fixture: ComponentFixture<FighterProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FighterProfileComponent, ZonedDatePipe],
      imports: [ReactiveFormsModule, SuiDatepickerModule, SuiSelectModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FighterProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
