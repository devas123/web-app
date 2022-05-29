import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MatsOverviewComponentComponent} from './mats-overview-component.component';
import {MatDisplayComponent} from './mat-display.component';
import {FightDisplayComponent} from './fight-display.component';
import {DragDropModule} from '@angular/cdk/drag-drop';

describe('MatsOverviewComponentComponent', () => {
  let component: MatsOverviewComponentComponent;
  let fixture: ComponentFixture<MatsOverviewComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatsOverviewComponentComponent, MatDisplayComponent, FightDisplayComponent],
      imports: [DragDropModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatsOverviewComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
