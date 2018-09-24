import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ChangeAvatarModalComponent} from './change-avatar-modal.component';

describe('ChangeAvatarModalComponent', () => {
  let component: ChangeAvatarModalComponent;
  let fixture: ComponentFixture<ChangeAvatarModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeAvatarModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeAvatarModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
