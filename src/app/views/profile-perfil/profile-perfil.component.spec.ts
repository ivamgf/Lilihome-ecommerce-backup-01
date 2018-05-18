import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilePerfilComponent } from './profile-perfil.component';

describe('ProfilePerfilComponent', () => {
  let component: ProfilePerfilComponent;
  let fixture: ComponentFixture<ProfilePerfilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilePerfilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilePerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
