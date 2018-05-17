import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IluminacaoComponent } from './iluminacao.component';

describe('IluminacaoComponent', () => {
  let component: IluminacaoComponent;
  let fixture: ComponentFixture<IluminacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IluminacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IluminacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
