import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileMensagemComponent } from './profile-mensagem.component';

describe('ProfileMensagemComponent', () => {
  let component: ProfileMensagemComponent;
  let fixture: ComponentFixture<ProfileMensagemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileMensagemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileMensagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
