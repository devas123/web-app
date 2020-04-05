import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CategorySummaryComponent} from './category-summary.component';
import {ZonedDatePipe} from '../../../../pipes/zoned-date-pipe';

describe('CategorySummaryComponent', () => {
  let component: CategorySummaryComponent;
  let fixture: ComponentFixture<CategorySummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CategorySummaryComponent, ZonedDatePipe]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategorySummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
