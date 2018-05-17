import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileCartaoEditarComponent } from './profile-cartao-editar.component';

describe('ProfileCartaoEditarComponent', () => {
  let component: ProfileCartaoEditarComponent;
  let fixture: ComponentFixture<ProfileCartaoEditarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileCartaoEditarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileCartaoEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
