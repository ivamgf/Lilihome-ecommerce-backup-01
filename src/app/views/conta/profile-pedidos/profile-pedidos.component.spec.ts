import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilePedidosComponent } from './profile-pedidos.component';

describe('ProfilePedidosComponent', () => {
  let component: ProfilePedidosComponent;
  let fixture: ComponentFixture<ProfilePedidosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilePedidosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilePedidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
