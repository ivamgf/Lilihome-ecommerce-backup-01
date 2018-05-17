import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilePedidosDetalhesComponent } from './profile-pedidos-detalhes.component';

describe('ProfilePedidosDetalhesComponent', () => {
  let component: ProfilePedidosDetalhesComponent;
  let fixture: ComponentFixture<ProfilePedidosDetalhesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilePedidosDetalhesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilePedidosDetalhesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
