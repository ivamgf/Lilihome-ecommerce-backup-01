import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Logistica.ReversaComponent } from './logistica.reversa.component';

describe('Logistica.ReversaComponent', () => {
  let component: Logistica.ReversaComponent;
  let fixture: ComponentFixture<Logistica.ReversaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Logistica.ReversaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Logistica.ReversaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
