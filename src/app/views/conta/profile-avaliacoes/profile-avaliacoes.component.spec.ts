import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileAvaliacoesComponent } from './profile-avaliacoes.component';

describe('ProfileAvaliacoesComponent', () => {
  let component: ProfileAvaliacoesComponent;
  let fixture: ComponentFixture<ProfileAvaliacoesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileAvaliacoesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileAvaliacoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
