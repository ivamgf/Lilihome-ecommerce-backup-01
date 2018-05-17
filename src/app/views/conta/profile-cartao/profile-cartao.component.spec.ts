import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileCartaoComponent } from './profile-cartao.component';

describe('ProfileCartaoComponent', () => {
  let component: ProfileCartaoComponent;
  let fixture: ComponentFixture<ProfileCartaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileCartaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileCartaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
