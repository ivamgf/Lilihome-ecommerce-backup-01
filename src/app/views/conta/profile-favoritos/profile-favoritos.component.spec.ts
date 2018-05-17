import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileFavoritosComponent } from './profile-favoritos.component';

describe('ProfileFavoritosComponent', () => {
  let component: ProfileFavoritosComponent;
  let fixture: ComponentFixture<ProfileFavoritosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileFavoritosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileFavoritosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
