import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileSenhaComponent } from './profile-senha.component';

describe('ProfileSenhaComponent', () => {
  let component: ProfileSenhaComponent;
  let fixture: ComponentFixture<ProfileSenhaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileSenhaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileSenhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
