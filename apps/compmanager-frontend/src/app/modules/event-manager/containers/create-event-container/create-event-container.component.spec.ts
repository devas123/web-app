import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEventContainerComponent } from './create-event-container.component';

describe('CreateEventContainerComponent', () => {
  let component: CreateEventContainerComponent;
  let fixture: ComponentFixture<CreateEventContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateEventContainerComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEventContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
