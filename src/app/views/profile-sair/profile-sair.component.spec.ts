import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileSairComponent } from './profile-sair.component';

describe('ProfileSairComponent', () => {
  let component: ProfileSairComponent;
  let fixture: ComponentFixture<ProfileSairComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileSairComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileSairComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
