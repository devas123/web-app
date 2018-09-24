import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {AddFighterComponent} from './add-fighter.component';

describe('AddFighterComponent', () => {
  let component: AddFighterComponent;
  let fixture: ComponentFixture<AddFighterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddFighterComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFighterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
