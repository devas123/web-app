import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCompetitorContainerComponent } from './add-competitor-container.component';

describe('AddCompetitorContainerComponent', () => {
  let component: AddCompetitorContainerComponent;
  let fixture: ComponentFixture<AddCompetitorContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddCompetitorContainerComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCompetitorContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
