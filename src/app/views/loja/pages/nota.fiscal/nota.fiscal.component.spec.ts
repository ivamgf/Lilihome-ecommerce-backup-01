import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Nota.FiscalComponent } from './nota.fiscal.component';

describe('Nota.FiscalComponent', () => {
  let component: Nota.FiscalComponent;
  let fixture: ComponentFixture<Nota.FiscalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Nota.FiscalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Nota.FiscalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
